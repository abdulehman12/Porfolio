import React from 'react'

function TechStack() {
    return (
        <section className="py-section_gap max-w-container_max_width mx-auto px-gutter" id="tech-stack">
            <div className="text-center mb-20">
                <h2 className="font-display-lg text-display-lg mb-4 text-white">Technological Arsenal</h2>
                <p className="text-on-surface-variant max-w-2xl mx-auto">Precision engineering requires the right tools. My stack is curated for modularity, speed, and massive scale.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

                <div className="md:col-span-2 glass-card p-8 rounded-xl border-l-4 border-l-primary group">
                    <div className="flex justify-between items-start mb-6">
                        <span className="material-symbols-outlined text-4xl text-primary [font-variation-settings: 'FILL'_1] " >layers</span>
                        <div className="technical-chip bg-primary/10 text-primary px-3 py-1 rounded">UI/UX Layer</div>
                    </div>
                    <h3 className="font-headline-md text-headline-md text-white mb-4">Frontend Development</h3>
                    <div className="flex flex-wrap gap-3">
                        <span className="px-4 py-2 bg-surface-container rounded-lg border border-white/5 text-on-surface hover:border-primary/50 transition-colors">React js</span>
                        <span className="px-4 py-2 bg-surface-container rounded-lg border border-white/5 text-on-surface hover:border-primary/50 transition-colors">Tailwind CSS</span>
                        <span className="px-4 py-2 bg-surface-container rounded-lg border border-white/5 text-on-surface hover:border-primary/50 transition-colors">Responsive UI</span>
                    </div>
                </div>

                <div className="md:col-span-2 glass-card p-8 rounded-xl border-l-4 border-l-secondary group">
                    <div className="flex justify-between items-start mb-6">
                        <span className="material-symbols-outlined text-4xl text-secondary [font-variation-settings: 'FILL'_1] " >terminal</span>
                        <div className="technical-chip bg-secondary/10 text-secondary px-3 py-1 rounded">Engine Room</div>
                    </div>
                    <h3 className="font-headline-md text-headline-md text-white mb-4">Backend Architecture</h3>
                    <div className="flex flex-wrap gap-3">
                        <span className="px-4 py-2 bg-surface-container rounded-lg border border-white/5 text-on-surface hover:border-secondary/50 transition-colors">NestJS</span>
                        <span className="px-4 py-2 bg-surface-container rounded-lg border border-white/5 text-on-surface hover:border-secondary/50 transition-colors">Node.js</span>
                        <span className="px-4 py-2 bg-surface-container rounded-lg border border-white/5 text-on-surface hover:border-secondary/50 transition-colors">Express js</span>
                        <span className="px-4 py-2 bg-surface-container rounded-lg border border-white/5 text-on-surface hover:border-secondary/50 transition-colors">RESTful APIs</span>
                        <span className="px-4 py-2 bg-surface-container rounded-lg border border-white/5 text-on-surface hover:border-secondary/50 transition-colors">GraphQL</span>
                        <span className="px-4 py-2 bg-surface-container rounded-lg border border-white/5 text-on-surface hover:border-secondary/50 transition-colors">Microservices</span>
                    </div>
                </div>

                 <div className="md:col-span-3 glass-card p-8 rounded-xl border-l-4 border-l-secondary group">
                    <div className="flex justify-between items-start mb-6">
                        <span className="material-symbols-outlined text-4xl text-secondary [font-variation-settings: 'FILL'_1] " >Core Systems Logic</span>
                        <div className="technical-chip bg-secondary/10 text-secondary px-3 py-1 rounded">Problem Solving</div>
                    </div>
                    <div className="flex flex-wrap gap-3">
                        <span className="px-4 py-2 bg-surface-container rounded-lg border border-white/5 text-on-surface hover:border-secondary/50 transition-colors">OOP</span>
                        <span className="px-4 py-2 bg-surface-container rounded-lg border border-white/5 text-on-surface hover:border-secondary/50 transition-colors">Data Structures and Algorithms</span>
                        <span className="px-4 py-2 bg-surface-container rounded-lg border border-white/5 text-on-surface hover:border-secondary/50 transition-colors">RBAC $ ABAC Models </span>
                        <span className="px-4 py-2 bg-surface-container rounded-lg border border-white/5 text-on-surface hover:border-secondary/50 transition-colors">JWT Security</span>
                    </div>
                </div>

                <div className="md:col-span-1 glass-card p-8 rounded-xl border-t-4 border-t-tertiary">
                    <span className="material-symbols-outlined text-4xl text-tertiary mb-6 [font-variation-settings: 'FILL'_1]" >database</span>
                    <h3 className="text-xl font-bold text-white mb-4">Persistence</h3>
                    <ul className="space-y-3 text-on-surface-variant font-code-sm">
                        <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-tertiary rounded-full"></span> PostgreSQL</li>
                        <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-tertiary rounded-full"></span> MongoDB</li>
                        <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-tertiary rounded-full"></span> TypeORM</li>
                    </ul>
                </div>

                <div className="md:col-span-4 glass-card p-8 rounded-xl border-t-4 border-t-error">
                    <div className="flex flex-col md:flex-row justify-between md:items-center gap-8">
                        <div>
                            <span className="material-symbols-outlined text-4xl text-error mb-6 [font-variation-settings: 'FILL'_1]" >rocket_launch</span>
                            <h3 className="text-xl font-bold text-white mb-2">AI Integration &amp; Infrastructure</h3>
                            <p className="text-on-surface-variant">Deploying intelligence to production environments.</p>
                        </div>
                        <div className="grid grid-cols-2 gap-4 flex-grow max-w-md">
                            <div className="p-4 bg-surface-container rounded-lg border border-white/5 text-center">
                                <div className="font-bold text-white">Docker</div>
                                <div className="text-[10px] text-on-surface-variant uppercase tracking-widest mt-1">Containerization</div>
                            </div>
                            <div className="p-4 bg-surface-container rounded-lg border border-white/5 text-center">
                                <div className="font-bold text-white">Hugging Face</div>
                                <div className="text-[10px] text-on-surface-variant uppercase tracking-widest mt-1">LLM Deployment</div>
                            </div>
                            <div className="p-4 bg-surface-container rounded-lg border border-white/5 text-center">
                                <div className="font-bold text-white">AWS</div>
                                <div className="text-[10px] text-on-surface-variant uppercase tracking-widest mt-1">Infrastructure</div>
                            </div>
                            <div className="p-4 bg-surface-container rounded-lg border border-white/5 text-center">
                                <div className="font-bold text-white">CI/CD</div>
                                <div className="text-[10px] text-on-surface-variant uppercase tracking-widest mt-1">Automation</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TechStack