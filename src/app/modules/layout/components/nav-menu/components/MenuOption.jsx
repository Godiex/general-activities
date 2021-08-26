import {Menu} from "antd";
import {DashboardOutlined, SettingOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";
import React from "react";
const { SubMenu } = Menu;

const MenuOption = () =>  {

	return <Menu  theme="dark" mode="inline">
		<Menu.Item key="1" icon={<DashboardOutlined />}>
			<Link to="/dashboard">Dashboard</Link>
		</Menu.Item>
		<SubMenu
			key="sub1"
			icon={
				<SettingOutlined />
			} title="Activities">

			<Menu.Item key="5">
				<Link to="/settings/general-activities">General Activities</Link>
			</Menu.Item>
		</SubMenu>
	</Menu>;
}
export default MenuOption;
