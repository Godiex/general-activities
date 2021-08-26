import React, {useState} from 'react';
import { Image } from 'antd';
import './css/index.scss';
import logo from '../../../../assets/images/base-logo.png';

import FormLogin from './component/LoginForm';
import {warning, success} from "../../../utils/notification/Notification";
import {login} from "../../../state/users/authentication/authenticationAction";
import {useDispatch, useSelector} from "react-redux";

const Login = () => {
    const dispatch = useDispatch();

    const onFinish = (data, setLoading) => {
        dispatch(
            login(data, () => {
                success('Session initialized successfully');
                setLoading(false);
            },  () => {
                warning('It has not been possible to log in');
                setLoading(false);
            })
        );
    };
    
    return (
        <div className="wallpaper">
            <div className="divForm">
                <div className="logo">
                    <Image src={logo} preview={false}/>
                </div>
                <FormLogin onFinish={onFinish} />
            </div>
        </div>
    );
}

export default Login;
