import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export abstract class GenericCallsService<T> {
  private readonly APiURL = environment.marvelURL + this.getResourceUrl();
  constructor(protected http: HttpClient) {}
  abstract getResourceUrl(): string;
  get(param: string): Observable<T> {
    return this.http.get<T>(`${this.APiURL}${param}`);
  }
}
