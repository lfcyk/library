let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
  let newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
}

addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, false)
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, false)
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, false)
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, false)
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, false)
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, false)
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, false)
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, false)


myLibrary.map((book) => {
    const container = document.getElementById("library-books")

    let card = document.createElement('div');
    card.classList.add("book");

    let title = document.createElement('div');
    title.classList.add("title");
    title.textContent = book.title;

    let author = document.createElement('div');
    author.classList.add("author");
    author.textContent = "by " + book.author;

    let pages = document.createElement('div');
    pages.classList.add("pages");
    pages.textContent = book.pages + " pages";

    let read = document.createElement('div');
    read.classList.add("read");
    read.textContent = book.read ? "read" : "not yet read";
    
    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(pages);
    card.appendChild(read);
    
    container.appendChild(card)
})

const addBookButton = document.getElementById("addBookButton");
addBookButton.addEventListener("click",() => {
    const addBookModal = document.getElementById("addBookModal");
    const modalBackdrop = document.querySelector(".modalBackdrop");
    addBookModal.classList.remove("hidden");
    modalBackdrop.classList.remove("hidden");
})