
# Getting started

To get the Node server running locally:

- Clone this repo

- `npm install` to install all required dependencies

- `npm run start` to start the local server

# Code Overview

## Dependencies

- [expressjs](https://www.npmjs.com/package/express) - The server for handling and routing HTTP requests

- [Discord.js](https://discord.js.org/#/) - Create Discord commands and bot interactions

## Application Structure

- `src/bin/www.ts` - The entry point to our application.

- `src/define/` - This folder contains app.js definitions for the Express server.

- `src/config/` - This folder contains configurations.

- `src/routes/` - This folder contains the route definitions for our API.

- `src/models/` - This folder contains the schema definitions for our Sequelize models.

## Authentication

Requests are authenticated using the `Authorization` header with a valid JWT. We define two express middlewares in `routes/auth.js` that can be used to authenticate requests. The `required` middleware configures the `express-jwt` middleware using our application's secret and will return a 401 status code if the request cannot be authenticated. The payload of the JWT can then be accessed from `req.payload` in the endpoint. The `optional` middleware configures the `express-jwt` in the same way as `required`, but will _not_ return a 401 status code if the request cannot be authenticated.
# Getting started

To get the Node server running locally:

- Clone this repo

- `npm install` to install all required dependencies

- `npm run start` to start the local server

# Code Overview

## Dependencies

- [expressjs](https://www.npmjs.com/package/express) - The server for handling and routing HTTP requests

- [Discord.js](https://discord.js.org/#/) - Create Discord commands and bot interactions

## Application Structure

- `src/` - Contains the application

	- `bin/www.ts` - The entry point to our application.
	
	- `define/` - This folder contains app.js definitions for the Express server.

	- `config/` - This folder contains configurations.

	- `routes/` - This folder contains the route definitions for our API.

	- `models/` - This folder contains the schema definitions for our Sequelize models.

## Authentication

Requests are authenticated using the `Authorization` header with a valid JWT. We define two express middlewares in `routes/auth.js` that can be used to authenticate requests. The `required` middleware configures the `express-jwt` middleware using our application's secret and will return a 401 status code if the request cannot be authenticated. The payload of the JWT can then be accessed from `req.payload` in the endpoint. The `optional` middleware configures the `express-jwt` in the same way as `required`, but will _not_ return a 401 status code if the request cannot be authenticated.
