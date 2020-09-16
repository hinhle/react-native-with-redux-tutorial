import React, { Component } from "react";
import { registerRootComponent } from "expo";

import TaskManagerComponent from "./components/TaskManagerComponent";

//Redux
<<<<<<< HEAD
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';

import CounterContainer from './containers/CounterContainer'

//Redux saga
import createSagaMiddleware from 'redux-saga';
//Middleware
const sagaMiddleware = createSagaMiddleware();
import allReducers from './reducers';
=======
import { createStore } from "redux";
import { Provider } from "react-redux";

import allReducers from "./reducers";
>>>>>>> 12b0d4ffe3d2fcb598a983f3ba4c325226ae20db

let store = createStore(allReducers, applyMiddleware(sagaMiddleware));

<<<<<<< HEAD
const App = () => {
    <Provider store={store}>
        <CounterContainer/>
    </Provider>
}
sagaMiddleware.run(rootSaga);
=======
const App = () => (
  <Provider store={store}>
    <TaskManagerComponent />
  </Provider>
);

>>>>>>> 12b0d4ffe3d2fcb598a983f3ba4c325226ae20db
// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
