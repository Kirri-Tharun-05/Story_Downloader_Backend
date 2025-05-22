export interface ImageElement {
  type: 'image';
  src: string;
  layout?: string;
  alt?: string;
}

export interface TextElement {
  type: 'text';
  tag: string;
  content: string;
}

export interface AMPStoryPage {
  id: string;
  backgroundAudio?: string;
  autoAdvanceAfter?: string;
  images: ImageElement[];
  texts: TextElement[];
}

export interface AMPStoryData {
  metadata: {
    title: string;
    publisher: string;
    publisherLogo: string;
    backgroundAudio: string;
  };
  pages: AMPStoryPage[];
}
