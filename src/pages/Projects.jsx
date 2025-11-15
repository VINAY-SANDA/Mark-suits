import React from 'react'

const Projects = () => {
  return (
    <div className='min-h-screen w-full px-2 md:px-8 py-8 flex flex-col items-center'>
      <h1 className='text-xl md:text-3xl font-bold mb-6'>Projects</h1>
      {/* Add your project cards/components here, use flex-col and gap for stacking */}
      <div className='w-full flex flex-col md:flex-row flex-wrap gap-6 justify-center'>
        {/* Example project card */}
        <div className='bg-white bg-opacity-10 rounded-lg shadow-md p-4 w-full md:w-72 text-white'>
          <h2 className='text-lg font-semibold mb-2'>Project Title</h2>
          <p className='text-sm mb-2'>Short description of the project.</p>
          <a href='#' className='text-blue-400 underline'>View Details</a>
        </div>
        {/* Add more cards here */}
      </div>
    </div>
  )
}

export default Projects