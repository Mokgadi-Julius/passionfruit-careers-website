import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Source image to copy (must exist)
const sourceImage = path.join(__dirname, 'src', 'assets', 'hero.png');

// Target directory for generated assets
const targetDir = path.join(__dirname, 'src', 'assets', 'generated');

// List of all assets referenced in the code that might be missing
const missingFiles = [
    'hero-team.png',
    'hero-abstract.png',
    'about-connection.png',
    'service-resume.png',
    'service-matching.png',
    'service-autoapply.png',
    'service-dashboard.png',
    'service-insights.png',
    'service-global.png',
    'success-hired.png',
    'step-upload.png',
    'step-matching.png',
    'step-apply.png',
    'testimonial-thabo.png',
    'testimonial-sarah.png',
    'testimonial-sipho.png',
    'testimonial-precious.png',
    'office-team.png',
    'johannesburg-future.png'
];

// Ensure target directory exists
if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
    console.log(`Created directory: ${targetDir}`);
}

// Check if source exists
if (!fs.existsSync(sourceImage)) {
    console.error(`Source image not found at ${sourceImage}`);
    process.exit(1);
}

// Generate placeholders
missingFiles.forEach(file => {
    const destPath = path.join(targetDir, file);
    if (!fs.existsSync(destPath)) {
        fs.copyFileSync(sourceImage, destPath);
        console.log(`✅ Created placeholder: ${file}`);
    } else {
        console.log(`ℹ️ File already exists (skipping): ${file}`);
    }
});

console.log('Placeholder generation complete.');
