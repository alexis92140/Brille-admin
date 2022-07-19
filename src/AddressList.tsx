import {
	Datagrid,
	List,
	ListProps,
	ReferenceField,
	TextField,
} from 'react-admin';

const AddressList = (props: ListProps) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      {/*  sortBy="addresses.id_address" /> */}
      <TextField source="addressLine1" />
      <TextField source="addressLine2" />
      <TextField source="zipCode" />
      <TextField source="city" />
      <TextField source="country" />
      
      <ReferenceField label="User" source="idUser" reference="users">
        <>
          <TextField source="firstname" /> <TextField source="lastname" />
        </>
      </ReferenceField>
    </Datagrid>
  </List>
);

export default AddressList;
