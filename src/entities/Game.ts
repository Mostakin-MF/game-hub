import { Key, ReactNode } from 'react';
import type { Platform } from './Platform';

export interface Game {
  rating: ReactNode;
  id: number;
  name: string;
  slug: string;
  description_raw: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  genres: {
    [x: string]: Key | null | undefined; name: string; slug: string
  }[];
  publishers: { name: string }[];
  website: string;
  rating_top: number;
}
