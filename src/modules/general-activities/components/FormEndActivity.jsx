import { Form, Input, Button, Row, Col } from 'antd';
import React, {useContext} from "react";
import {GeneralActivitiesContext} from "./GeneralActivitiesProvider";

const FormEndActivities = ({onClose}) => {

	const [form] = Form.useForm();
	const  {context}  = useContext(GeneralActivitiesContext);
	const onFinish = context.generalActivity ? context.onFinishUpdate : context;
	const validateMessages = { required: '${label} es requerido'};
	const onReset = () => form.resetFields();

	const onAccept = async () => {
		let values = await getDataForm();
		await onFinish(values);
		onClose();
		onReset();
	}
	
	const getDataForm = async () => {
		return await form.validateFields();
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
				<Row gutter={48}>
					<Col xs={24} sm={24} md={24} lg={24} xl={24}>
						<Form.Item
							label="Comentario"
							name="commentary"
							rules={[{ required: true }]}>
							<Input.TextArea/>
						</Form.Item>
					</Col >
				</Row>
				<Row>
					<Form.Item >
						<Button type="primary" htmlType="submit" >
							Guardar
						</Button>
					</Form.Item>
				</Row>
			</Form>
		</>
	);
}

export default FormEndActivities;