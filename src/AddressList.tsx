import { Datagrid, List, ListProps, TextField } from "react-admin";

const AddressList = (props: ListProps) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="addressLine1" />
      <TextField source="addressLine2" />
      <TextField source="zipCode" />
      <TextField source="city" />
      <TextField source="country" />
    </Datagrid>
  </List>
);

export default AddressList;
