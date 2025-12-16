import React from 'react'
// import { useModal } from "@/context/ModalContext";

const ConfirmationModal = ({ onClose, onConfirm }) => {
    
  return (
    <main className="">
      <div className="w-full flex flex-col h-dvh absolute inset-0  bg-black/20 backdrop-blur-sm z-50 fixed justify-center items-center px-3">
        <div className="bg-white h-[70%] w-full flex relative flex-col items-center justify-center gap-6 px-2">
          <button
            onClick={onClose}
            className="absolute top-4 font-bold right-5 md:text-3xl md:bg-black/70 md:backdrop-blur-sm md:px-3  md:text-white max-md:top-10 max-md:right-6"
          >
            x
          </button>
          <p className="text-gray-700 font-bold text-md text-center">
            Your order will be sent to Whatsapp and <br /> All transactions will
            be handled there
          </p>
          <button
            onClick={onConfirm}
            className="bg-pink-500 rounded-sm px-2 py-2 text-white"
          >
            Click to continue
          </button>
        </div>
      </div>
    </main>
  );
};

export default ConfirmationModal
