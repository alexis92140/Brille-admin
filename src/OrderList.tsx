import {
  Datagrid,
  List,
  ListProps,
  DateField,
  TextField,
  NumberField,
} from "react-admin";
import BooleanNumField from "./BooleanNumField.jsx";

const OrderList = (props: ListProps) => {
  return (
    <List {...props}>
      <Datagrid rowClick="edit">
        <NumberField sortBy="order.id" />
        <TextField source="id" />
        <DateField source="orderDate" />
        <TextField source="orderTrackingNum" />
        <BooleanNumField source="admin" />
      </Datagrid>
    </List>
  );
};

export default OrderList;
