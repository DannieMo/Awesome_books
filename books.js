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

function showBooks() {
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
}


function clearInput() {
  bookTitle.value = '';
  bookAuthor.value = '';
}