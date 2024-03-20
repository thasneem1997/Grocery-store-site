import { useState } from "react"
import ListItem from "./ListItem"




const Products= ()=>
{
    const [item,setitem]=useState([
        {id:0,price:360,
            discoundprice:250,
           title:"oats",thumbnail:"gallery.png"},
           {id:1,price:460,
            discoundprice:250,
           title:"chocobar",thumbnail:"gallery.png"},
           {id:2,price:860,
            discoundprice:550,
           title:"maggi",thumbnail:"gallery.png"},
           {id:3,price:60,
            discoundprice:30,
           title:"milk",thumbnail:"gallery.png"}])
return(
   
 <div className="product-list">
    <div className="wrapper">
   
        { item.map(item=>{
            return(<ListItem key={item.id} data={item}/>) 
        })
    }
         </div>
 </div>
   
);
}
export default  Products; 