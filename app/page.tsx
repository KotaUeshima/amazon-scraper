import { DocumentMagnifyingGlassIcon } from '@heroicons/react/24/outline'

function HomePage() {
  return (
    <div className='flex flex-col items-center justify-center'>
      <DocumentMagnifyingGlassIcon className='h-64 w-64 text-indigo-600/50' />
      <h1 className='text-3xl text-center mt-2 text-black/50 font-bold mb-5'>
        Welcome to the Amazon Web Scraper
      </h1>
      <h2 className='text-2xl text-center text-red-400 font-medium'>
        Unfortunately we have restricted search functionality at the moment
        due to API limitations and privacy concerns
      </h2>
    </div>
  )
}

export default HomePage
