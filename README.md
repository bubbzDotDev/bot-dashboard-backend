
To get the Node server running locally:

- Clone this repo

- `npm install` to install all required dependencies

- `npm run start` to start the local server

# Code Overview

## Dependencies

- [Express](https://www.npmjs.com/package/express) - The server for handling and routing HTTP requests

- [Discord.js](https://discord.js.org/#/) - Create Discord commands and bot interactions

## Application Structure

- `src/` - Contains the application

	- `bin/www.ts` - The entry point to our application.
	
	- `define/` - This folder contains app.js definitions for the Express server.

	- `config/` - This folder contains configurations.

	- `routes/` - This folder contains the route definitions for our API.

	- `models/` - This folder contains the schema definitions for our Sequelize models.

## Authentication
