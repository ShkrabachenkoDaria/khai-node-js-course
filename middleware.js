function logRequest(req, res, next) {
    console.log(`Received a ${req.method} request to ${req.url}`);
    next(); // Call the next middleware function in the chain
 }

 function blockSpecialAuthor(req, res, next) {
    if (req.params.author === "J.K. Rowling") {
        res.status(403).send(`
            <!DOCTYPE html>
            <html>
              <head>
                <title>Author Unavailable</title>
                <script type="text/javascript">
                  window.onload = function() {
                    alert("Author unavailable now due to personal circumstances.");
                    window.location.href = "/books";
                  };
                </script>
              </head>
              <body></body>
            </html>
        `);
    } else {
        next();
    }
 }
 
 
 module.exports = { logRequest, blockSpecialAuthor };
 