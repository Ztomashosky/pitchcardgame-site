import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context: any) {
  const posts = await getCollection('blog');
  return rss({
    title: 'Pitch31 — Learn Pitch Card Game',
    description: 'Strategy, rules, and tips for 31-point partnership Pitch.',
    site: context.site,
    items: posts.map((post: any) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/blog/${post.id}/`,
    })),
  });
}
