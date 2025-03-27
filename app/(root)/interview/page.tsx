import React from 'react'
import Agent from '@/components/Agent'
import { getCurrentuser } from '@/lib/actions/auth.action'

const Page = async () => {
  const user = await getCurrentuser();

  return (
    <>
     <h3>Interview Generation</h3>

     <Agent userName={user?.name} userId={user?.id} type="generate" />   
    </>
  )
}

export default Page