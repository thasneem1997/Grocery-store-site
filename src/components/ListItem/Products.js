import { useState,useEffect } from "react"
import ListItem from "./ListItem"
import axios from "axios"
import Loader from "../UI/Loader"





const Products= ({handleadditem,handleremoveitem,eventstate})=>
{
const addon=id=>
{

    let data=[...item]
    let index=data.findIndex(i=>i.id===id)//to find index of item
    data[index].quantity+=1
    setitem([...data])

    handleadditem(data[index]);
}
const removeon=id=>
{
    let data=[...item]
    let index=data.findIndex(i=>i.id===id)//to find index of item
    if(data[index].quantity!=0){
    data[index].quantity-=1
    setitem([...data])
    }

        handleremoveitem(data[index]);
   

   
}



    const [item,setitem]=useState([])
    const[loader,setloader]=useState(true)
           useEffect(()=>{//using axios for network call
            async function fetchItems(){
            try{ 
                const response=  await axios.get('https://grocery-site-24e03-default-rtdb.firebaseio.com/items.json')
            const data=response.data
            const transformeddata= data.map((item,index)=>{
             return{...item,id:index,quantity:0}
            })
            
           setitem(transformeddata)
        }catch(error){
           
            console.log("Error", error);
            alert("error occured")

        }finally{
            setloader(false)
        }
    }fetchItems();
    },[])

    useEffect(()=>{
    if(eventstate.id>-1)
    {
        if(eventstate.type===1)
        {
            addon(eventstate.id)
        }
        else if(eventstate.type===-1)
        {
            removeon(eventstate.id)
        }

    }
    }
      ,[eventstate])
return(
   <>
 <div className="product-list">
    <div className="wrapper">
   
        { item.map(item=>{
            return(<ListItem key={item.id} data={item} addon={addon} removeon={removeon}/>) 
        })
    }
         </div>
        {loader&&<Loader/>}
         {/* if one is false the loader dont get executed */}
 </div>
 </>
   
);
}
export default  Products; 