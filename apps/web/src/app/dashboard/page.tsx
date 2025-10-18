'use client'

import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'

export default function DashboardPage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex flex-col items-center p-6 overflow-hidden">
      {/* Animated Background Bubbles */}
      <span className="absolute w-20 h-20 bg-white/20 rounded-full top-10 left-5 animate-bounce-slow"></span>
      <span className="absolute w-12 h-12 bg-white/30 rounded-full top-1/3 right-10 animate-bounce-slower"></span>
      <span className="absolute w-16 h-16 bg-white/10 rounded-full bottom-20 left-1/2 animate-bounce-fast"></span>

      {/* Dashboard Container */}
      <div className="relative z-10 w-full max-w-3xl bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-xl flex flex-col gap-6">
        <h1 className="text-4xl font-extrabold text-white text-center mb-4">
          Task Dashboard
        </h1>

        {/* Task Form */}
        <TaskForm />

        {/* Task List */}
        <TaskList />
      </div>
    </div>
  )
}
