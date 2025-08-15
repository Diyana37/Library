import { renderLibrary } from "./books-view.js";
import { addBookToLibrary, deleteAllBooksFromLibrary } from "./books-service.js";
import { titleInput, authorInput, pagesInput, statusInput } from "./constants.js";

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
renderLibrary();
