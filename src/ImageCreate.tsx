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

export default interface IImage {
  image: string;
}

const optionRenderer = (image: IImage) => `${image.image}`;

export const ImageCreate = (props: ListProps) => (
  <Create
    title="Ajouter une image"
    actions={<PostEditActions />} // Rajoute des boutons personnalisés dans l'écran d'ajout
    {...props}
  >
    <SimpleForm warnWhenUnsavedChanges>
      <TextInput source="url" validate={validateImage} />
      <ReferenceInput source="idImage" reference="images" allowEmpty>
        {/* Ceci permet de faire une liste déroulante qui va aller afficher le résultat de la fonction optionRenderer : firstname lastname */}
        <SelectInput optionText={optionRenderer} />
      </ReferenceInput>
    </SimpleForm>
  </Create>
);
