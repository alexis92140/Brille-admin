import {
  BooleanField,
  Datagrid,
  EmailField,
  FunctionField,
  Identifier,
  List,
  ListProps,
  NumberField,
  Record,
  TextField,
} from "react-admin";
import BooleanNumField from "./BooleanNumField.jsx";

type recordType = {
  admin: boolean;
  id?: Identifier | undefined;
};

const UserList = (props: ListProps) => {
  return (
    <List {...props}>
      <Datagrid rowClick="edit">
        <NumberField source="id" sortBy="users.id" />
        <TextField source="firstname" />
        <TextField source="lastname" />
        <TextField source="phone" />
        <EmailField source="email" />
        <TextField source="created" />
        <TextField source="modified" />
        <BooleanNumField source="admin" />
      </Datagrid>
    </List>
  );
};

export default UserList;
