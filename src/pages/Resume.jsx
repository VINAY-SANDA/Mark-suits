import React from 'react'

const Resume = () => {
  return (
    <div className='min-h-screen w-full px-2 md:px-8 py-8 flex flex-col items-center'>
      <h1 className='text-xl md:text-3xl font-bold mb-6'>Resume</h1>
      {/* Add your resume content here, use flex-col and gap for stacking */}
      <div className='w-full max-w-2xl bg-white bg-opacity-10 rounded-lg shadow-md p-4 text-white'>
        <p className='text-base md:text-lg'>Download my resume or view my experience and education below.</p>
        {/* Add download button, timeline, etc. here */}
      </div>
    </div>
  )
}

export default Resume