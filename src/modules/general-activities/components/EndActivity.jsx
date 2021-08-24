import { Button, Modal } from 'antd';
import React, {useState} from "react";
import { EditOutlined } from "@ant-design/icons";
import { validatePermission } from "../../../../handle/PermissionMethods/PermissionMethods";
import * as constants from "../../../../../redux/constants";
import FormEndActivities from "./FormEndActivity";

const EndActivities = () => {
	
	const [isModalVisible, setIsModalVisible] = useState(false);
	const showModal = () => setIsModalVisible(true);
	const handleCancel = () => setIsModalVisible(false);
	const onClose = () => setIsModalVisible(false);

	if (!validatePermission(constants.CREATE_GENERAL_ACTIVITY_PERMISSION)) {
		return <></>;
	}

	return (
		<>
			<Button
				type={'primary'}
				style={{background: '#ffa247', borderColor: '#ffa247'}}
				size="small" onClick={showModal}
				icon={<EditOutlined/>}
			/>
			<Modal
				footer={false}
				title={'Finalizar Actividad General'}
				visible={isModalVisible}
				onCancel={handleCancel}
			>
				<FormEndActivities onClose={onClose} />
			</Modal>
		</>
	);
}

export default EndActivities;