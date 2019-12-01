import React, { Component } from "react";

const Auth = () => {
    return (
        <div className="container p-5">
            <form className="form-signin ">
                <img
                    className="mb-4"
                    src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg"
                    alt=""
                    width="72"
                    height="72"
                />
                <h1 className="h3 mb-3 text-center font-weight-normal">
                    Please sign in
                </h1>
                <label for="inputEmail" className="sr-only">
                    Email address
                </label>
                <input
                    type="email"
                    id="inputEmail"
                    className="form-control mb-4"
                    placeholder="Email address"
                    required=""
                    autofocus=""
                />
                <label for="inputPassword" className="sr-only">
                    Password
                </label>
                <input
                    type="password"
                    id="inputPassword"
                    className="form-control mb-4"
                    placeholder="Password"
                    required=""
                />
                <div className="checkbox mb-3">
                    <label>
                        <input type="checkbox" value="remember-me" />
                        testeee
                    </label>
                </div>
                <button
                    className="btn btn-lg btn-primary btn-block"
                    type="submit"
                >
                    Sign in
                </button>
            </form>
        </div>
    );
};

export default Auth;
