import React, {useState} from 'react';
import { Image } from 'antd';
import './css/index.scss';
import logo from '../../../../assets/images/tasks.png';
import FormLogin from './component/LoginForm';


const Login = () => {
    
    const [ loading, setLoading ] = useState(false);
    const onFinish = () => {
    
    };
    
    return (
        <div className="container">
            <div className="divForm">
                <div className="logo">
                    <Image src={logo} preview={false}/>
                </div>
                <FormLogin loading={loading} onFinish={onFinish} />
            </div>
        </div>
    );
}

export default Login;
