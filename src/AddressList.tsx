import {
	Datagrid,
	List,
	ListProps,
	ReferenceField,
	TextField,
} from 'react-admin';

const AddressList = (props: ListProps) => (
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
);

export default AddressList;
