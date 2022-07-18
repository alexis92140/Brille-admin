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

const validateName: Validator[] = [required(), minLength(2), maxLength(200)];

export default interface IPage {
  name: string;
}

const optionRenderer = (page: IPage) => `${page.name} `;

export const PageCreate = (props: ListProps) => (
  <Create
    title="Rajoutons une page"
    actions={<PostEditActions />} // Rajoute des boutons personnalisés dans l'écran d'ajout
    {...props}
  >
    <SimpleForm warnWhenUnsavedChanges>
      <TextInput source="page" validate={validateName} />

      <ReferenceInput source="idPage" reference="users" allowEmpty>
        {/* Ceci permet de faire une liste déroulante qui va aller afficher le résultat de la fonction optionRenderer : firstname lastname */}
        <SelectInput optionText={optionRenderer} />
      </ReferenceInput>
    </SimpleForm>
  </Create>
);
