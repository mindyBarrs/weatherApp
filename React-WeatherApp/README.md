# React Weather Application

This application does the same thing as the JS-WeatherApp except it was created usint React and has unit tests. Except when retriving the weather data from [weaterAPI](https://www.weatherapi.com/docs/) it uses an Node express server.

This react application was not created using:

```Shell
npx create-react-app my-app
```

But instead it was created from scratch using webpack, there is one downside and that is you have to add:

```JS
import React from 'react'
```

at the beginning of every file vs. Create-React-App you don't need it as long as you are running version 17 and above.

## Libraries used

- [React](https://react.dev/)
- [Jest](https://jestjs.io/docs/getting-started)
- [EsLint](https://eslint.org/docs/latest/use/getting-started)
- [Prettier](https://prettier.io/docs/en/)
- [Husky](https://typicode.github.io/husky/)
- [Redux](https://redux.js.org/)
- [i18next](https://www.i18next.com/overview/getting-started)
- [Scss](https://sass-lang.com/documentation/syntax/)

### Importing

The application is also setup to us absolute imports vs. Releative importing. I think it looks nicer with absolute imports then relative.

```JS
// Absolute Import
import Search from 'components/Search'

// Relative Imports
import Search from '../components/Search'
```

### Recommend Extension

- Jest Runner
- Path Intellisense
- axe Accessibility Linting
