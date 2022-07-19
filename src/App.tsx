import NewslettersList from './NewslettersList';
import NewslettersCreate from './NewslettersCreate';
import * as React from 'react';
import { Admin, Resource, fetchUtils, EditGuesser } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';
import UserList from './UserList';
import UserEdit from './UserEdit';
import ImageList from './ImageList';
import ProductOrdersList from './ProductOrdersList';
import ProductOrdersEdit from './ProductOrdersEdit';
import ImageEdit from './ImageEdit';
import PageList from './PageList';
import PageEdit from './PageEdit';
import ParagraphList from './ParagraphList';
import { ParagraphEdit } from './ParagraphEdit';
import AddressList from './AddressList';
import authProvider from './authProvider';
import { AddressCreate } from './AddressCreate';
import { PageCreate } from './PageCreate';
import { AddressEdit } from './AddressEdit';
import { ImageCreate } from './ImageCreate';
import { ParagraphCreate } from './ParagraphCreate';
import ProductList from './ProductList';
import ProductEdit from './ProductEdit';
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
			name='newsletters'
			list={NewslettersList}
			create={NewslettersCreate}
		/>

		<Resource
			name='pages'
			list={PageList}
			edit={PageEdit}
			create={PageCreate}
		/>
		<Resource
			name='images'
			list={ImageList}
			edit={ImageEdit}
			create={ImageCreate}
		/>
		<Resource
			name='paragraphs'
			list={ParagraphList}
			edit={ParagraphEdit}
			create={ParagraphCreate}
		/>

		<Resource
			name='products'
			list={ProductList}
			edit={ProductEdit}
			create={ProductCreate}
		/>

		<Resource
			name='productOrders'
			list={ProductOrdersList}
			edit={ProductOrdersEdit}
		/>
	</Admin>
);

export default App;
