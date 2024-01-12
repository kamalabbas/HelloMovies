import { create } from 'zustand';

export interface MovieQuery {
    genreId?: number;
    sortValue?: string;
    searchQuery?: string;
}
interface MovieQueryStore {
    movieQuery: MovieQuery;
    setGenreId: (genreId: number) => void;
    setSortOrder: (sortValue: string | undefined) => void;
    setSearch: (searchQuery: string | undefined) => void;
}

const useMoviesQuery = create<MovieQueryStore>( (set) => ({
    movieQuery: {
        genreId: undefined,
        sortValue: undefined,
    },
    setGenreId: (genreId) => set(store => ({movieQuery: {...store.movieQuery, genreId}})),
    setSortOrder: (sortValue) => set(store => ({movieQuery: {...store.movieQuery, sortValue}})),
    setSearch: (searchQuery) => set(store => ({movieQuery: {...store.movieQuery, searchQuery}}))

}))


export default useMoviesQuery;