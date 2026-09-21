import { OGImageRoute } from 'astro-og-canvas';
import { projects } from '../../data/projects';

const pages = Object.fromEntries([
  ['home', {
    title: 'GABRIEL LEAL',
    description: 'Sites com personalidade para negócios que querem uma presença digital própria.',
  }],
  ...projects.map((project) => [project.slug, {
    title: project.name.toUpperCase(),
    description: `${project.type} · ${project.headline}`,
  }]),
]);

export const { getStaticPaths, GET } = await OGImageRoute({
  pages,
  getImageOptions: (_path, page) => ({
    title: page.title,
    description: page.description,
    bgGradient: [[23, 23, 23], [47, 47, 43]],
    border: { color: [255, 255, 255], width: 12, side: 'block-end' },
    padding: 72,
    fonts: ['./public/fonts/anton.ttf', './public/fonts/manrope-regular.ttf'],
    font: {
      title: { families: ['Anton'], size: 90, color: [255, 255, 255], lineHeight: 1.15 },
      description: { families: ['Manrope'], size: 31, color: [213, 213, 207], lineHeight: 1.35 },
    },
  }),
});
