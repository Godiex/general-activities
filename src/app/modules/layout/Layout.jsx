import React, { Fragment } from "react";
import { connect } from 'react-redux';
import { Layout } from "antd";
import NavMenu from "./components/nav-menu/NavMenu";
import FooterComponent from "./components/footer/FooterComponent";
import HeaderComponent from "./components/header/HeaderComponent";
import { useDispatch } from 'react-redux';

import { logoutUser } from '../../../state/actions/Configuration/authAction'

import Routes from '../../config/router/Routes'

const { Content } = Layout;

const LayoutComponent = ({user, dispatchLogoutAction}) => {

	const dispatch = useDispatch();
	
	return (
		<Fragment>
			<Layout>
				<NavMenu/>
				<Layout>
					<HeaderComponent 
						isLoggedIn={user.isLoggedIn} 
						onLogout={dispatchLogoutAction} 
						userName={user.name}
					/>
					<Content
						style={{
							padding: "93px 30px 50px 100px",
							overflow: "initial",
						}}
					>
						<Routes />
					</Content>
					<FooterComponent />
				</Layout>
			</Layout>
		</Fragment>
	);
};

const mapStateToProps = (state) => ({ user: state.user });
const mapDispatchToProps = (dispatch) => ({
	dispatchLogoutAction: () => dispatch(logoutUser())
});
export default connect(mapStateToProps, mapDispatchToProps)(LayoutComponent);
