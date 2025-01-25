const fs = require('fs').promises;
const path = require('path');
const marked = require('marked');

async function buildSite() {
    try {
        // Create directories if they don't exist
        await fs.mkdir('public/blog', { recursive: true });

        // Convert blog posts
        const blogDir = path.join('src', 'content', 'blog');
        const posts = await fs.readdir(blogDir);
        
        for (const post of posts) {
            if (post.endsWith('.md')) {
                const content = await fs.readFile(path.join(blogDir, post), 'utf-8');
                const html = marked.parse(content);
                const outputPath = path.join('public', 'blog', post.replace('.md', '.html'));
                
                // Use blog post template
                const template = await fs.readFile(path.join('src', 'templates', 'blog-post.html'), 'utf-8');
                const title = content.split('\n')[0].replace('# ', '');
                const finalHtml = template
                    .replace('{{title}}', title)
                    .replace('{{content}}', html);
                
                await fs.writeFile(outputPath, finalHtml, 'utf-8');
                console.log(`Built: ${outputPath}`);
            }
        }

        // Convert regular pages
        const pagesDir = path.join('src', 'content', 'pages');
        const pages = await fs.readdir(pagesDir);
        
        for (const page of pages) {
            if (page.endsWith('.md')) {
                const content = await fs.readFile(path.join(pagesDir, page), 'utf-8');
                const html = marked.parse(content);
                const outputPath = path.join('public', page.replace('.md', '.html'));
                
                // Use the same template for now
                const template = await fs.readFile(path.join('src', 'templates', 'blog-post.html'), 'utf-8');
                const title = content.split('\n')[0].replace('# ', '');
                const finalHtml = template
                    .replace('{{title}}', title)
                    .replace('{{content}}', html);
                
                await fs.writeFile(outputPath, finalHtml, 'utf-8');
                console.log(`Built: ${outputPath}`);
            }
        }
        
        console.log('Build completed successfully!');
    } catch (error) {
        console.error('Build failed:', error);
        process.exit(1);
    }
}

buildSite(); 