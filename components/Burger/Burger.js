import React from  "react";

import classes from "./Burger.css";
import BurgerIngeredient from "./BurgerIngredients/BurgerIngredients"

const burger = (props) => {
 
 let transformedIngredients = Object.keys(props.ingredients)
  .map(igKey => {
  
  // Onject of key value pairs to convert to arrays using Object.keys.

  // Map function also returns an array. 

   return [...Array(props.ingredients[igKey]) ].map(
       
       (_, i) => {
         
         return <BurgerIngeredient key = {igKey + i} type = {igKey} />

       });

  }) .reduce((arr, el) => {
   
   return arr.concat(el)

  } , [] )

  //console.log(transformedIngredients);

if(transformedIngredients.length === 0) {
 
 transformedIngredients = <p>Please start adding ingredients</p>

}

 return(

   <div className = {classes.Burger} > 
   
    <BurgerIngeredient type= "bread-top" />
    {transformedIngredients}
    <BurgerIngeredient type= "bread-bottom" />
    
   </div>

 	);



};
 
export default burger;