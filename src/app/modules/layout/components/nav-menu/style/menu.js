import {EditOutlined, DeleteOutlined, PlusOutlined, InfoOutlined} from "@ant-design/icons";

const baseButton = {
	type : 'primary',
	size : "small",
}

export const add = {
	...baseButton,
	icon :  <PlusOutlined />
}

export const update = {
	...baseButton,
	style : {background: '#ffa247', borderColor: '#ffa247'},
	icon :  <EditOutlined />
}

export const remove = {
	...baseButton,
	danger: true,
	icon : <DeleteOutlined />
}

export const info = {
	...baseButton,
  icon: <InfoOutlined size='small' />,
}