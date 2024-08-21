import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoreService {
  httpActive = signal(false);

  constructor() { }
}
