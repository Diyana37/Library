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
    statusSpan.textContent = book.status ? "Read" : "Unread";

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
