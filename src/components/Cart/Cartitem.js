import React from 'react'

const Cartitem = ({data,onEmitIncreaseitem,onEmitDecreaseitem}) => {
  return (
    <div>
       <div className="checkout-modal_list-item">
                                <div className="img-wrap">
                                    <img src={`/assets/${data.thumbnail}`} className="img-fluid" alt="Placeholder"/>
                                </div>
                                <div className="information">
                                    <div>
                                        <h4>{data.title}</h4>
                                        <div className="pricing">
                                            <span>{data.discountedPrice}</span>
                                            <small>
                                                <strike>{data.price}</strike>
                                            </small>
                                        </div>
                                    </div>
                                    <div className="cart-addon cart-addon__modal">
                                        <button onClick={()=>onEmitDecreaseitem(data.id)}>-</button>
                                        <span className="counter">{data.quantity}</span>
                                        <button onClick={()=>onEmitIncreaseitem(data.id)}>+</button>
                                    </div>
                                </div>
                            </div> 
    </div>
  )
}

export default Cartitem
