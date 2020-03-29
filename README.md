# Controlled Text Editor
👩‍💻 A custom React component that allows controlled text editing. _(as used in [CSS Legends](https://github.com/malcolmkiano/css-legends))_<br>
🚀 See a demo at https://malcolmkiano.github.io/controlled-text-editor

## Screenshots
![Controlled Text Editor](./public/screenshot.jpg)

## Features
- Complete:
  - [x] CSS syntax highlighting
  - [x] Dynamic input creation and validation based on `snippet` object.
  - [x] Live style updates to the DOM when a `watch` property is set on the `snippet` object.
  - [x] Event hooks on all requirements being met in an editor

- Todo:
  - [ ] CSS highlighting for `@import` statements and flags, such as `!important`.
  - [ ] HTML syntax highlighting.

## Usage
If you'd like to use this editor in your project, follow these steps:
- Install `node-sass` in your project (or you could convert the Sass files (or write custom styling in CSS)
- Clone this project to your local machine
- Copy the `Editor` directory from Components into your project
- Copy everything from the `modules` directory into your project
- The `Editor` component requires a `snippet` prop which consists of an object, like [this one](./src/Store/snippets/demo.js).
  - An `onComplete` prop is necessary if you intend to use the interactive capabilities.

## Contribute
Have any cool ideas for improvements on the functionality of this app? Want to help out with the development? Feel free to make a pull request. 😊<br />

-----------------------

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify