// backend/htmlToJson.js
import * as cheerio from 'cheerio';

export function parseAmpStoryHtml(html) {
  const $ = cheerio.load(html);
  const pages = [];

  $('amp-story-page').each((_, pageEl) => {
    const $page = $(pageEl);
    const pageId = $page.attr('id');
    const backgroundAudio = $page.attr('background-audio');
    const autoAdvanceAfter = $page.attr('auto-advance-after');

    const images = [];
    const texts = [];
    const seenTexts = new Set();

    $page.find('amp-img').each((_, imgEl) => {
      const $img = $(imgEl);
      images.push({
        type: 'image',
        src: $img.attr('src'),
        layout: $img.attr('layout'),
        alt: $img.attr('alt')
      });
    });

    $page.find('h1,h2,h3,h4,h5,h6,p').each((_, el) => {
      const content = $(el).text().trim();
      if (content && !seenTexts.has(content)) {
        seenTexts.add(content);
        texts.push({
          type: 'text',
          tag: el.tagName,
          content
        });
      }
    });

    pages.push({
      id: pageId,
      backgroundAudio,
      autoAdvanceAfter,
      images,
      texts
    });
  });

  const metadata = {
    title: $('amp-story').attr('title') || '',
    publisher: $('amp-story').attr('publisher') || '',
    publisherLogo: $('amp-story').attr('publisher-logo-src') || '',
    backgroundAudio: $('amp-story').attr('background-audio') || ''
  };

  return { metadata, pages };
}
