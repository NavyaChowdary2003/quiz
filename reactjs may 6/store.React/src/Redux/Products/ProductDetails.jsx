import axios from 'axios';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { removeproduct, selectproduct } from '../actions/Actions';


const ProductDetails = ({data,selectedproductdata,removedata}) => {
    const Id = useParams()

    const{productId} = Id

    console.log(data)

    const{id,title,price,image,description} = data
    const fetch = () => {                            //productId -destructured
        axios.get(`https://fakestoreapi.com/products/${Id.productId}`)
        .then(res => selectedproductdata(res.data))
    }

    useEffect(()=>{
        fetch()

        return ()=>{
            removedata()
        }
    },[productId])

    return (
        <div>
                   <div className="card" style={{width: '50%'}}>
  <img src={image} className="card-img-top" alt="..." style={{width: '300px'}}/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <h5 className="card-title">Rs.{price}</h5>

    <p className="card-text">{description}</p>
    <button href="#" className="btn btn-primary">buy Now</button>
  </div>
</div>
        </div>
    );
};

const mapStateToProps = state => ({
    data :state.selectProduct
})

const mapDispatchToProps = dispatch => ({
    selectedproductdata : (p)=>dispatch(selectproduct(p)),
    removedata : ()=>dispatch(removeproduct())

})

export default connect(mapStateToProps,mapDispatchToProps) (ProductDetails);



/**
 *  function b(num){
    
    console.log(num) // 1
 }


 function a(n){
    
    b(n)

 }


 a(1)
 */