
function Book(title, author, pages, read=false){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function Library() {
    this.books = []; 
    
    
    this.addBook = function(book) {
        this.books.push(book);
        this.displayBooks();
    };

    
    this.removeBook = function(title) {
        this.books = this.books.filter(book => book.title !== title);
        this.displayBooks();
    };

   
    this.displayBooks = function() {
        const bookList = document.getElementById('bookList');
        bookList.innerHTML = ''; 

        this.books.forEach(book => {
            const bookDiv = document.createElement('div');
            bookDiv.classList.add('book');

            const bookTitle = document.createElement('h2');
            bookTitle.textContent = book.title;
            bookDiv.appendChild(bookTitle);

            const bookAuthor = document.createElement('p');
            bookAuthor.textContent = `Author: ${book.author}`;
            bookDiv.appendChild(bookAuthor);

            const bookPages = document.createElement('p');
            bookPages.textContent = `Pages: ${book.pages}`;
            bookDiv.appendChild(bookPages);

            const readBtn = document.createElement('button');
            readBtn.textContent = book.read ? 'Read' : 'Not Read';
            readBtn.addEventListener('click', () => {
                book.read = !book.read;
                readBtn.textContent = book.read ? 'Read' : 'Not Read';
            });
            bookDiv.appendChild(readBtn);

            const removeBtn = document.createElement('button');
            removeBtn.textContent = 'Remove';
            removeBtn.addEventListener('click', () => {
                this.removeBook(book.title);
            });
            bookDiv.appendChild(removeBtn);

            bookList.appendChild(bookDiv);
        });
    };
}


const myLibrary = new Library();

// Initial books added to the library
const book1 = new Book("The Hobbit", "J.R.R. Tolkien", 295); 
const book2 = new Book("To Kill a Mockingbird", "Harper Lee", 281, true); 

myLibrary.addBook(book1);
myLibrary.addBook(book2);

// Toggle form visibility
const toggleFormBtn = document.getElementById('toggleFormBtn');
const formPopup = document.getElementById('formPopup');

toggleFormBtn.addEventListener('click', () => {
    formPopup.style.display = 'block';
});

// Close the form popup
const cancelBtn = document.getElementById('cancelBtn');
const closeBtn = document.getElementsByClassName('close')[0];

cancelBtn.addEventListener('click', () => {
    formPopup.style.display = 'none';
});

closeBtn.addEventListener('click', () => {
    formPopup.style.display = 'none';
});

// Adding book to the library
const bookFormSubmit = document.getElementById('bookForm');

bookFormSubmit.addEventListener('submit', (e) => {
    e.preventDefault();

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = parseInt(document.getElementById('pages').value);
    const read = document.getElementById('read').checked;

    const newBook = new Book(title, author, pages, read);
    myLibrary.addBook(newBook);

    bookFormSubmit.reset();
    formPopup.style.display = 'none';
});