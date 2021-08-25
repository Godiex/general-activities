import React, {useEffect, useState} from 'react';
import {Tabs, Typography, Divider, Table, Tag} from 'antd';
import {getColumnSearchProps} from "../../../utils/filter-table/handleFilterTable";
import {useDispatch, useSelector} from "react-redux";

const {Text} = Typography;

const PaginationTables = () => {

	const dispatch = useDispatch();
	
	const generalActivitiesTracking = [
		{
			title: '#',
			width: 100,
			dataIndex: 'id',
			key: 'id',
			defaultSortOrder: 'descend',
			sorter: (a, b) => a.id - b.id,
		},
		{
			title: 'Usuario Creador',
			width: 100,
			dataIndex: 'usuarioCreador',
			key: 'usuarioCreador',
			...getColumnSearchProps('usuarioCreador'),
		},
		{
			title: 'Actividad',
			dataIndex: 'actividad',
			key: 'actividad',
			width: 150,
			...getColumnSearchProps('actividad'),
		},
		{
			title: 'Fecha Programada',
			dataIndex: 'fechaProgramada',
			key: 'fechaProgramada',
			width: 150,
			...getColumnSearchProps('fechaProgramada'),
		},
		{
			title: 'Días Vencimiento',
			dataIndex: 'diasVencimiento',
			key: 'diasVencimiento',
			width: 150,
			...getColumnSearchProps('diasVencimiento'),
		},
		{
			title: 'Usuario',
			dataIndex: 'usuario',
			key: 'usuario',
			width: 150,
			...getColumnSearchProps('usuario'),
		},
		{
			title: 'Acciones',
			key: 'acciones',
			fixed: 'right',
			width: 80,
			// render: () => <a>action</a>,
		}
	];

	const {TabPane} = Tabs;
	return (
		<Divider orientation="left">Tables</Divider>,
			<Tabs defaultActiveKey="1">
				<TabPane
					tab={
						<span>
              General Activities Tracking
            </span>
					}
					key="3"
				>
					<Table columns={generalActivitiesTracking} data={null} y={400}/>
				</TabPane>
			</Tabs>
	);
}

export default PaginationTables;