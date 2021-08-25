import { Form, Input, Button, Row, Col, DatePicker, Select } from 'antd';
import { dateFormat } from '../../../../utils/date/handleDate';
import {Option} from "antd/es/mentions";
import React, {useContext, useEffect} from "react";
import {useSelector} from "react-redux";
import moment from "moment";
import {GeneralActivitiesContext} from "./GeneralActivitiesProvider";

const config = {
	rules: [
		{
			type: 'object',
			required: true,
			message: 'Please select one option !',
		},
	],
};

const GeneralActivitiesForm = ({textAction, onClose}) => {

	const [form] = Form.useForm();
	const  {context}  = useContext(GeneralActivitiesContext);
	const onFinish = context.generalActivity ? context.onFinishUpdate : context;
	const validateMessages = { required: `$\{label} es required`};
	const users = useSelector(state => state['users']);
	const onReset = () => form.resetFields();

	useEffect(() => {
		if(context.generalActivity != null || context.generalActivity !== undefined){
			fillFields();
		}
	}, [context.generalActivity]);

	const fillFields = () => {
		form.setFieldsValue({
			scheduled: moment(context.generalActivity.scheduled),
			activity: context.generalActivity.activity,
			user_id: context.generalActivity['executing_user_id'],
		})
	}

	const onAccept = async () => {
		let values = await getDataForm();
		if(isActionRegister()){
			await onFinish(values);
			onClose();
			onReset();
		}
		else {
			await onFinish(context.generalActivity.id, values);
			onClose();
		}
	}

	const isActionRegister = () => {
		return !context.generalActivity;
	}

	const getDataForm = async () => {
		const values = await form.validateFields();
		return {
			...values,
			scheduled : values['scheduled'].format(dateFormat)
		}
	}

	return (
		<>
			<Form
				validateMessages={validateMessages}
				form={form}
				onFinish={onAccept}
				layout="vertical"
				style={{ height: '100%', width: "100%" }}
			>
				<Row gutter={16}>
					<Col xs={24} sm={24} md={12} lg={12} xl={12}>
						<Form.Item
							name="user_id"
							label="User Assigned"
							rules={[{ required: true }]}
						>
							<Select
								showSearch
								style={{ width: '100%' }}
								placeholder="select a user"
								optionFilterProp="children"
								filterOption={(input, option) =>
									option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
								}
							>
								<Option value="">Select...</Option>
								{!Array.isArray(users) &&	users['_payload']?.map((item) => (
									<Option value={item.id}>{item.name}</Option>
								))}
							</Select>
						</Form.Item>
					</Col>
					<Col xs={24} sm={24} md={12} lg={12} xl={12}>
						<Form.Item name='scheduled'
											 label="Date expiration activity"
											 {...config}
											 rules={[{ required: true, message: 'date expiration is required', }]}>
							<DatePicker format={dateFormat} />
						</Form.Item>
					</Col>
				</Row>
				<Row gutter={16}>
					<Col xs={24} sm={24} md={12} lg={12} xl={12}>
						<Form.Item
							label="Activity"
							name="activity"
							rules={[{ required: true }]}>
							<Input.TextArea/>
						</Form.Item>
					</Col >
				</Row>
				<Row>
					<Form.Item >
						<Button type="primary" htmlType="submit" >
							{textAction}
						</Button>
					</Form.Item>
				</Row>
			</Form>
		</>
	);
}

export default GeneralActivitiesForm;