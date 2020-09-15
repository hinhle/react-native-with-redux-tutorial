import React, { Component } from "react";
import { registerRootComponent } from "expo";

import TaskManagerComponent from "./components/TaskManagerComponent";

//Redux
import { createStore } from "redux";
import { Provider } from "react-redux";

import allReducers from "./reducers";

let store = createStore(allReducers);

const App = () => (
  <Provider store={store}>
    <TaskManagerComponent />
  </Provider>
);

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
