import React from 'react'

function Experience() {
    return (
        <section className="py-section_gap max-w-container_max_width mx-auto px-gutter" id="experience">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
                <div className="relative">
                    <div className="aspect-square rounded-2xl overflow-hidden border border-white/10 relative z-10">
                        <img className="w-full h-full object-cover" data-alt="A professional portrait of a modern software architect in a dimly lit studio setting. The lighting is dramatic and moody with a sharp side-light that highlights clean facial features. He is wearing a dark, textured tech-wear jacket. The background is a blurred server room with soft blue and amber blinking lights, creating a technical and sophisticated atmosphere." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_sjHZsv8_U1dF30q-icMTJ0mqyKA8wY-vsO3jXnDXqrDG2ylGlSR_W8liFZeZlnCrrtNttsiWSEqImGuzyl9vs93xr-zkV8tKorOYY8Gs0go0pGoYr_aqFwluFIEAKcVyLlmRAVTsqaZcsTuJxWuaNPQM8kERH-2qpD1Ac49WkFEgicZ6RVOCYcCZIrzS_00TAp8hjiSnX1YTPOXNXp_jNLmEXg_jHSwS5SQuY4-ZAKlobxDFQdTgyjvC6zglu9yd2kFHXoin_vo9" />
                    </div>
                    <div className="absolute -top-12 -left-12 w-64 h-64 bg-secondary/10 blur-[100px] rounded-full -z-0"></div>
                    <div className="absolute bottom-12 right-12 glass-card p-6 rounded-xl z-20 border-l-4 border-secondary">
                        <div className="text-3xl font-bold text-white">4+ Years</div>
                        <div className="text-on-surface-variant font-code-sm uppercase tracking-widest text-xs">Engineering Excellence</div>
                    </div>
                </div>
                <div className="space-y-8">
                    <div className="space-y-4">
                        <h2 className="font-display-lg text-display-lg text-white">The Architect Behind the Code</h2>
                        <p className="text-on-surface-variant text-xl leading-relaxed">
                            I am a Computer Science graduate dedicated to the craft of clean, modular code. My approach blends mathematical precision with high-performance engineering.
                        </p>
                    </div>
                    <div className="space-y-6">
                        <div className="flex gap-6">
                            <div className="flex-shrink-0 w-12 h-12 rounded bg-surface-container flex items-center justify-center border border-white/5">
                                <span className="material-symbols-outlined text-primary">school</span>
                            </div>
                            <div>
                                <h4 className="font-bold text-white">Academic Foundation</h4>
                                <p className="text-on-surface-variant">B.S. Computer Science. Focused on Distributed Systems and Relational Algebra.</p>
                            </div>
                        </div>
                        <div className="flex gap-6">
                            <div className="flex-shrink-0 w-12 h-12 rounded bg-surface-container flex items-center justify-center border border-white/5">
                                <span className="material-symbols-outlined text-secondary">architecture</span>
                            </div>
                            <div>
                                <h4 className="font-bold text-white">System Design Philosophy</h4>
                                <p className="text-on-surface-variant">Modular architectures that evolve. I build with Domain-Driven Design (DDD) and SOLID principles at the core.</p>
                            </div>
                        </div>
                    </div>
                    <div className="pt-6">
                        <button className="border border-primary text-primary px-8 py-4 rounded-lg font-bold hover:bg-primary/5 transition-colors">
                            Download Technical CV
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience