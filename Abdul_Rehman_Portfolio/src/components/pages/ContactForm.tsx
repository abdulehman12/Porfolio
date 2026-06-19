
import { useState } from 'react';
function ContactForm() {
    const [isHiddenOne, setIsHiddenOne] = useState<boolean>(false);
    const [isHiddenTwo, setIsHiddenTwo] = useState<boolean>(false);
    return (
        <main className="pt-32 pb-section_gap max-w-container_max_width mx-auto px-gutter">
            <header className="mb-16">
                <h1 className="font-display-lg text-display-lg md:text-display-lg mb-6 max-w-3xl">
                    Book a Technical Consultation
                </h1>
                <p className="text-on-surface-variant max-w-2xl text-lg leading-relaxed">
                    Streamlining high-performance engineering through architectural precision. Choose a slot for project inquiries, deep-dive architectural reviews, or strategic recruitment conversations.
                </p>
            </header>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                <div className="lg:col-span-5 space-y-8">
                    <div className="glass-panel p-8 rounded-xl">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary">
                                <img className="w-full h-full object-cover" data-alt="Professional headshot of a software architect with a focused expression, wearing dark minimalist attire, set against a dark grey background with subtle cyan rim lighting to match the engineering aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5xAZLOrEQ7irDhywvy2BtHaeK-XZgo3LU29NAKJrFz-0uIIk_zNXlarXJxde2jxterDtXMXuTwUKNwfGGiNuVWe7psXtXqqE4mP8CKqe_2sL3PFfCkAvXD9eR05_Mwh8sde4YQEihvq4wM8uksPKviKW3ubIKDNhXB6F47uPGtW1pdzrkTtUufV8DvBMlhh3LxuvNDv5cn9EuwF31ZI-2BLk6QhrNlMfveaZq9WdsSbKhEW7uh-h2coZVqAKQQ3A2g24c3utImrWW" />
                            </div>
                            <div>
                                <h3 className="font-headline-md text-headline-md text-primary">Alex Chen</h3>
                                <p className="font-code-sm text-code-sm text-secondary">Lead Architect • MERN • NestJS</p>
                            </div>
                        </div>
                        <div className="space-y-6">
                            <div>
                                <span className="font-label-caps text-label-caps text-outline mb-2 block uppercase">Engagement Types</span>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3">
                                        <span className="material-symbols-outlined text-secondary mt-1">check_circle</span>
                                        <span><strong className="text-on-surface">Architectural Audit:</strong> Comprehensive review of your existing stack and scalability bottlenecks.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="material-symbols-outlined text-secondary mt-1">check_circle</span>
                                        <span><strong className="text-on-surface">Full-Stack Inquiry:</strong> Discussing new project development using MERN or NestJS ecosystems.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="material-symbols-outlined text-secondary mt-1">check_circle</span>
                                        <span><strong className="text-on-surface">Career/Mentorship:</strong> Technical guidance for senior engineers or team lead transitions.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <h4 className="font-headline-md text-headline-md text-on-surface">Technical Briefing</h4>
                        <div className="technical-border bg-surface-container-lowest p-4 rounded-lg">
                            <div className="flex justify-between items-center cursor-pointer  " onClick={() => setIsHiddenOne(!isHiddenOne)}>
                                <span className="font-code-sm text-code-sm text-on-surface">01. PRE-CALL_REQUIREMENTS</span>
                                <span className="material-symbols-outlined text-outline">expand_more</span>
                            </div>
                            <div className={`mt-3 text-on-surface-variant font-code-sm text-code-sm border-t border-outline-variant/30 pt-3 ${isHiddenOne ? 'hidden' : ''}`}>
                                Please provide a brief technical context or GitHub repository link (if applicable) 24 hours prior to our scheduled sync.
                            </div>
                        </div>
                        <div className="technical-border bg-surface-container-lowest p-4 rounded-lg">
                            <div className="flex justify-between items-center cursor-pointer" onClick={() => setIsHiddenTwo(!isHiddenTwo)}>
                                <span className="font-code-sm text-code-sm text-on-surface">02. RESPONSE_LATENCY</span>
                                <span className="material-symbols-outlined text-outline">expand_more</span>
                            </div>
                            <div className={`mt-3 text-on-surface-variant font-code-sm text-code-sm border-t border-outline-variant/30 pt-3 ${isHiddenTwo ? 'hidden' : ''}`}>
                                Confirmations are typically dispatched within 400ms of form submission. Manual follow-ups occur within 24 hours.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:col-span-7">
                    <div className="glass-panel p-8 rounded-xl border border-primary/20 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <span className="material-symbols-outlined text-9xl">terminal</span>
                        </div>
                        <form className="space-y-6 relative z-10">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="font-label-caps text-label-caps text-outline">Full_Name</label>
                                    <input className="w-full bg-surface-container-low border border-outline-variant rounded-lg p-3 text-on-surface focus:outline-none focus:border-primary transition-colors" placeholder="e.g. John Doe" type="text" />
                                </div>
                                <div className="space-y-2">
                                    <label className="font-label-caps text-label-caps text-outline">Professional_Email</label>
                                    <input className="w-full bg-surface-container-low border border-outline-variant rounded-lg p-3 text-on-surface focus:outline-none focus:border-primary transition-colors" placeholder="name@company.com" type="email" />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="font-label-caps text-label-caps text-outline">Organization</label>
                                    <input className="w-full bg-surface-container-low border border-outline-variant rounded-lg p-3 text-on-surface focus:outline-none focus:border-primary transition-colors" placeholder="Tech Corp" type="text" />
                                </div>
                                <div className="space-y-2">
                                    <label className="font-label-caps text-label-caps text-outline">Topic_Protocol</label>
                                    <select className="w-full bg-surface-container-low border border-outline-variant rounded-lg p-3 text-on-surface focus:outline-none focus:border-primary transition-colors appearance-none">
                                        <option>New Project</option>
                                        <option>Architectural Review</option>
                                        <option>Recruitment</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <label className="font-label-caps text-label-caps text-outline">Slot Selection</label>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 technical-border rounded-lg bg-background/40">
                                    <div className="space-y-3">
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="font-code-sm text-code-sm text-on-surface">October 2024</span>
                                            <div className="flex gap-2">
                                                <span className="material-symbols-outlined text-sm cursor-pointer hover:text-primary">arrow_back_ios</span>
                                                <span className="material-symbols-outlined text-sm cursor-pointer hover:text-primary">arrow_forward_ios</span>
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-7 gap-1 text-center font-label-caps text-[10px] text-outline">
                                            <span>MO</span><span>TU</span><span>WE</span><span>TH</span><span>FR</span><span>SA</span><span>SU</span>
                                        </div>
                                        <div className="grid grid-cols-7 gap-1 text-center">
                                            <span className="p-2 text-outline-variant">28</span>
                                            <span className="p-2 text-outline-variant">29</span>
                                            <span className="p-2 text-outline-variant">30</span>
                                            <span className="p-2 text-on-surface hover:bg-surface-variant cursor-pointer rounded">1</span>
                                            <span className="p-2 text-on-surface hover:bg-surface-variant cursor-pointer rounded">2</span>
                                            <span className="p-2 text-on-surface hover:bg-surface-variant cursor-pointer rounded">3</span>
                                            <span className="p-2 text-outline-variant">4</span>
                                            <span className="p-2 active-day cursor-pointer rounded">5</span>
                                            <span className="p-2 text-on-surface hover:bg-surface-variant cursor-pointer rounded">6</span>
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <span className="font-code-sm text-code-sm text-on-surface block mb-3">Available_Slots (UTC-5)</span>
                                        <button className="w-full p-2 technical-border rounded font-code-sm text-code-sm hover:border-secondary transition-colors text-left flex justify-between" type="button">
                                            09:00 AM <span>Available</span>
                                        </button>
                                        <button className="w-full p-2 bg-primary-container text-on-primary-container rounded font-code-sm text-code-sm text-left flex justify-between" type="button">
                                            11:30 AM <span>Selected</span>
                                        </button>
                                        <button className="w-full p-2 technical-border rounded font-code-sm text-code-sm hover:border-secondary transition-colors text-left flex justify-between" type="button">
                                            02:00 PM <span>Available</span>
                                        </button>
                                        <button className="w-full p-2 opacity-30 cursor-not-allowed technical-border rounded font-code-sm text-code-sm text-left flex justify-between" type="button">
                                            04:30 PM <span>Booked</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="font-label-caps text-label-caps text-outline">Message_Context</label>
                                <textarea className="w-full bg-surface-container-low border border-outline-variant rounded-lg p-3 text-on-surface focus:outline-none focus:border-primary transition-colors" placeholder="Briefly describe the architectural challenge or project scope..." ></textarea>
                            </div>
                            <button className="w-full bg-secondary text-on-secondary font-label-caps text-label-caps py-4 rounded-lg flex items-center justify-center gap-3 hover:scale-[1.01] active:scale-95 transition-all shadow-lg shadow-secondary/20" type="submit">
                                Confirm Booking <span className="material-symbols-outlined">send</span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default ContactForm