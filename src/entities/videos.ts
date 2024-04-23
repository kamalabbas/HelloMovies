export interface video {
  name: string;
  key: string;
  site: string;
  size: number;
  type: string;
  official: boolean;
}

export interface trailer {
    id: number;
    results: video[]
}
