'use client'

import { signIn } from 'next-auth/react'
import { FC, useState } from 'react'
import { Button } from './Button'
import { toast } from './Toast'
import { useRouter } from 'next/navigation'

/**
 * NextJS does not allow to pass function from server -> client components,
 * hence this unreusable component.
 */

interface SignInButtonProps {}

const SignInButton: FC<SignInButtonProps> = ({}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const router = useRouter()

  const GoToDashboard = () => {
      setIsLoading(true)
      router.push('/dashboard')
      setTimeout(() => {
        setIsLoading(false)
      }, 1500) 
    }
  

  return (
    <Button onClick={GoToDashboard} isLoading={isLoading}>
      Generate API Key
    </Button>
  )
}

export default SignInButton