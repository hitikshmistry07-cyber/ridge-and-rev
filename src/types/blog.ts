export type Region = 'All' | 'Himalayas' | 'Western Ghats' | 'Desert & Salt' | 'Coastal' | 'Northeast';

export interface RouteCheckpoint {
  name: string;
  altitudeM: number;
  distanceKm: number;
  note: string;
}

export interface ElevationPoint {
  point: string;
  elevation: number; // in meters
}

export interface Author {
  name: string;
  handle: string;
  role: string;
  avatar: string;
  bio: string;
}

export interface Comment {
  id: string;
  postId: string;
  author: string;
  date: string;
  bikeModel: string;
  content: string;
  likes: number;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  excerpt: string;
  coverImage: string;
  imageAlt: string;
  region: Region;
  distanceKm: number;
  durationDays: string;
  maxElevationMeters: number;
  maxElevationFeet: number;
  difficulty: 'Moderate' | 'Demanding' | 'Extreme Expedition';
  bestSeason: string;
  recommendedBike: string;
  fuelAvailability: string;
  permitsRequired: string;
  publishedDate: string;
  readingTimeMinutes: number;
  featured?: boolean;
  author: Author;
  checkpoints: RouteCheckpoint[];
  elevationPoints: ElevationPoint[];
  tags: string[];
  content: {
    overview: string;
    routeBreakdown: Array<{
      heading: string;
      body: string;
      highlight?: string;
    }>;
    fuelAndLogistics: string;
    permits: string;
    bikePreparation: string;
    packingTips: string[];
    riderVerdict: string;
  };
}
