import React, {Fragment} from "react";
import {PageHeader} from "antd";

const PageHeaderComponent = (props) => {
	return (
		<Fragment>
			<PageHeader
				style={{border: "1px solid rgb(235, 237, 240)"}}
				title={props.name}
			>
			</PageHeader>
		</Fragment>
	);
};

export default PageHeaderComponent;
