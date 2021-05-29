// import React from 'react';
// import { render } from 'react-dom';
// import { Admin, Resource } from 'react-admin';
// import simpleRestProvider from 'ra-data-simple-rest';

// import { CategoryList, CategoryEdit, CategoryCreate, CategoryIcon } from './componenets/categories';

// const App = () => (
//     <Admin dataProvider={simpleRestProvider('http://localhost:5000')}>
//         <Resource name="categories" list={CategoryList} edit={CategoryEdit} create={CategoryCreate} icon={CategoryIcon}/>
//     </Admin>,
//     document.getElementById('root')
// );

// export default App;


import * as React from "react";


import { Admin, Resource , fetchUtils} from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';

import { CategoryList } from './componenets/categories';

const httpClient = async (url, options = {}) => {
  if (!options.header) {
      options.header = await new Headers({ Accept: 'application/json' });
  }
  // add your own headers here
//   options.headers.set('X-Custom-Header', 'foobar');
  return fetchUtils.fetchJson(url, options);
}

const App = () => (
    <Admin dataProvider={simpleRestProvider('http://localhost:5000'),httpClient}>
        <Resource name="api/category" list={CategoryList} />
    </Admin>
);

export default App;