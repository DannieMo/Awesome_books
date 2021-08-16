const bookSection = document.querySelector('.books');
const bookTitle = document.getElementById('book-title');
const bookAuthor = document.getElementById('book-author');
const form = document.getElementById('form');

function getBooks() {
  let myBooks;
  if (localStorage.getItem('newBooks') === null) {
    myBooks = [];
  } else {
    myBooks = JSON.parse(localStorage.getItem('newBooks'));
  }
  return myBooks;
}