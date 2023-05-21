// microservice.js
const express = require('express');
const app = express();
const routes = require('./app/routes/routes.js');
const connectDB = require('./app/utils/mongoDBConnection.js');
const http = require('http').createServer(app);
const configureSocket = require('./app/utils/notificationConnection.js');

// Define your routes and middleware here
configureSocket(http);

// Start the server
const port = process.env.PORT || 3000;

connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`[Microservice Server] <running> on <Port:=:${port}>`);
    });
  })
  .catch((error) => {
    console.error('[Microservice Server Error] <Connecting to MongoDB> :=:', error);
  });