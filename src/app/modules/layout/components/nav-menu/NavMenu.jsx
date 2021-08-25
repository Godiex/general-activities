import { Layout,Image  } from "antd";
import React, { useState } from "react";
import "./../css/layout.css";
import logo from "../../../../includes/images/logo.png";
import MenuOption from "./components/MenuOption";

const { Sider } = Layout;

const NavMenu = () => {
	const [collapsed, setCollapsed] = useState(true);
	
	const onCollapse = () => {
		setCollapsed(!collapsed);
	}
	const [colorStateMenu, setColorStateMenu] = useState('faff')
	
	return (
		<Layout>
			<Sider
				style={{
					overflow: "auto",
					height: "93vh",
					position: "fixed",
					left: 0,
					paddingTop: 2,
					zIndex: 202,
					background: `${colorStateMenu}`
				}}
				collapsible
				className="menu"
				collapsed={collapsed}
				onCollapse={onCollapse}
				
			>
				<div className="logo">
					<Image
						width='100%'
						src={logo}
						preview={false}
					/>
				</div>
				<MenuOption />
			</Sider>
		</Layout>
	);
};
export default NavMenu;