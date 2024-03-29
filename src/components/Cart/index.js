import { Fragment, useState } from "react"
import Modal from "../UI/Modal"
import Cartitem from "./Cartitem"
import Ordermodal from "./Ordermodal"
const Cart=({count,addcart,onevent})=>{
    const [modal,setmodal]=useState(false)
    const [orderModal, setOrderModal] = useState(false)
   
    
    const handlemodal=()=>{
        setmodal(!modal)
    }
    const closemodal=()=>{
        setmodal(false)
    }
    const handleOrderModal = () => {
        setmodal(false);
        setOrderModal(previous => !previous)
    }

    return(
        <Fragment>
        <button onClick={handlemodal}>
            <span data-items={count}>Cart</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-shopping-cart-plus" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <circle cx="6" cy="19" r="2" />
                <circle cx="17" cy="19" r="2" />
                <path d="M17 17h-11v-14h-2" />
                <path d="M6 5l6.005 .429m7.138 6.573l-.143 .998h-13" />
                <path d="M15 6h6m-3 -3v6" />
            </svg>
        </button>
        {
            modal &&
            <Modal  close={closemodal} >
                <div className="checkout-modal">
                    <h2>Checkout Modal</h2>
                    <div className="checkout-modal_list">
                        {
                            count > 0 ? addcart.map(item=> {
                                return(<Cartitem  data={item} key={item.id} 
                                    onEmitIncreaseitem={id=>onevent(id,1)}
                                     onEmitDecreaseitem={id=>onevent(id,-1)}/>)
                            })
                          :
                            <div className="empty-cart">Please add something in your cart!</div>
                        }
                    </div>
                    { 
                        count > 0 &&
                        <div className="checkout-modal_footer">
                            <div className="totalAmount">
                                <h4>Total Amount: </h4>
                                <h4>{addcart.reduce((previousvalue,current) => { 
                                    
                                    return previousvalue+(current.discountedPrice*current.quantity)
                                },0)
                                
                                    }
                                  <span style={{marginLeft:'10px'}}>INR</span>  

                                </h4>
                            </div>
                            <button onClick={handleOrderModal}>Order Now</button>
                           
                            
                        </div>
                    }
                </div>
            </Modal>
        }
          { orderModal && <Ordermodal close={() => setOrderModal(false)}/> }
    </Fragment>
)
}

export default Cart