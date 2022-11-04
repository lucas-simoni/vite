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

### Committing your changes

Once you have added your files to staging and are ready to commit, simply run `git commit` and a few things will be done for you:

1. Your staged git files will be linted and formatted, using [lint-staged](https://github.com/okonet/lint-staged)
2. The [commitizen](https://github.com/commitizen/cz-cli) CLI will be called for you, so you can write you commit message following the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification
3. Your commit message will be linted by [commitlint](https://github.com/conventional-changelog/commitlint) to make sure everything is correct

All that is possible by using native git hooks by leveraging the [husky](https://github.com/typicode/husky) library.

## Application Tech Stack

### Styling

[Tailwind CSS](https://github.com/tailwindlabs/tailwindcss), a utility-first CSS framework for rapidly building custom user interfaces.

### State Managament and Data Fetching

[Axios](https://github.com/axios/axios), a simple promise based HTTP client for the browser. Axios provides a simple to use library in a small package with a very extensible interface.

[React Query](https://tanstack.com/query/v4/docs/overview), a powerful asynchronous state management for TS and React. It gives us declarative, always-up-to-date auto-managed queries and mutations that directly improve both the developer and user experiences. [Practical React Query](https://tkdodo.eu/blog/practical-react-query) is a must read.

If `useState()` is not working for us (too much prop drilling) we also have good alternatives to use:

1. [Jotai](https://github.com/pmndrs/jotai)

   - For when we need globals and don't want to pass values up and down everywhere. Basically a `useState()` we can use anywhere in our application.

2. [Zustand](https://github.com/pmndrs/zustand)

   - More like when we need a _"machine"_, a _"store"_. Here we handle the ways we interact with the state as part of the machine, so that when we consume it we know which behaviors we're able to work with.

Jotai and Zustand does not come pre-installed and should only be used according to our needs.

### Routing

[React Router](https://reactrouter.com/en/main), a lightweight and fully-featured routing library for React.

### Recommended (_not included_)

- [Okta SDK](https://github.com/okta/okta-react)
- [Sentry SDK](https://docs.sentry.io/platforms/javascript/guides/react/)
- [React Hook Form](https://github.com/react-hook-form/react-hook-form) and [zod](https://github.com/colinhacks/zod) – for form state management and TS-first schema validation with static type inference
- [React Helmet Async](https://github.com/staylor/react-helmet-async) – for document head management