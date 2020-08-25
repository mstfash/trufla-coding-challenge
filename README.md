Trufla root project.

### Structure

`client` which is the react app
`server` which is the node js server with rest apis
`docker-compose.yaml` to launch the whole project into containers
`makefile` is just a helper to run terminal commands

### Getting started

if we want to launch dockerized version of the app we need to do the following.

- We need to have `.env.production.local` file inside oc `client` folder with the following env variable

`REACT_APP_SERVER_URL=http://localhost:3030`

Thats it!, you are good to go.

## Deployment

1- `git clone` the project

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!
