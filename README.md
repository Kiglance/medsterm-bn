# hospital ms backend

This is the backend of an informational system for a hospital website.

## How should this be tested

- Open the project and in the terminal at the root folder, run `npm install`
- After the node-modules have installed, open `.env.example` and create and copy their content into a `.env` file.
- Fill all those environment variables with their correct values
- Run `npm run migrate:all` to seed the data into the database, This will delete all previous data from the database
- Finally, run `npm run dev` to start app in development mode
- run `npm run build` to build for production mode
- run `npm run start` to start in production mode
