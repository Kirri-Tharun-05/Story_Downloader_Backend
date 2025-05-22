const axios = require('axios');
const fs = require('fs');

async function fetchAmpHtml(url, outputPath = 'scraped-story.html') {
  try {
    const response = await axios.get(url);
    const html = response.data;

    fs.writeFileSync(outputPath, html, 'utf8');
    console.log(`✅ AMP HTML saved to ${outputPath}`);
  } catch (error) {
    console.error('Error fetching AMP story:', error.message);
  }
}

// Run it
// fetchAmpHtml('https://suvichaar.org/stories/beyond-the-home-runs-profound-insights-by-babe-ruth_9BeMkE9xqx_G');
fetchAmpHtml('https://suvichaar.org/stories/the-best-bertrand-russell-quotes-on-rational-living_1OxHAowSwu_G');