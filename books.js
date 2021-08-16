const bookSection = document.querySelector('.books');
const bookTitle = document.getElementById('book-title');
const bookAuthor = document.getElementById('book-author');
const form = document.getElementById('form');

const getBooks = () => {
  let myBooks;
  if (localStorage.getItem('newBooks') === null) {
    myBooks = [];
  } else {
    myBooks = JSON.parse(localStorage.getItem('newBooks'));
  }
  return myBooks;
};

const showBooks = () => {
  bookSection.innerHTML = '';
  const myBooks = getBooks();
  for (let i = 0; i < myBooks.length; i += 1) {
    const book = myBooks[i];
    const bookList = `
    <div id="book-info">
    <p>${book.title}</p>
    <p>${book.author}</p>
    <button id=${i} type="submit" class="remove-book" onclick="removeBook(this.id)">Remove</button>
    <hr> 
    </div>
    `;
    bookSection.innerHTML += bookList;
  }
};

const clearInput = () => {
  bookTitle.value = '';
  bookAuthor.value = '';
};

const setLocalStorage = (item) => {
  const books = getBooks();
  books.push(item);

  localStorage.setItem('newBooks', JSON.stringify(books));
};

const addBookToList = (e) => {
  e.preventDefault();
  if (bookTitle.value === '' && bookAuthor.value === '') {
    return;
  }
  const newBook = {
    title: bookTitle.value,
    author: bookAuthor.value,
  };
  clearInput();
  setLocalStorage(newBook);
  showBooks();
};

// Remove book from localStorage
/* eslint-disable no-unused-vars */
const removeBook = (id) => {
  const myBooks = getBooks();
  myBooks.splice(id, 1);
  localStorage.setItem('newBooks', JSON.stringify(myBooks));
  showBooks();
};

form.addEventListener('submit', addBookToList);

showBooks();
