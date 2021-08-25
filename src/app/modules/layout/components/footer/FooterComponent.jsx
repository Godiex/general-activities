import React from 'react'
import { Layout } from "antd";
const { Footer } = Layout;

const FooterComponent = () => {
    return (
        <Footer style={
        { 
            textAlign: "center", 
            color: '#fff', 
            backgroundColor: '#212529',
            width: "100%",
            height: 48,
            position: 'fixed',
            bottom: 0,
            zIndex:99,
        }
        }>
           © 2014-2021 GPI Constructores. Todos los derechos Reservados.
        </Footer>
    );
    
}
export default FooterComponent;