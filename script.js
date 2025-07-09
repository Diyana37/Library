const library = new Library();

const titleInput = document.querySelector("#title");
const authorInput = document.querySelector("#author");
const pagesInput = document.querySelector("#pages");
const statusInput = document.querySelector("#is-read");

function Library() {
  if (!new.target) {
    throw new Error("Library must be called with 'new'");
  }

  this.books = [];
}

function Book(title, author, pages, status) {
  if (!new.target) {
    throw new Error("Book must be called with 'new'");
  }

  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
}

function addBookToLibrary(title, author, pages, status) {
  if (!title) {
    alert("Title is required!");
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
}

function renderLibrary() {
  const bookInfoSection = document.querySelector("#book-info-section");

  let child = bookInfoSection.lastElementChild;

  while (child) {
    bookInfoSection.removeChild(child);
    child = bookInfoSection.lastElementChild;
  }

  library.books.forEach((book) => {
    const singleBook = document.createElement("div");
    singleBook.classList.add("single-book");

    const titleSpan = document.createElement("span");
    titleSpan.textContent = book.title;

    const authorSpan = document.createElement("span");
    authorSpan.textContent = book.author;

    const pagesSpan = document.createElement("span");
    pagesSpan.textContent = book.pages;

    const statusSpan = document.createElement("span");
    statusSpan.textContent = book.status ? "Read" : "Unread";

    const removalSpan = document.createElement("span");
    removalSpan.textContent = "removal";

    singleBook.appendChild(titleSpan);
    singleBook.appendChild(authorSpan);
    singleBook.appendChild(pagesSpan);
    singleBook.appendChild(statusSpan);
    singleBook.appendChild(removalSpan);

    bookInfoSection.appendChild(singleBook);
  });
}

function attachEventListenersToButtons() {
  const addBookButton = document.querySelector("#add-book-button");

  addBookButton.addEventListener("click", function (e) {
    addBookToLibrary(
      titleInput.value,
      authorInput.value,
      pagesInput.value,
      statusInput.checked
    );

    renderLibrary();
  });
}

attachEventListenersToButtons();
