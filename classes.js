export class Library {
  constructor() {
    this.books = [];
  }

  get books() {
    return this._books;
  }

  set books(value) {
    this._books = value;
  }
}

export class Book {
  constructor(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
  }

  get title() {
    return this._title;
  }

  set title(value) {
    this._title = value;
  }

  get author() {
    return this._author;
  }

  set author(value) {
    this._author = value;
  }

  get pages() {
    return this._pages;
  }

  set pages(value) {
    this._pages = value;
  }

  get status() {
    return this._status;
  }

  set status(value) {
    this._status = value;
  }
}
