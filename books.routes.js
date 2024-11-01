const express = require("express");
const books = require("./books");
const { blockSpecialAuthor } = require("./middleware");

const router = express.Router();

router.get("/", (req, res) => {
    let html = `
      <!DOCTYPE html>
      <html>
        <head>
          <title> Library homepage </title>
          <link rel="stylesheet" type="text/css" href="/index.css">
        </head>
        <body>
            <div class="title"> 
                <h1> Welcome to the Library </h1>
            </div>
            <div class="container">
                <h2> Autumn is the perfect season to get lost in the pages of dark fantasy, mystery, and horror. As leaves turn and shadows 
                lengthen, dive into stories set in haunting forests and realms filled with secrets. Imagine twisted paths under moonlit canopies, 
                creatures lurking just beyond sight, and the thrill of ancient mysteries waiting to be unraveled. Whether it's a cursed village or 
                a bewitched forest, these tales promise to chill and captivate. Let autumn be your invitation to worlds where every turn of the 
                page pulls you deeper into the unknown, where suspense and enchantment wait in every dark corner. </h2>
            </div>
            <div class="buttons">
                <h4 class="btn"><a href="/books"> To the book list </a></h4>
            </div>
        </body>
      </html>
    `;
    res.send(html);
  });

router.get("/books", (req, res) => {
    let html = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Book List</title>
        <link rel="stylesheet" type="text/css" href="/index.css">
      </head>
      <body>
        <div class="title">
            <h1>Book List</h1>
        </div>
        <div class="booksList container">
            <ul class="book-list">
                `;
                books.forEach(book => {
                    html += `<li class="book-item">
                    <a href="/books/title/${encodeURIComponent(book.name)}">${book.name}</a>
                    by <a href="/books/${encodeURIComponent(book.author)}">${book.author}</a>
                    </li>`;
                });
                html += `
            </ul>
        </div>
        <div class="buttons">
            <h4 class="btn"><a href="/"> Home </a></h4>
        </div>
      </body>
    </html>
  `;
  res.send(html);
});

router.get("/books/:author", blockSpecialAuthor, (req, res) => {
    const { author } = req.params;
  
    const filteredBooks = books.filter(books => books.author === author);
  
    let html = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Books by ${author}</title>
          <link rel="stylesheet" type="text/css" href="/index.css">
        </head>
        <body>
            <div class="title">
                <h1>Books by ${author}</h1>
            </div>
            <div class="booksList container">
                <ul class="book-list">
                    `;
                    filteredBooks.forEach(book => {
                    html += `<li class="book-item"> 
                        <h2><a href="/books/title/${encodeURIComponent(book.name)}">${book.name} </a></h2> </br> 
                        <h3><a href="/books/genre/${encodeURIComponent(book.genre)}">${book.genre} </a></h3> </br>
                        <h3>${book.info}</h3></li>`;
                    });
                    html += `
                </ul>
            </div>
            <div class="buttons">
                <h4 class="btn"><a href="/books"> Back </a></h4>
                <h4 class="btn"><a href="/"> Home </a></h4>
            </div>
        </body>
      </html>
    `;
    res.send(html);
  });

  router.get("/books/genre/:genre", (req, res) => {
    const { genre } = req.params;
  
    const filteredGenre = books.filter(books => books.genre === genre);
  
    let html = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Books by ${genre}</title>
          <link rel="stylesheet" type="text/css" href="/index.css">
        </head>
        <body>
            <div class="title">
                <h1>Books by ${genre}</h1>
            </div>
            <div class="booksList container">
                <ul class="book-list">
                    `;
                    filteredGenre.forEach(book => {
                    html += `<li class="book-item"> 
                    <h2><a href="/books/title/${encodeURIComponent(book.name)}">${book.name} </a></h2> </br>
                    <h3>${book.info}</h3></li>`;
                    });
                    html += `
                </ul>
            </div>
            <div class="buttons">
                <h4 class="btn"><a href="/books"> Back </a></h4>
                <h4 class="btn"><a href="/"> Home </a></h4>
            </div>
        </body>
      </html>
    `;
    res.send(html);
  });

  router.get("/books/title/:name", (req, res) => {
    const { name } = req.params;
  
    const chosenName = books.filter(books => books.name === name);
  
    let html = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>${name}</title>
          <link rel="stylesheet" type="text/css" href="/index.css">
        </head>
        <body>
            <div class="title">
                <h1>${name}</h1>
            </div>
            <div class="booksList container">
                <ul class="book-list">
                    `;
                    chosenName.forEach(book => {
                    html += `<li class="book-item"> 
                        <h3> Author: <a href="/books/${encodeURIComponent(book.author)}">${book.author}</a> </h3> </br> 
                        <h3> Genre: <a href="/books/genre/${encodeURIComponent(book.genre)}">${book.genre}</a> </h3> </br>
                        <h3> ${book.info} </h3> </li>`;
                    });
                    html += `
                </ul>
            </div>
            <div class="buttons">
                <h4 class="btn"><a href="/books"> Back </a></h4>
                <h4 class="btn"><a href="/"> Home </a></h4>
            </div>
        </body>
      </html>
    `;
    res.send(html);
  });

  router.get('/bookswitherror', (req, res) => {
    let err = new Error("processing error ")
    err.statusCode = 400
    throw err
 });

module.exports = router;