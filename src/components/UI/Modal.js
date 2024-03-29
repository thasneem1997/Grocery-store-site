import React, { Children } from 'react'
import  ReactDOM  from 'react-dom';
import { Background } from './Loader';

const Modal = ({close,children}) => {
  return (
   
    ReactDOM.createPortal(
    <>
    <Background/>
    <div className="modal">
{children}
<button type='close' onClick={close}>x</button>

    </div>
    </>,
    document.getElementById("modal-root")

    )
      
 
  )
}

export default Modal
