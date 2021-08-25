import React, { Fragment } from "react";
import { Layout, Card } from "antd";
import Slider from "./components/Slider";
import PaginationTables from "./components/PaginationTables";
import PageHeaderComponent from "./components/PageHeader";

const Dashboard = () => {
	return(
		<Fragment>
			<Card>
				<PageHeaderComponent name="Dashboard" />
				<Slider/>
				<br/><br/>
				<Layout style={{ padding: 20 }}> <PaginationTables /> </Layout>
			</Card>
		</Fragment>
	);
}

export default Dashboard;
