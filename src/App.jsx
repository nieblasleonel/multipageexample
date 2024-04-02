import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import { ErrorPage } from './pages/Error';
import { HomePage } from './pages/Home';
import { ProductDetail } from './pages/ProductDetail';
import { ProductsPage } from './pages/Products';
import { RootLayout } from './pages/Root';



{/**
const routeDefinitions = createRoutesFromElements(
  <Route>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/products' element={<ProductsPage/>}/>
  </Route>
);
 */}

const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <ErrorPage/>,
    element: <RootLayout/>,
    children:[
      {index: true, element: <HomePage/>},
      {path: 'products', element: <ProductsPage/>},
      {path: 'products/:productId', element: <ProductDetail/>},
      
    ]
  },
  
])

function App() {
  return <RouterProvider router={router}/>;
}

export default App;
