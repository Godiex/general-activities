import './App.css';
import {Provider, useSelector} from "react-redux";
import {Redirect, Route, Switch, BrowserRouter} from 'react-router-dom';
import ConfigStore from "./state/store/configStore";
import Login from "./modules/users/login/Login";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, Slide } from "react-toastify";
import './includes/antd';
import './includes/bootstrap';

function App() {
  //const userAuth = useSelector((state) => state['userAuth']);
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar
        transition={Slide}
      />
      <BrowserRouter>
        <Switch>
          <Route>
            <Login />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
