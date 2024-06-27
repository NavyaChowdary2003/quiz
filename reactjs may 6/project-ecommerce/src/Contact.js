//USING RENDERING METHOD
import React from "react";

let Contact = () => {
    let render =  true
    let array = [
    'Name : Chand Hit',
    'Eamil : kandaheaven@gmail.com',
    'Contact : +91 9000060666',
    'Recipient Name: jay',
    'Street Address: 456 High St',
    'City: Paris',
    'State/Province: Paris',
    'ZIP/Postal Code: WC2N 5DU',
    'Country: United States'
    ]
    return (
        <div className="contact-c">
            {render && array.map((e,i) => {
                return(
                    <ul key={i}>
                        <li>{e}</li>
                    </ul>
                )
            })}
        </div>
    );
}
export default Contact;


