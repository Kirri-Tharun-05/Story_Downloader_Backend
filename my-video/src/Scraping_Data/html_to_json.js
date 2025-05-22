const fs = require('fs');
const cheerio = require('cheerio');

// Load AMP story HTML
const html = fs.readFileSync('scraped-story.html', 'utf8');
const $ = cheerio.load(html);

// Parse each page
const pages = [];

$('amp-story-page').each((_, pageEl) => {
  const $page = $(pageEl);
  const pageId = $page.attr('id');
  const backgroundAudio = $page.attr('background-audio');
  const autoAdvanceAfter = $page.attr('auto-advance-after');

  const images = [];
  const texts = [];
  const seenTexts = new Set();

  // Extract images
  $page.find('amp-img').each((_, imgEl) => {
    const $img = $(imgEl);
    images.push({
      type: 'image',
      src: $img.attr('src'),
      layout: $img.attr('layout'),
      alt: $img.attr('alt')
    });
  });

  // Extract text elements
  $page.find('h1, h2, h3, h4, h5, h6, p').each((_, textEl) => {
    const $text = $(textEl);
    const content = $text.text().trim();

    if (content && !seenTexts.has(content)) {
      seenTexts.add(content);
      texts.push({
        type: 'text',
        tag: textEl.tagName,
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

// Write output JSON
fs.writeFileSync('scraped-text-and-images.json', JSON.stringify({
  metadata: {
    title: $('amp-story').attr('title') || '',
    publisher: $('amp-story').attr('publisher') || '',
    publisherLogo: $('amp-story').attr('publisher-logo-src') || '',
    backgroundAudio: $('amp-story').attr('background-audio') || ''
  },
  pages
}, null, 2), 'utf8');

console.log('✅ Text and image data scraped to scraped-text-and-images.json');
