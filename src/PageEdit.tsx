import {
  Edit,
  ListProps,
  NumberInput,
  SimpleForm,
  TextInput,
} from "react-admin";
import { PostEditActions } from "./PostEditActions";

const PageEdit = (props: ListProps) => (
  <Edit {...props} actions={<PostEditActions />}>
    <SimpleForm>
      <NumberInput source="id" disabled />
      <TextInput source="name" />

      <NumberInput source="admin" />
    </SimpleForm>
  </Edit>
);

export default PageEdit;
