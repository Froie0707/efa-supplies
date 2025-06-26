/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://efa-supplies.vercel.app', // replace with your actual domain
  generateRobotsTxt: true,
  sitemapSize: 5000,
  changefreq: 'weekly',
  priority: 0.7,
  exclude: ['/admin', '/private-page'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    additionalSitemaps: [
      // Add more sitemap files here if needed
    ],
  },
};
