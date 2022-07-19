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

const ProductList = (props: ListProps) => {
  return (
    <List {...props}>
      <Datagrid rowClick="edit">
        <NumberField source="id" sortBy="pages.id" />
        <NumberField source="productRef" />
        <ImageField source="productImage" />
        <TextField source="productName" />
        <NumberField source="productPrice" />
        <TextField source="productDesc" />
        <NumberField source="productStock" />
      </Datagrid>
    </List>
  );
};

export default ProductList;
