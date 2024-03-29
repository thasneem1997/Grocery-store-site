import { useState } from "react";
import Modal from "../UI/Modal";
const ListItem =({data,addon,removeon})=>
{
    // const [counter,setCounter]=useState(0)

    const increaseCounterByOne = event => {
      event.stopPropagation()//to stop poping up modal when clicking cart icon
      addon(data.id)
      // setCounter(counter+1)
  }

  const decreaseCounterByOne = event => {
      event.stopPropagation()//to stop poping up modal when clicking cart icon
      // if(counter === 0) {
      //     return;
      // }
      // if(counter==1){
        removeon(data.id)
      // }
      
      // setCounter(counter-1)
  }

    const [modal,setmodal]=useState(false)
    const handlemodal=()=>{//modal handle
       setmodal(!modal)
       
    }
    const modalclose=()=>{
      setmodal(false)

    }





 return (
  // ui of listitem
<div  onClick= {handlemodal} className="item-card"> 
    <img src={`/assets/${data.thumbnail}`} alt="img not found"/>
    <div className="pricing">
    <span>{data.discountedPrice}</span>
    <small><s>{data.price}</s></small>
    <p className="para">{data.title}</p>
   
   </div>
   {
    data.quantity<1? <div>
    <button className="cart-add" onClick={increaseCounterByOne}>Add to cart
    <img src="/assets/cart.png" className="icon-cart"/></button>

    </div>:<div className="cart-addon">
   
    <button   onClick={increaseCounterByOne}>+</button>
    <button>{data.quantity}</button>
    <button onClick={decreaseCounterByOne}> - </button>
   </div>
   }
  
   
  {modal&&<Modal closemodal={modalclose}>
    <>
    {/* modal ui of the modal which appears during clicking on listitem */}
    <div className="item-card__modal">
    <div className="img-wrap">
      <img className={"img-fluid"} src={`/assets/${data.thumbnail}`} alt={data.title}  style={{width:'100px'}}/>
     </div>
     <div className="meta"> <p style={{ margin: '10px',
        fontSize: '18px'}}>{data.title}</p>
        <div className="pricing">
    <span>{data.price}</span>
    <small><s>{data.discountedPrice}</s></small></div>
    <p>{data.description}</p>

    {
   data.quantity<1? <div>
    <button className="cart-add" onClick={increaseCounterByOne}>Add to cart
<img src="/assets/cart.png" className="icon-cart"/></button>

   </div>:<div className="cart-addon">
   
    <button   onClick={increaseCounterByOne}>+</button>
    <button>{data.quantity}</button>
    <button onClick={decreaseCounterByOne}> - </button>
   </div>
   }
    </div>
  


   </div>
    </>
  
    
    
    </Modal>}
</div>

 );
}

export default ListItem