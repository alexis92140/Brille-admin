import {
	Datagrid,
	List,
	ListProps,
	ReferenceField,
	TextField,
} from 'react-admin';

const AddressList = (props: ListProps) => (
<<<<<<< HEAD
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
=======
	<List {...props}>
		<Datagrid rowClick='edit'>
			<TextField source='id' />
			{/*  sortBy="addresses.id_address" /> */}
			<TextField source='address1' />
			<TextField source='address2' />
			<TextField source='city' />
			<TextField source='postalCode' />
			<ReferenceField label='User' source='idUser' reference='users'>
				<>
					<TextField source='firstname' /> <TextField source='lastname' />
				</>
			</ReferenceField>
		</Datagrid>
	</List>
>>>>>>> c1557c775e7266d9d9dfcfe425a5a49b78eded73
);

export default AddressList;
