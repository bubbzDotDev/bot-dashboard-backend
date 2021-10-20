# To get the Docker running locally:

- Clone this repo

- (**Devs Only**) Run `git update-index --skip-worktree .env` to prevent `.env` detecting changes

- Update `.env` with project token (Bot Token)

- `npm run dock` - Lints Code, Builds Image, Runs Container, Runs Migrations, Runs Seeder, and Starts Server

# Code Overview

## Technologies

- [Typescript](https://www.typescriptlang.org/) - Add strong typing to JavaScript

- [Express](https://www.npmjs.com/package/express) - The server for handling and routing HTTP requests

- [Discord.js](https://discord.js.org/#/) - Create Discord commands and bot interactions

- [Docker](https://www.docker.com/) - Containerize application

- [MySQL](https://www.mysql.com/) - Used for SQL Database services

## Application Structure

- `bin/www.ts` - The entry point to our application

- `database/` - Contains sequelize configs, migrations, seeders, and models

  - `config/` - Contains sequelize config variables

  - `migrations/` - Contains sequelize migrations

  - `models/` - Contains sequelize models

  - `seeders/` - Contains sequelize seeders

- `define/` - Contains app definitions for the Express server

- `routes/` - Contains the route definitions for our API

  - `discord/` - Contains the discord.js entry point and establishes the socket connection

- `app.ts` - Creates the Express app

## Frontend

[Project Frontend Repository](https://github.com/bubbzDotDev/bot-dashboard)
