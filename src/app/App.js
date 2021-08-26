import React from "react";
import {Provider, useDispatch, useSelector} from "react-redux";
import {Redirect, Route, Switch, BrowserRouter} from 'react-router-dom';
import store from "./state/store/configStore";
import "react-toastify/dist/ReactToastify.css";
import Login from "./modules/users/login/Login";
import { ToastContainer, Slide } from "react-toastify";
import {getLoggedUser} from "./state/users/authentication/authenticationAction";


function App() {
    const userAuth = useSelector((state) => state['userAuth']);
    const dispatch = useDispatch();
    dispatch(
        getLoggedUser()
    );

  return (
    <>
        <ToastContainer
            position="top-right"
            autoClose={2000}
            hideProgressBar
            transition={Slide}
        />
        <Switch>
            <Route>
                <Login/>
            </Route>
        </Switch>
    </>
  );

}

export default App;
