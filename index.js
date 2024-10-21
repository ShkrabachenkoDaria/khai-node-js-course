const http = require('http');
const port = 3000; // Порт, на якому буде працювати сервер
// Створення HTTP-сервера
const server = http.createServer((req, res) => {
   res.writeHead(200, {'Content-Type': 'text/html'}); // Повідомлюємо що формат буде HTML щоб браузер його відобразив
   const url = req.url;
    if(url ==='/about'){
       res.write('<h1>About Hard-Boiled Wonderland and the End of the World<h1>');
       res.write('<h2>世界の終りとハードボイルド・ワンダーランド is a mix of hard-boiled detective fiction with magical realism. It could also be categorized as speculative fiction with elements of film noir.</h2>')
       res.end(`
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Unicorn's Land</title>
            <style>
              body {
                background-color: #6495ED;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                padding: 5rem;
                height: 100vh;
              }
              h1 {
                color: #f2e6ff;
              }
            </style>
          </head>
          <body>
            
          </body>
      `);
    }else if(url ==='/contact'){
       res.write('<h1>Contact<h1>');
       res.write('<h2>Murakami Haruki (Japanese: 村上 春樹) is a popular contemporary Japanese writer and translator. His work has been described as "easily accessible, yet profoundly complex".</h2>')
       res.end(`
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Contact Page</title>
            <style>
              body {
                background-color: #5c85d6;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                padding: 3rem;
                height: 100vh;
              }
              h1 {
                color: #f2e6ff;
              }
            </style>
          </head>
          <body>
            
          </body>
      `);
    }else{
       res.write('<h1>Hello Hard-Boiled Wonderland!<h1>');
       res.write('<h2>Let`s find the Shadow<h2>');
       res.end(`
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Contact Page</title>
            <style>
              body {
                background-color: #0077b3;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                padding: 3rem;
                height: 100vh;
              }
              h1 {
                color: #f2e6ff;
              }
            </style>
          </head>
          <body>
            
          </body>
      `);
    }
});
// Прослуховування порту та адреси сервера
server.listen(port, () => {
 console.log(`server start at http://localhost:${port}/`);
});