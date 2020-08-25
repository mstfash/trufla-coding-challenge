# Trufla Products server

Coding challenge by Trufla - node js server that is based on express, MongoDB and acts as products server with REST APIs

### Used Stack

- Express
- Mongodb
- Faker
- Cors

### .env Sample

`PORT=3030` <br />
`MONGODB_URI=mongodb://localhost:27017/trufla`

### Available Scripts

In the project directory, you can run:

`npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3030](http://localhost:3030) to view it in the browser.

The page will reload if you make edits thanks to nodemon. <br />
You will also see any lint errors in the console.

`npm run build`

Builds the app for production to the `dist` folder.<br />
It correctly bundles node files in production mode and optimizes the build using babel.

`npm run db:seed`

It generates faker data and inserts it into mongodb.

`npm run db:drop`

It drops current table for the trufla collection inside mongodb.
