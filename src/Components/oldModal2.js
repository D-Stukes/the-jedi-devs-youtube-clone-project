import React from 'react';
import ReactDom from 'react-dom';
// import CloseButton from "./CloseButton"
import { useState } from "react"

const Modal = ({open, children, closed}) => {

  const[opened, setOpened] = useState(false)
  const[close, setClose]= useState(false)
   
   if (!open) return null

//    function handleCloseModal{

//    }


    return ReactDom.createPortal(
        <>
            <div className ="modal-overlay">
                <div className='modalFront'>

                    <button  onClick = {close=()=>setOpened(false)}
                                className="closeModalButton"
                                type="image"
                                src={require("./CloseButton/redXCloseBtn.png")}>
                    </button>
                    
                    {children}

                </div>
            </div>
        </>,
        document.getElementById('portal')
    );
};

export default Modal;

{/* <div className="modalButton1">
<button onClick={()=>setOpened(true)} closed={()=>setOpened(false)}>Open Modal</button> 
</div> */}