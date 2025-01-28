# Nooro Todo Server

#### How to run application:

1. Clone this repository in your computer:
```sh
git clone https://github.com/acferm/nooro-server
```

2. Enter the project directory:
```sh
cd nooro-server
```

3. Run docker compose setup:
```sh
docker-compose up -d
```

4. Create the `.env` file in the root of the project, and add the following into it:
```env
DATABASE_URL="mysql://root:nooro@localhost:3306/nooro-db?schema=public"
```

5. Install dependencies:
```sh
pnpm i
```
_You can also use yarn, npm or bun to install the dependencies_

6. Run database migrations:
```sh
pnpx prisma migrate dev
```

7. Run project in development mode:
```sh
pnpm dev
```

