import { FaGithub } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-200 py-10 mt-20 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <div className="font-semibold text-lg mb-2 tracking-wide">Contact Me</div>
          <div>
            <a href="mailto:jheredmiguelrepublica14@gmail.com" className="hover:text-blue-400 transition-colors">
              jheredmiguelrepublica14@gmail.com
            </a>
          </div>
          <div className="mt-1 flex items-center gap-3 justify-center md:justify-start">
            <a href="https://github.com/red-sakai" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors flex items-center gap-1">
              <FaGithub className="text-lg" />
              GitHub
            </a>
            <span>|</span>
            <a href="https://www.linkedin.com/in/jhered-miguel-republica-13884b322/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors flex items-center gap-1">
              <FaLinkedin className="text-lg" />
              LinkedIn
            </a>
          </div>
        </div>
        <div className="text-center md:text-right text-sm opacity-80">
          &copy; {new Date().getFullYear()} Jhered Miguel C. Republica. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
