import Footer from '@/components/Footer'
import React from 'react'
import { RiDownload2Fill } from 'react-icons/ri'

const Resume = () => {
  return (
    <>
      <div className="min-h-screen w-full px-4 md:px-8 pt-2 md:pt-4 pb-8 flex flex-col items-center">
        <h1 className="text-4xl text-center p-30">Resume</h1>
        <div className="text-xl text-blue-400 h-full w-full flex flex-col justify-center items-center">
          <h2>Download my resume or view my experience and education below</h2>

          {/* Use an anchor instead of an empty nested <a> inside the button.
              Use Google Drive direct-download URL for the file id. */}
          <a
            href="https://drive.google.com/file/d/1aufYkixSizD35VTUlbuTqEnGAJSjaNnh/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-row gap-2 items-center bg-yellow-200 text-black px-3 py-2 rounded-2xl mt-10 hover:bg-white hover:text-red-500 hover:scale-110"
          >
            Resume <RiDownload2Fill />
          </a>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Resume