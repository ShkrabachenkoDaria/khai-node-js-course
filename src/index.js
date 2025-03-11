const express = require('express');
const app = express();
const port = 3000;

const books = [
  { id: 1, name: "Alice's Adventures in Wonderland", author: "Lewis Carroll", info: "This whimsical tale of a young girl’s journey into a strange, surreal world is perfect for autumn, when magic seems to linger in the air. Dive into Alice's adventures and let your imagination wander alongside the falling leaves." },
  { id: 2, name: "Norwegian Wood", author: "Haruki Murakami", info: "Set in a world of melancholic beauty, this novel is a bittersweet exploration of love and memory. Its introspective tone and nostalgic atmosphere make it an ideal companion for quiet autumn evenings." },
  { id: 3, name: "Kafka on the Shore", author: "Haruki Murakami", info: "With its mysterious characters and surreal twists, 'Kafka on the Shore' mirrors the enigmatic feeling of autumn nights. It’s a deep, engaging read that captures the spirit of self-discovery and magic."  },
  { id: 4, name: "After Dark", author: "Haruki Murakami", info: "The story unfolds over a single autumn night, capturing the haunting stillness of the season. This novel’s blend of suspense and mystery invites readers to explore Tokyo’s hidden layers in the early hours."  },
  { id: 5, name: "One Dark Window", author: "Rachel Gillig", info: "A hauntingly atmospheric story filled with dark magic, this fantasy novel perfectly matches the chilly allure of autumn. Its eerie landscapes and mysterious characters will keep you enchanted."  },
  { id: 6, name: "The Hobbit", author: "J.R.R. Tolkien", info: "Bilbo’s journey through enchanting lands filled with danger and wonder is a timeless tale for fall. Its cozy, fireside storytelling style and adventurous spirit make it ideal as the weather cools down."  },
  { id: 7, name: "Animal Farm", author: "George Orwell", info: "This political allegory, set on a seemingly peaceful farm, grows darker as it delves into themes of power and corruption. Perfect for reflective autumn afternoons, it’s a timeless reminder of change and revolution."  },
  { id: 8, name: "1984", author: "George Orwell", info: "Orwell’s chilling vision of a dystopian future is all the more poignant in the introspective autumn season. The novel’s bleak yet compelling world pairs well with the somber beauty of fall."  },
  { id: 9, name: "For Whom the Bell Tolls", author: "Ernest Hemingway", info: "Hemingway’s intense story of war, love, and sacrifice resonates with the quiet intensity of autumn. The novel’s raw emotional depth aligns with the season’s reflective mood."  },
  { id: 9, name: "A Moveable Feast", author: "Ernest Hemingway", info: "Set in 1920s Paris, this memoir captures Hemingway’s youthful days as a writer. Its charming prose and nostalgic insights make it a cozy autumn read, perfect for warm drinks and sweater weather."  },
];

app.use(express.static("public"));

app.get('/', (req, res) => {

  let html = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Book List</title>
          <link rel="stylesheet" type="text/css" href="/index.css">
        </head>
        <body>
          <h1>Book List</h1>
          <ul class="book-list">
    `;
    books.forEach(book => {
      html += `<li class="book-item">
      ${book.name} by <a href="/books/${encodeURIComponent(book.author)}">${book.author}</a>
      </li>`;
    });
    html += `
          </ul>
        </body>
      </html>
    `;
    res.send(html);
});


app.get('/books/:author', (req, res) => {
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
        <h1>Books by ${author}</h1>
        <ul class="book-list">
  `;
  filteredBooks.forEach(book => {
    html += `<li class="book-item"> <h2>${book.name}</h2> </br> <h3>${book.info}</h3></li>`;
  });
  html += `
        </ul>
        <h4><a href="/"> Back </a></h4>
      </body>
    </html>
  `;
  res.send(html);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});