import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/app/includes/antd';
import '../src/app/includes/bootstrap';
import '../src/app/includes/css/main.css';
import '../src/app/includes/css/util.css';
import '../src/index.scss';
import store from "./app/state/store/configStore";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <BrowserRouter>

          </BrowserRouter>
      </Provider>
      <App />
  </React.StrictMode>,
  document.getElementById('root')
);

