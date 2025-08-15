import { Library, Book } from "./classes.js";
import {
  titleInput,
  authorInput,
  pagesInput,
  statusInput,
  library
} from "./constants.js";
;

export function addBookToLibrary(title, author, pages, status) {
  if (!title) {
    alert("Title is required!");
    return;
  }

  if (library.books.find((book) => book.title === title)) {
    alert("Title should be unique!");
    return;
  }

  if (!author) {
    alert("Author is required!");
    return;
  }

  if (!pages) {
    alert("Pages are required!");
    return;
  }

  const book = new Book(title, author, pages, status);
  library.books.push(book);

  titleInput.value = "";
  authorInput.value = "";
  pagesInput.value = "";
  statusInput.checked = false;
}

export function removeBookFromLibrary(title) {
  library.books = library.books.filter((book) => book.title !== title);
}

export function deleteAllBooksFromLibrary() {
  library.books = [];
}

export function changeBookStatus(title) {
  library.books.forEach((book) => {
    if (book.title === title) {
      book.status = !book.status;
    }
  });
}

export function getStatistics() {
  let readBooks = library.books.filter((book) => book.status === true).length;
  let unreadBooks = library.books.filter(
    (book) => book.status === false
  ).length;
  let allBooks = library.books.length;

  return { readBooks, unreadBooks, allBooks };
}
