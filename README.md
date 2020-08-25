Trufla root project.

### Structure

- `client` which is the react app
- `server` which is the node js server with rest apis
- `docker-compose.yaml` to launch the whole project into containers
- `makefile` is just a helper to run terminal commands

## Development

1- `git clone https://github.com/heavenchains/trufla-coding-challenge.git` <br />
2- `cd trufla-coding-challenge` <br />
3- `touch server/.env` <br />
4- `nano server/.env` add this env variable `MONGODB_URI=mongodb://localhost:27017/trufla` <br />
5- `touch client/.env.production.local` <br />
6- `nano client/.env.production.local` add this env variable `REACT_APP_SERVER_URL=http://localhost:3030` <br />

Then go to server folder and run `npm install && npm start`<br />
and then go to client folder and run `npm install && npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Deployment

1- `git clone https://github.com/heavenchains/trufla-coding-challenge.git` <br />
2- `cd trufla-coding-challenge` <br />
3- `touch client/.env.production.local` <br />
4- `nano client/.env.production.local` add this env variable `REACT_APP_SERVER_URL=http://localhost:3030` <br />
5- `make init`<br />

Runs the app in docker containers.<br />
Open [http://localhost](http://localhost) to view it in the browser.

To take the containers down <br />
run `make down`
