"use client"
import React from 'react'
import { useModal } from '@/context/ModalContext'
import SignInModal from './SignInModal'




 const ModalLookup = {
    SignInModal: SignInModal
  };



const ModalManager = () => {
    const { modal, closeModal } = useModal();
    console.log({modal})

    if(!modal) 
    return null;
    const Modal = ModalLookup[modal];

 return <Modal onClose={closeModal} />

};

export default ModalManager
