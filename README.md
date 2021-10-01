# To get the Docker running locally:

- Clone this repo

- Run `git update-index --skip-worktree .env` to prevent .env detecting changes

- Update .env with project token

- `docker-compose build` Build Docker images (May need to run twice when repo is first cloned)

- `docker-compose up` Spin up Docker container. Access at port 3000, port 3307 for MySQL

# Code Overview

## Technologies

- [Typescript](https://www.typescriptlang.org/) - Add strong typing to JavaScript

- [Express](https://www.npmjs.com/package/express) - The server for handling and routing HTTP requests

- [Discord.js](https://discord.js.org/#/) - Create Discord commands and bot interactions

- [Docker](https://www.docker.com/) - Containerize application

- [MySQL](https://www.mysql.com/) - Used for SQL Database services

## Application Structure

- `src/` - Contains the application

  - `bin/www.ts` - The entry point to our application

  - `define/` - This folder contains app.js definitions for the Express server

  - `config/` - This folder contains configurations

  - `discord/` - This folder contains the discord.js entry point and establishes the socket connection

  - `routes/` - This folder contains the route definitions for our API

  - `controllers/` - This folder contains the controllers for the application

  - `models/` - This folder contains the models for the application
