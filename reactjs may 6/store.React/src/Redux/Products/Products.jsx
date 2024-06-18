/** @format */

import React from "react";
import { connect } from "react-redux";
import { Link, useParams } from "react-router-dom";

const Products = ({ data }) => {

   
  return (
        <section className="mx-4 my-4">

            <div className="d-flex justify-content-between flex-wrap gap-2">
            {data.map(e => {
                const{id,title,image,price} = e
                return(
                    <div key={id}>

                   <Link to={`/product/${id}`}>   

                {/*card  */}
                <div className="card" style={{ width: "18rem" }}>
                <img
                  src={image}
                  className="card-img-top"
                  alt="..."
                  style={{ width: "200px", height: "200px" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{title}</h5>
                  {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                  <a href="#" className="btn btn-primary">
                    Buy Now
                  </a>
                </div>
              </div>
              </Link>  
                    {/* card end */}

                    </div>
                )
            })}

            {/* map end */}
            </div>
        </section>
  );
};

const mapStateToProps = (state) => ({
  data: state.Allproducts.products,
});

export default connect(mapStateToProps)(Products);
