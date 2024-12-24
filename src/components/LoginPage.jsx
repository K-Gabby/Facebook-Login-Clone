import React from "react";
import LoginForm from "./LoginForm";
import "../styles/components/LoginPage.css";

const LoginPage = () => {
    return (
        <div className="login-page">
            <div className="login-conatiner">

                {/* Facebook Header (h1 and p) */}
                <h1 className="facebook-title">facebook</h1>
                <p className="facebook-description">
                Facebook helps you connect and share with the people in your life.
                </p>

                {/* Facebook Login Form */}
                <LoginForm />  
            </div>
        </div>
    );
}

export default LoginPage;