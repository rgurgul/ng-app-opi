import { inject, Injectable } from '@angular/core';
import { HttpServiceModel } from '../utils/types';
import { Observable, share } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Api } from '../utils/api';

@Injectable({
  providedIn: 'root'
})
export class ItemsService implements HttpServiceModel {

  http = inject(HttpClient);
  
  fetch(filters?: { [key: string]: any; }): Observable<any> {
    return this.http.get(Api.DATA_ITEMS).pipe(share())
  }
  get(id: number): Observable<any> {
    throw new Error('Method not implemented.');
  }
  add(item: any): Observable<any> {
    throw new Error('Method not implemented.');
  }
  update(item: any): Observable<any> {
    throw new Error('Method not implemented.');
  }
  remove(id: number): Observable<any> {
    throw new Error('Method not implemented.');
  }
}
