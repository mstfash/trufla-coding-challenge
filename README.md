Trufla root project.

### Structure

- `client` which is the react app
- `server` which is the node js server with rest apis
- `docker-compose.yaml` to launch the whole project into containers
- `makefile` is just a helper to run terminal commands

## Development

You must have mongodb installed and running, if not then deployment by docker would be the solution.<br />

1- `git clone https://github.com/heavenchains/trufla-coding-challenge.git` <br />
2- `cd trufla-coding-challenge` <br />
3- `touch server/.env` <br />
4- `nano server/.env` add this env variable `MONGODB_URI=mongodb://localhost:27017/trufla` <br />
5- `touch client/.env.development.local` <br />
6- `nano client/.env.development.local` add this env variable `REACT_APP_SERVER_URL=http://localhost:3030` <br />
7- `make run-server`<br />
8- Open a new terminal tab to `trufla-coding-challenge` and run `make run-client`

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
