import React from 'react';
import { Input, Button, Space } from 'antd';
import Highlighter from 'react-highlight-words';
import {SearchOutlined,} from '@ant-design/icons'

const state = {
	searchText: '',
	searchedColumn: '',
}

const setState = (searchText,searchedColumn) => {
	state.searchText = searchText;
	state.searchedColumn = searchedColumn;
}

const setStateText = (searchText) => {
	state.searchText = searchText;
}

export const getColumnSearchProps = dataIndex => ({
	filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
		<div style={{ padding: 8 }}>
			<Input
				placeholder={`Buscar`}
				value={selectedKeys[0]}
				onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
				onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
				style={{ width: 188, marginBottom: 8, display: 'block' }}
			/>
			<Space>
				<Button
					type="primary"
					onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
					icon={<SearchOutlined />}
					size="small"
				>
					Search
			</Button>
				<Button onClick={() => handleReset(clearFilters)} size="small" style={{ width: 90 }}>
					Reset
			</Button>
			</Space>
		</div>
	),
	filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
	onFilter: (value, record) =>
		record[dataIndex]
			? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase())
			: '',
	render: text =>
		state.searchedColumn === dataIndex ? (
			<Highlighter
				highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
				searchWords={[state.searchText]}
				autoEscape
				textToHighlight={text ? text.toString() : ''}
			/>
		) : (
			text
		),
});

const handleSearch = (selectedKeys, confirm, dataIndex) => {
	confirm();
	setState(selectedKeys[0],dataIndex);
};

const handleReset = clearFilters => {
	clearFilters();
	setStateText('');
};
