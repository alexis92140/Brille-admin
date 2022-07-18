import { Admin, Resource, fetchUtils } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';
import UserList from './UserList';
import UserEdit from './UserEdit';
import AddressList from './AddressList';
import ProductList from './ProductList';
import ProductEdit from './ProductEdit';
import authProvider from './authProvider';
import { AddressCreate } from './AddressCreate';
import { AddressEdit } from './AddressEdit';
import { ProductCreate } from './ProductCreate';

const httpClient = (url: string, options: any = {}) => {
	if (!options.headers) {
		options.headers = new Headers({ Accept: 'application/json' });
	}
	const { token } = JSON.parse(localStorage.getItem('auth') || '');
	options.headers.set('Authorization', `${token}`);
	return fetchUtils.fetchJson(url, options);
};

const dataProvider = simpleRestProvider(
	'http://localhost:8000/api',
	httpClient
);
const App = () => (
	<Admin authProvider={authProvider} dataProvider={dataProvider}>
		<Resource name='users' list={UserList} edit={UserEdit} />
		<Resource
			name='addresses'
			list={AddressList}
			edit={AddressEdit}
			create={AddressCreate}
		/>
		<Resource
			name='products'
			list={ProductList}
			edit={ProductEdit}
			create={ProductCreate}
		/>
	</Admin>
);

export default App;
