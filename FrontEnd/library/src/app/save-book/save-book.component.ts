import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Book } from '../model/book.model';
import { SaveBookService } from '../services/save-book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-save-book',
  templateUrl: './save-book.component.html',
  styleUrls: ['./save-book.component.css']
})
export class SaveBookComponent implements OnInit {
  book:Book;
  constructor(private serviceSave: SaveBookService, private router:Router){}
  nameBook:string;
  isbnBook:string;
  borrowed:boolean;
  id:number;
  saveBook(){
    if (!this.nameBook || !this.isbnBook) {
      alert('El campo "Título del Libro" e "ISBN" son requeridos.');
      return;
    }
    let localBook = new Book(this.nameBook,this.id,this.borrowed,this.isbnBook);
    this.serviceSave.registerBook(localBook).subscribe(dato =>{
      this.redirecToListBooks();
    }, error => alert(` Error al guardar el Libro -> ${localBook.name} porque el ISBN ${localBook.isbn} esta Repetido`));
  }

  redirecToListBooks(){
    this.router.navigate(['libraryRepository']);
  }
  ngOnInit(): void {
    
  }

}
