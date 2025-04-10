const express = require('express');
const db = require('../src/db');
const { users, products } = require('../src/db/schema');
const router = express.Router();
const { eq } = require('drizzle-orm');

router.post('/users', async (request, response) => {

   const { body } = request;

   await db.insert(users).values(body);

   return response.sendStatus(201);

});

router.get('/users', async (request, response) => {

    const users = await db.query.users.findMany();
 
    return response.json(users);
 
 });
 
 router.get('/users/:id/products', async (request, response) => {
   const { id } = request.params;
   const userProdusts = await db.query.products.findMany({
       where: eq(products.userId, +id)
   });
   return response.json(userProdusts);
});


module.exports = router;