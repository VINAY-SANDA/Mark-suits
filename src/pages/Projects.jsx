import React from 'react'
import Footer from '@/components/Footer'
import MysteryCard from '@/components/MysteryCard'
import ProjectCard from '@/components/ProjectCard'
import { projects } from '@/data/projects'
import { motion } from 'motion/react'

const Projects = () => {
  return (
    <>
      <div className='min-h-screen w-full px-4 md:px-8 pt-24 md:pt-32 pb-8 flex flex-col items-center'>
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='text-center mb-16'
        >
          <h2 className='text-4xl md:text-5xl font-bold text-white mb-4'>
            My <span className='text-[#FFFF00]'>Projects</span>
          </h2>
          <p className='text-gray-400 max-w-2xl mx-auto text-lg'>
            Here are some of the projects I've worked on. Each one represents a unique challenge and a learning opportunity.
          </p>
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl'>
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
          <MysteryCard />
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Projects