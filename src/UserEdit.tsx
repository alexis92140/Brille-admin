import {
	Edit,
	ListProps,
	NumberInput,
	SimpleForm,
	TextInput,
} from 'react-admin';
import { PostEditActions } from './PostEditActions';

const UserEdit = (props: ListProps) => (
<<<<<<< HEAD
=======

>>>>>>> 05879e90961e591cbc727298c3abde860113da6d
  <Edit {...props} actions={<PostEditActions />}>
    <SimpleForm>
      <NumberInput source="id" disabled />
      <TextInput source="firstname" />
      <TextInput source="lastname" />
      <TextInput source="phone" />
      <TextInput source="email" />
      
      
      <NumberInput source="admin" />
    </SimpleForm>
  </Edit>
<<<<<<< HEAD
=======

>>>>>>> 05879e90961e591cbc727298c3abde860113da6d
);

export default UserEdit;
