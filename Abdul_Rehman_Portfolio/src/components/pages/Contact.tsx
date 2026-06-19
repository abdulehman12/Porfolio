import React from 'react'
import { Link } from 'react-router-dom';

function Contact() {

  const handleEmailClick = () => {
    window.location.href = 'mailto:abdulrehmansiddiqui12@gmail.com'
  }
  return (
    <section className="py-section_gap relative overflow-hidden" id="contact">

      <div className="relative z-10 max-w-container_max_width mx-auto px-gutter text-center">
        <div className="glass-card p-16 rounded-3xl max-w-4xl mx-auto border-t border-white/10">
          <h2 className="font-display-lg text-display-lg mb-6 text-white">Let's build something <span className="text-secondary">robust</span>.</h2>
          <p className="text-on-surface-variant text-xl mb-12 max-w-2xl mx-auto">Currently accepting inquiries for enterprise solutions, architecture consulting, and senior engineering roles.</p>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <a className="bg-white text-background px-10 py-5 rounded-xl font-extrabold text-lg flex items-center justify-center gap-3 hover:bg-secondary transition-colors" onClick={handleEmailClick} >
              Email Me
            </a>
            <Link className="bg-surface-container-highest text-white px-10 py-5 rounded-xl font-extrabold text-lg flex items-center justify-center gap-3 hover:bg-surface-bright transition-colors" to="/contactForm">

              Schedule a Call
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact