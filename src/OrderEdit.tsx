import { Edit, ListProps, NumberInput, SimpleForm } from "react-admin";
import { PostEditActions } from "./PostEditActions";

export const OrderEdit = (props: ListProps) => (
  <Edit {...props} actions={<PostEditActions />}>
    {/* Rajoute des boutons personnalisés dans l'écran d'ajout */}
    <SimpleForm>
      <NumberInput source="id" disabled />
      <NumberInput source="orderTrackingNum" />
      <NumberInput source="idOrder" />
    </SimpleForm>
  </Edit>
);
