import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../model/book.model';

@Injectable({
  providedIn: 'root'
})
export class BorrowBookService {
  private baseUrl = 'http://localhost:8080';
  constructor(private http:HttpClient) { }

  borrowBook(bookId:number) : Observable<Book>{
    return this.http.post<Book>(`${this.baseUrl}/${bookId}/borrow`, {});
  }
  returnBook(bookId: number): Observable<any> {
    const url = `${this.baseUrl}/${bookId}/return`;
    return this.http.post(url, {});
  }

}
