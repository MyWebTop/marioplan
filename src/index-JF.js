import React from 'react';
//import ReactDOM from 'react-dom/client'; <- this caused errors. replaced with line below
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import reportWebVitals from './reportWebVitals';

/* createStore has been deprecated but using in this project.  It was replaced by configureStore */
import { legacy_createStore as createStore, applyMiddleware, compose } from 'redux'; 
import rootReducer from './store/reducers/rootReducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createFirestoreInstance, reduxFirestore, getFirestore } from 'redux-firestore'
import { ReactReduxFirebaseProvider, reactReduxFirestore, getFirebase } from 'react-redux-firebase'
import fbConfig from './config/fbConfig'
//import firebase from 'firebase/compat/app';

import 'firebase/firestore';

const store = createStore(rootReducer, 
  compose (
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reduxFirestore(fbConfig),
    reactReduxFirestore(fbConfig)
    )
  );

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();

/* this commented code has been replaced with the ReactDOM line above

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
); 

*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals();
