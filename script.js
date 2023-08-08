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
addBookToLibrary("Dune", "Frank Herbert", 896, true)

const container = document.getElementById("library-books")

myLibrary.map((book) => {
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

const addBookModal = document.getElementById("addBookModal");
const modalBackdrop = document.querySelector(".modalBackdrop");
const addBookButton = document.getElementById("addBookButton");
const addBookSubmitButton = document.getElementById("submitButton");

addBookButton.addEventListener("click",() => {   
    addBookModal.classList.remove("hidden");
    modalBackdrop.classList.remove("hidden");
})


modalBackdrop.addEventListener("click", () => {
	addBookModal.classList.add("hidden");
    modalBackdrop.classList.add("hidden");
})

addBookSubmitButton.addEventListener("click", (event) => {
	let title = document.getElementById("title").value;
	let author = document.getElementById("author").value;
	let pages = document.getElementById("pages").value;
	let read = document.getElementById("read").checked;
	
	addBookToLibrary(title, author, pages, read);
	addCard(title, author, pages, read)

	addBookModal.classList.add("hidden");
    modalBackdrop.classList.add("hidden");
	document.getElementById("title").value = "";
	document.getElementById("author").value = "";
	document.getElementById("pages").value = "";
	// document.getElementById("read").value = false;

	event.preventDefault();
})

function addCard(NewBookTitle, NewBookAuthor, NewBookPages, NewBookRead) {
    let card = document.createElement('div');
    card.classList.add("book");

    let title = document.createElement('div');
    title.classList.add("title");
    title.textContent = NewBookTitle;

    let author = document.createElement('div');
    author.classList.add("author");
    author.textContent = "by " + NewBookAuthor;

    let pages = document.createElement('div');
    pages.classList.add("pages");
    pages.textContent = NewBookPages + " pages";

    let read = document.createElement('div');
    read.classList.add("read");
    read.textContent = NewBookRead? "read" : "not yet read";
    
    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(pages);
    card.appendChild(read);
    
    container.appendChild(card)
}