import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { exhaustMap, map, switchMap, withLatestFrom } from "rxjs";
import { ArticService } from "src/app/shared/artic.service";
import { artworksLoaded, goPage, nextPage, prevPage, resetSearch, searchArtworks } from "./artic.actions";
import { Store } from "@ngrx/store";
import { ArticState } from "./artic.reducer";

@Injectable()
export class ArticEffects {

  loadArtworks$ = createEffect(() => this.actions$.pipe(
    ofType(nextPage, prevPage, goPage, resetSearch),
    withLatestFrom(this.store.select('artic')),
    switchMap(([action, { currentPage, searchTerm, isSearch }]) => (isSearch ? this.articService.searchArtworks(searchTerm, currentPage) : this.articService.getArtworks(currentPage))
      .pipe(
        map(artworks => (artworksLoaded({ artworks: artworks })))
      ))
  )
  );

  searchArtworks$ = createEffect(() => this.actions$.pipe(
    ofType(searchArtworks),
    switchMap(({ term }) => this.articService.searchArtworks(term, 1)
      .pipe(
        map(artworks => (artworksLoaded({ artworks: artworks })))
      ))
  )
  );

  constructor(
    private actions$: Actions,
    private articService: ArticService,
    private store: Store<{ artic: ArticState }>
  ) { }
}