/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.navtech.io", 
  generateRobotsTxt: true,           
  changefreq: "monthly",
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ["/404", "/server-error"],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
};
