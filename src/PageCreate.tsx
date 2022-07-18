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

const validatePage: Validator[] = [required(), maxLength(255)];

export default interface IPage {
  name: string;
}

const optionRenderer = (page: IPage) => ` ${page.name}`;

export const PageCreate = (props: ListProps) => (
  <Create
    title="Ajouter une page"
    actions={<PostEditActions />} // Rajoute des boutons personnalisés dans l'écran d'ajout
    {...props}
  >
    <SimpleForm warnWhenUnsavedChanges>
      <TextInput source="name" validate={validatePage} />

      <ReferenceInput source="idPage" reference="pages" allowEmpty>
        {/* Ceci permet de faire une liste déroulante qui va aller afficher le résultat de la fonction optionRenderer : firstname lastname */}
        <SelectInput optionText={optionRenderer} />
      </ReferenceInput>
    </SimpleForm>
  </Create>
);
