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

function removeBookFromLibrary(title) {
  library.books = library.books.filter((book) => book.title !== title);
}

function deleteAllBooksFromLibrary() {
  library.books = [];
}

function changeBookStatus(title) {
  library.books.forEach((book) => {
    if (book.title === title) {
      if (book.status) {
        book.status = false;
      } else {
        book.status = true;
      }
    }
  });
}

function renderLibrary() {
  const bookInfoSection = document.querySelector("#book-info-section");

  let child = bookInfoSection.lastElementChild;

  while (child) {
    bookInfoSection.removeChild(child);
    child = bookInfoSection.lastElementChild;
  }

  library.books.forEach((book) => {
    const singleBook = document.createElement("tr");
    singleBook.classList.add("single-book");
    singleBook.classList.add("text-center");

    const titleSpan = document.createElement("td");
    titleSpan.textContent = book.title;

    const authorSpan = document.createElement("td");
    authorSpan.textContent = book.author;

    const pagesSpan = document.createElement("td");
    pagesSpan.textContent = book.pages;

    const statusSpan = document.createElement("td");
    // statusSpan.textContent = book.status ? "Read" : "Unread";

    const statusButton = document.createElement("button");
    statusButton.setAttribute("id", book.title);

    const unreadStatusIconHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-journal-x" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M6.146 6.146a.5.5 0 0 1 .708 0L8 7.293l1.146-1.147a.5.5 0 1 1 .708.708L8.707 8l1.147 1.146a.5.5 0 0 1-.708.708L8 8.707 6.854 9.854a.5.5 0 0 1-.708-.708L7.293 8 6.146 6.854a.5.5 0 0 1 0-.708"/>
      <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2"/>
      <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1z"/>
      </svg>`;

    const readStatusIconHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-journal-check" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M10.854 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 8.793l2.646-2.647a.5.5 0 0 1 .708 0"/>
      <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2"/>
      <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1z"/>
      </svg>`;

    if (book.status) {
      statusButton.classList.add("btn", "btn-success", "status");
      statusButton.insertAdjacentHTML("beforeend", readStatusIconHTML);
    } else {
      statusButton.classList.add("btn", "btn-danger", "status");
      statusButton.insertAdjacentHTML("beforeend", unreadStatusIconHTML);
    }

    statusSpan.appendChild(statusButton);

    const removalSpan = document.createElement("td");

    const removalButton = document.createElement("button");
    removalButton.classList.add("btn", "btn-danger", "removal");
    removalButton.setAttribute("id", book.title);

    const deleteIconHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
      <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
      </svg>`;

    removalButton.insertAdjacentHTML("beforeend", deleteIconHTML);

    removalSpan.appendChild(removalButton);

    singleBook.appendChild(titleSpan);
    singleBook.appendChild(authorSpan);
    singleBook.appendChild(pagesSpan);
    singleBook.appendChild(statusSpan);
    singleBook.appendChild(removalSpan);

    bookInfoSection.appendChild(singleBook);
  });

  const removeSingleBookButtons = Array.from(
    document.querySelectorAll(".removal")
  );

  removeSingleBookButtons.forEach((removeSingleBookButton) => {
    removeSingleBookButton.addEventListener("click", function (e) {
      removeBookFromLibrary(e.currentTarget.getAttribute("id"));

      renderLibrary();
    });
  });

  const changeBookStatusButton = Array.from(
    document.querySelectorAll(".status")
  );

  changeBookStatusButton.forEach((changeBookStatusButton) => {
    changeBookStatusButton.addEventListener("click", function (e) {
      changeBookStatus(e.currentTarget.getAttribute("id"));

      renderLibrary();
    });
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

  const deleteAllButton = document.querySelector("#delete-all-button");
  deleteAllButton.addEventListener("click", function (e) {
    deleteAllBooksFromLibrary();

    renderLibrary();
  });
}

attachEventListenersToButtons();
