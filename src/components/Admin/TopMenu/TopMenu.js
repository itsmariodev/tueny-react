import React from "react";
import { Icon, Menu } from "semantic-ui-react";
import { useAuth } from "../../../hooks";
import "./TopMenu.scss";

export function TopMenu() {
  const { auth, logout } = useAuth();

  const renderNombre = () => {
    if (auth.me?.first_name || auth.me?.last_name) {
      return `${auth.me.first_name} ${auth.me.last_name}`;
    }
    return auth.me?.username;
  };
  return (
    <Menu fixed="top" className="top-menu-admin">
      <Menu.Item className="top-menu-admin-logo">
        <p>Tueny Admin</p>
      </Menu.Item>

      <Menu.Menu position="right">
        <Menu.Item>Hola, {renderNombre()}</Menu.Item>
        <Menu.Item onClick={logout}>
          <Icon name="sign-out" />
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
}
