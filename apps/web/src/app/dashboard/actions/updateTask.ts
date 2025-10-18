'use server'

import { supabaseServer } from '../../../lib/supabaseServer'
import { revalidatePath } from 'next/cache'

export async function updateTask(id: string, title: string, isCompleted: boolean, userId: string) {
  const { error } = await supabaseServer
    .from('tasks')
    .update({ title, is_completed: isCompleted })
    .eq('id', id)
    .eq('user_id', userId)

  if (error) {
    console.error('Error updating task:', error)
    return false
  }

  revalidatePath('/dashboard')
  return true
}
