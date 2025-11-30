import { auth } from '@/auth'
import { redirect } from 'next/navigation'
import React from 'react'
import AdminUpload from './AdminUpload'


const page = async () => {
    const session = await auth()
    if (!session) {
        redirect('/');
    }
  return (
    <main>
      <AdminUpload session={session}/>
    </main>
  )
}

export default page
