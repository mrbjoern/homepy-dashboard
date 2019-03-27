import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router";
import { ConnectedRouter } from "connected-react-router";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import blue from "@material-ui/core/colors/blue";
import red from "@material-ui/core/colors/red";

import App from "./App";
import Reducer from "./stores/rootReducer";
import rootSaga from "./stores/rootSaga";

import * as serviceWorker from "./serviceWorker";

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

export const history = createBrowserHistory();

// create a redux store with our reducer above and middleware
const store = createStore(
  Reducer(history),
  // applyMiddleware(sagaMiddleware)
  composeWithDevTools(
    applyMiddleware(routerMiddleware(history), sagaMiddleware)
  )
);

// run the saga
sagaMiddleware.run(rootSaga);

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: red
  },
  typography: {
    useNextVariants: true
  }
});

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
