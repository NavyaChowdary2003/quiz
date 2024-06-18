import React from 'react';
import Header from './Redux/Products/Header';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import PageNotfound from './Redux/Products/PageNotfound';
import ProductListing from './Redux/Products/ProductListing';
import ProductDetails from './Redux/Products/ProductDetails';

const App = () => {
    return (
        
        <div>
          <BrowserRouter>
          <Header/>
          <Routes>
            <Route path='/' element={<ProductListing/>}/>
            <Route path='/product/:productId'  element={<ProductDetails/>}/>
            <Route path='*' element={<PageNotfound/>}/>
            </Routes>
          </BrowserRouter>
        
        </div>
    );
};

export default App;