# gymsense-api

This project uses node.js and express to create a RESTful API for the gymsense project. Uses PostgreSQL as the database through the prisma ORM.

## Installation

1. Install [node.js](https://nodejs.org/en/download/)
2. Install [PostgreSQL](https://www.postgresql.org/download/)
3. Install [prisma](https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch-sql-postgres)
4. Clone this repository
5. Run `npm install` in the root directory
6. Run `npm run dev` to start the server
7. Run `npm run prisma:generate` to generate the prisma client
8. Run `npm run prisma:migrate` to migrate the database
9. Run `npm run prisma:seed` to seed the database
10. Run `npm run prisma:studio` to open the prisma studio
11. Run `npm run prisma:reset` to reset the database
12. Run `npm run prisma:delete` to delete the database
13. Run `npm run prisma:generate` to generate the prisma client


## API Endpoints
| Method | Endpoint | Description | Body |
| --- | --- | --- | --- |
| POST | /hub/create | Creates a new hub and generates a key | None |
| POST | /iot/create | Creates a new iot device and generates a key | None |
| POST | /iot/status | Updates the status of an iot device | ```json {hub_id: string, hub_key: string, id: string, key: string, battery_level: number, occupancy: boolean}``` |


