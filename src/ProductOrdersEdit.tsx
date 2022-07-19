import {
  Edit,
  ListProps,
  NumberInput,
  SimpleForm,
  TextInput,
} from "react-admin";
import { PostEditActions } from "./PostEditActions";

const ProductOrdersEdit = (props: ListProps) => (
  <Edit {...props} actions={<PostEditActions />}>
    <SimpleForm>
      <NumberInput source="id" disabled />
      <TextInput source="quantity" />
      <TextInput source="idOrder" />
      <TextInput source="idProduct" />
      <NumberInput source="admin" />
    </SimpleForm>
  </Edit>
);

export default ProductOrdersEdit;
