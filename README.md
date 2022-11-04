# Vite App

This project was bootstrapped with [Vite](https://vitejs.dev/).

## Development

### Prerequisites

- [Node.js](https://nodejs.org/en/) ([fnm](https://github.com/Schniz/fnm) is highly recommended)
- [pnpm](https://github.com/pnpm/pnpm)
- [Docker Desktop](https://www.docker.com/get-started/)
  - In case you're running WSL for Windows and don't want to install Docker Desktop you can also install [Docker](https://docs.docker.com/desktop/install/linux-install/) and [docker-compose](https://github.com/docker/compose) separately.

### Getting started

- Clone the repo
- Run `pnpm install` to install the dependencies
- Run `pnpm dev` to run the app in development mode and go to <http://localhost:5173> to view it in the browser.

### Commands

#### `pnpm dev`

Start the development server at <http://localhost:5173>.

As code changes are made Vite provides instant and precise updates without reloading the page or blowing away application state.

#### `pnpm build`

Build for production to the `dist` folder.

#### `pnpm preview`

Locally preview the production build.

#### `pnpm test`

Run the application tests in watch mode.

This project uses the [Vitest](https://vitest.dev/) framework to run tests using the [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/). There are [IDE integrations](https://vitest.dev/guide/ide.html) for Vitest, so make sure you take a look at those, since they're very helpful.

#### `pnpm coverage`

Run the application tests and generate coverage report.

#### `pnpm lint`

Lint and format the codebase.

This project comes with [Eslint](https://eslint.org/) and [Prettier](https://prettier.io/) preconfigured. Linting and auto formatting are provided by mostly if not all code editors, so take advantage of that by configuring yours to work with those libraries.

### Commiting your changes

husky lint-staged commitlint commitizen conventionalcommits

react query (zustand or jotai if necessary)
"tailwindcss": "^3.2.1",
react-hook-form + zod
zod for api validation (instead of proptypes)
react-helmet-async
