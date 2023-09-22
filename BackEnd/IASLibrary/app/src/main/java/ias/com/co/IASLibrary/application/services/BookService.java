package ias.com.co.IASLibrary.application.services;

import ias.com.co.IASLibrary.domain.models.Book;
import reactor.core.publisher.Mono;

public interface BookService {
    Mono<Book> borrowBook(Integer id);
    Mono<Book> returnBook(Integer id);
}
