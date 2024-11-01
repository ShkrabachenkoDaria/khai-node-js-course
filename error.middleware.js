const errorResponder = (err, req, res, next) => {
   response.header("Content-Type", 'application/json')
   response.status(err.statusCode).send(err.message)
}
module.exports = { errorResponder };