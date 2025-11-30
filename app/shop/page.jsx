'use server'

import { auth } from '@/auth'
import { redirect } from 'next/navigation'
import React from 'react'
import ShoppingPage from './ShoppingPage'

const page = async () => {
    const session = await auth()
    if (!session) {
        redirect("/");
    }
  return (
    <main>
      <ShoppingPage session={session}/>
      {/* <ShoppingPage /> */}
    </main>
  )
}

export default page
