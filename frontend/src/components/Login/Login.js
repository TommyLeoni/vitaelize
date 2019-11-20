import React, {Component} from 'react';

function Login() {
    return (
        <div className="pr-4 pl-4 pb-4">
            <h4 className="display-4">Login</h4>
            <form>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1"
                           aria-describedby="emailHelp" placeholder="Enter email"/>
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with
                            anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1"
                           placeholder="Password"/>
                </div>
                <button type="submit" className="btn btn-vitaelize mt-4">Submit</button>
            </form>
        </div>
    );
}

export default Login;