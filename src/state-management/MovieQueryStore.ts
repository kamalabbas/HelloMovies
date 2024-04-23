import { create } from 'zustand';

export interface MovieQuery {
    genreId?: number;
    sortValue?: string;
    searchQuery?: string;
    apiType?: string;
    type: string
}
interface MovieQueryStore {
    movieQuery: MovieQuery;
    setGenreId: (genreId: number) => void;
    setSortOrder: (sortValue: string | undefined) => void;
    setSearch: (searchQuery: string | undefined) => void;
    setApiType: (type: string | undefined) => void;
    setType: (type: string) => void;
}

const useMoviesQuery = create<MovieQueryStore>( (set) => ({
    movieQuery: {
        genreId: undefined,
        sortValue: undefined,
        searchQuery: undefined,
        apiType: '/discover/movie',
        type: 'movie'
    },
    
    setGenreId: (genreId) => set(store => ({movieQuery: {...store.movieQuery, genreId}})),
    setSortOrder: (sortValue) => set(store => ({movieQuery: {...store.movieQuery, sortValue}})),
    setSearch: (searchQuery) => set(store => ({movieQuery: {...store.movieQuery, searchQuery : searchQuery != '' ? searchQuery : undefined}})),
    setApiType: (apiType) => set(store => ({movieQuery: {...store.movieQuery, apiType}})),
    setType: (type) => set(store => ({movieQuery: {...store.movieQuery, type, genreId: undefined}})),
}))


export default useMoviesQuery;