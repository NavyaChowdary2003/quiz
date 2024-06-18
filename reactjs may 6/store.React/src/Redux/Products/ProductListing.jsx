import React, { useEffect } from 'react';
import Products from './Products';
import axios from 'axios';
import { connect } from 'react-redux';
import { setProduct } from '../actions/Action';
import { useParams } from 'react-router-dom';


const ProductListing = ({data,setProductData}) => {


const fetchData = () => {
    axios.get('https://fakestoreapi.com/products')
    .then(res =>setProductData(res.data)).catch(e => {
        console.log(e)
    })
}

useEffect(()=>{
    fetchData()
},[])

    return (
        <div>
            <Products/>
        </div>
    );
};

const mapStateToProps = (state) => ({
    data : state.Allproducts.products
})


const mapDispatchToProps = dispatch => ({

    setProductData : (product)=>dispatch(setProduct(product))
    
})

export default connect(mapStateToProps,mapDispatchToProps) (ProductListing);