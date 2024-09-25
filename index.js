class Book {
    constructor(title, author, year, genre) {
      this.title = title;
      this.author = author;
      this.year = year;
      this.genre = genre;
    }
  
    // Method to return book information as a string
    getBookInfo() {
      return `${this.title} by ${this.author}, published in ${this.year}, Genre: ${this.genre}`;
    }
  }
  class Library {
    constructor() {
      // Initialize an empty array to hold the book collection
      this.books = [];
    }
  
    // Method to add a book to the collection
    addBook(book) {
      this.books.push(book);
    }
  
    // Method to filter books published after a certain year
    filterBooksAfterYear(year) {
      return this.books.filter(book => book.year > year);
    }
  
    // Method to return an array of all book titles
    getAllBookTitles() {
      return this.books.map(book => book.title);
    }
  
    // Method to calculate the total number of books
    getTotalBooks() {
      return this.books.reduce((total, book) => total + 1, 0);
    }
  
    // Method to calculate the average publication year of all books
    getAveragePublicationYear() {
      if (this.books.length === 0) return 0; // Avoid division by 0
      const totalYears = this.books.reduce((sum, book) => sum + book.year, 0);
      return totalYears / this.books.length;
    }
  }
  function createBook(title, author, year, genre) {
    return new Book(title, author, year, genre);
  }
 // Create a new Library instance
const library = new Library();

// Add books using the factory function
library.addBook(createBook("The Great Gatsby", "F. Scott Fitzgerald", 1925, "Fiction"));
library.addBook(createBook("1984", "George Orwell", 1949, "Dystopian"));
library.addBook(createBook("To Kill a Mockingbird", "Harper Lee", 1960, "Fiction"));
library.addBook(createBook("The Road", "Cormac McCarthy", 2006, "Post-apocalyptic"));

// Display all books' information
library.books.forEach(book => console.log(book.getBookInfo()));

// ---- Filter books published after 1950
const filteredBooks = library.filterBooksAfterYear(1950);
console.log("Books published after 1950:");
filteredBooks.forEach(book => console.log(book.getBookInfo()));

// ---- Get an array of all book titles
const bookTitles = library.getAllBookTitles();
console.log("All book titles:", bookTitles);

// ---- Calculate the total number of books
const totalBooks = library.getTotalBooks();
console.log("Total number of books:", totalBooks);

// ---- Calculate the average publication year of all books
const averagePublicationYear = library.getAveragePublicationYear();
console.log("Average publication year:", averagePublicationYear);
 