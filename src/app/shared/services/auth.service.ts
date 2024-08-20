import { inject, Injectable } from '@angular/core';
import {
  AuthResDataModel,
  AuthServiceInterface,
  HttpResponseModel,
} from '../utils/types';
import { HttpClient } from '@angular/common/http';
import { Api } from '../utils/api';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService implements AuthServiceInterface {
  http = inject(HttpClient);
  private _access: boolean = false;
  public get access(): boolean {
    return this._access;
  }

  logged(): void {
    throw new Error('Method not implemented.');
  }
  logIn(value: { username: string; password: string }): void {
    this.http
      .post<HttpResponseModel<AuthResDataModel>>(Api.AUTH_LOGIN, value)
      .subscribe((resp) => {
        this._access = true;
        localStorage.setItem('token',resp.data.accessToken);
      });
  }
  logOut(): void {
    this._access = false;
    localStorage.removeItem('token')
  }
}
