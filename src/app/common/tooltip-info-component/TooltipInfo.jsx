import React from 'react';
import { Button,Tooltip } from "antd";
import { getFormatDate } from '../../utils/date/handleDate';
import {info} from "../../utils/styles/buttonsCrud";

export const TooltipInfo = (record) => {
		let createdAt = getFormatDate(record.created_at);
		let updatedAt = getFormatDate(record.updated_at);
		const text = <span style={{ color: '#6A6963' }}> {record.name} <hr /> Created: {createdAt} <br />  Updated: {updatedAt} </span>
		return ( 
			<>
				<Tooltip placement="left" color='#ffffff' title={text}>
					<Button {...info}/>
				</Tooltip>
			</>
		);
}

export default TooltipInfo;
