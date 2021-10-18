import React from 'react';
import './Modal.css'


export const Modal = (props) => {
    return (
        <div className='modal'>
            <div className='modal-body'>
                <img src={props.img}/>
                <span className='modal-close' onClick={()=>props.setOpenModal(false)}>×</span>
            </div>
        </div>
    )
}