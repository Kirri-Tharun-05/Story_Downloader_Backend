import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import os from 'os';

import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const entryFilePath = path.join(__dirname, '../my-video/src/index.ts');
if (!fs.existsSync(entryFilePath)) {
  console.error(`❌ ENTRY_FILE not found at: ${entryFilePath}`);
} else {
  console.log(`✅ ENTRY_FILE found at: ${entryFilePath}`);
}

// Helper to write JSON to temp file and return path
const writeTempJsonFile = (data) => {
  const tempFilePath = path.join(os.tmpdir(), `remotion-props-${Date.now()}.json`);
  fs.writeFileSync(tempFilePath, JSON.stringify(data));
  console.log(`📝 Temp JSON file written to: ${tempFilePath}`);
  return tempFilePath;
};

const renderSlide = (slideIndex, outputPath, pages) => {
  try {
    const propsObj = {
      page: pages[slideIndex],
      index: slideIndex,
      audioOffset: slideIndex * 150,
    };
    const propsPath = writeTempJsonFile(propsObj);

    console.log(`🎬 Rendering Slide ${slideIndex + 1} to ${outputPath}...`);
    execSync(
      `npx remotion render "${entryFilePath}" Slide${slideIndex + 1} "${outputPath}" --props="${propsPath}"`,
      { stdio: 'inherit' }
    );
    console.log(`✅ Slide ${slideIndex + 1} rendered.`);
  } catch (err) {
    console.error(`❌ Failed to render Slide ${slideIndex + 1}:`, err.message);
  }
};

const renderFullVideo = (outputPath, pages) => {
  try {
    const propsPath = writeTempJsonFile({ pages });

    console.log(`🎬 Rendering full video to ${outputPath}...`);
    execSync(
      `npx remotion render "${entryFilePath}" FullStory "${outputPath}" --props="${propsPath}"`,
      { stdio: 'inherit' }
    );
    console.log(`✅ Full video rendered.`);
  } catch (err) {
    console.error(`❌ Failed to render full video:`, err.message);
  }
};

const renderImage = (slideIndex, outputPath, frame, pages) => {
  try {
    const propsObj = {
      page: pages[slideIndex],
      index: slideIndex,
      audioOffset: slideIndex * 150,
    };
    const propsPath = writeTempJsonFile(propsObj);

    console.log(`🖼️ Rendering image for Slide ${slideIndex + 1} to ${outputPath}...`);
    execSync(
      `npx remotion still "${entryFilePath}" Slide${slideIndex + 1} "${outputPath}" --frame=${frame} --props="${propsPath}"`,
      { stdio: 'inherit' }
    );
    console.log(`✅ Slide ${slideIndex + 1} image rendered.`);
  } catch (err) {
    console.error(`❌ Failed to render image for Slide ${slideIndex + 1}:`, err.message);
  }
};

export const renderFullProject = async (pages) => {
  console.log('📄 Number of Pages:', pages.length);

  const outDir = path.resolve(__dirname, '../../out');
  const imageDir = path.join(outDir, 'images');

  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
  if (!fs.existsSync(imageDir)) fs.mkdirSync(imageDir, { recursive: true });

  const outputs = [];

  for (let i = 0; i < pages.length; i++) {
    const slidePath = path.join(outDir, `slide${i + 1}.mp4`);
    const imagePath = path.join(imageDir, `slide${i + 1}.png`);

    renderSlide(i, slidePath, pages);
    outputs.push({ path: slidePath });

    renderImage(i, imagePath, Math.floor(150 / 2), pages);
    outputs.push({ path: imagePath });
  }

  const fullVideoPath = path.join(outDir, 'full_video.mp4');
  renderFullVideo(fullVideoPath, pages);
  outputs.push({ path: fullVideoPath });

  return outputs;
};
