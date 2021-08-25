import React, {useState} from 'react';
import {Card, Form, Input, Button, Image} from 'antd';
import './css/index.scss';
import logo from '../../../includes/images/logo.png';

const layout = {
    labelCol: {
        span: 5,
        offset: 2,
    },
    wrapperCol: {
        span: 5,
        offset: 2,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 2,
        span: 5,
    },
};

const ipv4 = localStorage.getItem("IP");

const LoginForm = ({dispatchLoginAction}) => {
    const [stateLogin, setStateLogin] = useState(false);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [ip, setIp] = useState(ipv4);

    const handleOnSubmit = (event) => {
        setStateLogin(true);
        event.preventDefault();
        if (email != '' || password != '') {
            dispatchLoginAction(email, password, ip, (response) => {

                    if (response.error) {
                        errorGlobal('Ha ocurrido un error, Verifique su Correo o Contraseña');
                        setStateLogin(false);

                        return;
                    }
                    success("Bienvenido")
                }
            )
        } else {
            toast.info('Ops!, estan vacios');
            setStateLogin(false);
        }
    };
    const validateMessages = {
        required: '${placeholder} es requerido',
        types: {
            email: '${placeholder} no es un correo valido',
            password: '${placeholder} debe ser un numero'

        }
    };
    return (
        <div className="container">
            <div className="divForm">
                <div className="logo">
                    <Image
                        src={logo}
                        preview={false}
                    />
                </div>
                <Form
                    onSubmitCapture={handleOnSubmit}
                    validateMessages={validateMessages}
                    className='form'
                    {...layout}
                    name="login"
                    layout="vertical"
                >
                    <Form.Item
                        rules={[
                            {
                                required: true
                            }]}
                    >
                        <Input
                            defaultValue=''
                            placeholder='Email'
                            name="email"
                            valuePropName={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Form.Item>

                    <Form.Item
                        rules={[
                            {
                                required: true
                            }
                            ]}
                    >
                        <Input.Password
                            defaultValue=''
                            placeholder='Password'
                            name="password"
                            valuePropName={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Item>
                    {<Form.Item {...tailLayout}>
                        <Button disabled={stateLogin} className='btnLogin' htmlType="submit">
                            Log in
                        </Button>
                    </Form.Item>}
                    <Form.Item>
                        {(stateLogin) ? <Card bordered={false}>
                            <Spinner/>
                        </Card> : null}
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
}

export default LoginForm;
