import { registerRootComponent } from 'expo';

import App from './App';

//Redux
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';

import CounterContainer from './containers/CounterContainer'

//Redux saga
import createSagaMiddleware from 'redux-saga';
//Middleware
const sagaMiddleware = createSagaMiddleware();
import allReducers from './reducers';

let store = createStore(allReducers, applyMiddleware(sagaMiddleware));

const App = () => {
    <Provider store={store}>
        <CounterContainer/>
    </Provider>
}
sagaMiddleware.run(rootSaga);
// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
