import {
  Edit,
  ListProps,
  NumberInput,
  SimpleForm,
  TextInput,
} from "react-admin";
import { PostEditActions } from "./PostEditActions";

const ImageEdit = (props: ListProps) => (
  <Edit {...props} actions={<PostEditActions />}>
    <SimpleForm>
      <NumberInput source="id" disabled />
      <TextInput source="image" />
      <NumberInput source="admin" />
    </SimpleForm>
  </Edit>
);

export default ImageEdit;
