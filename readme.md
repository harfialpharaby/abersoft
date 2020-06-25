# Fullstack Test for Abersoft Technologies

Demo Version:
* [Backend](https://morning-sierra-01005.herokuapp.com/)
* [Frontend](https://exp-shell-app-assets.s3.us-west-1.amazonaws.com/android/%40harfialpharaby/fullstack-abersoft-eb15b3c6fd9b4c379e6eb563b1b45e28-signed.apk)

Application showcase:
* [Homescreen](https://github.com/harfialpharaby/abersoft/blob/master/demo/homescreen.jpg)
* [Register Screen](https://github.com/harfialpharaby/abersoft/blob/master/demo/register.jpg)
* [Login Screen](https://github.com/harfialpharaby/abersoft/blob/master/demo/login.jpg)
* [Onboarding Screen](https://github.com/harfialpharaby/abersoft/blob/master/demo/onboarding.jpg)


## Installation
Prerequisites:
* [Expo](https://docs.expo.io/get-started/installation/)
* [React Native](https://reactnative.dev/docs/getting-started)
* [ExpressJs](https://expressjs.com/en/starter/installing.html)

## Backend Configuration
* Go to `server` folder
* Make `.env` file and fill with `JWT_SECRET=anything you want`
* Change username, password, host, and database name in `config.json` inside `config` folder
* Then run this commands

```
npm i
npx sequelize db:create
npx sequelize db:migrate
node app.js
```

## Frontend Configuraton
* Go to `client` folder
* Run this commands
```
yarn install
yarn start
```