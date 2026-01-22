import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Source image to copy (must exist)
const sourceImage = path.join(__dirname, 'src', 'assets', 'hero.png');

// Target directory for pages assets
const targetDir = path.join(__dirname, 'src', 'assets', 'pages');

// List of all assets referenced in the code that might be missing
const missingFiles = [
    'about-founder.png',
    'about-hero.png',
    'about-values.png',
    'blog-ai-future.png',
    'blog-interview.png',
    'blog-resume.png',
    'careers-culture.png',
    'careers-office.png',
    'community-event.png',
    'community-online.png',
    'features-ai-matching.png',
    'features-analytics.png',
    'features-autoapply.png',
    'help-hero.png',
    'integrations-hero.png',
    'press-hero.png'
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
