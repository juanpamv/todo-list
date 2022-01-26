# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.

### `npm test`

Launches the test runner in the interactive watch mode.
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.

## Considerations

This project was developed taking in mind a simple setup to deliver a project that can be developed in just a couple of hours.

React context was used since this is going to manage a small amount of data. Redux is a better tool for more complex applications with bigger amounts of data and data operations.

Material ui was used mostly to take advantage of its grid. Styled components was used to show knowledge on css and css in js, even though in a real project I will take more advantage of the library used to manage designs.

Proptypes library was added for type checking on the component props, definitely something more robust like typescript could be better to ensure code quality
