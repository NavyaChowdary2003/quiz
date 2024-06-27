//Using Props method
import React from "react";

let Childmenu = (p) => {
return(
    <div className="Childmenu">
        <img src={p.image} style={{width:'260px', height:'280px'}}/>
        <h1>{p.title}</h1>
        <p>{p.price}</p>
        <button>Buy Now</button>
    </div>
);
};

export default Childmenu;