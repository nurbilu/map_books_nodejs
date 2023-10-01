// Create an array of books
const books = [
  {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      publicationYear: 1925
  },
  {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      publicationYear: 1960
  },
  {
      title: "1984",
      author: "George Orwell",
      publicationYear: 1949
  },
  {
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      publicationYear: 1951
  },
  {
      title: "Pride and Prejudice",
      author: "Jane Austen",
      publicationYear: 1813
  }
];

// Use the map function to create a new array of book titles
const bookTitles = books.map(book => book.title);
const bookAuthor = books.map(book => book.author);

// Print the array of book titles
console.log(bookTitles , bookAuthor);
