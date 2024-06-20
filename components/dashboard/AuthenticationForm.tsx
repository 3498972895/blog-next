'use client'
import { authenticateAdminAction } from '@/actions/authenticateAdminAction'
import { useActionState } from 'react'
import { useFormStatus } from 'react-dom'

const AuthenticationForm = () => {
  const [state, formAction] = useActionState(authenticateAdminAction, '')
  const { pending } = useFormStatus()
  return (
    <form action={formAction}>
      <input type='text' name='username' />
      <input type='password' name='password' />
      <button type='submit' disabled={pending}></button>
    </form>
  )
}

export default AuthenticationForm
