import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { HashRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import "react-image-gallery/styles/css/image-gallery.css";
import { createBrowserHistory } from 'history';
import configureStore from './store/ConfigureStore';
import { Provider } from 'react-redux';

const store = configureStore();
const history = createBrowserHistory({ basename: '/' });

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>
    ,document.getElementById('root'));
  
  
  serviceWorker.unregister();