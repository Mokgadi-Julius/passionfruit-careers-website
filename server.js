import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

const API_BASE = 'https://adequate-rejoicing-production-b4ba.up.railway.app';
const SITE_URL = process.env.SITE_URL || 'https://www.passionfruitcareers.com';

// Proxy API requests
app.use(
    '/api',
    createProxyMiddleware({
        target: `${API_BASE}/api`,
        changeOrigin: true,
        secure: false,
    })
);

// Serve static files from the build directory
app.use(express.static(path.join(__dirname, 'dist')));

// ---------------------------------------------------------------------------
// Social Media Sharing — Server-side OG meta tag injection for /jobs/:id
// ---------------------------------------------------------------------------
// Social crawlers (Facebook, Twitter, LinkedIn, WhatsApp) cannot execute
// JavaScript. When someone shares a job link, the crawler fetches the HTML
// and reads the <meta> tags. We intercept /jobs/:id requests, fetch the job
// data from the API, and inject the Open Graph + Twitter Card meta tags into
// the HTML before serving it.
// ---------------------------------------------------------------------------
app.get('/jobs/:id', async (req, res) => {
    try {
        const jobId = req.params.id;

        // Fetch job data from the backend API
        const apiResponse = await fetch(`${API_BASE}/api/jobs/${jobId}`);

        // Read the base index.html
        const indexPath = path.join(__dirname, 'dist', 'index.html');
        let html = fs.readFileSync(indexPath, 'utf-8');

        if (apiResponse.ok) {
            const job = await apiResponse.json();

            // Build description from job details
            const salary = job.salaryMin && job.salaryMax
                ? ` | ${job.salaryCurrency || 'ZAR'} ${Number(job.salaryMin).toLocaleString()} – ${Number(job.salaryMax).toLocaleString()}`
                : '';
            const location = job.location ? ` | ${job.location}` : '';
            const jobType = job.jobType ? ` | ${job.jobType.replace('-', ' ').replace(/\b\w/g, c => c.toUpperCase())}` : '';
            const description = `${job.company}${location}${jobType}${salary}. Apply now on Passionfruit Careers.`;
            const title = `${job.title} at ${job.company} — Passionfruit Careers`;
            const jobUrl = `${SITE_URL}/jobs/${jobId}`;
            const logoUrl = job.companyLogo || `${SITE_URL}/logo.png`;

            // Inject OG + Twitter meta tags before </head>
            const metaTags = `
    <!-- Social Sharing Meta Tags (injected server-side) -->
    <title>${escapeHtml(title)}</title>
    <meta name="description" content="${escapeHtml(description)}" />

    <!-- Open Graph (Facebook, LinkedIn, WhatsApp) -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${escapeHtml(jobUrl)}" />
    <meta property="og:title" content="${escapeHtml(title)}" />
    <meta property="og:description" content="${escapeHtml(description)}" />
    <meta property="og:image" content="${escapeHtml(logoUrl)}" />
    <meta property="og:site_name" content="Passionfruit Careers" />

    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeHtml(title)}" />
    <meta name="twitter:description" content="${escapeHtml(description)}" />
    <meta name="twitter:image" content="${escapeHtml(logoUrl)}" />
`;
            html = html.replace('</head>', metaTags + '  </head>');
        }

        res.send(html);
    } catch (error) {
        console.error('Error injecting OG tags for job:', error);
        // Fallback: serve the normal SPA index.html
        res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    }
});

// Handle React routing, return all requests to React app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// Helper: escape HTML entities in meta tag values
function escapeHtml(str) {
    if (!str) return '';
    return str
        .replace(/&/g, '&amp;')
        .replace(/"/g, '&quot;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
}
