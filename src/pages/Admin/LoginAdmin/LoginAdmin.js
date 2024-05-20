import React from "react";
import "./LoginAdmin.scss";
import { LoginForm } from "../../../components/Admin";

export function LoginAdmin() {
  return (
    <div className="login-admin">
      <div className="la-content">
        <h1>Gestión administrativa</h1>
        <LoginForm />
      </div>
    </div>
  );
}
