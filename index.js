const myLibrary = [];


// Book Object Contructor
function Book (title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
};


// Interchangeable Variables
let titleValue = ``;
let authorValue = ``;
let pagesValue = ``;
let readValue = ``;


// Feature to Add a Book to the Library
const buttonAddBook = document.querySelector(`#addBookButton`);
buttonAddBook.addEventListener(`click`, addBookToMyLibrary)

function addBookToMyLibrary() {
    
    titleValue = document.querySelector(`#title`).value;
    authorValue = document.querySelector(`#author`).value;
    pagesValue = document.querySelector(`#pages`).value;
    getRadioValue();
    
    myLibrary.push(new Book(titleValue, authorValue, pagesValue, readValue));

    document.querySelector(`form`).reset();

};

    // This will get the Value of the Radio Buttons: Yes or No
    function getRadioValue() {
        let radioValue = document.getElementsByName(`read-status`);
        for (let i = 0; i < radioValue.length; i++) {
            if (radioValue[i].checked) {
                readValue = radioValue[i].value;
            }
        }
    }


// Feature to make the Modal Open and Close
const modal = document.querySelector('.modal');

    // Open Modal
    const openButton = document.querySelector('.openButton');
    openButton.addEventListener('click', function() {
        modal.style.scale = `1`;
    });

    // Close Modal
    const closeButton = document.querySelector('.closeButton');
    closeButton.addEventListener('click', closeModal);

    function closeModal() {

        titleValue = ``;
        authorValue = ``;
        pagesValue = ``;
        readValue = ``;

        modal.style.scale = `0`;
    }

