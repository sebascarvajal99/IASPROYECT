package ias.com.co.IASLibrary.application.services;

import ias.com.co.IASLibrary.domain.models.Book;
import ias.com.co.IASLibrary.infraestructure.driver_adapters.postgresr2dbc.BookRepository;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import reactor.core.publisher.Mono;
import reactor.test.StepVerifier;

import static org.junit.jupiter.api.Assertions.*;

class BookServiceImplTest {

    @Test
    void borrowBookSuccess() {
        BookRepository bookRepository = Mockito.mock(BookRepository.class);
        BookServiceImpl bookService = new BookServiceImpl(bookRepository);
        Book book = Book.builder()
                .name("Aprende JAVA")
                .ISBN("IASLIBRARY2022")
                .borrowed(false)
                .build();
        Mockito.when(bookRepository.findById("1")).thenReturn(Mono.just(book));
        Mockito.when(bookRepository.save(book)).thenReturn(Mono.just(book));
        Mono<Book> resultMono = bookService.borrowBook(1);
        StepVerifier.create(resultMono)
                .expectNextMatches(updatedBook -> updatedBook.isBorrowed())
                .verifyComplete();
    }
    @Test
    void BookAlreadyBorrowed() {

        BookRepository bookRepository = Mockito.mock(BookRepository.class);
        BookServiceImpl bookService = new BookServiceImpl(bookRepository);
        Book book = Book.builder()
                .name("Aprende JAVA")
                .ISBN("IASLIBRARY2022")
                .borrowed(true)
                .build();

        Mockito.when(bookRepository.findById("1")).thenReturn(Mono.just(book));
        Mono<Book> resultMono = bookService.borrowBook(1);
        StepVerifier.create(resultMono)
                .expectError(RuntimeException.class)
                .verify();
    }

    @Test
    void returnBookSuccess() {
        // Arrange
        BookRepository bookRepository = Mockito.mock(BookRepository.class);
        BookServiceImpl bookService = new BookServiceImpl(bookRepository);
        Book book = Book.builder()
                .name("Aprende JAVA")
                .ISBN("IASLIBRARY2022")
                .borrowed(true)
                .build();

        Mockito.when(bookRepository.findById("1")).thenReturn(Mono.just(book));
        Mockito.when(bookRepository.save(book)).thenReturn(Mono.just(book));
        Mono<Book> resultMono = bookService.returnBook(1);
        StepVerifier.create(resultMono)
                .expectNextMatches(updatedBook -> !updatedBook.isBorrowed())
                .verifyComplete();
    }
    @Test
    void returnBookNotBorrowed() {
        // Arrange
        BookRepository bookRepository = Mockito.mock(BookRepository.class);
        BookServiceImpl bookService = new BookServiceImpl(bookRepository);
        Book book = Book.builder()
                .name("Aprende JAVA")
                .ISBN("IASLIBRARY2022")
                .borrowed(false)
                .build();

        Mockito.when(bookRepository.findById("1")).thenReturn(Mono.just(book));
        Mono<Book> resultMono = bookService.returnBook(1);
        StepVerifier.create(resultMono)
                .expectNextCount(0)
                .verifyComplete();
    }
}