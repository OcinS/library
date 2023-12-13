const myLibrary = [];

function Book (title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
};




let readValue = document.getElementsByName(`#title`);

let buttonAddBook = document.querySelector(`#addBookButton`);

buttonAddBook.addEventListener(`click`, addBookToMyLibrary())


function addBookToMyLibrary() {

    let titleValue = document.querySelector(`#title`).value;
    let authorValue = document.querySelector(`#author`).value;
    let pagesValue = document.querySelector(`#pages`).value;

    myLibrary.push(new Book(titleValue, authorValue, pagesValue, readValue));

};