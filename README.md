Trufla root project.

### Structure

- `client` which is the react app
- `server` which is the node js server with rest apis
- `docker-compose.yaml` to launch the whole project into containers
- `makefile` is just a helper to run terminal commands

### Getting started

if we want to launch dockerized version of the app we need to do the following.

We need to have `.env.production.local` file inside of `client` folder with the following env variable <br />

`REACT_APP_SERVER_URL=http://localhost:3030`<br />

Thats it!, you are good to go.

## Deployment

1- `git clone https://github.com/heavenchains/trufla-coding-challenge.git` <br />
2- `cd trufla-coding-challenge` <br />
3- `cd client && touch .env.production.local` <br />
4- add this `REACT_APP_SERVER_URL=http://localhost:3030` inside of `.env.production.local` <br />
3- `cd .. && make init`<br />

Runs the app in docker containers.<br />
Open [http://localhost](http://localhost) to view it in the browser.
