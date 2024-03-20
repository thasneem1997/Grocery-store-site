import { useState } from "react";
const ListItem =({data})=>
{
    // const [cart,setcart]=useState("")
    const [counter,setcount]=useState(0)
 return (
<div className="item-card">
    <img src={`/assets/${data.thumbnail}`} alt="img not found"/>

   
    <div className="pricing">
    <span>{data.price}</span>
    <small><s>{data.discoundprice}</s></small>
    <p style={{ margin: '10px',
        fontSize: '18px'}}>{data.title}</p>
   
   </div>
   {
    counter<1? <div>
    <button className="cart-add" onClick={()=>setcount(counter+1)}>Add to cart
<img src="/assets/cart.png" className="icon-cart"/></button>

   </div>:<div className="cart-addon">
    <button   onClick={()=>setcount(counter+1)}>+</button>
    <button>{counter}</button>
    <button onClick={() => {
  if (counter > 0) {
    setcount(counter - 1);
  }
}}> - </button>
   </div>
   }
  
   

</div>

 );
}

export default ListItem