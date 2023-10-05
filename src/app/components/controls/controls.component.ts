import { Component, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Artwork } from 'src/app/entities/artic.entity';
import { goPage, nextPage, prevPage } from 'src/app/stores/artic/artic.actions'
import { ArticState } from 'src/app/stores/artic/artic.reducer';

interface PageEvent {
  page?: number | undefined;
}

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.css']
})
export class ControlsComponent {

  artworks: Observable<Artwork[]> = this.store.select((state: { artic: ArticState }) => state.artic.pageResults)
  currentPage: Observable<number> = this.store.select((state: { artic: ArticState }) => state.artic.currentPage)
  total: Observable<number> = this.store.select((state: { artic: ArticState }) => state.artic.total) || 0
  totalPages: Observable<number> = this.store.select((state: { artic: ArticState }) => state.artic.totalPages) || 0

  first = 1
  @ViewChild('pg', { static: false }) paginator: any;

  constructor(private store: Store<{ artic: ArticState }>) {
  }

  ngOnInit() {
    this.go(1)
    this.total.subscribe(() => this.reset())
  }

  next() {
    this.store.dispatch(nextPage())
  }

  prev() {
    this.store.dispatch(prevPage())
  }

  go(page: number) {
    this.store.dispatch(goPage({ page }))
  }

  onPageChange(event: PageEvent) {
    console.log(event)
    this.go(event.page! + 1)
  }

  reset() {
    this.paginator.changePageToFirst();
  }
}
