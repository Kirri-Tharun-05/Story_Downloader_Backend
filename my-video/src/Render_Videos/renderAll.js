const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Set the entry file that contains the registerRoot() call
const ENTRY_FILE = 'src/index.ts';

// Load your scraped data
const dataPath = path.resolve(__dirname, '../Scraping_Data/scraped-text-and-images.json');
const rawData = fs.readFileSync(dataPath, 'utf-8');
const json = JSON.parse(rawData);
const slides = json.pages;

if (!Array.isArray(slides)) {
  console.error('❌ Invalid data: pages array not found.');
  process.exit(1);
}

console.log(`📄 Found ${slides.length} slides.`);

// Ensure output directory exists
const outDir = path.resolve(__dirname, '../../out');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// 1. Render each slide composition (e.g., Slide1, Slide2, ...)
// This part of the code will render individual slides as before.
slides.forEach((_, index) => {
  const compId = `Slide${index + 1}`;
  const outputPath = path.resolve(outDir, `slide${index + 1}.mp4`);

  try {
    console.log(`🎬 Rendering ${compId} to ${outputPath}...`);
    execSync(`npx remotion render ${ENTRY_FILE} ${compId} ${outputPath}`, {
      stdio: 'inherit',
    });
    console.log(`✅ Finished rendering ${compId}`);
  } catch (err) {
    console.error(`❌ Failed to render ${compId}:`, err.message);
  }
});

// // 2. Render Full Video
// // After rendering individual slides, we will now render the full video using the `DynamicStory` composition
const fullVideoOutputPath = path.resolve(outDir, 'full_video.mp4');

try {
  console.log(`🎬 Rendering full video to ${fullVideoOutputPath}...`);
  execSync(`npx remotion render ${ENTRY_FILE} FullStory  ${fullVideoOutputPath}`, {
    stdio: 'inherit',
  });
  console.log(`✅ Finished rendering full video.`);
} catch (err) {
  console.error(`❌ Failed to render full video:`, err.message);
}

// 3. Render a still image for each slide at a specific frame (midpoint)
const imageDir = path.resolve(outDir, 'images');
if (!fs.existsSync(imageDir)) {
  fs.mkdirSync(imageDir, { recursive: true });
}

const durationPerScene = 150; // Must match the value in your video.tsx
const desiredFrame = Math.floor(durationPerScene / 2); // Midpoint (frame 75)

slides.forEach((_, index) => {
  const compId = `Slide${index + 1}`;
  const outputImagePath = path.resolve(imageDir, `slide${index + 1}.png`);

  try {
    console.log(`🖼️ Rendering image for ${compId} at frame ${desiredFrame} to ${outputImagePath}...`);
    execSync(
      `npx remotion still ${ENTRY_FILE} ${compId} ${outputImagePath} --frame=${desiredFrame}`,
      { stdio: 'inherit' }
    );
    console.log(`✅ Finished rendering image for ${compId}`);
  } catch (err) {
    console.error(`❌ Failed to render image for ${compId}:`, err.message);
  }
});