export interface MediaVideo {
  title: string;
  embedUrl: string;
  category?: string;
}

export const mediaVideos: MediaVideo[] = [
  { title: "Al Jazeera: Community Currencies", embedUrl: "https://www.youtube.com/embed/UpCr8-3K05E", category: "news" },
  { title: "Bangla-Pesa Documentary", embedUrl: "https://www.youtube.com/embed/UaspBGmsdLE", category: "documentary" },
  { title: "KTN News Feature", embedUrl: "https://www.youtube.com/embed/1awCx-eJB0I", category: "news" },
  { title: "Commitment Pooling Explained", embedUrl: "https://www.youtube.com/embed/P5WZavo468g", category: "animation" },
  { title: "Grassroots Economics Overview", embedUrl: "https://www.youtube.com/embed/ojFPrVvpraU", category: "documentary" },
  { title: "Indigenous Economics", embedUrl: "https://www.youtube.com/embed/gRkV3zjgiIA", category: "documentary" },
];
