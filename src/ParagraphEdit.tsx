import {
  DateInput,
  Edit,
  ListProps,
  maxLength,
  NumberInput,
  SimpleForm,
  TextInput,
} from "react-admin";
import { PostEditActions } from "./PostEditActions";

export const ParagraphEdit = (props: ListProps) => (
  <Edit {...props} actions={<PostEditActions />}>
    {/* Rajoute des boutons personnalisés dans l'écran d'ajout */}
    <SimpleForm>
      <NumberInput source="id" disabled />
      <TextInput source="title" validate={maxLength(255)} />
      <TextInput source="description" />
      <NumberInput source="idParagraph" />
    </SimpleForm>
  </Edit>
);
