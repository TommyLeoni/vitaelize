import React from 'react';
import './ModalForms.css';

function Registration(){

    return (
        <div>
            <h4 className="display-5">Registration</h4>
            <form>
                <div className="form-group">
                    <label htmlFor="EmailReg">Email address</label>
                    <input type="email" className="form-control" id="EmailReg"
                           aria-describedby="emailHelp" placeholder="Enter email"/>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with
                        anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="PasswordReg">Password</label>
                    <input type="password" className="form-control" id="PasswordReg"
                           placeholder="Enter password"/>
                </div>
                <div className="form-group">
                    <label htmlFor="RetypePassword">Retype Password</label>
                    <input type="password" className="form-control" id="RetypePassword"
                           placeholder="Re-enter password"/>
                </div>
                <button type="submit" className="btn btn-vitaelize mt-4">Register</button>
            </form>
        </div>
    );
}

export default Registration;