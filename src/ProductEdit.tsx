import {
	Edit,
	ListProps,
	NumberInput,
	SimpleForm,
	TextInput,
} from 'react-admin';
import { PostEditActions } from './PostEditActions';

const ProductEdit = (props: ListProps) => (
	<Edit {...props} actions={<PostEditActions />}>
		<SimpleForm>
			<NumberInput source='id' disabled />
			<NumberInput source='productRef' />
			<TextInput source='productImage' />
			<TextInput source='productName' />
			<NumberInput source='productPrice' />
			<TextInput source='productDesc' />
			<NumberInput source='productStock' />
		</SimpleForm>
	</Edit>
);

export default ProductEdit;
