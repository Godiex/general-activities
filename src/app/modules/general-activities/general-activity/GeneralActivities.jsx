import React, {useEffect, Fragment, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {PageHeader, Table, Tag} from "antd";
import RegisterGeneralActivities from "./components/RegisterGeneralActivities";
import GeneralActivitiesDelete from "./components/GeneralActivitiesDelete";
import {GeneralActivitiesProvider} from "./components/GeneralActivitiesProvider";
import { getColumnSearchProps } from '../../../utils/filter-table/handleFilterTable';
import TooltipInfo from '../../../common/tooltip-info-component/TooltipInfo';
import { fetchAllActivatedUsers } from '../../../../redux/actions/Configuration/usersAction';
import {error, success} from "../../../utils/notification/Notification";
import UpdateGeneralActivities from "./components/UpdateGeneralActivities";
import EndActivities from "./components/EndActivity";
import {
	createGeneralActivity,
	fetchAllGeneralActivity,
	updateGeneralActivityById
} from '../../../state/general-activities/general-activity/generalActivityAction';


const GeneralActivities = () => {
	
	const columns = [
		{
			title: "#",
			width: 50,
			dataIndex: "id",
			key: "id",
			defaultSortOrder: 'descend',
			fixed: "left",
			sorter: (a, b) => a.id - b.id,
		},
		{
			title: "User Creator",
			width: 100,
			dataIndex: "creator",
			key: "creator",
			...getColumnSearchProps('creator'),
		},
		{
			title: "Activity",
			width: 150,
			dataIndex: "activity",
			key: "activity",
			...getColumnSearchProps('activity'),
		},
		{
			title: "Programed",
			dataIndex: "scheduled",
			key: "scheduled",
			width: 80,
			...getColumnSearchProps('scheduled'),
		},
		{
			title: "Commentary",
			dataIndex: "commentary",
			key: "commentary",
			width: 150,
			...getColumnSearchProps('commentary'),
		},
		{
			title: "User",
			dataIndex: "executing",
			key: "executing",
			width: 100,
			...getColumnSearchProps('executing'),
		},
		{
			title: "Days Expiration",
			dataIndex: "activity_status",
			key: "activity_status",
			width: 100,
			align: "center",
			fixed: "right",
			render: (_, record) => {
				return getTagDaysRemaining(record);
			},
		},
		{
			title: "Realized",
			dataIndex: "executing",
			key: "executing",
			align: "center",
			fixed: "right",
			width: 60,
			render: (_, record) => {
				return getEndActivity(record);
			},
		},
		{
			title: "Actions",
			key: "actions",
			width: 70,
			align: "center",
			fixed: "right",
			render: (_, record) => getActions(record)
		},
	];
	
	const dispatch = useDispatch();
	const [dataSource, setDataSource] = useState([]);
	const generalActivities = useSelector(state => state['generalActivity']);
	const [isModalVisible, setIsModalVisible] = useState(false);
	const modalTitle = {
		ADD: 'Create general activity',
		UPDATE: 'Update general activity'
	};
	
	const modalAction = {
		showModal : () => setIsModalVisible(true),
		closeModal : () => setIsModalVisible(false)
	};
	
	useEffect(() => {
		dispatch(fetchAllGeneralActivity())
		dispatch(fetchAllActivatedUsers())
	}, []);
	
	useEffect(() => {
		setDataSource(generalActivities);
	}, [generalActivities]);
	
	function getTagDaysRemaining(record) {
		if (record['done']) {
			return <Tag color={"blue"}> {record['activity_status']} </Tag>;
		} else {
			if (record['is_overdue'])
				return <Tag color={"red"}> {record['activity_status']} </Tag>;
			else
				return <Tag color={"green"}> {record['activity_status']} </Tag>;
		}
	}
	
	const getEndActivity = (record) => {
		if(!record['done'])
		{
			return <GeneralActivitiesProvider context={createDataContextToEndActivity(record['id'])}>
				<EndActivities />
			</GeneralActivitiesProvider>
		}
		return <span>12/08/2020</span>
	}
	
	const createDataContextToEndActivity = (id) => {
		return {
			onFinishUpdate,
			id
		}
	}
	
	const onFinishEndActivity = async (id,values) => {
		dispatch(
			updateGeneralActivityById(id,values, async (response) => {
				const res = await response;
				success(res['message']);
			}, async  (onError) => {
				const res = await onError;
				error(res['message']);
			})
		);
	}
	
	const getActions = (record) => {
		return <>
			<GeneralActivitiesProvider context={createDataContextToUpdate(record['id'])}>
				{"  "}
				{getDeleteGeneralActivities(record['id'])}
				{"  "}
				{getUpdateGeneralActivities(record)}
				{"  "}
				<TooltipInfo created_at={record.created_at} name={record.id} updated_at={record.updated_at}/>
			</GeneralActivitiesProvider>
		</>
	}
	
	const getDeleteGeneralActivities = (id) => {
		return <GeneralActivitiesDelete id={id} />;
	}
	
	const getUpdateGeneralActivities = (record) => {
		if(!record['done']){
			return <UpdateGeneralActivities title={'Update General Activity'} />;
		}
		return <></>
	}
	
	const createDataContextToUpdate = (id) => {
		let generalActivity = searchGeneralActivities(id);
		return {
			onFinishUpdate,
			generalActivity
		}
	}
	
	const searchGeneralActivities = (id) => {
		return dataSource?.find(x => x['id'] === id);
	}
	
	const onFinishUpdate = async (id,values) => {
		dispatch(
			updateGeneralActivityById(id,values, async (response) => {
				const res = await response;
				success(res['message']);
			}, async  (onError) => {
				const res = await onError;
				error(res['message']);
			})
		);
	}
	
	const getRegisterGeneralActivities = () => {
		return <>
			<GeneralActivitiesProvider context={onFinishRegister}>
				<RegisterGeneralActivities
					modalAction={modalAction}
					propsModal= {{title: modalTitle.ADD, isVisible: isModalVisible}}
				/>
			</GeneralActivitiesProvider>
		</>
	}
	
	const onFinishRegister = async (values) => {
		dispatch(
			createGeneralActivity(values, async (response) => {
				const res = await response;
				success(res['message']);
			}, async  (onError) => {
				const res = await onError;
				error(res['message']);
			})
		);
	}
	
	return (
		<>
			<Fragment>
				<PageHeader
					style={{border: "1px solid rgb(235, 237, 240);"}}
					title={"Generals Activities"}
					extra={
						getRegisterGeneralActivities()
					}
				/>
				<Table size='small' columns={columns} data={dataSource} x={1500} y={500}/>
			</Fragment>
		</>
	);
}

export default GeneralActivities;
