import {Button, Card, Form, Input} from "antd";
import Spinner from "../../../../common/spinner/Spinner";
import React, {useState} from "react";
import { buttonPrimary } from "../../../../utils/styles/button";

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

const FormLogin = ({onFinish}) => {
	
	const [form] = Form.useForm();
	const [ loading, setLoading ] = useState(false);
	const validateMessages = {
		required: '${label} is required',
		types: {
			email: '${label} is not a valid email!',
		}
	};
	
	const onLogin = async ()  => {
		let data = await getDataForm();
		setLoading(true);
		onFinish(data, setLoading);
	}
	
	const getDataForm = async () => {
		return await form.validateFields();
	}
	
	return (
		<Form
			validateMessages={validateMessages}
			form={form}
			className="form"
			{...layout}
			name="login"
			layout="vertical"
			onFinish={onLogin}
		>
			<Form.Item
				label={'Email'}
				name='email'
				defaultValue=""
				rules={[
					{
						required: true,
						type: 'email'
					}
				]}
			>
				<Input
					placeholder="Email"
					name="email"
				/>
			</Form.Item>
			<Form.Item
				defaultValue=''
				label={'Password'}
				name="password"
				rules={[
					{
						required: true
					}
				]}
			>
				<Input.Password  placeholder="Password" />
			</Form.Item>
			{<Form.Item {...tailLayout}>
				<Button {...buttonPrimary} className={'btnLogin'} disabled={loading} htmlType="submit">
					Log in
				</Button>
			</Form.Item>}
			<Form.Item>
				{(loading) ? <Card bordered={false}>
					<Spinner/>
				</Card> : null}
			</Form.Item>
		</Form>
	);
}

export default FormLogin;
