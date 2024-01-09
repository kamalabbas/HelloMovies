import { create } from 'zustand';

export interface MovieQuery {
    genreId?: number;
    sortValue?: string;
}   

interface MovieQueryStore {
    movieQuery: MovieQuery;
    setGenreId: (genreId: number) => void;
    setSortOrder: (sortValue: string | undefined) => void;
}

const useMoviesQuery = create<MovieQueryStore>( (set) => ({
    movieQuery: {
        genreId: undefined,
        sortValue: undefined,
    },
    setGenreId: (genreId) => set(store => ({movieQuery: {...store.movieQuery, genreId}})),
    setSortOrder: (sortValue) => set(store => ({movieQuery: {...store.movieQuery, sortValue}}))
}))


export default useMoviesQuery;