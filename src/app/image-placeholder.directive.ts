import { HttpClient } from '@angular/common/http';
import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[imagePlaceholder]',
  host: {
    '[attr.src]': 'finalImage'
  }
})
export class ImagePlaceholderDirective {

  @Input() imagePlaceholder: string = ""
  finalImage: any

  constructor(private el: ElementRef, private http: HttpClient) {

  }

  ngOnInit() {
    this.finalImage = this.imagePlaceholder
    this.http.request('GET', this.el.nativeElement.src, { responseType: 'arraybuffer' }).subscribe({
      complete: () => { },
      next: (buffer) => {
        const blob = new Blob([buffer], { type: 'application/octet-binary' });
        const reader = new FileReader()
        reader.addEventListener('loadend', () => {
          if (reader.result) {
            this.finalImage = reader.result
          }
        })
        reader.readAsDataURL(blob)
      },
      error: (error) => {
        console.log('####### error: ', error)
        this.finalImage = "data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs="
      }
    })
  }

}
