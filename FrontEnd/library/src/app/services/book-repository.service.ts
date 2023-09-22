import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http' 
import { Book } from '../model/book.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BookRepositoryService {

  private baseURL = "http://localhost:8080/books";

  constructor(private httpClient : HttpClient) { }
  getBookList():Observable<Book[]>{
    return this.httpClient.get<Book[]>(`${this.baseURL}`);
  }
  
}
