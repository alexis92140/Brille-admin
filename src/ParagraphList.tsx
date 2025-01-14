import {
  BooleanField,
  Datagrid,
  EmailField,
  FunctionField,
  Identifier,
  List,
  ListProps,
  NumberField,
  TextField,
} from "react-admin";
import BooleanNumField from "./BooleanNumField.jsx";

type recordType = {
  admin: boolean;
  id?: Identifier | undefined;
};

const ParagraphList = (props: ListProps) => {
  return (
    <List {...props}>
      <Datagrid rowClick="edit">
        <NumberField sortBy="paragraph.id" />
        <TextField source="title" />
        <TextField source="description" />
        <BooleanNumField source="admin" />
      </Datagrid>
    </List>
  );
};

export default ParagraphList;
