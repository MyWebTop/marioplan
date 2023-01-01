import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { legacy_createStore as createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './store/reducers/rootReducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { ReactReduxFirebaseProvider, getFirebase } from 'react-redux-firebase';
import {
  reduxFirestore,
  getFirestore,
  createFirestoreInstance,
} from 'redux-firestore';
import fbConfig from './config/fbConfig';
import firebase from 'firebase/compat/app';

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reduxFirestore(firebase, fbConfig)
  )
);

const rrfProps = {
  firebase,
  config: fbConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
};

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <App />
      </ReactReduxFirebaseProvider>
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);