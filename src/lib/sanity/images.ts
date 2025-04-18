export interface SanityImage {
  asset: {
    id: string;
    label?: string;
    title?: string;
    description?: string;
    altText: string;
    originalFilename: string;
    mimeType: string;
    size: number;
    url: string;
  };
  hotspot?: {
    height: number;
    width: number;
  };
}
