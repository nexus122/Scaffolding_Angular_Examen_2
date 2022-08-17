import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export abstract class GenericCallsService<T> {
  private readonly APiURL = environment.marvelURL;
  constructor(protected http: HttpClient) {}

  get(route: string, param: string): Observable<T> {
    return this.http.get<T>(`${this.APiURL}${route}${param}`);
  }
}
