// import { execSync } from 'child_process';
// import fs from 'fs';
// import path from 'path';

// import { fileURLToPath } from 'url';
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// // Use path.join for relative file path resolution
// const ENTRY_FILE = path.join(__dirname, '../my-video/src/index.ts');
// if (!fs.existsSync(entryFilePath)) {
//   console.error(`❌ ENTRY_FILE not found at: ${entryFilePath}`);
// } else {
//   console.log(`✅ ENTRY_FILE found at: ${entryFilePath}`);
// }



// // Helper function to render each slide
// const renderSlide = (slideIndex, outputPath) => {
//   try {
//     console.log(`🎬 Rendering Slide ${slideIndex + 1} to ${outputPath}...`);
//     execSync(`npx remotion render ${entryFilePath} Slide${slideIndex + 1} ${outputPath}`, {
//       stdio: 'inherit',
//     });
//     console.log(`✅ Finished rendering Slide ${slideIndex + 1}`);
//   } catch (err) {
//     console.error(`❌ Failed to render Slide ${slideIndex + 1}:`, err.message);
//   }
// };

// // Helper function to render the full video
// const renderFullVideo = (outputPath) => {
//   try {
//     console.log(`🎬 Rendering full video to ${outputPath}...`);
//     execSync(`npx remotion render ${entryFilePath} FullStory ${outputPath}`, {
//       stdio: 'inherit',
//     });
//     console.log(`✅ Finished rendering full video`);
//   } catch (err) {
//     console.error(`❌ Failed to render full video:`, err.message);
//   }
// };

// // Helper function to render images (still frames)
// const renderImage = (slideIndex, outputPath, frame) => {
//   try {
//     console.log(`🖼️ Rendering image for Slide ${slideIndex + 1} at frame ${frame} to ${outputPath}...`);
//     execSync(
//       `npx remotion still ${entryFilePath} Slide${slideIndex + 1} ${outputPath} --frame=${frame}`,
//       { stdio: 'inherit' }
//     );
//     console.log(`✅ Finished rendering image for Slide ${slideIndex + 1}`);
//   } catch (err) {
//     console.error(`❌ Failed to render image for Slide ${slideIndex + 1}:`, err.message);
//   }
// };

// // Main function to render video and images for all slides
// export const renderFullProject = async (pages) => {
//   const outDir = path.resolve(__dirname, '../../out');
//   const imageDir = path.resolve(outDir, 'images');

//   // Check if output directories exist, and create them if necessary
//   if (!fs.existsSync(outDir)) {
//     console.log(`❌ Output directory not found, creating: ${outDir}`);
//     fs.mkdirSync(outDir, { recursive: true });
//   } else {
//     console.log(`✅ Output directory exists: ${outDir}`);
//   }

//   if (!fs.existsSync(imageDir)) {
//     console.log(`❌ Image directory not found, creating: ${imageDir}`);
//     fs.mkdirSync(imageDir, { recursive: true });
//   } else {
//     console.log(`✅ Image directory exists: ${imageDir}`);
//   }

//   const outputs = [];

//   // Render individual slides as videos
//   for (let i = 0; i < pages.length; i++) {
//     const slideOutputPath = path.resolve(outDir, `slide${i + 1}.mp4`);
//     console.log(`🛠️ Rendering slide ${i + 1} to: ${slideOutputPath}`);
//     renderSlide(i, slideOutputPath);
//     outputs.push({ path: slideOutputPath });

//     // Optionally, render images for each slide (midpoint frame, for example)
//     const slideImageOutputPath = path.resolve(imageDir, `slide${i + 1}.png`);
//     console.log(`🛠️ Rendering image for slide ${i + 1} to: ${slideImageOutputPath}`);
//     renderImage(i, slideImageOutputPath, Math.floor(150 / 2)); // Assuming 150 frames per scene
//     outputs.push({ path: slideImageOutputPath });
//   }

//   // Render the full video
//   const fullVideoOutputPath = path.resolve(outDir, 'full_video.mp4');
//   console.log(`🛠️ Rendering full video to: ${fullVideoOutputPath}`);
//   renderFullVideo(fullVideoOutputPath);
//   outputs.push({ path: fullVideoOutputPath });

//   return outputs;
// };

// import { execSync } from 'child_process';
// import fs from 'fs';
// import path from 'path';

