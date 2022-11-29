import React from 'react';
import ReactDom from 'react-dom';


const Modal = ({open, children, closed}) => {

    if (!open) return null
    return ReactDom.createPortal(
        <>
            <div className ="modal-overlay">
            <div className='modalFront'>
                <button  onClick={closed}> Close Modal</button>
                {children}
            </div>
            </div>
        </>,
        document.getElementById('portal')
    );
};

export default Modal;