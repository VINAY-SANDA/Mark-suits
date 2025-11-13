import { BsGithub, BsInstagram } from "react-icons/bs"
import { BsLinkedin } from "react-icons/bs"

const Footer = () => {
  return (
    <footer className="w-full bg-black bg-opacity-50 text-white text-center py-3 mt-10 -ml-10 ">
      <div className="flex flex-row justify-around">
      <span className="text-xs"  >vinay sanda</span>
      <span className="text-xs">Copyright © 2025 VR</span>
    <span className="flex gap-8 text-sm">  
         <a
          href="https://github.com/VINAY-SANDA"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block transition-transform duration-300 hover:scale-105"
        > 
        <BsGithub/>
        </a>
        <a
          href="https://www.linkedin.com/in/vinay-sanda-"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block transition-transform duration-300 hover:scale-105"
        > 
        <BsLinkedin />
        </a>
        <a
          href="https://www.instagram.com/stark_.02_/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block transition-transform duration-300 hover:scale-105"
        > 
        <BsInstagram/>
         </a>
      </span>
      </div>
      </footer>
  )
}

export default Footer