'use client'

import { useState } from 'react'
import { supabase } from '../../../lib/supabaseClient'
import { createTask } from '../actions/createTask'

export default function TaskForm() {
  const [title, setTitle] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)

    const { data: userData } = await supabase.auth.getUser()
    if (!userData.user) return

    const success = await createTask(title, userData.user.id)
    if (success) setTitle('')
    setLoading(false)
  }

  return (
    <div className="relative w-full max-w-lg mx-auto">
      {/* Animated Bubble Background */}
      <div className="absolute inset-0 overflow-hidden">
        <span className="absolute w-12 h-12 bg-indigo-400 rounded-full opacity-20 animate-bounce-slow top-10 left-5"></span>
        <span className="absolute w-6 h-6 bg-pink-400 rounded-full opacity-30 animate-bounce-slower top-32 right-10"></span>
        <span className="absolute w-8 h-8 bg-purple-400 rounded-full opacity-20 animate-bounce-fast top-1/2 left-1/2"></span>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="relative z-10 flex gap-3 mb-6 p-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-3xl shadow-2xl backdrop-blur-md"
      >
        <input
          type="text"
          placeholder="Add a new task..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="flex-1 px-5 py-3 rounded-xl border border-white/30 focus:outline-none focus:ring-2 focus:ring-white placeholder-white text-white bg-white/10 backdrop-blur-sm transition"
        />
        <button
          type="submit"
          className="px-6 py-3 bg-white text-indigo-600 font-bold rounded-xl shadow-lg hover:scale-105 hover:bg-white/90 transition-transform duration-300"
          disabled={loading}
        >
          {loading ? 'Adding...' : 'Add'}
        </button>
      </form>
    </div>
  )
}
