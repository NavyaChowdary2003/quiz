//Using Props methods
import React from 'react';
import Childmenu from './Childmenu';

let Menu = () => {
    let  Menu1 = [
        {
            image:'https://images.ricardocuisine.com/services/recipes/croissant1.jpg',
            price : 200,
            title:'Croissants',
            id:1,
        },
        {
            image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_JynIraFhgyIA2cZ7sY3IQXtR28_SgMjOCwgcmrVC3w&s',
            price:300,
            title:'coq au vin',
            id:2,
        },
        {
            image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkJU6cQwfzbToU-hxBI9426jcXw5E7rhuzGbdae2Fpog&s',
            price:200,
            title:'Mango Sticky Rice',
            id:3,
        },
        {
            image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUjj7-XepnpEdEBr4J3LtbfQFtD8dgr2w3IkaJt4nyVw&s',
            price:200,
            title:'Sushi',
            id:4,
        },
        {
            image:'https://images.immediate.co.uk/production/volatile/sites/30/2021/02/butter-chicken-ac2ff98.jpg?quality=90&resize=440,400',
            price:300,
            title:'Butter Chicken',
            id:5,
        },
        {
            image:'https://www.kitchensanctuary.com/wp-content/uploads/2019/10/Kung-Pao-Chicken-square-FS-39-new.jpg',
            price:500,
            title:'Kung Pao Chicken',
            id:6,
        },
        {
            image:'https://www.allrecipes.com/thmb/a_0W8yk_LLCtH-VPqg2uLD9I5Pk=/0x512/filters:no_upscale():max_bytes(150000):strip_icc()/11973-spaghetti-carbonara-ii-DDMFS-4x3-6edea51e421e4457ac0c3269f3be5157.jpg',
            price:200,
            title:'Spaghetti Carbonara',
            id:7,
        },
        {
            image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVc4UJCTumSMsxqAL2fLIcD0MUvj2Bzk_tw6EVpeLYgw&s',
            price:200,
            title:'Biryani',
            id:8,
        },
        {
            image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDPJ1zFoQ-PVKfocyim1kNy9MHdvBsMNRhQLHhlD_r4Q&s',
            price:200,
            title:'Peking Duck',
            id:9,
        },
        {
            image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTv62mulRBtiOlwzWcFz1_kC-8y4itchTVi8DuGrLAUg&s',
            price:200,
            title:'Dumplings',
            id:10,
        },
        {
            image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh1MBdYNP2b9QNxqm2_nCkc8lx-nwC6UCrA1Zfpq6wpg&s',
            price:200,
            title:'Okonomiyaki',
            id:11,
        }
    ]
    return(
        <div className='Menu1'>
            {Menu1.map(e => {
               return(
                <div className='Menu2'>
                <Childmenu key={e.id} image={e.image} title={e.title} price={e.price}></Childmenu>
                </div>
               )
            })}
        </div>
    );
};

export default Menu;