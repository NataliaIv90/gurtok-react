export interface JamendoResponse {
  headers: JamendoHeaders;
  results: JamendoTrack[];
}

export interface JamendoHeaders {
  status: string;
  code: number;
  error_message: string;
  warnings: string;
  results_count: number;
  next: string;
}

export interface JamendoTrack {
  id: string;
  name: string;
  duration: number;
  artist_id: string;
  artist_name: string;
  artist_idstr: string;
  album_name: string;
  album_id: string;
  license_ccurl: string;
  position: number;
  releasedate: string;
  album_image: string;
  audio: string;
  audiodownload: string;
  prourl: string;
  shorturl: string;
  shareurl: string;
  audiodownload_allowed: boolean;
  image: string;
}

export type TPlaylist = {
  id: number;
  name: string;
  description: string;
  image: string;
  url: string;
};

// Тип для відповіді з API плейлистів
export interface IPlaylistsResponse {
  results: TPlaylist[];
}

export type TCover = {
  'tile-xs': string;
  'tile-sm': string;
  'hero-xs': string;
  'hero-sm': string;
  'hero-md': string;
  'hero-lg': string;
  'hero-s': string;
  'hero-m': string;
  'hero-l': string;
  'hero-xl': string;
};

export type TGenre = {
  id: number;
  name: string;
  lang: string;
  idstr: string;
  category: string;
  featuredRank: number;
  cover: TCover;
};

export interface IGenresResponse {
  results: TGenre[];
}

export type TGenresList =
  | 'blues'
  | 'house'
  | 'country'
  | 'punk'
  | 'reggae'
  | 'rnb'
  | 'latin'
  | 'metal'
  | 'folk'
  | 'ambient'
  | 'chillout'
  | 'dance'
  | 'classical'
  | 'filmscore'
  | 'indie'
  | 'jazz'
  | 'hiphop'
  | 'electronic'
  | 'rock'
  | 'pop';
