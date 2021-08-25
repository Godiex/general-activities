import React, {useContext, useState} from "react";
import { message, Popconfirm, Tooltip, Button } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { GeneralActivitiesContext } from "./GeneralActivitiesProvider";
import { QuestionCircleOutlined } from '@ant-design/icons';
import { deleteGeneralActivityById } from '../../../../state/actions/Configuration/GeneralActivityAction';
import {useDispatch} from "react-redux";
import { errorGlobal, warning, success } from "../../../handle/Notification/Notification";

const GeneralActivitiesDelete = ({id}) => {
	const dispatch = useDispatch();

	function cancel(e) {
		warning('Operacion Cancelada');
	}

	const textDelete= <span	style={{color:'#6A6963'}}>Eliminar</span>
	const deleteGeneralActivity = () =>{
		dispatch(
			deleteGeneralActivityById(id, async (response) => {
				const res = await response;
				if (res.error) {
					errorGlobal(res['message']);
				} else {
					success(res['message']);
				}
			})
		);
	}
	return(
		<>
			<Tooltip placement="left" color='#ffffff'  title={textDelete} >
				<Popconfirm
					title={`¿ Desea eliminar esta acitivdad? `}
					onConfirm={deleteGeneralActivity}
					onCancel={cancel}
					okText="Si"
					cancelText="No"
					icon={<QuestionCircleOutlined style={{ color: 'red' }} />}
				>
					<Button icon={ <DeleteOutlined /> } type='primary' size='small' danger></Button>
				</Popconfirm>
			</Tooltip>
		</>
	);
}

export default GeneralActivitiesDelete;