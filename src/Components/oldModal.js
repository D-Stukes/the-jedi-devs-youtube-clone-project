import React, { Component } from 'react';
import {useState} from "react-dom"

function Modal({children}){

    const [modal, setModal] = useState(false)
    
    function handleToggleErrorModal(){
        setModal(!modal)
    }


        return  (
            <div>

                {children}
                {/* <>
                <div className='modal-overlay'>
                    <button 
                        className='modal'
                        onClick={handleToggleErrorModal}>Close
                    </button>
                   <div> <h2>Error</h2>
                         <p>Something went wrong!</p>
                   </div>
                </div>
                
                </> */}
            </div>
        );
 
}

// ReactDOM.createPortal


export default Modal;