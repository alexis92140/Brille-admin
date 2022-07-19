import {
	BooleanField,
	Datagrid,
	EmailField,
	FunctionField,
	Identifier,
	List,
	ListProps,
	NumberField,
	Record,
	TextField,
} from 'react-admin';
import BooleanNumField from './BooleanNumField.jsx';



const OrderList = (props: ListProps) => {
  return (
    <List {...props}>
      <Datagrid rowClick="edit">
      <TextField source="id" />
        <TextField source="idUser" />
        <TextField source="idStatus" />
        <TextField source="idAddress" />
        <TextField source="orderDate" />
        <TextField source="orderTrackingNum" />
        <BooleanNumField source="admin" />
      </Datagrid>
    </List>
  );
};

export default OrderList;