# map_books_nodejs

# Book.js README

    This is a JavaScript file named `book.js` that demonstrates basic operations on an array of book objects. The file contains an array of books, extracts information from it using the `map` function, and prints the results to the console. Below is an explanation of what the file does and how to use it.

## Table of Contents
    - [Overview](#overview)
    - [Usage](#usage)
    - [Example](#example)

## Overview

    The `book.js` file is a JavaScript program that defines an array called `books`. Each element of this array represents a book and includes the following properties:
    - `title`: The title of the book.
    - `author`: The author of the book.
    - `publicationYear`: The year in which the book was published.

The program then uses the `map` function to create two new arrays:
    - `bookTitles`: This array contains the titles of all the books in the `books` array.
    - `bookAuthor`: This array contains the authors of all the books in the `books` array.

    Finally, the program prints the arrays `bookTitles` and `bookAuthor` to the console, showing the titles and authors of the books in the original `books` array.

## Usage

    You can use the `book.js` file as a reference for working with arrays and the `map` function in JavaScript. Here are the steps to use it:

    1. Open the `book.js` file in a JavaScript environment (such as a web browser console or a Node.js environment).

    2. Examine the code to understand how it creates the `books` array and uses the `map` function to extract book titles and authors.

    3. Execute the code by running the JavaScript file in your chosen environment.

    4. After running the code, you will see the array of book titles and authors printed to the console.

## Example

    Here is an example of the expected output when you run the `book.js` file:

    ```javascript
    // Output
    [
      'The Great Gatsby',
      'To Kill a Mockingbird',
      '1984',
      'The Catcher in the Rye',
      'Pride and Prejudice'
    ] [
     'F. Scott Fitzgerald',
    'Harper Lee',
    'George Orwell',
    'J.D. Salinger',
    'Jane Austen'
    ]
```

The code extracts the titles and authors of the books from the `books` array and prints them to the console in separate arrays.

Feel free to modify the code or use it as a starting point for your own JavaScript projects involving arrays and data manipulation.