// import { fileURLToPath } from 'url';
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// // Use path.join for relative file path resolution
// const entryFilePath = path.join(__dirname, '../my-video/src/index.ts');
// if (!fs.existsSync(entryFilePath)) {
//   console.error(`❌ ENTRY_FILE not found at: ${entryFilePath}`);
// } else {
//   console.log(`✅ ENTRY_FILE found at: ${entryFilePath}`);
// }

// // Helper function to render each slide
// const renderSlide = (slideIndex, outputPath) => {
//   try {
//     console.log(`🎬 Rendering Slide ${slideIndex + 1} to ${outputPath}...`);
//     execSync(`npx remotion render ${entryFilePath} Slide${slideIndex + 1} ${outputPath}`, {
//       stdio: 'inherit',
//     });
//     console.log(`✅ Finished rendering Slide ${slideIndex + 1}`);
//   } catch (err) {
//     console.error(`❌ Failed to render Slide ${slideIndex + 1}:`, err.message);
//   }
// };

// // Helper function to render the full video
// const renderFullVideo = (outputPath) => {
//   try {
//     console.log(`🎬 Rendering full video to ${outputPath}...`);
//     execSync(`npx remotion render ${entryFilePath} FullStory ${outputPath}`, {
//       stdio: 'inherit',
//     });
//     console.log(`✅ Finished rendering full video`);
//   } catch (err) {
//     console.error(`❌ Failed to render full video:`, err.message);
//   }
// };

// // Helper function to render images (still frames)
// const renderImage = (slideIndex, outputPath, frame) => {
//   try {
//     console.log(`🖼️ Rendering image for Slide ${slideIndex + 1} at frame ${frame} to ${outputPath}...`);
//     execSync(
//       `npx remotion still ${entryFilePath} Slide${slideIndex + 1} ${outputPath} --frame=${frame}`,
//       { stdio: 'inherit' }
//     );
//     console.log(`✅ Finished rendering image for Slide ${slideIndex + 1}`);
//   } catch (err) {
//     console.error(`❌ Failed to render image for Slide ${slideIndex + 1}:`, err.message);
//   }
// };

// // Main function to render video and images for all slides
// export const renderFullProject = async (pages) => {
//   console.log('No OF Pages  : ',pages.length)
//   const outDir = path.resolve(__dirname, '../../out');
//   const imageDir = path.resolve(outDir, 'images');

//   // Check if output directories exist, and create them if necessary
//   if (!fs.existsSync(outDir)) {
//     console.log(`❌ Output directory not found, creating: ${outDir}`);
//     fs.mkdirSync(outDir, { recursive: true });
//   } else {
//     console.log(`✅ Output directory exists: ${outDir}`);
//   }

//   if (!fs.existsSync(imageDir)) {
//     console.log(`❌ Image directory not found, creating: ${imageDir}`);
//     fs.mkdirSync(imageDir, { recursive: true });
//   } else {
//     console.log(`✅ Image directory exists: ${imageDir}`);
//   }

//   const outputs = [];

//   // Render individual slides as videos
//   for (let i = 0; i < pages.length; i++) {
//     const slideOutputPath = path.resolve(outDir, `slide${i + 1}.mp4`);
//     console.log(`🛠️ Rendering slide ${i + 1} to: ${slideOutputPath}`);
//     renderSlide(i, slideOutputPath);
//     outputs.push({ path: slideOutputPath });

//     // Optionally, render images for each slide (midpoint frame, for example)
//     const slideImageOutputPath = path.resolve(imageDir, `slide${i + 1}.png`);
//     console.log(`🛠️ Rendering image for slide ${i + 1} to: ${slideImageOutputPath}`);
//     renderImage(i, slideImageOutputPath, Math.floor(150 / 2)); // Assuming 150 frames per scene
//     outputs.push({ path: slideImageOutputPath });
//   }

//   // Render the full video
//   const fullVideoOutputPath = path.resolve(outDir, 'full_video.mp4');
//   console.log(`🛠️ Rendering full video to: ${fullVideoOutputPath}`);
//   renderFullVideo(fullVideoOutputPath);
//   outputs.push({ path: fullVideoOutputPath });

//   return outputs;
// };



// import { execSync } from 'child_process';
// import fs from 'fs';
// import path from 'path';

