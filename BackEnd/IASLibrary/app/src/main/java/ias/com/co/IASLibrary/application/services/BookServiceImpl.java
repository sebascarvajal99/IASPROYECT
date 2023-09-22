package ias.com.co.IASLibrary.application.services;

import ias.com.co.IASLibrary.domain.models.Book;
import ias.com.co.IASLibrary.infraestructure.driver_adapters.postgresr2dbc.BookRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Mono;
@Service
@AllArgsConstructor
public class BookServiceImpl implements BookService{
    private final BookRepository bookRepository;
    @Override
    public Mono<Book> borrowBook(Integer id) {
        return bookRepository.findById(String.valueOf(id))
                .flatMap(book ->{
                    if (!book.isBorrowed()) {
                        book.setBorrowed(true);
                        return bookRepository.save(book);
                    } else {
                        return Mono.error(new RuntimeException("El libro ya está prestado"));
                    }
                });
    }
    @Override
    public Mono<Book> returnBook(Integer id) {
        return bookRepository.findById(String.valueOf(id))
                .flatMap(book -> {
                    if (book.isBorrowed()) {
                        book.setBorrowed(false);
                        return bookRepository.save(book);
                    } else {
                        return Mono.empty();
                    }
                });
    }
}
