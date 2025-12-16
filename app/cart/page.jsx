import React from 'react'
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import CartPage from './CartPage';

const page = async () => {
     const session = await auth()
        if (!session) {
          redirect("/");
        }
  return (
    <main>
        <CartPage session ={session}/>
    </main>
  )
}

export default page
