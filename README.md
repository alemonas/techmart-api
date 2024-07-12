# TechMart API

TechMart API is a Node.js/TypeScript backend application that provides APIs for a inventory management application.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Environment Variables](#environment-variables)
- [Development](#development)

## Installation

1. **Clone the repository:**

```sh
git clone https://github.com/alemonas/techmart-api.git
cd techmart-api
```

2. **Install dependencies:**

```sh
yarn install
```

3. **Setup the database (using Prisma):**

```sh
yarn prisma migrate dev
```

## Usage

1. **Start the development server:**

```sh
yarn dev
```

## Environment variables

Create a `.env` file in the root directory and add the following environment variables:

```env
DATABASE_URL=your_database_url
JWT_SECRET=your_jwt_secret
```

## Development

**Code Style**
This project uses Prettier for code formatting. Ensure your code is formatted correctly before committing:

```sh
yarn prettier --write .
```

**Running Migrations**
To run database migrations:

```sh
yarn prisma migrate dev
```

**Running Seeders**
To seed the database with initial data:

```sh
yarn prisma db seed
```

**Testing**
To run the test suite:

```sh
yarn test
```
