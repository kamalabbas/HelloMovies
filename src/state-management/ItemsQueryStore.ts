import { create } from "zustand";

export interface ItemsQuery {
  genreId?: number;
  sortValue?: string;
  searchQuery?: string;
  apiType?: string;
  type: string;
}
interface ItemsQueryStore {
  itemsQuery: ItemsQuery;
  setGenreId: (genreId: number) => void;
  setSortOrder: (sortValue: string | undefined) => void;
  setSearch: (searchQuery: string | undefined) => void;
  setApiType: (type: string | undefined) => void;
  setType: (type: string) => void;
}

const useItemsQuery = create<ItemsQueryStore>((set) => ({
  itemsQuery: {
    genreId: undefined,
    sortValue: undefined,
    searchQuery: undefined,
    apiType: "/discover/movie",
    type: "movie",
  },

  setGenreId: (genreId) =>
    set((store) => ({ itemsQuery: { ...store.itemsQuery, genreId } })),
  setSortOrder: (sortValue) =>
    set((store) => ({ itemsQuery: { ...store.itemsQuery, sortValue } })),
  setSearch: (searchQuery) =>
    set((store) => ({
      itemsQuery: {
        ...store.itemsQuery,
        searchQuery: searchQuery != "" ? searchQuery : undefined,
      },
    })),
  setApiType: (apiType) =>
    set((store) => ({ itemsQuery: { ...store.itemsQuery, apiType } })),
  setType: (type) =>
    set((store) => ({
      itemsQuery: { ...store.itemsQuery, type, genreId: undefined },
    })),
}));

export default useItemsQuery;
