'use client'

import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import { useRouter } from 'next/navigation'
import { FormEvent, useRef } from 'react'
import { toast } from 'react-hot-toast'

function Header() {
  const inputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()

  const handleSearch = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const input = inputRef.current?.value
    if (!input) return

    const notification = toast.loading(`Starting a scraper for: ${input}`)

    if (inputRef.current?.value) {
      inputRef.current.value = ''
    }

    try {
      const response = await fetch('/api/activateScraper', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ search: input }),
      })

      const { collection_id, start_eta } = await response.json()

      toast.success('Scraper started succesfully', {
        id: notification,
      })

      router.push(`/search/${collection_id}`)
    } catch (error) {
      // handle any errors
      toast.error('Whoops something went wrong', {
        id: notification,
      })
    }

    // Wait for the response to come back
  }

  return (
    <header>
      <form className='flex items-center space-x-2 justify-center rounded-full py-2 px-4 bg-indigo-100 max-w-md' onSubmit={handleSearch}>
        <input
          ref={inputRef}
          type='text'
          placeholder='Search...'
          className='flex-1 outline-none bg-transparent text-indigo-400 placeholder:text-indigo-300'
        />
        <button hidden>Search</button>
        <MagnifyingGlassIcon className='h-6 w-6 text-indigo-300' />
      </form>
    </header>
  )
}

export default Header
