/**
 * SEO Landing Page Generator
 * Generates static HTML pages from templates and JSON data
 *
 * Usage: node scripts/build-seo-pages.js
 */

const fs = require('fs');
const path = require('path');

// Paths
const TEMPLATE_PATH = path.join(__dirname, '..', 'templates', 'seo-page-template.html');
const DATA_PATH = path.join(__dirname, '..', 'seo-pages.json');
const OUTPUT_DIR = path.join(__dirname, '..', 'pages');

// Read template
const template = fs.readFileSync(TEMPLATE_PATH, 'utf8');

// Read page data
const data = JSON.parse(fs.readFileSync(DATA_PATH, 'utf8'));

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

// Generate related links HTML
function generateRelatedLinks(links) {
    if (!links || links.length === 0) return '';

    return links.map(link => `
        <a href="${link.url}" class="related-link">
            <h3>${link.title}</h3>
            <p>${link.desc}</p>
        </a>
    `).join('\n');
}

// Replace template variables
function processTemplate(templateStr, pageData) {
    let html = templateStr;

    // Replace simple variables
    html = html.replace(/\{\{title\}\}/g, pageData.title);
    html = html.replace(/\{\{h1\}\}/g, pageData.h1);
    html = html.replace(/\{\{subtitle\}\}/g, pageData.subtitle);
    html = html.replace(/\{\{metaDescription\}\}/g, pageData.metaDescription);
    html = html.replace(/\{\{keywords\}\}/g, pageData.keywords);
    html = html.replace(/\{\{slug\}\}/g, pageData.slug);
    html = html.replace(/\{\{content\}\}/g, pageData.content);

    // Generate and replace related links
    const relatedLinksHtml = generateRelatedLinks(pageData.relatedLinks);
    html = html.replace(/\{\{relatedLinks\}\}/g, relatedLinksHtml);

    return html;
}

// Generate all pages
console.log('🎭 Building SEO landing pages...\n');

let successCount = 0;
let errorCount = 0;

data.pages.forEach(page => {
    try {
        const html = processTemplate(template, page);
        const outputPath = path.join(OUTPUT_DIR, `${page.slug}.html`);

        fs.writeFileSync(outputPath, html);
        console.log(`✅ Generated: ${page.slug}.html`);
        successCount++;
    } catch (error) {
        console.error(`❌ Error generating ${page.slug}: ${error.message}`);
        errorCount++;
    }
});

console.log(`\n📊 Build complete: ${successCount} pages generated, ${errorCount} errors`);

// Generate a sitemap entry suggestion
console.log('\n📝 Add these to your sitemap.xml:');
data.pages.forEach(page => {
    console.log(`   <url><loc>https://wilmingtonlaughs.com/pages/${page.slug}.html</loc></url>`);
});

console.log('\n🔗 Internal linking suggestions for index.html:');
data.pages.forEach(page => {
    console.log(`   <a href="/pages/${page.slug}.html">${page.title}</a>`);
});
