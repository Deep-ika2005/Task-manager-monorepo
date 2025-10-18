'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

export default function HomePage() {
  const router = useRouter()
  const supabase = createClientComponentClient()

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession()

      if (session) {
        // If signed in → go to main sections page
        router.push('/home')
      } else {
        // If not signed in → go to signup/signin page
        router.push('/signup')
      }
    }

    checkAuth()
  }, [router, supabase])

  return null // nothing is rendered while redirecting
}
