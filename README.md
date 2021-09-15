# Getting started

To get the Node server running locally:

- Clone this repo

- `npm install` to install all required dependencies

- `npm run dev` to start the local server

# Code Overview

## Dependencies

- [expressjs](https://www.npmjs.com/package/express) - The server for handling and routing HTTP requests

- [express-jwt](https://www.npmjs.com/package/express-jwt) - Middleware for validating JWTs for authentication

- [passport](https://www.npmjs.com/package/passport) - For handling user authentication

## Application Structure

- `app.js` - The entry point to our application. This file defines our express server and connects it to MongoDB using mongoose. It also requires the routes and models we'll be using in the application.

- `config/` - This folder contains configuration for passport as well as a central location for configuration/environment variables.

- `routes/` - This folder contains the route definitions for our API.

- `models/` - This folder contains the schema definitions for our Mongoose models.

## Authentication

Requests are authenticated using the `Authorization` header with a valid JWT. We define two express middlewares in `routes/auth.js` that can be used to authenticate requests. The `required` middleware configures the `express-jwt` middleware using our application's secret and will return a 401 status code if the request cannot be authenticated. The payload of the JWT can then be accessed from `req.payload` in the endpoint. The `optional` middleware configures the `express-jwt` in the same way as `required`, but will _not_ return a 401 status code if the request cannot be authenticated.
