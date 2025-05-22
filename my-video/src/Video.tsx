// import { Composition, Sequence, AbsoluteFill,getInputProps} from 'remotion';
// import { Scene } from './Url_Scraped_Stories/Scene';
// import type { AMPStoryData } from './types/ampStoryData';

// // import backgroundMusic from '../public/backgroundMusic.mp3'

// const durationPerScene = 150; // 5 seconds at 30fps


// export const RemotionVideo = () => {
//   const input = getInputProps() as unknown as AMPStoryData;
//   const pages = input.pages || [];
//   console.log('📦 Received pages:', input);

//   return (
//     <>
//       <Composition
//         id="FullStory"
//         component={DynamicStory}
//         durationInFrames={pages.length * durationPerScene}
//         fps={30}
//         width={720}
//         height={1280}
//         defaultProps={{ pages }}
//       />

//       {pages.map((page, index) => (
//         <Composition
//           key={`Slide${index + 1}`}
//           id={`Slide${index + 1}`}
//           component={Scene}
//           durationInFrames={durationPerScene}
//           fps={30}
//           width={720}
//           height={1280}
//           defaultProps={{
//             page,
//             index,
//             audioOffset: index * durationPerScene,
//           }}
//         />
//       ))}
//     </>
//   );
// };

// export const DynamicStory = ({ pages }: { pages: AMPStoryData['pages'] }) => {
//   return (
//     <AbsoluteFill>
//       {pages.map((page, index) => (
//         <Sequence
//           key={page.id || index}
//           from={index * durationPerScene}
//           durationInFrames={durationPerScene}
//         >
//           <Scene
//             page={page}
//             index={index}
//             audioOffset={index * durationPerScene}
//           />
//         </Sequence>
//       ))}
//     </AbsoluteFill>
//   );
// };

// import { Composition, Sequence, AbsoluteFill, getInputProps } from 'remotion';
// import { Scene } from './Url_Scraped_Stories/Scene';
// import type { AMPStoryData } from './types/ampStoryData';

// const durationPerScene = 150;

// export const RemotionVideo = () => {
//   const input = getInputProps() as Partial<AMPStoryData> & {
//     page?: AMPStoryData['pages'][0];
//     index?: number;
//     audioOffset?: number;
//   };

//   const isFullStory = Array.isArray(input.pages);
//   const pages = input.pages || (input.page ? [input.page] : []);

//   if (!pages.length) {
//     throw new Error('❌ No pages or page data provided to RemotionVideo');
//   }

//   return (
//     <>
//       {/* Only register FullStory if pages[] is provided */}
//       {isFullStory && (
//         <Composition
//           id="FullStory"
//           component={DynamicStory}
//           durationInFrames={pages.length * durationPerScene}
//           fps={30}
//           width={720}
//           height={1280}
//           defaultProps={{ pages }}
//         />
//       )}

//       {/* Always register individual slides */}
//       {pages.map((page, index) => (
//         <Composition
//           key={`Slide${index + 1}`}
//           id={`Slide${index + 1}`}
//           component={Scene}
//           durationInFrames={durationPerScene}
//           fps={30}
//           width={720}
//           height={1280}
//           defaultProps={{
//             page,
//             index,
//             audioOffset: index * durationPerScene,
//           }}
//         />
//       ))}
//     </>
//   );
// };

// export const DynamicStory = ({ pages }: { pages: AMPStoryData['pages'] }) => {
//   return (
//     <AbsoluteFill>
//       {pages.map((page, index) => (
//         <Sequence
//           key={page.id || index}
//           from={index * durationPerScene}
//           durationInFrames={durationPerScene}
//         >
//           <Scene
//             page={page}
//             index={index}
//             audioOffset={index * durationPerScene}
//           />
//         </Sequence>
//       ))}
//     </AbsoluteFill>
//   );
// };


import { Composition, Sequence, AbsoluteFill, getInputProps } from 'remotion';
import { Scene } from './Url_Scraped_Stories/Scene';
import type { AMPStoryData } from './types/ampStoryData';

const durationPerScene = 150;

export const RemotionVideo = () => {
  const input = getInputProps() as Partial<AMPStoryData> & {
    page?: AMPStoryData['pages'][0];
    index?: number;
    audioOffset?: number;
  };

  const isFullStory = Array.isArray(input.pages);
  const pages = input.pages || (input.page ? [input.page] : []);

  if (!pages.length) {
    throw new Error('❌ No pages or page data provided to RemotionVideo');
  }

  // When rendering a single slide, start from the given index
  const baseIndex = input.index ?? 0;

  return (
    <>
      {/* Only register FullStory if pages[] is provided */}
      {isFullStory && (
        <Composition
          id="FullStory"
          component={DynamicStory}
          durationInFrames={pages.length * durationPerScene}
          fps={30}
          width={720}
          height={1280}
          defaultProps={{ pages }}
        />
      )}

      {/* Register slide(s) using accurate index */}
      {pages.map((page, i) => {
        const index = baseIndex + i;

        return (
          <Composition
            key={`Slide${index + 1}`}
            id={`Slide${index + 1}`}
            component={Scene}
            durationInFrames={durationPerScene}
            fps={30}
            width={720}
            height={1280}
            defaultProps={{
              page,
              index,
              audioOffset: index * durationPerScene,
            }}
          />
        );
      })}
    </>
  );
};

export const DynamicStory = ({ pages }: { pages: AMPStoryData['pages'] }) => {
  return (
    <AbsoluteFill>
      {pages.map((page, index) => (
        <Sequence
          key={page.id || index}
          from={index * durationPerScene}
          durationInFrames={durationPerScene}
        >
          <Scene
            page={page}
            index={index}
            audioOffset={index * durationPerScene}
          />
        </Sequence>
      ))}
    </AbsoluteFill>
  );
};
