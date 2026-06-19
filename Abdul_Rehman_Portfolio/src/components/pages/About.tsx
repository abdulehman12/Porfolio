
function About() {

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/Abdul_Rehman_Siddiqui_Resume.pdf'
        link.download = 'Abdul_Rehman_Siddiqui_Resume.pdf'; // Sets the filename for the user
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    }
    return (
        <section className="py-section_gap max-w-container_max_width mx-auto px-gutter" id="experience">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
                <div className="relative">
                    <div className="aspect-square rounded-2xl overflow-hidden border border-white/10 relative z-10">
                        <img className="w-full h-full object-cover" data-alt="A professional portrait of a modern software architect in a dimly lit studio setting. The lighting is dramatic and moody with a sharp side-light that highlights clean facial features. He is wearing a dark, textured tech-wear jacket. The background is a blurred server room with soft blue and amber blinking lights, creating a technical and sophisticated atmosphere." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_sjHZsv8_U1dF30q-icMTJ0mqyKA8wY-vsO3jXnDXqrDG2ylGlSR_W8liFZeZlnCrrtNttsiWSEqImGuzyl9vs93xr-zkV8tKorOYY8Gs0go0pGoYr_aqFwluFIEAKcVyLlmRAVTsqaZcsTuJxWuaNPQM8kERH-2qpD1Ac49WkFEgicZ6RVOCYcCZIrzS_00TAp8hjiSnX1YTPOXNXp_jNLmEXg_jHSwS5SQuY4-ZAKlobxDFQdTgyjvC6zglu9yd2kFHXoin_vo9" />
                    </div>
                    <div className="absolute -top-12 -left-12 w-64 h-64 bg-secondary/10 blur-[100px] rounded-full -z-0"></div>
                    <div className="absolute bottom-12 right-12 glass-card p-6 rounded-xl z-20 border-l-4 border-secondary">
                        <div className="text-3xl font-bold text-white">2+ Years</div>
                        <div className="text-on-surface-variant font-code-sm uppercase tracking-widest text-xs">Engineering Excellence</div>
                    </div>
                </div>
                <div className="space-y-8">
                    <div className="space-y-4">
                        <h2 className="font-display-lg text-display-lg text-white">Technical Communication & Leadership</h2>
                        <p className="text-on-surface-variant text-xl leading-relaxed">
                            Great software isn't just written—it's communicated. Alongside my development work,
                            I operate as a coding instructor and technical mentor. I have a proven track record of
                            translating complex architectural programming logic, database designs, and object-oriented
                            principles into highly structured, clear, and actionable lessons.
                        </p>
                    </div>
                    <div className="space-y-6">
                        <div className="flex gap-6">
                            <div className="flex-shrink-0 w-24 h-12 rounded bg-surface-container flex items-center justify-center border border-white/5">
                                <span className="material-symbols-outlined text-primary">school</span>
                            </div>
                            <div>
                                <h4 className="font-bold text-white">Academic Foundation</h4>
                                <p className="text-on-surface-variant">B.S. Computer Science. Focused on Web Development and Software Engineering.</p>
                            </div>
                        </div>
                        <div className="flex gap-6">
                            <div className="flex-shrink-0 w-24 h-12 rounded bg-surface-container flex items-center justify-center border border-white/5">
                                <span className="material-symbols-outlined text-secondary">Mentoring</span>
                            </div>
                            <div>
                                <h4 className="font-bold text-white">Software Engineering Mentoring</h4>
                                <p className="text-on-surface-variant">Mentored developers in mastering core syntax across Python, C++, and Web Development architectures</p>
                            </div>
                        </div>
                    </div>
                    <div className="pt-6">
                        <button 
                        className="border border-primary text-primary px-8 py-4 rounded-lg font-bold hover:bg-primary/5 transition-colors"
                        onClick={handleDownload}
                         >
                            Download Technical CV
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About