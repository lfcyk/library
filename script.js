let myLibrary = [];

const container = document.getElementById("library-books")
const addBookModal = document.getElementById("addBookModal");
const modalBackdrop = document.querySelector(".modalBackdrop");
const addBookButton = document.getElementById("addBookButton");
const addBookSubmitButton = document.getElementById("submitButton");

class Book {
	constructor(title, author, pages, read, isDeleted) {
		this.title = title;
		this.author = author;
		this.pages = pages;
		this.read = read;
		this.isDeleted = isDeleted;
	}
}


function addBookToLibrary(title, author, pages, read) {
  let newBook = new Book(title, author, pages, read, false);
  myLibrary.push(newBook);
}

addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, false)
addBookToLibrary("Dune", "Frank Herbert", 896, true)
renderCards();

// render cards
function renderCards() {
	myLibrary.map((book) => {
		if(!book.isDeleted) {
			// create element card
			let card = document.createElement('div');
			card.classList.add("book");
			card.setAttribute('id', "book-" + myLibrary.indexOf(book));

			// create element delete button
			let deleteButton = document.createElement('button');
			deleteButton.classList.add("deleteButton");
			deleteButton.setAttribute('data-book', myLibrary.indexOf(book))
			deleteButton.textContent = "✖";
			
			// create element title
			let title = document.createElement('div');
			title.classList.add("title");
			title.textContent = book.title;
		
			// create element author
			let author = document.createElement('div');
			author.classList.add("author");
			author.textContent = "by " + book.author;
			
			// create element pages
			let pages = document.createElement('div');
			pages.classList.add("pages");
			pages.textContent = book.pages + " pages";
		
			// create element read
			let read = document.createElement('div');
			read.classList.add("read");
			read.textContent = book.read ? "read" : "not yet read";
			
			// append elements to card
			card.appendChild(title);
			card.appendChild(author);
			card.appendChild(pages);
			card.appendChild(read);
			card.appendChild(deleteButton);
		
			// append card to container
			container.appendChild(card)

			// when delete button is clicked
			deleteButton.addEventListener("click", () => {
				let deletedBookIndex = deleteButton.getAttribute("data-book");
				myLibrary[deletedBookIndex].isDeleted = true;
				deleteAllCards();
				renderCards();
			})
		}

		
	})
}

//delete cards to rerender
function deleteAllCards() {
	let cards = document.querySelectorAll(".book");
	cards.forEach((card) => {
		container.removeChild(card);
	})
}


// show modal
addBookButton.addEventListener("click",() => {   
    addBookModal.classList.remove("hidden");
    modalBackdrop.classList.remove("hidden");
})


// hide modal when backdrop clicked
modalBackdrop.addEventListener("click", () => {
	addBookModal.classList.add("hidden");
    modalBackdrop.classList.add("hidden");
})

// when user press submit button
addBookSubmitButton.addEventListener("click", (event) => {

	// get values from forms
	let title = document.getElementById("title").value;
	let author = document.getElementById("author").value;
	let pages = document.getElementById("pages").value;
	let read = document.getElementById("read").checked;
	
	// refuse to submit when title is empty
	if(!title) {
		console.log("no title");
		event.preventDefault();
		return;
	}

	addBookToLibrary(title, author, pages, read);

	//hide modal
	addBookModal.classList.add("hidden");
    modalBackdrop.classList.add("hidden");

	// reset forms values
	document.getElementById("title").value = "";
	document.getElementById("author").value = "";
	document.getElementById("pages").value = "";
	document.getElementById("read").checked = false;

	// delete and rerender all the cards
	deleteAllCards();
	renderCards();

	event.preventDefault();
})




