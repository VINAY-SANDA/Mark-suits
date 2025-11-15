import { BsGithub, BsInstagram } from "react-icons/bs"
import { BsLinkedin } from "react-icons/bs"

const Footer = () => {
  return (
    <footer className="w-full bg-black bg-opacity-50 text-white text-center py-4 mt-10">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-10 px-4">
        <span className="text-xs md:text-sm">vinay sanda</span>
        <span className="text-xs md:text-sm">Copyright © 2025 VR</span>
        <span className="flex gap-6 md:gap-8 text-lg md:text-xl">
          <a
            href="https://github.com/VINAY-SANDA"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block transition-transform duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-amber-500 rounded"
            aria-label="GitHub"
          >
            <BsGithub/>
          </a>
          <a
            href="https://www.linkedin.com/in/vinay-sanda-"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block transition-transform duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
            aria-label="LinkedIn"
          >
            <BsLinkedin />
          </a>
          <a
            href="https://www.instagram.com/stark_.02_/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block transition-transform duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-pink-500 rounded"
            aria-label="Instagram"
          >
            <BsInstagram/>
          </a>
        </span>
      </div>
    </footer>
  )
}

export default Footer