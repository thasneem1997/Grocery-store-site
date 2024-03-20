import { useState } from "react";
const ListItem =({data})=>
{
    const [cart,setcart]=useState("no items added to cart")
 return (
<div className="item-card">
    <img src="/assets/gallery.png" alt="img not found"/>

   
    <div className="pricing">
    <span>{data.price}</span>
    <small><s>{data.discoundprice}</s></small>
    <p style={{ margin: '10px',
        fontSize: '18px'}}>{data.title}</p>
    <h4 className="cartadd">{cart}</h4>
   </div>
   <div>
    <button className="cart-add" onClick={()=>setcart("item added to cart")}>Add to cart
<img src="/assets/cart.png" className="icon-cart"/></button>
   </div>

</div>

 );
}

export default ListItem