import {
  BooleanField,
  Datagrid,
  EmailField,
  FunctionField,
  Identifier,
  List,
  ListProps,
  NumberField,
  ReferenceField,
  ImageField,
  Record,
  TextField,
} from "react-admin";
import BooleanNumField from "./BooleanNumField.jsx";

type recordType = {
  admin: boolean;
  id?: Identifier | undefined;
};

const ProductOrdersList = (props: ListProps) => {
  return (
    <List {...props}>
      <Datagrid rowClick="edit">
        <NumberField source="id" sortBy="productOrders.id" />
        <ReferenceField source="idProduct" reference="products" label="product">
          <>
            <ImageField source="productImage" />{" "}
            <TextField source="productName" />
          </>
        </ReferenceField>
        <TextField source="idProduct" />
        <TextField source="quantity" />
        <BooleanNumField source="admin" />
      </Datagrid>
    </List>
  );
};

export default ProductOrdersList;
