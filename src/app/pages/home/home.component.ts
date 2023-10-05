import { Component } from '@angular/core';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Artwork } from 'src/app/entities/artic.entity';
import { goPage } from 'src/app/stores/artic/artic.actions';
import { ArticState } from 'src/app/stores/artic/artic.reducer';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  artworks: Observable<Artwork[]> = this.store.select((state: { artic: ArticState }) => state.artic.pageResults)

  constructor(private store: Store<{ artic: ArticState }>) {

  }

  ngOnInit() {
    this.store.dispatch(goPage({ page: 1 }))
  }
}
