// backend/scrapHtml.js
import axios from 'axios';

export async function fetchAmpHtml(url) {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error('❌ Error fetching AMP HTML: ' + error.message);
  }
}
