import { Component } from '@angular/core';
import { faSearch, faXmark } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { resetSearch, searchArtworks } from 'src/app/stores/artic/artic.actions';
import { ArticState } from 'src/app/stores/artic/artic.reducer';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {

  faSearch = faSearch
  faReload = faXmark
  isLoading: boolean = false
  isSearch: Observable<boolean> = this.store.select((state) => state.artic.isSearch)
  value: string = ""

  constructor(private store: Store<{ artic: ArticState }>) {
  }

  onSearch() {
    console.log('search: ', this.value)
    this.store.dispatch(searchArtworks({ term: this.value }))
  }

  onReset() {
    console.log('reset')
    this.value = ""
    this.store.dispatch(resetSearch())
  }
}
