const fs = require('fs');
const { create } = require('xmlbuilder2');

const pages = [
  '/',
  '/about',
  '/contact',
  '/pricing',
  '/home',
  '/getstarted',
  '/solution',
  '/features/heatmap',
  'features/recordings',
  'features/funnels'
  // Add other pages here
];

const baseUrl = 'http://localhost:3000';

const root = create({ version: '1.0', encoding: 'UTF-8' })
  .ele('urlset', { xmlns: 'http://www.sitemaps.org/schemas/sitemap/0.9' });

pages.forEach((page) => {
  root.ele('url').ele('loc').txt(`${baseUrl}${page}`);
});

const xml = root.end({ prettyPrint: true });

fs.writeFileSync('./public/sitemap.xml', xml);
