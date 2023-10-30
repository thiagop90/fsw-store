'use server'

import { redirect } from 'next/navigation'

export async function searchProducts(formData: FormData) {
  const searchQuery = formData.get('search')?.toString()

  if (searchQuery) {
    redirect('/search?query=' + searchQuery)
  }
}
