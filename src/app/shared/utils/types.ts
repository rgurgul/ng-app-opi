import { Observable } from 'rxjs';

export interface HttpServiceModel {
  fetch(filters?: { [key: string]: any }): Observable<any>;
  get(id: number): Observable<any>;
  add(item: any): Observable<any>;
  update(item: any): Observable<any>;
  remove(id: number): Observable<any>;
}

export interface HttpResponseModel<T> {
  data: T;
  total: number;
  success: string;
  info: string;
  error: string;
}

export interface AuthServiceInterface {
  logged(): void;
  logIn(value: AuthReqDataModel): void;
  logOut(): void;
}

export interface AuthReqDataModel {
  username: string;
  password: string;
}

export interface AuthResDataModel {
  username: string;
  accessToken: string;
}

export interface ItemModel {
  id?: number;
  category: string;
  imgSrc: string;
  price: number;
  title: string;
}

export interface ItemsFiltersModel {
  title?: string;
  priceFrom?: number;
  category?: string;
  currentPage: number;
  itemsPerPage: number;
}

export type ItemKeys = 'title' | 'price' | 'imgSrc' | 'category';
export type WorkersKeys = 'name' | 'phone' | 'category';

export interface DataGridRowConfig<T> {
  key?: T;
  type?: FieldTypes;
  header?: string;
  disabled?: boolean;
}

export enum FieldTypes {
  INPUT = 'input',
  IMAGE = 'img',
  BUTTON = 'button',
}

export type ActionTypes = 'add' | 'remove' | 'update' | 'more';

export interface GridAction {
  type: ActionTypes;
  data: any;
}

export type WorkerKeys = 'name' | 'phone' | 'category';

export interface WorkerModel {
  id: string;
  name: string;
  phone: number;
  category: string;
}
