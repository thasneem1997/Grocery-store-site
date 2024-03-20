import ListItem from "./ListItem"
const item=[
    {id:0,price:360,
        discoundprice:250,
       title:"oats"},
       {id:1,price:460,
        discoundprice:250,
       title:"chocobar"},
       {id:2,price:860,
        discoundprice:550,
       title:"maggi"},
       {id:3,price:60,
        discoundprice:30,
       title:"milk"}

]

const Products= ()=>
{
return(
   
 <div className="product-list">
    <div className="wrapper">
     <ListItem data={item[0]}></ListItem>

         <ListItem data={item[1]}></ListItem>
         <ListItem data={item[2]}></ListItem>
         <ListItem data={item[3]}></ListItem>
         
         </div>
 </div>
   
);
}
export default  Products; 