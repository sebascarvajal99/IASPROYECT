import { Component, OnInit } from '@angular/core';
import { Book } from '../model/book.model';
import { BookRepositoryService } from '../services/book-repository.service';
import { BorrowBookService } from '../services/borrow-book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit{
  buttonDisabled: boolean = false;
  ngOnInit(): void {
    this.getBooksBd();
  }
  constructor(
    private bookServiceList: BookRepositoryService,
    private bookBorrowe: BorrowBookService){}

  book:Book[];
bookCreated(book:Book){
    this.book.push(book);
}
private getBooksBd(){
  this.bookServiceList.getBookList().subscribe(books =>{
    this.book = books;
    console.log(books);
    
  });
}
request(libro:Book){
  alert(`Solicitaste el libro -> ${libro.name}, Recuerda presionar el BOTON Devolver para devolver el libro y asi volver a solicitarlo`);
  const bookId = libro.id;
    this.bookBorrowe.borrowBook(bookId).subscribe(
      () => {
        alert(`Se te prestó el Libro -> ${libro.name} con ISBN: ${libro.isbn}`);
        this.buttonDisabled = false;
      },
      (error) => {
        alert(`Ocurrió un error al solicitar el libro -> ${libro.name}, No esta Disponible `);
        this.buttonDisabled = false;
      }
    );
}
returnBook(libro:Book){
  const bookId = libro.id;
  this.bookBorrowe.returnBook(bookId).subscribe(
    () => {
      alert(`Devolviste el Libro -> ${libro.name}, Con Éxito`);
      this.buttonDisabled = false;
    },
    (error) => {
      alert(`Ocurrió un error al devolver el libro -> ${libro.name}, ya que se encuentra en Biblioteca`);
      this.buttonDisabled = false;
    }
  );
}
}
