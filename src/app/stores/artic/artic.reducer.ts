import { createReducer, on } from "@ngrx/store";
import { artworksLoaded, goPage, nextPage, prevPage, resetSearch, searchArtworks } from "./artic.actions";
import { Artwork } from "src/app/entities/artic.entity";
import { state } from "@angular/animations";

export type ArticState = {
  currentPage: number
  total: number
  totalPages: number
  isSearch: boolean
  searchTerm: string
  pageResults: Artwork[]
}

export const initialState: ArticState = {
  currentPage: 1,
  total: 1,
  totalPages: 0,
  isSearch: false,
  searchTerm: "",
  pageResults: []
};

export const articReducer = createReducer(
  initialState,
  on(nextPage, (state) => ({ ...state, currentPage: state.currentPage + 1 })),
  on(prevPage, (state) => ({ ...state, currentPage: state.currentPage - 1 })),
  on(goPage, (state, { page }) => ({ ...state, currentPage: page })),
  on(artworksLoaded, (state, { artworks }) => {
    console.log(artworks)
    return { ...state, total: artworks.pagination.total, totalPages: artworks.pagination.total_pages, currentPage: artworks.pagination.current_page, pageResults: artworks.data }
  }),
  on(searchArtworks, (state, { term }) => ({ ...state, currentPage: 1, isSearch: true, searchTerm: term })),
  on(resetSearch, (state) => ({ ...state, currentPage: 1, searchTerm: '', isSearch: false }))

);