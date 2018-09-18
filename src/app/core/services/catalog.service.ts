import { Injectable } from '@angular/core';
import {Book} from '../model/book';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  constructor(private http: HttpClient) { }

  getListBooks(): Observable<Book []> {
    const url = 'https://api.mongolab.com/api/1/databases/sfbooks/collections/sfbooks/?apiKey=d3qvB8ldYFW2KSynHRediqLuBLP8JA8i';
    return this.http.get<Book []>(url);
  }
}
