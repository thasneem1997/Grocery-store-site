// import './App.css';
import './styles/listitem.css'
import './styles/header.css'
import './styles/subheader.css'
import './styles/loader.css'
import './styles/modal.css'
import './styles/modalitems.css'
import './styles/cartmodal.css'
import Products from "./components/ListItem/Products";
import Header from './components/Layout/Header';
import Subheader from './components/Layout/Subheader';
import { useState } from 'react'



const App = () => {
  const[addcart,setaddcart]=useState([]);
  const[eventqueue,seteventqueue]=useState({id:" ",type:" "});
  const handleadditem=item=>
  {
    let items=[...addcart]//shallow copy the addcart to items to avoid directly mutating the state,
    let index=items.findIndex(i=>i.id==item.id)// return index if id is same returns id otherwise -1
    if(index > -1){//if item is already present in cart
      items[index]=item//update the item if there is any updation


    }
    else{//not present in cart
      items.push(item)//add the item to cart

    }
    setaddcart([...items])
  }





  const handleremoveitem=item=>
  {
    let items=[...addcart]//shallow copy the addcart to items to avoid directly mutating the state,
    let index=items.findIndex(i=>i.id==item.id)// return index if id is same returns id otherwise -1
    if(items[index].quantity===0){//if there is no item to cart
     items.splice(index,1)//remove item from cart

    }
    else{
      items[index]=item

    }
    setaddcart([...items])
    
  }
  //type==-1=>decrease
  //type==1>increase
  const handleeventqueue=(id,type)=>{
    seteventqueue({id,type})
  }
  return (
   
    <div>
      <div> <Header count={addcart.length} addcart={addcart} onevent={handleeventqueue}>
    
      </Header>
    
      
      </div>
  <div><Subheader/></div>
      <Products handleadditem={handleadditem} handleremoveitem={handleremoveitem} eventstate={eventqueue}/>
    </div>
  );
}


export default App;
