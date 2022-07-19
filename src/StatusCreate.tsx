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

const validateStatus: Validator[] = [required(), minLength(2), maxLength(255)];

export default interface IStatus {
  name: string;
}

const optionRenderer = (status: IStatus) => `${status.name} `;

export const StatusCreate = (props: ListProps) => (
  <Create
    title="Ajouter un status"
    actions={<PostEditActions />} // Rajoute des boutons personnalisés dans l'écran d'ajout
    {...props}
  >
    <SimpleForm warnWhenUnsavedChanges>
      <TextInput source="name" validate={validateStatus} />
      <ReferenceInput source="idStatus" reference="status" allowEmpty>
        {/* Ceci permet de faire une liste déroulante qui va aller afficher le résultat de la fonction optionRenderer : firstname lastname */}
        <SelectInput optionText={optionRenderer} />
      </ReferenceInput>
    </SimpleForm>
  </Create>
);
