import {
  BooleanField,
  Datagrid,
  EmailField,
  FunctionField,
  Identifier,
  List,
  ListProps,
  NumberField,
  ImageField,
  Record,
  TextField,
} from "react-admin";
import BooleanNumField from "./BooleanNumField.jsx";

type recordType = {
  admin: boolean;
  id?: Identifier | undefined;
};

const ImageList = (props: ListProps) => {
  return (
    <List {...props}>
      <Datagrid rowClick="edit">
        <NumberField sortBy="images.id" />
        <ImageField source="image" />
        <TextField source="name" />
        <BooleanNumField source="admin" />
      </Datagrid>
    </List>
  );
};

export default ImageList;
