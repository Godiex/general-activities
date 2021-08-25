import { notification } from "antd";

export const openNotificationWithIcon = (type,message) => {
	notification[type]({
		message: `${type}:`,
		description:
		`${ message.toString()}` 
	});
};

export const success = (text) => {
	openNotificationWithIcon('success',text);
}

export const error = (text) => {
	openNotificationWithIcon('error', text);
}

export const warning  = ( text ) => {
	openNotificationWithIcon('warning', text)
}
