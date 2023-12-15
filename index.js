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


// Executes once the Form is submitted
const FORM = document.querySelector(`form`);
FORM.addEventListener('submit', function(e) {
    e.preventDefault();
    addBookToMyLibrary();
});

//Feature to Add a Book to the Library
function addBookToMyLibrary() {
    
    titleValue = document.querySelector(`#title`).value;
    authorValue = document.querySelector(`#author`).value;
    pagesValue = document.querySelector(`#pages`).value;

    getRadioValue();

    createCardElement();
    
    myLibrary.push(new Book(titleValue, authorValue, pagesValue, readValue));

    document.querySelector(`form`).reset();

    closeModal();
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

    // This will Create Card Element in the Main Container
    function createCardElement() {

        const MAINCONTAINER = document.querySelector(`.main.container`);

            const CARD = document.createElement(`div`);
            CARD.className = `card`;

                const BOOKTITLEDIV = document.createElement(`div`);
                BOOKTITLEDIV.className = `book-title`;
                BOOKTITLEDIV.innerText = `${titleValue}`;

                const BOOKAUTHORDIV = document.createElement(`div`);
                BOOKAUTHORDIV.className = `book-author`;
                BOOKAUTHORDIV.innerText = `${authorValue}`;

                const BOOKPAGESDIV = document.createElement(`div`);
                BOOKPAGESDIV.className = `book-pages`;
                BOOKPAGESDIV.innerText = `${pagesValue}`;

                const BOOKSTATUSDIV = document.createElement(`div`);
                BOOKSTATUSDIV.className = `book-status`;

                    const TOGGLEBUTTON = document.createElement(`button`);
                    TOGGLEBUTTON.className = `read-status`;
                    TOGGLEBUTTON.textContent = `${readValue}`;

                    if (readValue === `Read`) {
                        TOGGLEBUTTON.style.background = `#06BCC1`;
                    } else {
                        TOGGLEBUTTON.style.background = `#D282A6`;
                    }
                
                BOOKSTATUSDIV.appendChild(TOGGLEBUTTON);

                const REMOVEBOOKDIV = document.createElement(`div`);
                REMOVEBOOKDIV.className = `remove-book`;

                    const REMOVEBOOKICON = document.createElement(`span`);
                    REMOVEBOOKICON.classList = `mdi mdi-book-remove`;

                REMOVEBOOKDIV.appendChild(REMOVEBOOKICON);

            CARD.append(BOOKTITLEDIV,BOOKAUTHORDIV,BOOKPAGESDIV,BOOKSTATUSDIV,REMOVEBOOKDIV);

        MAINCONTAINER.appendChild(CARD);

        // Feature to remove the Book in the Main Container Display and myLibrary Array
        REMOVEBOOKDIV.addEventListener('click', function(e) {

            const cardArray = e.target.parentNode.parentNode.parentNode.children;
            const index = Array.from(cardArray).indexOf(CARD);

            MAINCONTAINER.removeChild(CARD);
            myLibrary.splice(index,1);
        });

        // Feature to update the Read Status in the Main Container Display and myLibrary Array
        TOGGLEBUTTON.addEventListener('click', function(e) {

            const cardArray = e.target.parentNode.parentNode.parentNode.children;
            const index = Array.from(cardArray).indexOf(CARD);

            if (e.target.textContent === `Read`) {
                TOGGLEBUTTON.textContent = `Not Read`;
                myLibrary[index].read = `Not Read`;
                TOGGLEBUTTON.style.background = `#D282A6`;
            } else {
                TOGGLEBUTTON.textContent = `Read`;
                myLibrary[index].read = `Read`;
                TOGGLEBUTTON.style.background = `#06BCC1`;
            }
            
        });

    }


// Feature to make the Modal Open and Close
const MODAL = document.querySelector('.modal');

    // Open Modal
    const OPENBUTTON = document.querySelector('.openButton');
    OPENBUTTON.addEventListener('click', function() {
        MODAL.style.scale = `1`;
    });

    // Close Modal
    const CLOSEBUTTON = document.querySelector('.closeButton');
    CLOSEBUTTON.addEventListener('click', closeModal);

    function closeModal() {

        titleValue = ``;
        authorValue = ``;
        pagesValue = ``;
        readValue = ``;

        document.querySelector(`form`).reset();

        MODAL.style.scale = `0`;
    }