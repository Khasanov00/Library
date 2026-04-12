let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBooktoLibrary(book) {
  myLibrary.push(book);
}


const submitBtn = document.querySelector("#submit");

const titleInput = document.querySelector("#title");
const authorInput = document.querySelector("#author");
const pagesInput = document.querySelector("#pages");
const readInput = document.querySelector("#read");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault(); // important if inside form

  const title = titleInput.value;
  const author = authorInput.value;
  const pages = Number(pagesInput.value);
  const read = readInput.checked; // better for checkbox

  const newBook = new Book(title, author, pages, read);

  addBooktoLibrary(newBook);

  console.log(myLibrary);


  displayBooks();
});


function displayBooks(){
  const container=document.querySelector("#container");
container.innerHTML=" ";
  myLibrary.forEach((book) =>{
    const bookdiv=document.createElement("div");
bookdiv.classList.add("booksCont");
bookdiv.textContent=
`${book.title} by ${book.author}, ${book.pages} pages`
container.appendChild(bookdiv);
  });
  
} ;