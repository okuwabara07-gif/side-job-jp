/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://side-job-jp.vercel.app',
  generateRobotsTxt: false,
  robotsTxtOptions: {
    additionalSitemaps: ['https://side-job-jp.vercel.app/sitemap.xml'],
  },
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 5000,
}
