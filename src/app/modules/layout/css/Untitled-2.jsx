import React, { useState }  from "react";
import { connect } from 'react-redux';
import {toast} from 'react-toastify'
import {Form, Button, Container, Row, Col, Image} from 'react-bootstrap';

import {createUser} from '../../../../../state/actions/usersAction'

import avatar from './../../../../../includes/images/avatar.svg'
import '../css/index.scss'

const FormUser = ({history, dispatchCreateUsersAction}) => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [repeatpassword, setRepeatpassword] = useState('');
	const [telefono, setTelefono] = useState('');
	const [email, setEmail] = useState('');
	const [perfil, setPerfil] = useState('');
	const [empresasAsociadas, setEmpresasAsociadas] = useState('');
	const [estado, setEstado] = useState(Boolean);
	const [uploadAvatar, setUploadAvatar] = useState('');

	const handleOnSubmit = event => {
		event.preventDefault();
		const data= {username, password, repeatpassword, telefono, email, perfil, empresasAsociadas, estado, uploadAvatar}
		dispatchCreateUsersAction(data, () => {
			toast.success('Usuario Creado');
			history.replaceState('/settings/users');
		}, (message) => toast.error(`Error: ${message}`));
	}

	return (
		<>
		<Form
			onSubmit={handleOnSubmit}
		>
			<Container>
				<Row>
					<Col sm={12} lg={3}>
						<Form.Group>
							<div className="avatar-contenedor">
								<Image className="avatar-img" src={avatar} roundedCircle fluid />
							</div>
							<br />
							<Form.Group>
								<Form.File 
									id="upload_Avatar" 
									name="uploadAvatar"
									value={uploadAvatar}
									onChange={(e) => setUploadAvatar(e.target.value)}
								/>
							</Form.Group>
						</Form.Group>
					</Col>
					<Col span={8}>
						<Row>
							<Col sm={12} lg={6}>
								<Form.Group>
									<Form.Label>Nombre de Usuario</Form.Label>
									<Form.Control 
										size="sm" 
										type="text"
										name="username"
										value={username}
										onChange={(e) => setUsername(e.target.value)}
									/>
								</Form.Group>
							</Col>
							<Col sm={12} lg={6}>
								<Form.Group>
									<Form.Label>Email</Form.Label>
									<Form.Control 
										size="sm" 
										type="email"
										name="email"
										value={email}
										onChange={(e) => setEmail(e.target.value)}
									/>
								</Form.Group>
							</Col>
						</Row>
						<Row>
							<Col sm={12} lg={4}>
								<Form.Group>
									<Form.Label>Contrase??a</Form.Label>
									<Form.Control 
										size="sm" 
										type="password"
										name="password"
										value={password}
										onChange={(e) => setPassword(e.target.value)}
									/>
								</Form.Group>
							</Col>
							<Col sm={12} lg={4}>
								<Form.Group>
									<Form.Label>Repetir Contrase??a</Form.Label>
									<Form.Control 
										size="sm" 
										type="password"
										name="repeatpassword"
										value={repeatpassword}
										onChange={(e) => setRepeatpassword(e.target.value)}
									/>
								</Form.Group>
							</Col>
							<Col sm={12} lg={4}>
								<Form.Group>
									<Form.Label>Tel??fono</Form.Label>
									<Form.Control 
										size="sm" 
										type="number"
										name="telefono"
										value={telefono}
										onChange={(e) => setTelefono(e.target.value)}
									/>
								</Form.Group>
							</Col>
						</Row>
						<Row>
							<Col sm={12} lg={6}>
								<Form.Group>
									<Form.Label>Perfil</Form.Label>
									<Form.Control 
										size="sm" 
										as="select"
										name="perfil"
										value={perfil}
										onChange={(e) => setPerfil(e.target.value)}
									>
										<option disabled >Select...</option>
										<option>Small select</option>
										<option>Small select</option>
										<option>Small select</option>
									</Form.Control>
								</Form.Group>
							</Col>
							<Col sm={12} lg={6}>
								<Form.Group>
									<Form.Label>Empresas Asociadas</Form.Label>
									<Form.Control 
										size="sm" 
										as="select"
										name="empresasAsociadas"
										value={empresasAsociadas}
										onChange={(e) => setEmpresasAsociadas(e.target.value)}
									>
										<option disabled >Select...</option>
										<option>Small select</option>
										<option>Small select</option>
										<option>Small select</option>
									</Form.Control>
								</Form.Group>
							</Col>
						</Row>
					</Col>
				</Row>
				<Row>
					<Col sm={12} lg={{ span: 1, offset: 9 }}>
						<Form.Group>
							<Form.Check 
								type="checkbox" 
								label="Activo" 
								name="estado"
								value={estado}
								onChange={(e) => setEstado(e.target.value)}
							/>
						</Form.Group>
					</Col>
					<Col sm={12} lg={2}>
						<Button variant="primary" type="submit" >
							Guardar
						</Button>
					</Col>
				</Row>
			</Container>
		</Form>
		</>
	);
};


const mapDispatchToProps = dispatch => ({
	dispatchCreateUsersAction: (data, onSuccess, onError) =>
		dispatch(createUser(data, onSuccess, onError))
})
export default connect(null, mapDispatchToProps)(FormUser)
