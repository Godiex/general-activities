import { Button, Modal } from 'antd';
import {add} from "../../utilities/styles/buttonsCrud";

const ModalComponent = ({action, propsModal, component}) => {
	
	return (
		<>
			<Modal
				footer={false}
				title={propsModal.title}
				visible={propsModal.isVisible}
				onCancel={action.closeModal()}
				destroyOnClose={true}
			>
				{component}
			</Modal>
		</>
	);
}


export default ModalComponent;