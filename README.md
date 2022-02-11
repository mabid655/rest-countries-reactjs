# REST COUNTRIES | FRONTEND TASK


## Prerequisites

nodejs >= 12

## Quik start

- Install all dependencies: `npm ci`
- Run dev build: `npm start`

## Avaliable scripts

`npm start`

Runs the app in the development mode use 3000 port as default.  
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

`npm test`

Launches the test runner in the interactive watch mode.  
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

`npm run build`

Builds the app for production to the `build` folder.

It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

If you have necessary to customize your build process then you can run

## Dependencies and devDependecies
This project build on common React infrastructure: **react**, **react-router-dom**, **redux**, **redux-thunk**, **react-loadable**,  
**ant-design/icons**, **react-scripts**.

### Dependencies

- **react-loadable** is a solution for lazy module loading
Examples avaliable in App.js and [documentation](https://github.com/jamiebuilds/react-loadable)

- **react-router-dom** most popular solutiuon for routing in React app (https://reacttraining.com/react-router/web/guides/quick-start)

- **redux** is a predictable state container (https://redux.js.org/)
- **redux-thunk** provide the same interface for working both with aync and sync actions in component 

- **react-scripts** are used under the hood [Create React App](https://github.com/facebook/create-react-app)

- **axios** - is a promise based HTTP client [docs](https://github.com/axios/axios). You can use any other solution.

### devDependecies

- **husky** and **lint-staged** are used for run reformating code on precommit hooks
- **sass** Sass is a preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets.

### Files structure:
- public
    - index.js
- src
    - assets
        - fonts
    - pages
        - index.js
        - detail-page
        - components 
            - header
            - sub-header
            - not-found
            - theme-changer
            - counter-box 
    - redux
        - actions
            - actionTypes.js
            - countriesActions.js  
        - reducers
            - index.js
            - countriesReducer.js
        - configureStore.js
        - initialState.js
        - thunks.js
    - services
        - countries.js
    - styles
        - index.module.scss
        - variables.module.scss
    - App.js
    - index.js
    - themeprovider.js
- package.json
- package-lock.json

**App.js** is a root component that:  
 - init Store connected it to React application
 - configure react-router
 - dynamicaly import (lazy loading) Home component ([docs](https://github.com/jamiebuilds/react-loadable)).
 - ThemeProvider for different theme light | dark

**components** - directory with components. It include shared/common components

**redux** - all things related to Redux stored in this directory.

**redux/configStore.js** - init store and add middlewares for develop build.

**redux/reducers/index.js** - combine reducers to one entry point

**redux/reducers/initialState.js** - initial state for Store

**redux/actions/actionTypes.js** - define all actions