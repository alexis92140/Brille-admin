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

const NewslettersList = (props: ListProps) => {
  return (
    <List {...props}>
      <Datagrid rowClick="edit">
        <NumberField source="id" sortBy="newsletters.id" />
        <EmailField source="email" />
        <BooleanNumField source="admin" />
      </Datagrid>
    </List>
  );
};
  
  export default NewslettersList;
  