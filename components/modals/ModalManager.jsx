"use client"
import React from 'react'
import { useModal } from '@/context/ModalContext'
import SignInModal from './SignInModal'
import ConfirmationModal from './ConfirmationModal'





 const ModalLookup = {
    SignInModal: SignInModal,
    ConfirmationModal:ConfirmationModal
    
  };



const ModalManager = () => {
    const { modal, closeModal } = useModal();
    // console.log({modal})

    if(!modal) 
    return null;
    const Modal = ModalLookup[modal];

 return <Modal onClose={closeModal} />

};

export default ModalManager
