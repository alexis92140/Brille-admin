import { Datagrid, List, ListProps, TextField, NumberInput } from 'react-admin';

const ProductList = (props: ListProps) => {
	<List {...props}>
		<Datagrid rowClick='edit'>
			<NumberInput source='id' disabled />
			<NumberInput source='productRef' />
			<TextField source='productImage' />
			<TextField source='productName' />
			<NumberInput source='productPrice' />
			<TextField source='productDesc' />
			<NumberInput source='productStock' />
		</Datagrid>
	</List>;
};

export default ProductList;
