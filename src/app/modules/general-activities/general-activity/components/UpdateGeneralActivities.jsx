import React, { useState} from 'react';
import { Button, Modal } from 'antd';
import {validatePermission} from "../../../handle/PermissionMethods/PermissionMethods";
import * as constants from "../../../../state/constants/constantActions";
import {EditOutlined} from '@ant-design/icons';
import GeneralActivitiesForm from "./GeneralActivitiesForm";

const  UpdateGeneralActivities = ({title}) => {

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
				title={title}
				visible={isModalVisible}
				onCancel={handleCancel}
			>
				<GeneralActivitiesForm onClose={onClose} textAction={'Actualizar'} />
			</Modal>
		</>
	);
}


export default UpdateGeneralActivities;