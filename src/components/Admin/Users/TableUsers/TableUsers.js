import React from "react";
import {
  Table,
  Button,
  Icon,
  TableHeaderCell,
  Tab,
  TableCell,
} from "semantic-ui-react";
import { map } from "lodash";
import "./TableUsers.scss";

export function TableUsers(props) {
  const { users, updateUser, onDeleteUser } = props;
  return (
    <Table className="table-users-admin">
      <Table.Header>
        <Table.Row>
          <TableHeaderCell>ID</TableHeaderCell>
          <TableHeaderCell>Username</TableHeaderCell>
          <TableHeaderCell>Email</TableHeaderCell>
          <TableHeaderCell>Nombre</TableHeaderCell>
          <TableHeaderCell>Apellidos</TableHeaderCell>
          <TableHeaderCell>Activo</TableHeaderCell>
          <TableHeaderCell>Staff</TableHeaderCell>
          <TableHeaderCell>Acciones</TableHeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {map(users, (user, index) => (
          <Table.Row key={index}>
            <TableCell>{user.id}</TableCell>
            <TableCell>{user.username}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.first_name}</TableCell>
            <TableCell>{user.last_name}</TableCell>
            <TableCell className="estado">
              {user.is_active ? <Icon name="check" /> : <Icon name="close" />}
            </TableCell>
            <TableCell className="estado">
              {user.is_staff ? <Icon name="check" /> : <Icon name="close" />}
            </TableCell>
            <TableCell>
              <Acciones
                user={user}
                updateUser={updateUser}
                onDeleteUser={onDeleteUser}
              />
            </TableCell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
}

function Acciones(props) {
  const { user, updateUser, onDeleteUser } = props;
  return (
    <Table.Cell textAlign="right">
      <Button icon onClick={() => updateUser(user)}>
        <Icon name="pencil" />
      </Button>
      <Button icon negative onClick={() => onDeleteUser(user)}>
        <Icon name="close" />
      </Button>
    </Table.Cell>
  );
}
