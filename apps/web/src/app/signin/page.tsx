'use client'

import { useState } from 'react'
import { supabase } from '../../lib/supabaseClient'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

export default function SignInPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  async function handleSignIn(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')

    const { error } = await supabase.auth.signInWithPassword({ email, password })
    setLoading(false)
    if (error) setError(error.message)
    else router.push('/components')
  }

  const bubbles = Array.from({ length: 30 })

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-gradient-to-tr from-teal-400 to-blue-600 overflow-hidden p-4">
      
      {/* Bubbles directly here */}
      {bubbles.map((_, i) => (
        <div
          key={i}
          className="absolute bg-white opacity-20 rounded-full animate-bubble"
          style={{
            width: `${Math.random() * 60 + 20}px`,
            height: `${Math.random() * 60 + 20}px`,
            left: `${Math.random() * 100}%`,
            animationDuration: `${Math.random() * 20 + 10}s`,
            animationDelay: `${Math.random() * 10}s`,
          }}
        />
      ))}

      <style jsx>{`
        @keyframes bubble {
          0% { transform: translateY(100vh) scale(1); opacity: 0.2; }
          50% { opacity: 0.5; }
          100% { transform: translateY(-20vh) scale(1.5); opacity: 0; }
        }
        .animate-bubble {
          animation-name: bubble;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
      `}</style>

      <div className="relative z-10 bg-white rounded-3xl shadow-2xl p-10 w-full max-w-lg">
        <div className="flex justify-center mb-6">
          <Image src="/logo.svg" alt="Logo" width={80} height={80} />
        </div>

        <h1 className="text-4xl font-extrabold text-center text-teal-600 mb-6">Sign In</h1>

        <form className="flex flex-col gap-4" onSubmit={handleSignIn}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-300 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-gray-300 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500"
          />

          {error && <p className="text-red-500 text-center">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="bg-teal-600 text-white p-4 rounded-xl hover:bg-teal-700 transition"
          >
            {loading ? 'Signing In...' : 'Sign In'}
          </button>
        </form>

        <p className="text-center mt-6 text-gray-500">
          New here?{' '}
          <Link href="/signup" className="text-teal-600 font-semibold hover:underline">
            Create Account
          </Link>
        </p>
      </div>
    </div>
  )
}
