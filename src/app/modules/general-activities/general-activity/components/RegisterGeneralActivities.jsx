import React from 'react';
import { Button } from 'antd';
import GeneralActivitiesForm from "./GeneralActivitiesForm";
import {add} from "../../../../utils/styles/actionButton";
import ModalComponent from "../../../../common/modal-component/ModalComponent";

const RegisterGeneralActivities = ({modalAction,propsModal}) => {
	
	return (
		<>
			<Button {...add} onClick={modalAction.showModal()}> New </Button>
			<ModalComponent
				footer={false}
				title={propsModal.title}
				visible={propsModal.isVisible}
				onCancel={modalAction.closeModal()}
			>
				<GeneralActivitiesForm onClose={modalAction.onClose} textAction={'Create'} />
			</ModalComponent>
		</>
	);
}


export default RegisterGeneralActivities;
