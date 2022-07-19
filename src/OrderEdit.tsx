import {
    DateInput,
    Edit,
    ListProps,
    maxLength,
    NumberInput,
    SimpleForm,
    TextInput,
  } from 'react-admin';
  import { PostEditActions } from './PostEditActions';
  
  export const OrderEdit = (props: ListProps) => (
    <Edit {...props} actions={<PostEditActions />}>
      {/* Rajoute des boutons personnalisés dans l'écran d'ajout */}
      <SimpleForm>
        <NumberInput source="id" disabled />
        <TextInput source="idUser" />
        <TextInput source="idStatus" />
        <TextInput source="idAddress" />
        <TextInput source="orderTrackingNum" />
        <NumberInput source="idOrder" />
      </SimpleForm>
    </Edit>
  );
  