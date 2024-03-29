import React from 'react'
import  ReactDOM  from 'react-dom';



export const Background=()=> {
  return (
    
       <div className="loader-overlay"></div>
   
  )
}

const Loader = () => {
  return (
   
    ReactDOM.createPortal( <> 
   <Background/>
        <div className="loading-dots">
            <h1>Loading...</h1>
            <div className="loading-dots--dot"></div>
            <div className="loading-dots--dot"></div>
            <div className="loading-dots--dot"></div>
        </div>
    
</>,document.getElementById("loader-root"))
   
  )
}

export default Loader
