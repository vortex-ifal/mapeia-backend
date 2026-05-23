# mapeia-backend

## Getting Started

Follow these steps in order to set up and run the project locally:

### 1. Install dependencies

```bash
$ pnpm install
```

### 2. Start the database

```bash
$ pnpm run db:up
```

### 3. Run migrations and generate Prisma client

```bash
$ pnpm run db:migrate
$ pnpm run db:generate
```

### 4. Start the application

```bash
# development / watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```

---

## Other useful commands

### Database operations

```bash
# stop database
$ pnpm run db:down

# open Prisma Studio
$ pnpm run db:studio
```

### Tests

```bash
# unit tests
$ pnpm run test

# e2e tests
$ pnpm run test:e2e

# test coverage
$ pnpm run test:cov
```
