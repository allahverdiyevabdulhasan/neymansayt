import { MetadataRoute } from 'next'
import { fetchData } from '@/lib/api'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://neymantech.com';
  const locales = ['az', 'en', 'ru', 'tr'];
  const sitemapEntries: MetadataRoute.Sitemap = [];

  const staticRoutes = ['', '/about', '/contact', '/services', '/projects', '/blogs'];
  
  staticRoutes.forEach(route => {
      locales.forEach(locale => {
          const pathPrefix = locale === 'az' ? '' : `/${locale}`;
          sitemapEntries.push({
              url: `${baseUrl}${pathPrefix}${route}`,
              lastModified: new Date(),
              changeFrequency: 'weekly',
              priority: route === '' ? 1 : 0.8,
          });
      });
  });

  try {
      const products = await fetchData('products');
      if (Array.isArray(products)) {
          products.forEach((product: any) => {
              locales.forEach(locale => {
                  const pathPrefix = locale === 'az' ? '' : `/${locale}`;
                  sitemapEntries.push({
                      url: `${baseUrl}${pathPrefix}/products/${product.slug}`,
                      lastModified: new Date(),
                      changeFrequency: 'weekly',
                      priority: 0.9,
                  });
              });
          });
      }
  } catch (error) {
      console.error('Error fetching products for sitemap', error);
  }

  try {
      const blogs = await fetchData('blogs');
      const results = Array.isArray(blogs) ? blogs : (blogs?.results || []);
      if (Array.isArray(results)) {
          results.forEach((blog: any) => {
              locales.forEach(locale => {
                  const pathPrefix = locale === 'az' ? '' : `/${locale}`;
                  sitemapEntries.push({
                      url: `${baseUrl}${pathPrefix}/blogs/${blog.slug}`,
                      lastModified: new Date(),
                      changeFrequency: 'daily',
                      priority: 0.7,
                  });
              });
          });
      }
  } catch (error) {
      console.error('Error fetching blogs for sitemap', error);
  }

  try {
      const services = await fetchData('services');
      if (Array.isArray(services)) {
          services.forEach((service: any) => {
              locales.forEach(locale => {
                  const pathPrefix = locale === 'az' ? '' : `/${locale}`;
                  sitemapEntries.push({
                      url: `${baseUrl}${pathPrefix}/services/${service.slug || service.id}`,
                      lastModified: new Date(),
                      changeFrequency: 'monthly',
                      priority: 0.8,
                  });
              });
          });
      }
  } catch (error) {
      console.error('Error fetching services for sitemap', error);
  }

  try {
      const projects = await fetchData('projects');
      if (Array.isArray(projects)) {
          projects.forEach((project: any) => {
              locales.forEach(locale => {
                  const pathPrefix = locale === 'az' ? '' : `/${locale}`;
                  sitemapEntries.push({
                      url: `${baseUrl}${pathPrefix}/projects/${project.slug || project.id}`,
                      lastModified: new Date(),
                      changeFrequency: 'monthly',
                      priority: 0.8,
                  });
              });
          });
      }
  } catch (error) {
      console.error('Error fetching projects for sitemap', error);
  }

  return sitemapEntries;
}
