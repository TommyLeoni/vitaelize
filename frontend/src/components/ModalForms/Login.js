import React from 'react';
import './ModalForms.css';

function Login(){

    return (
        <div>
            <h4 className="display-5 ">Login</h4>
            <form>
                <div className="form-group">
                    <label htmlFor="EmailLog">Email address</label>
                    <input type="email" className="form-control" id="EmailLogin"
                           aria-describedby="emailHelp" placeholder="Enter email"/>
                </div>
                <div className="form-group">
                    <label htmlFor="PasswordLogin">Password</label>
                    <input type="password" className="form-control" id="PasswordLog"
                           placeholder="Enter password"/>
                </div>
                <button type="submit" className="btn btn-vitaelize mt-3 mb-2">Login</button>
            </form>
        </div>
    );
}

export default Login;