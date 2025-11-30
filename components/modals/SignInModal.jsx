'use client'
import React from 'react'
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { FaFacebook} from "react-icons/fa6";


const SignInModal = ({onClose}) => {

 
  return (
    <main open
      className={`fixed w-full flex   justify-center  max-md:px-2 md:p-5 bg-black/70 border h-full z-40 `}
    >
      <div className=" w-[50%] max-md:w-full flex flex-col bg-white border border-gray-300 lg:justify-center max-lg:pt-[6rem] items-center gap-5 my-5 ">
        <h1 className="mb-4 uppercase font-bold">Sign in with</h1>

        <button onClick={onClose} className="absolute top-4 right-5 md:text-3xl md:bg-black/70 md:backdrop-blur-sm md:px-3  md:text-white max-md:top-10 max-md:right-6">
          x
        </button>

        <div className="w-full px-5 flex flex-col gap-7">
          <button
            onClick={() => signIn("google")}
            className="flex  items-center gap-4 justify-center border border-gray-400 w-full h-10 rounded-full px-3 py-2"
          >
            <FcGoogle className="" />
            <p className=" ">Google</p>
          </button>
          <button className="flex  items-center gap-4 justify-center border border-gray-400 w-full h-10 rounded-full px-3 py-2">
            <FaApple className="" />
            <p className=" ">Apple</p>
          </button>
          <button className="flex  items-center gap-4 justify-center border border-gray-400 w-full h-10 rounded-full px-3 py-2">
            <FaFacebook className="" />
            <p className=" ">Facebook</p>
          </button>
        </div>
      </div>
    </main>
  );
}

export default SignInModal
