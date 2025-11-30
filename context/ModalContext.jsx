'use client'
import React from 'react'
import {createContext, useState, useContext} from 'react'


const ModalContext = createContext();

export const ModalProvider = ({children}) => {
    const [modal, setModal] = useState(null)

    const openModal = name =>{
        setModal(name)
    }

    const closeModal = () => {
        setModal(null);
    }

  return (
    <div>
      <ModalContext.Provider value={{modal, openModal, closeModal}} >
        {children}
      </ModalContext.Provider>
    </div>
  )
}

export const useModal = () => useContext(ModalContext)
