export interface UserStats {
  competitions: number;
  rank: number;
  achievements: number;
  upcoming: number;
}

export interface EventFilter {
  discipline: string;
  region: string;
  date: string;
  search: string;
}

export interface RankingUser {
  id: number;
  name: string;
  region: string;
  points: number;
  competitions: number;
  rank: number;
  category: string;
  lastActivity: string;
}

export interface MapEvent {
  id: number;
  name: string;
  discipline: string;
  location: string;
  date: string;
  distance?: string;
  latitude: number;
  longitude: number;
}
