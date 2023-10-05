import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable, of, tap } from 'rxjs';

@Injectable()
export class HttpCacheInterceptor implements HttpInterceptor {
  private cache: Map<string, HttpResponse<any>> = new Map()
  constructor() {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.method !== "GET") {
      return next.handle(req)
    }
    const cachedResponse: HttpResponse<any> | undefined = this.cache.get(req.urlWithParams)
    if (cachedResponse) {
      //Used Cached!
      return of(cachedResponse.clone())
    } else {
      return next.handle(req).pipe(tap<HttpEvent<any>>(stateEvent => {
        if (stateEvent instanceof HttpResponse) {
          //Store on cache
          this.cache.set(req.urlWithParams, stateEvent.clone())
        }
      })
      )
    }
  }
}
