

function Footer() {
  const handleEmailClick = () => {
    window.location.href = 'mailto:abdulrehmansiddiqui12@gmail.com'
  }
  return (
    <footer className="bg-surface-container-lowest border-t border-outline-variant">
<div className="flex flex-col md:flex-row justify-between items-center py-12 px-gutter max-w-container_max_width mx-auto gap-8">
<div className="flex flex-col items-center md:items-start gap-4">
<div className="font-display-lg text-headline-md text-primary font-bold">DevArchitect</div>
<div className="font-code-sm text-code-sm text-on-surface-variant text-center md:text-left">
                    © 2024 DevArchitect. Built with MERN &amp; NestJS.
                </div>
</div>
<div className="flex items-center gap-8">
<a className="text-on-surface-variant hover:text-secondary transition-colors font-code-sm text-code-sm" href="https://github.com/abdulehman12" target='_blank' >GitHub</a>
<a className="text-on-surface-variant hover:text-secondary transition-colors font-code-sm text-code-sm" href="https://www.linkedin.com/in/hafiz-abdul-rehman-siddiqui-52156522a/" target='_blank' >LinkedIn</a>
<a className="text-on-surface-variant hover:text-secondary transition-colors font-code-sm text-code-sm" onClick={handleEmailClick}>Email</a>
</div>
</div>
</footer>
  )
}

export default Footer