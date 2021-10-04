import React from 'react';
import './Login.css';
import logo from './logo.png'

const Login = () => {
    return(
        <>
        <div className="container">
            <div className="box">
                <div className="logo_box">
                    <div className="logo_img">
                    <img src={logo} alt="logo" />
                    <h3 style={{color:"	#000080",fontSize:"30px"}}>SUMEDHA</h3>
                    </div>
                </div>
                <div className="input_box">
                    <label htmlFor="">UserName</label>
                    <input type="text"  />
                    <label htmlFor="">Passworde</label>
                    <input type="text" />
                </div>
                <button style={{backgroundColor:"#000080", color:"white"}}>Login</button>
            </div>  
        </div>
        </>
    )
}
export default Login;