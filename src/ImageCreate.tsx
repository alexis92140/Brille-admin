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

const validateImage: Validator[] = [required(), minLength(2), maxLength(255)];
const validatePage: Validator[] = [required(), maxLength(255)];

export default interface IImage {
  image: string;
  idPage: number;
}

const optionRenderer = (image: IImage) => `${image.image} ${image.idPage}`;

export const ImageCreate = (props: ListProps) => (
  <Create
    title="Ajouter une image"
    actions={<PostEditActions />} // Rajoute des boutons personnalisés dans l'écran d'ajout
    {...props}
  >
    <SimpleForm warnWhenUnsavedChanges>
      <TextInput source="image" validate={validateImage} />
      <TextInput source="idPage" validate={validatePage} />
      <ReferenceInput source="idImage" reference="images" allowEmpty>
        {/* Ceci permet de faire une liste déroulante qui va aller afficher le résultat de la fonction optionRenderer : firstname lastname */}
        <SelectInput optionText={optionRenderer} />
      </ReferenceInput>
    </SimpleForm>
  </Create>
);
