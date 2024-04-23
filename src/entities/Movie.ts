import { Genre } from "./Genre";

export interface Movie {
    id: number;
    title: string;
    name: string;
    poster_path?: string;
    overview?: string;
    release_date: string;
    backdrop_path: string;
    genres: Genre[];
    popularity: number;
    runtime: number;
    tagline: string;
    status: string;
}
