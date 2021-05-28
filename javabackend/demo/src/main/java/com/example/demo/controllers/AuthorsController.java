package com.example.demo.controllers;

import com.example.demo.models.Author;
import com.example.demo.models.Book;
import com.example.demo.repositories.AuthorsRepository;
import com.example.demo.repositories.BooksRepository;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
@RequestMapping("/Authors")
public class AuthorsController extends CrudController<Author, AuthorsRepository> {
    private final BooksRepository booksRepository;

    AuthorsController(AuthorsRepository repository, BooksRepository booksRepository) {
        super(repository);
        this.booksRepository = booksRepository;
    }

    @PostMapping("/{authorId}/books")
    public Book add(@RequestBody Book newBook, @PathVariable Long authorId) {
        newBook.setAuthor(this.repository.findById(authorId).get());
        return this.booksRepository.save(newBook);
    }

}
