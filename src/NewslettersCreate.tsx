import {
  ListProps,
  Create,
  SimpleForm,
  TextInput,
  regex,
  Validator,
  required,
  minLength,
  maxLength,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { PostEditActions } from "./PostEditActions";

const validateEmail: Validator[] = [required(), minLength(2), maxLength(200)];

const NewslettersCreate = (props: ListProps) => (
  <Create
    title="Rajoutons une adresse mail pour s'inscrire à la newsletters" // Rajoute un titre à la newsletter
    actions={<PostEditActions />} // Rajoute des boutons personnalisés dans l'écran d'ajout
    {...props}
  >
    <SimpleForm warnWhenUnsavedChanges>
      <TextInput source="email" validate={validateEmail} />
    </SimpleForm>
  </Create>
);

export default NewslettersCreate;
