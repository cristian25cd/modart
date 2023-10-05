import { createAction, props } from "@ngrx/store";
import { ArtworkResponse } from "src/app/entities/artic.entity";

export const nextPage = createAction('[Artic Service] Next');
export const prevPage = createAction('[Artic Service] Previous');
export const goPage = createAction('[Artic Service] Go', props<{ page: number }>(),);
export const artworksLoaded = createAction('[Artic Service] Loaded', props<{ artworks: ArtworkResponse }>(),)
export const artworksFailed = createAction('[Artic Service] Failed', props<{ errorMsg: String }>(),)
export const searchArtworks = createAction('[Artic Service] Search', props<{ term: string }>(),)
export const resetSearch = createAction('[Artic Service] Reset');