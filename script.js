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
  e.preventDefault();

  const title = titleInput.value;
  const author = authorInput.value;
  const pages = Number(pagesInput.value);
  const read = readInput.checked;

  const newBook = new Book(title, author, pages, read);

  addBooktoLibrary(newBook);

  console.log(myLibrary);

  displayBooks();
});

function displayBooks() {
  const container = document.querySelector("#container");

  container.innerHTML = "";

  myLibrary.forEach((book, index) => {
    const bookdiv = document.createElement("div");

    bookdiv.classList.add("booksCont");

    bookdiv.textContent =
      `"${book.title}" by ${book.author}, ${book.pages} pages`;

    const readBtn = document.createElement("button");

    readBtn.classList.add("readBtn");

    readBtn.textContent = book.read ? "Read" : "Not Read";

    if (book.read) {
  readBtn.style.backgroundColor = "green";
}
else {
  readBtn.style.backgroundColor = "red";
}

    bookdiv.appendChild(readBtn);

    container.appendChild(bookdiv);

    readBtn.addEventListener("click", () => {
      book.read = !book.read;

      
      displayBooks();
    });

    const removeBtn=document.createElement("button");
      removeBtn.classList.add("removeBtn");
      removeBtn.textContent=`Remove this book`

      removeBtn.addEventListener(("click"), ()=>{
        if (confirm("Are you sure you want to proceed?")) {
    myLibrary.splice(index,1);
    displayBooks();
}

      })
bookdiv.appendChild(removeBtn);
  });

 

}