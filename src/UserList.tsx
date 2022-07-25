import {
  Datagrid,
  EmailField,
  Identifier,
  List,
  ListProps,
  DateField,
  ShowButton,
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
        <TextField source="firstname" />
        <TextField source="lastname" />
        <EmailField source="email" />
        <DateField source="created" />
        <BooleanNumField source="admin" />
        <ShowButton />
      </Datagrid>
    </List>
  );
};

export default UserList;
