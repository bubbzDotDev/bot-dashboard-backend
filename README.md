
To get the Node server running locally:

- Clone this repo

- Update .env with project token

- `docker-compose build` Build Docker images

- `docker-compose up` Spin up Docker container. Access at port 3000, port 3307 for MySQL

# Code Overview

## Technologies

- [Express](https://www.npmjs.com/package/express) - The server for handling and routing HTTP requests

- [Discord.js](https://discord.js.org/#/) - Create Discord commands and bot interactions

- [Docker](https://www.docker.com/) - Containerize application

- [MySQL](https://www.docker.com/) - Used for SQL Database services

## Application Structure

- `src/` - Contains the application

	- `bin/www.ts` - The entry point to our application.
	
	- `define/` - This folder contains app.js definitions for the Express server.

	- `config/` - This folder contains configurations.

	- `routes/` - This folder contains the route definitions for our API.

	- `models/` - This folder contains the schema definitions for our Sequelize models.

## Authentication


https://discord.com/oauth2/authorize?client_id=889616862718099526&permissions=8&scope=bot%20applications.commands