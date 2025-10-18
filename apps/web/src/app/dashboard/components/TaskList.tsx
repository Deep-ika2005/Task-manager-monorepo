'use client'

import { useState, useEffect } from 'react'
import { supabase } from '../../../lib/supabaseClient'
import { updateTask } from '../actions/updateTask'
import { deleteTask } from '../actions/deleteTask'

interface Task {
  id: string
  title: string
  is_completed: boolean
  user_id: string
}

export default function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [loading, setLoading] = useState(true)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [editingTitle, setEditingTitle] = useState('')

  async function fetchTasks() {
    const { data: userData } = await supabase.auth.getUser()
    if (!userData.user) return

    const { data, error } = await supabase
      .from('tasks')
      .select('*')
      .eq('user_id', userData.user.id)

    if (error) console.error(error)
    else setTasks(data || [])

    setLoading(false)
  }

  async function handleDelete(id: string) {
    const { data: userData } = await supabase.auth.getUser()
    if (!userData.user) return

    await deleteTask(id, userData.user.id)
    fetchTasks()
  }

  async function handleToggleComplete(task: Task) {
    const { data: userData } = await supabase.auth.getUser()
    if (!userData.user) return

    await updateTask(task.id, task.title, !task.is_completed, userData.user.id)
    fetchTasks()
  }

  async function handleEditSave(task: Task) {
    const { data: userData } = await supabase.auth.getUser()
    if (!userData.user) return

    await updateTask(task.id, editingTitle, task.is_completed, userData.user.id)
    setEditingId(null)
    setEditingTitle('')
    fetchTasks()
  }

  useEffect(() => {
    fetchTasks()
  }, [])

  if (loading) return <p className="text-center text-gray-400">Loading tasks...</p>
  if (tasks.length === 0) return <p className="text-center text-gray-400">No tasks found.</p>

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      {/* Animated background bubbles */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <span className="absolute w-12 h-12 bg-indigo-400 rounded-full opacity-20 animate-bounce-slow top-10 left-5"></span>
        <span className="absolute w-6 h-6 bg-pink-400 rounded-full opacity-30 animate-bounce-slower top-32 right-10"></span>
        <span className="absolute w-8 h-8 bg-purple-400 rounded-full opacity-20 animate-bounce-fast top-1/2 left-1/2"></span>
      </div>

      <div className="flex flex-col gap-3">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="flex items-center gap-3 p-4 rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-lg hover:scale-105 transition-transform duration-300"
          >
            {editingId === task.id ? (
              <>
                <input
                  type="text"
                  value={editingTitle}
                  onChange={(e) => setEditingTitle(e.target.value)}
                  className="flex-1 px-3 py-2 rounded-lg border border-white/40 focus:outline-none focus:ring-2 focus:ring-white placeholder-white text-white bg-white/10 backdrop-blur-sm"
                />
                <button
                  className="px-3 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
                  onClick={() => handleEditSave(task)}
                >
                  Save
                </button>
                <button
                  className="px-3 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition"
                  onClick={() => setEditingId(null)}
                >
                  Cancel
                </button>
              </>
            ) : (
              <>
                <input
                  type="checkbox"
                  checked={task.is_completed}
                  onChange={() => handleToggleComplete(task)}
                  className="w-5 h-5 accent-white"
                />
                <span
                  className={`flex-1 text-white font-semibold ${
                    task.is_completed ? 'line-through text-gray-200 opacity-70' : ''
                  }`}
                >
                  {task.title}
                </span>
                <button
                  className="px-3 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition"
                  onClick={() => {
                    setEditingId(task.id)
                    setEditingTitle(task.title)
                  }}
                >
                  Edit
                </button>
                <button
                  className="px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                  onClick={() => handleDelete(task.id)}
                >
                  Delete
                </button>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
