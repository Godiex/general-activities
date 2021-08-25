import React from "react";
import { Layout } from "antd";
import {
	Row,
	Col,
	Button,
} from "antd";
import { PoweroffOutlined } from "@ant-design/icons";
import "../../css/layout.scss";

const { Header } = Layout;
const HeaderComponent = ({ isLoggedIn, onLogout, userName }) => {
	
	return (
		<Header
			className="header"
			theme="light"
			style={{ position: "fixed", zIndex: 102, width: "100%", marginLeft: 80 }}
		>
			<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
				<Col xs={4} sm={4} md={4} lg={6} xl={6} />
				<Col className="gutter-row" span={8}>
					<div
						alignItems={"center"}
						style={{ float: "right" }}
					>
						<h6 className="p-3" style={{ display: "inline" }}>
							{userName}
						</h6>
						{isLoggedIn && (
							<Button
								onClick={onLogout}
								style={{
									marginLeft: 5,
									marginRight: 10,
									background: "none",
									border: "none",
								}}
								shape="circle"
								icon={<PoweroffOutlined style={{ fontSize: 20 }} />}
							/>
						)}
					</div>
				</Col>
			</Row>
		</Header>
	);
};
export default HeaderComponent;
