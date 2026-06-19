import React from "react";

function Header() {

const handleHireME = () => {
    window.open("https://www.linkedin.com/in/hafiz-abdul-rehman-siddiqui-52156522a/", "_blank");
}



  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-white/5 shadow-sm">
<div className="flex justify-between items-center max-w-container_max_width mx-auto px-gutter h-16">
<div className="font-display-lg text-headline-md font-bold text-primary tracking-tighter">
                <a href="/">DevArchitect</a>
            </div>
<nav className="hidden md:flex items-center space-x-8">
<a className="text-on-surface-variant hover:text-primary transition-colors font-body-base text-body-base" href="#projects">Projects</a>
<a className="text-on-surface-variant hover:text-primary transition-colors font-body-base text-body-base" href="#techstack">Tech Stack</a>
<a className="text-on-surface-variant hover:text-primary transition-colors font-body-base text-body-base" href="#casestudy">Case Studies</a>
<a className="text-on-surface-variant hover:text-primary transition-colors font-body-base text-body-base" href="#about">About</a>
<a className="text-on-surface-variant hover:text-primary transition-colors font-body-base text-body-base" href="#contact">Contact</a>
</nav>
<button onClick ={handleHireME} className="bg-primary-container text-on-primary-container px-6 py-2 rounded font-medium hover:opacity-80 transition-all">
                Hire Me
            </button>
        </div>
        <div className="scroll-indicator" id="scrollProgress"></div>
    </header>
  )
}

export default Header