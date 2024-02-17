import { create } from 'zustand';

export interface MovieQuery {
    genreId?: number;
    sortValue?: string;
    searchQuery?: string;
    apiType?: string;
}
interface MovieQueryStore {
    movieQuery: MovieQuery;
    setGenreId: (genreId: number) => void;
    setSortOrder: (sortValue: string | undefined) => void;
    setSearch: (searchQuery: string | undefined) => void;
    setApiType: (type: string | undefined) => void;
}

const useMoviesQuery = create<MovieQueryStore>( (set) => ({
    movieQuery: {
        genreId: undefined,
        sortValue: undefined,
        searchQuery: 'game',
        apiType: '/discover/movie'
    },
    
    setGenreId: (genreId) => set(store => ({movieQuery: {...store.movieQuery, genreId}})),
    setSortOrder: (sortValue) => set(store => ({movieQuery: {...store.movieQuery, sortValue}})),
    setSearch: (searchQuery) => set(store => ({movieQuery: {...store.movieQuery, searchQuery}})),
    setApiType: (apiType) => set(store => ({movieQuery: {...store.movieQuery, apiType}}))
}))


export default useMoviesQuery;