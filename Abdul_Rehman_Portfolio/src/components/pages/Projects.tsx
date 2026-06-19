import React from 'react'

function Projects() {
  return (
    <section className="py-section_gap max-w-container_max_width mx-auto px-gutter" id="tech-stack">
            <div className="text-center mb-20">
                <h2 className="font-display-lg text-display-lg mb-4 text-white">Projects</h2>
                <p className="text-on-surface-variant max-w-2xl mx-auto">Precision engineering requires the right tools. My stack is curated for modularity, speed, and massive scale.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

                <div className="md:col-span-3 glass-card p-8 rounded-xl border-l-4 border-l-primary group">
                    <div className="flex justify-between items-start mb-6">
                        <span className="material-symbols-outlined text-4xl text-primary [font-variation-settings: 'FILL'_1] " >Project 1: CampusInsight — Full-Stack Academic Portal</span>
                    </div>
                    <h3 className="font-headline-md text-headline-md text-white mb-4">Enterprise-grade campus information and career platform with automated moderation pipeline.</h3>
                    <div className="flex flex-wrap gap-3">
                        <span className="px-4 py-2 bg-surface-container rounded-lg border border-white/5 text-on-surface hover:border-primary/50 transition-colors">React js</span>
                        <span className="px-4 py-2 bg-surface-container rounded-lg border border-white/5 text-on-surface hover:border-primary/50 transition-colors">Nest js</span>
                        <span className="px-4 py-2 bg-surface-container rounded-lg border border-white/5 text-on-surface hover:border-primary/50 transition-colors">PostgreSQL</span>
                        <span className="px-4 py-2 bg-surface-container rounded-lg border border-white/5 text-on-surface hover:border-primary/50 transition-colors">TypeORM</span>
                    </div>
                </div>

                
            </div>
        </section>
  )
}

export default Projects