import { BrowserRouter, Route, Routes, } from 'react-router-dom'
import { AuthGuard } from './AuthGuard';
import Login from '../view/pages/login';
import { Dashboard } from '../view/pages/dashboard';
import { Layout } from '../view/layouts/Layout';
import { Product } from '../view/pages/product';
import { NewProduct } from '../view/pages/product/components/newProduct';
import { EditProduct } from '../view/pages/product/components/editProduct';

export function Router() {
  return (
    <BrowserRouter>
        <Routes>
          <Route element={<AuthGuard isPrivate={false} />}>
              <Route path='/login' element={ <Login />}></Route>
          </Route>

          <Route element={<Layout />}>
            <Route element={<AuthGuard isPrivate={true} />}>
              <Route path='/' element={ <Dashboard />}></Route>
              <Route path="produto" element={<Product />}>
                <Route path="novo" element={<NewProduct />} />
                <Route path="edit/:id" element={<EditProduct />} />
              </Route>
            </Route>
          </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default Router;
