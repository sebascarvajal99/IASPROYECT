import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../model/book.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SaveBookService {
  private baseURL = "http://localhost:8080/savebooks";
  constructor(private httpClient : HttpClient) { }
  registerBook(book:Book):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,book);
  }
}
