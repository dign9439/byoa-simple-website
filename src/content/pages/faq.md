# Frequently Asked Questions

## What is a static site?
A static site is a website that delivers content directly to users without processing it on the server. All pages are pre-built and ready to serve, making it fast and secure.

## Why use Markdown for content?
Markdown is a lightweight markup language that's easy to read and write. It converts to clean HTML and allows you to focus on content rather than formatting.

## How is this site built?
This site uses Node.js to convert Markdown files into HTML pages. The build process is automated, making it easy to add new content or make changes.

## Can I use this for my own site?
Yes! The code is built with simplicity in mind. You can fork the repository and customize it for your needs.

## How do I add new content?
Simply create a new Markdown file in the appropriate directory:
- For blog posts: `src/content/blog/`
- For pages: `src/content/pages/`

Then run `npm run build` to generate the site. 