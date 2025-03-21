import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router";
import './App.css';
import HeaderLayout from './components/HeaderLayout';
import {ProductsList} from './pages/ProductsList';
import ProductDetails from './pages/ProductDetails';
import {Cart} from './pages/Cart';
import {Register} from './pages/Register';
import NotFound from './pages/NotFound';
import TextDirectionContext from './context/TextDirection';
import RoutesList from './routes/RoutesList';

function App() {
  const [isEnglish, setIsEnglish] = useState(true);

  return (
    <BrowserRouter>
      <TextDirectionContext value={{ isEnglish, setIsEnglish }}>
      <Routes>
        <Route element={<HeaderLayout />}>
          <Route index element={<ProductsList />} />
          <Route path='/product-details/:id' element={<ProductDetails />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/register' element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      </TextDirectionContext>
    </BrowserRouter>
  )
}

export default App
