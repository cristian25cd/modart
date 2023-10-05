import { Component } from '@angular/core';
import { faArrowsSpin } from '@fortawesome/free-solid-svg-icons';
import { Observable, catchError, map, mergeMap, of, throwError } from 'rxjs';
import { Artwork, ArtworkResponse } from 'src/app/entities/artic.entity';
import { ArticService } from 'src/app/shared/artic.service';

@Component({
  selector: 'app-shuffled',
  templateUrl: './shuffled.component.html',
  styleUrls: ['./shuffled.component.css']
})
export class ShuffledComponent {

  faArrows = faArrowsSpin
  artworks: Artwork[] = []
  seed: number = 10
  min = 0
  max = 10000

  constructor(private articService: ArticService) {

  }

  generate() {
    this.artworks = []
    const ids = this.generateRandoms(this.seed, 10)
    ids.map(i => this.articService.getArtwork(i).pipe(
      mergeMap(({ data }) => {
        console.log(data)
        return of(data)
      }
      ),
      // map(art => {
      //   console.log(art.data)
      //   return art.data
      // }),
    ).subscribe({
      next: (art) => {
        this.artworks.push(art)
      },
      error: (err) => {
        console.log(`Failed ${i}`)
      }
    }))
  }

  generateRandoms(seed: number, n: number): number[] {
    const newSeed = (seed * 9301 + 49297) % 233280;
    const rnd = this.min + (newSeed / 233280) * (this.max - this.min);

    if (n <= 1) {
      return [Math.floor(rnd)]
    }
    return [...this.generateRandoms(Math.floor(rnd), n - 1), Math.floor(rnd)]
  }

}
