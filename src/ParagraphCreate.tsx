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

const validateTitle: Validator[] = [required(), minLength(2), maxLength(200)];
const validatePage: Validator[] = [required(), minLength(2), maxLength(200)];

const validateDescription: Validator[] = [
  required(),
  minLength(2),
  maxLength(255),
];

export default interface IParagraph {
  title: string;
  idPage: number;
  description: string;
}

const optionRenderer = (paragraph: IParagraph) =>
  `${paragraph.title} ${paragraph.description} ${paragraph.idPage} `;

export const ParagraphCreate = (props: ListProps) => (
  <Create
    title="Rajoutons une description"
    actions={<PostEditActions />} // Rajoute des boutons personnalisés dans l'écran d'ajout
    {...props}
  >
    <SimpleForm warnWhenUnsavedChanges>
      <TextInput source="title" validate={validateTitle} />
      <TextInput source="idPage" validate={validatePage} />
      <TextInput source="description" validate={validateDescription} />
      <ReferenceInput source="idParagraph" reference="paragraphs" allowEmpty>
        {/* Ceci permet de faire une liste déroulante qui va aller afficher le résultat de la fonction optionRenderer : firstname lastname */}
        <SelectInput optionText={optionRenderer} />
      </ReferenceInput>
    </SimpleForm>
  </Create>
);
