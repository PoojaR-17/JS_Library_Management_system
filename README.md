# JS_Library_Management_system
This Library Management System is a JavaScript project that manages a collection of books
This Library Management System is a JavaScript project that manages a collection of books. It allows users to add new books, filter books based on certain criteria, and perform statistical calculations like the total number of books and the average publication year. The system uses ES6 Classes for defining Book and Library classes and implements various methods to work with the book collection.

Features
Add Books: Add new books to the library collection using a factory function.
Filter Books: Filter books published after a certain year.
Get Book Titles: Get a list of all book titles in the library.
Total Books: Calculate the total number of books in the library.
Average Publication Year: Calculate the average publication year of all books in the collection.
Project Structure
Book Class: Manages individual book data (title, author, year, genre).
Library Class: Manages the collection of books and includes methods for various operations.
Factory Function: Simplifies the creation of new books.
Classes and Methods
1. Book Class
The Book class represents individual books in the library.

Properties:
title: Title of the book.
author: Author of the book.
year: Year of publication.
genre: Genre of the book.
Methods:
getBookInfo(): Returns the book's information as a string.
2. Library Class
The Library class manages the collection of books.

Properties:
books: An array that stores the book collection.
Methods:
addBook(book): Adds a book to the library's collection.
filterBooksAfterYear(year): Filters books published after the specified year.
getAllBookTitles(): Returns an array of all book titles.
getTotalBooks(): Calculates the total number of books in the library.
getAveragePublicationYear(): Calculates the average publication year of the books.
3. Factory Function
createBook(title, author, year, genre): Creates and returns a new Book instance.
Methods Explanation
addBook(book): Adds a book to the library.
filterBooksAfterYear(year): Filters and returns an array of books published after the given year.
getAllBookTitles(): Returns an array containing the titles of all books in the library.
getTotalBooks(): Returns the total count of books in the library using the reduce() method.
getAveragePublicationYear(): Calculates the average year of publication for all books using the reduce() method.
