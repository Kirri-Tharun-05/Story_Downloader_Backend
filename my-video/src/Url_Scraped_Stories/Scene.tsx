import {
  AbsoluteFill,
  Img,
  interpolate,
  useCurrentFrame,
  Easing,
  Audio,
} from 'remotion';
import type { AMPStoryPage } from '../types/ampStoryData';
import quort from '../../public/quort.webp';
import logo from '../../public/logo.webp';
import image1 from '../../public/1.webp';

import backgroundMusic from '../../public/backgroundMusic.mp3';

export interface SceneProps {
  page: AMPStoryPage;
  index: number;
  audioOffset: number; // Audio offset passed as prop
}

export const Scene: React.FC<SceneProps> = ({ page, index, audioOffset }) => {
  const frame = useCurrentFrame();

  // Set scale animation for background image
  const scale = interpolate(frame, [0, 100], [1, 1.1], {
    extrapolateRight: 'clamp',
    easing: Easing.bezier(0.22, 1, 0.36, 1),
  });

  // Text animation configuration
  const initialTextDelay = 10; // Delay before text starts animating
  const delayPerLine = 25;
  const animationDuration = 30;

  return (
    <AbsoluteFill style={{ backgroundColor: 'black' }}>
      {/* Background Image */}
      <Img
        src={image1}
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          transform: `scale(${scale})`,
          opacity: 0.6,
        }}
      />

      {/* Gradient Overlay */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          width: '100%',
          height: '50%',
          backgroundImage:
            'linear-gradient(to top, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.7) 50%, rgba(0, 0, 0, 0) 100%)',
          pointerEvents: 'none',
        }}
      />

      {/* Add Audio with startFrom */}
      <Audio
        src={backgroundMusic}
        startFrom={audioOffset} // Set the audio offset for each slide
        loop={false} // Music won't loop, but you can set this to true if you want
      />

      {/* Text and Quote */}
      <div
        style={{
          position: 'absolute',
          bottom: 20,
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '3rem',
          zIndex: 2,
        }}
      >
        {/* Quote Icon */}
        <div style={{ display: 'flex', justifyContent: 'flex-start', width: '100%' }}>
          <Img
            src={quort}
            style={{
              width: 80,
              height: 80,
              opacity: interpolate(frame, [initialTextDelay, initialTextDelay + 20], [0, 1], {
                extrapolateRight: 'clamp',
                easing: Easing.bezier(0.22, 1, 0.36, 1),
              }),
              transform: `translateY(${interpolate(
                frame,
                [initialTextDelay, initialTextDelay + 20],
                [30, 0],
                { extrapolateRight: 'clamp', easing: Easing.bezier(0.22, 1, 0.36, 1) }
              )}px)`,
            }}
          />
        </div>

        {/* Animated Text Lines */}
        {page.texts.map((text, i) => {
          const start = initialTextDelay + i * delayPerLine;
          const end = start + animationDuration;

          const opacity = interpolate(frame, [start, end], [0, 1], {
            extrapolateRight: 'clamp',
            easing: Easing.bezier(0.22, 1, 0.36, 1),
          });

          const translateY = interpolate(frame, [start, end], [20, 0], {
            extrapolateRight: 'clamp',
            easing: Easing.bezier(0.22, 1, 0.36, 1),
          });

          return (
            <div
              key={i}
              style={{
                fontFamily: text.tag.startsWith('h') ? 'sans-serif' : 'cursive',
                color: 'white',
                fontSize: text.tag.startsWith('h') ? 37 : '2rem',
                lineHeight: '1.4',
                textAlign: 'center',
                margin: 10,
                padding: '0 0 2rem 0',
                textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                fontWeight: text.tag.startsWith('h') ? 'bold' : 'normal',
                opacity,
                transform: `translateY(${translateY}px)`,
              }}
            >
              {text.content}
            </div>
          );
        })}
      </div>

      {/* Logo */}
      <div
        style={{
          position: 'absolute',
          top: 20,
          right: 20,
          zIndex: 999,
        }}
      >
        <Img
          src={logo}
          style={{
            width: '50%',
          }}
        />
      </div>
    </AbsoluteFill>
  );
};
