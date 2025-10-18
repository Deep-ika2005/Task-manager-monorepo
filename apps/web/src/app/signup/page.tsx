'use client'

import { useState, useEffect } from 'react'
import { supabase } from '../../lib/supabaseClient'
import Image from 'next/image'
import Link from 'next/link'

export default function SignUpPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [bubbles, setBubbles] = useState<any[]>([])

  // Generate bubbles only on client
  useEffect(() => {
    const generated = Array.from({ length: 30 }).map(() => ({
      width: Math.random() * 60 + 20,
      height: Math.random() * 60 + 20,
      left: Math.random() * 100,
      animationDuration: Math.random() * 20 + 10,
      animationDelay: Math.random() * 10,
    }))
    setBubbles(generated)
  }, [])

  async function handleSignUp(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')
    const { error } = await supabase.auth.signUp({ email, password })
    setLoading(false)
    if (error) setError(error.message)
    else alert('Check your email to confirm signup!')
  }

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-gradient-to-tr from-pink-400 to-purple-600 overflow-hidden p-4">
      {bubbles.map((b, i) => (
        <div
          key={i}
          className="absolute bg-white opacity-20 rounded-full animate-bubble"
          style={{
            width: `${b.width}px`,
            height: `${b.height}px`,
            left: `${b.left}%`,
            animationDuration: `${b.animationDuration}s`,
            animationDelay: `${b.animationDelay}s`,
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

        <h1 className="text-4xl font-extrabold text-center text-pink-600 mb-6">Sign Up</h1>

        <form className="flex flex-col gap-4" onSubmit={handleSignUp}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-300 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-gray-300 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500"
          />

          {error && <p className="text-red-500 text-center">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="bg-pink-600 text-white p-4 rounded-xl hover:bg-pink-700 transition"
          >
            {loading ? 'Signing Up...' : 'Sign Up'}
          </button>
        </form>

        <p className="text-center mt-6 text-gray-500">
          Already have an account?{' '}
          <Link href="/signin" className="text-pink-600 font-semibold hover:underline">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  )
}
