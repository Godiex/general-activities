import {Button, Card, Form, Input} from "antd";
import Spinner from "../../../../common/spinner/Spinner";
import React from "react";

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

const FormLogin = ({loading, onFinish}) => {
	
	const [form] = Form.useForm();
	const validateMessages = {
		required: '$/{label} is required',
		types: {
			email: '$/{label} it is not a valid email',
			password: '$/{label} only number'
		}
	};
	
	const onLogin = () => {
		let data = getDataForm();
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
				rules={[
					{
						required: true
					}
				]}
			>
				<Input
					defaultValue=""
					placeholder="Email"
					name="email"
				/>
			</Form.Item>
			<Form.Item
				name="password"
				rules={[
					{
						required: true
					}
				]}
			>
				<Input.Password
					defaultValue=""
					placeholder="Password"
				/>
			</Form.Item>
			{<Form.Item {...tailLayout}>
				<Button disabled={loading} className="btnLogin" htmlType="submit">
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