// routes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/controllers.js');

router.get('/users', userController.getAllUsers);
// Define other routes


// GET /users - Get all users
// router.get('/', userController.getAllUsers);

// // GET /users/:id - Get a specific user
// router.get('/:id', userController.getUserById);

// // POST /users - Create a new user
// router.post('/', userController.createUser);

// // PUT /users/:id - Update a user
// router.put('/:id', userController.updateUser);

// // DELETE /users/:id - Delete a user
// router.delete('/:id', userController.deleteUser);

module.exports = router;