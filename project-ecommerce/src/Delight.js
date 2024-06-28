//Using Map Method
import React from "react";

const Delight =  () => {
    let array = ['Truffle Risotto:  Creamy Arborio rice infused with earthy truffles, topped with shaved Parmesan and a hint of white wine.','Pan-Seared Scallops:   Perfectly seared scallops served with a zesty lemon butter sauce and a side of asparagus.','Kung Pao Chicken','Sushi','Chocolate Lava Cake:   A rich, molten chocolate cake with a gooey center, served with vanilla bean ice cream and fresh berries.','Coq au Vin']
    return(
        <div className="delight">
            <h1>Our Signature Dishesh  Try Now!</h1>
            {array.map((e,i) =>{
                return(
                    <ul key={i}>
                        <li>{e}</li>
                    </ul>
                );
            })};
        </div>
    );
}

export default Delight;