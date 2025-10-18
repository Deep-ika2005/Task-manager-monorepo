'use server'

import { supabaseServer } from '../../../lib/supabaseServer'
import { z } from 'zod'
import { revalidatePath } from 'next/cache'

const taskSchema = z.object({
  title: z.string().min(1).max(500)
})

export async function createTask(title: string, userId: string) {
  const parsed = taskSchema.safeParse({ title })
  if (!parsed.success) return false

  const { error } = await supabaseServer.from('tasks').insert({
    title,
    is_completed: false,
    user_id: userId
  })

  if (error) {
    console.error(error)
    return false
  }

  revalidatePath('/dashboard')
  return true
}
