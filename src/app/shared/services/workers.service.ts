import { Injectable } from '@angular/core';
import { HttpServiceModel } from '../utils/types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorkersService implements HttpServiceModel {

  constructor() { }
  fetch(filters?: { [key: string]: any; }): Observable<any> {
    throw new Error('Method not implemented.');
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
