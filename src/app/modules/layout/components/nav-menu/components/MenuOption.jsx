import {Menu} from "antd";
import {DashboardOutlined, SettingOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";
import React from "react";

const MenuOption = (props) =>  {
	const { SubMenu } = Menu;
	
	return <Menu style={{background: `${props.colorStateMenu}`}} theme="dark" mode="inline">
		<Menu.Item key="1" icon={<DashboardOutlined style={{color: `${props.colorStateIcon}`}}/>}>
			<Link to="/dashboard">Dashboard</Link>
		</Menu.Item>
		<SubMenu
			style={{background: `${props.colorStateMenu}`}}
			key="sub1"
			icon={
				<SettingOutlined style={{color: `${props.colorStateIcon}`}}/>
			} title="Activities">
			<Menu.Item key="5">
				<Link to="/settings/general-activities">General Activities</Link>
			</Menu.Item>
		</SubMenu>
	</Menu>;
}
export default MenuOption;