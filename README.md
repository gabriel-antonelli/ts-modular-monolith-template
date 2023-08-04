# TypeScript Modular API Template
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=gabriel-antonelli_ts-modular-monolith-template&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=gabriel-antonelli_ts-modular-monolith-template)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=gabriel-antonelli_ts-modular-monolith-template&metric=coverage)](https://sonarcloud.io/summary/new_code?id=gabriel-antonelli_ts-modular-monolith-template)
[![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=gabriel-antonelli_ts-modular-monolith-template&metric=reliability_rating)](https://sonarcloud.io/summary/new_code?id=gabriel-antonelli_ts-modular-monolith-template)
[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=gabriel-antonelli_ts-modular-monolith-template&metric=vulnerabilities)](https://sonarcloud.io/summary/new_code?id=gabriel-antonelli_ts-modular-monolith-template)
[![Duplicated Lines (%)](https://sonarcloud.io/api/project_badges/measure?project=gabriel-antonelli_ts-modular-monolith-template&metric=duplicated_lines_density)](https://sonarcloud.io/summary/new_code?id=gabriel-antonelli_ts-modular-monolith-template)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=gabriel-antonelli_ts-modular-monolith-template&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=gabriel-antonelli_ts-modular-monolith-template)
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=gabriel-antonelli_ts-modular-monolith-template&metric=bugs)](https://sonarcloud.io/summary/new_code?id=gabriel-antonelli_ts-modular-monolith-template)

This is a TypeScript-based modular API template designed with a clean architecture approach. The project structure follows the principles of separation of concerns and modularity to enhance maintainability and scalability.

## Getting Started

To use this template, follow these steps:

1. Clone the repository: `git clone <repository_url>`.
2. Install the required dependencies: `npm install`.
3. Set up your environment variables by creating a `.env` file based on the provided `.env.example`.

## Scripts

1. `start`: This script starts the development server using `nodemon` to automatically restart the server whenever changes are made in the `src` directory. It uses `ts-node` to execute the TypeScript code.

2. `test`: This script runs all unit and integration tests using Jest. It's configured to pass with no tests, run tests in a single process (`--runInBand`), and disable caching (`--no-cache`).

3. `test:unit`: This script runs only the unit tests using Jest with a specific configuration file for unit tests (`./src/config/jest/jest-unit-config.ts`).

4. `test:integration`: This script runs only the integration tests. Before running the tests, it executes the `db-up` script to set up a Dockerized database. It uses a specific configuration file for integration tests (`./src/config/jest/jest-integration-config.ts`).

5. `test:ci`: This script is designed to be used in a continuous integration (CI) environment. It runs the tests with code coverage (`--coverage`) and in CI mode (`--ci`). It also executes the `db-up` script before running the tests and uses the general Jest configuration file (`./src/config/jest/jest.config.ts`).

6. `lint`: This script uses `eslint` to lint both JavaScript and TypeScript files in the project.

7. `prettier`: This script uses `prettier` to format all TypeScript files in the project based on the configuration file (`./src/config/.prettierrc.json`).

8. `prettier-check`: This script checks if all TypeScript files in the project are formatted correctly according to the `prettier` configuration.

9. `db-up`: This script starts the Docker containers defined in the `docker-compose.yml` file, including the database server.

10. `db-push`: This script uses `ts-node` and the custom `dotenvLoader` to load environment variables. It executes the Prisma CLI command to apply migrations and push the database schema defined in `./src/config/prisma/schema.prisma`.

11. `prepare`: This script is used to install Husky's Git hooks when running `npm install` or `npm ci`. Husky allows you to set up pre-commit hooks to enforce code quality and testing before committing changes.

These scripts enable you to easily manage your development workflow, run tests, and perform other important tasks related to linting, formatting, and database management.

## Dependencies

The template includes both development and production dependencies. Key dependencies include Express, Prisma, Jest, TypeScript, Pino, and more. Refer to `package.json` for the full list.

## Contribution Guidelines

Contributions to this project are welcome! Please submit your contributions via pull requests. Before submitting a pull request, ensure that the code adheres to the established coding standards and passes all tests.

## License

This project is licensed under the MIT License. Feel free to use, modify, and distribute it as you see fit.
