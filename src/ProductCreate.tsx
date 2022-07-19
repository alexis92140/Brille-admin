import {
  ListProps,
  Create,
  SimpleForm,
  TextInput,
  Validator,
  required,
  maxLength,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { PostEditActions } from "./PostEditActions";

const validateProductRef: Validator[] = [required(), maxLength(255)];
const validateProductImage: Validator[] = [required()];
const validateProductName: Validator[] = [required(), maxLength(200)];
const validateProductPrice: Validator[] = [required(), maxLength(10)];
const validateProductDesc: Validator[] = [required()];
const validateProductStock: Validator[] = [required(), maxLength(255)];

export default interface IProduct {
  productRef: string;
  productImage: string;
  productName: string;
  productPrice: number;
  productDesc: string;
  productStock: number;
}

const optionRenderer = (product: IProduct) =>
  `${product.productRef} ${product.productImage} ${product.productName} ${product.productPrice} ${product.productDesc} ${product.productStock}`;

export const ProductCreate = (props: ListProps) => (
  <Create
    title="Rajouter un produit" // Rajoute un titre à la page
    actions={<PostEditActions />} // Rajoute des boutons personnalisés dans l'écran d'ajout
    {...props}
  >
    <SimpleForm warnWhenUnsavedChanges>
      <TextInput source="productRef" validate={validateProductRef} />
      <TextInput source="productImage" validate={validateProductImage} />
      <TextInput source="productName" validate={validateProductName} />
      <TextInput source="productPrice" validate={validateProductPrice} />
      <TextInput source="productDesc" validate={validateProductDesc} />
      <TextInput source="productStock" validate={validateProductStock} />
      <ReferenceInput source="idProduct" reference="products" allowEmpty>
        {/* Ceci permet de faire une liste déroulante qui va aller afficher le résultat de la fonction optionRenderer : firstname lastname */}
        <SelectInput optionText={optionRenderer} />
      </ReferenceInput>
    </SimpleForm>
  </Create>
);
