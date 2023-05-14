'use client'

import { signIn, signOut } from 'next-auth/react'

export const LoginButton = () => {
  return <button onClick={() => signIn()}>Sign in</button>
}

export const LogoutButton = () => {
  return <button className='py-3 px-8 bg-cyan-600 rounded-lg' onClick={() => signOut()}>Sign Out</button>
}
