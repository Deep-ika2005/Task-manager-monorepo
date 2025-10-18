'use server'

import { supabaseServer } from '../../../lib/supabaseServer'
import { revalidatePath } from 'next/cache'

export async function deleteTask(id: string, userId: string) {
  const { error } = await supabaseServer
    .from('tasks')
    .delete()
    .eq('id', id)
    .eq('user_id', userId)

  if (error) {
    console.error(error)
    return false
  }

  revalidatePath('/dashboard')
  return true
}