// import { fileURLToPath } from 'url';
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// // Use path.join for relative file path resolution
// const entryFilePath = path.join(__dirname, '../my-video/src/index.ts');
// if (!fs.existsSync(entryFilePath)) {
//   console.error(`❌ ENTRY_FILE not found at: ${entryFilePath}`);
// } else {
//   console.log(`✅ ENTRY_FILE found at: ${entryFilePath}`);
// }

// // Helper function to render each slide
// const renderSlide = (slideIndex, outputPath, pages) => {
//   try {
//     const props = JSON.stringify({
//       page: pages[slideIndex],
//       index: slideIndex,
//       audioOffset: slideIndex * 150,
//     });
//     console.log(`🎬 Rendering Slide ${slideIndex + 1} to ${outputPath}...`);
//     execSync(
//       `npx remotion render ${entryFilePath} Slide${slideIndex + 1} ${outputPath} --props='${props}'`,
//       { stdio: 'inherit' }
//     );
//     console.log(`✅ Finished rendering Slide ${slideIndex + 1}`);
//   } catch (err) {
//     console.error(`❌ Failed to render Slide ${slideIndex + 1}:`, err.message);
//   }
// };

// // Helper function to render the full video
// const renderFullVideo = (outputPath, pages) => {
//   try {
//     const props = JSON.stringify({ pages });
//     console.log(`🎬 Rendering full video to ${outputPath}...`);
//     execSync(
//       `npx remotion render ${entryFilePath} FullStory ${outputPath} --props='${props}'`,
//       { stdio: 'inherit' }
//     );
//     console.log(`✅ Finished rendering full video`);
//   } catch (err) {
//     console.error(`❌ Failed to render full video:`, err.message);
//   }
// };

// // Helper function to render images (still frames)
// const renderImage = (slideIndex, outputPath, frame, pages) => {
//   try {
//     const props = JSON.stringify({
//       page: pages[slideIndex],
//       index: slideIndex,
//       audioOffset: slideIndex * 150,
//     });
//     console.log(`🖼️ Rendering image for Slide ${slideIndex + 1} at frame ${frame} to ${outputPath}...`);
//     execSync(
//       `npx remotion still ${entryFilePath} Slide${slideIndex + 1} ${outputPath} --frame=${frame} --props='${props}'`,
//       { stdio: 'inherit' }
//     );
//     console.log(`✅ Finished rendering image for Slide ${slideIndex + 1}`);
//   } catch (err) {
//     console.error(`❌ Failed to render image for Slide ${slideIndex + 1}:`, err.message);
//   }
// };

// // Main function to render video and images for all slides
// export const renderFullProject = async (pages) => {
//   console.log('No OF Pages  : ', pages.length);
//   const outDir = path.resolve(__dirname, '../../out');
//   const imageDir = path.resolve(outDir, 'images');

//   // Ensure output directories exist
//   if (!fs.existsSync(outDir)) {
//     console.log(`❌ Output directory not found, creating: ${outDir}`);
//     fs.mkdirSync(outDir, { recursive: true });
//   } else {
//     console.log(`✅ Output directory exists: ${outDir}`);
//   }

//   if (!fs.existsSync(imageDir)) {
//     console.log(`❌ Image directory not found, creating: ${imageDir}`);
//     fs.mkdirSync(imageDir, { recursive: true });
//   } else {
//     console.log(`✅ Image directory exists: ${imageDir}`);
//   }

//   const outputs = [];

//   // Render each slide as video and image
//   for (let i = 0; i < pages.length; i++) {
//     const slideOutputPath = path.resolve(outDir, `slide${i + 1}.mp4`);
//     console.log(`🛠️ Rendering slide ${i + 1} to: ${slideOutputPath}`);
//     renderSlide(i, slideOutputPath, pages);
//     outputs.push({ path: slideOutputPath });

//     const slideImageOutputPath = path.resolve(imageDir, `slide${i + 1}.png`);
//     console.log(`🛠️ Rendering image for slide ${i + 1} to: ${slideImageOutputPath}`);
//     renderImage(i, slideImageOutputPath, Math.floor(150 / 2), pages);
//     outputs.push({ path: slideImageOutputPath });
//   }

//   // Render full video
//   const fullVideoOutputPath = path.resolve(outDir, 'full_video.mp4');
//   console.log(`🛠️ Rendering full video to: ${fullVideoOutputPath}`);
//   renderFullVideo(fullVideoOutputPath, pages);
//   outputs.push({ path: fullVideoOutputPath });

//   return outputs;
// };




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
