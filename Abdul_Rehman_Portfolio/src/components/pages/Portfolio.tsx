import React from 'react'

function Portfolio() {
    return (
        <main className="">
            <section className="relative min-h-screen flex items-center pt-16 mesh-gradient overflow-hidden">

                <div className="relative z-10 max-w-container_max_width mx-auto px-gutter grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-secondary font-label-caps text-label-caps">
                            <span className="mr-2 flex h-2 w-2 rounded-full bg-[#006C49]"></span>
                            BACKEND ARCHITECT & FULL-STACK ENGINEER
                        </div>
                        <h1 className="font-display-lg text-display-lg text-white leading-tight">
                            Hi, I'm Abdul Rehman. <span className="text-primary">I build scalable</span> <br />Full-Stack Solutions
                        </h1>
                        <p className="text-on-surface-variant text-xl max-w-xl">
                            I specialize in engineering robust RESTful APIs, high-performance microservices basics,
                            and type-safe full-stack applications using NestJS, TypeScript, and PostgreSQL.
                            Turning complex architectural logic into clean, production-ready code.
                        </p>
                        <div className="flex flex-wrap gap-4 pt-4">
                            <a className="bg-primary-container text-on-primary-container px-8 py-4 rounded-lg font-bold text-lg flex items-center gap-2 glow-blue shadow-[0_0_-5px_rgba(37, 99, 235, 0.4)]
                            hover:scale-105 transition-transform" href="#projects">
                                View Projects
                            </a>
                            <a className="border border-outline-variant text-on-surface px-8 py-4 rounded-lg font-bold text-lg hover:bg-surface-container transition-colors" href="#contact">
                                Let's Talk
                            </a>
                        </div>
                    </div>
                    <div className="hidden lg:block relative">
                        <div className="bg-[rgba(15, 23, 42, 0.6)] p-1 rounded-xl transform border-1 border-[rgba(255, 255, 255, 0.05)] backdrop-blur-md shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] rotate-3 hover:rotate-0 transition-transform duration-500 overflow-hidden">
                            <div className="bg-surface-container-lowest rounded-lg p-6 font-code-sm text-code-sm leading-relaxed border border-white/5">
                                <div className="flex items-center gap-2 mb-4">
                                    <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                                    <span className="ml-4 text-on-surface-variant/50">Architecture.ts</span>
                                </div>
                                <p className="text-secondary">@Module{"({"}</p>
                                <p className="pl-4">imports: {"["}</p>
                                <p className="pl-8 text-primary">AuthModule, AIProcessorModule,</p>
                                <p className="pl-8 text-primary">DataStreamModule.forRootX{"({"}</p>
                                <p className="pl-12 text-on-surface-variant">scale: <span className="text-tertiary">"Enterprise"</span>,</p>
                                <p className="pl-12 text-on-surface-variant">resilience: <span className="text-tertiary">99.99</span></p>
                                <p className="pl-8 text-primary">{"})"}</p>
                                <p className="pl-4">{"]"},</p>
                                <p className="pl-4 text-secondary">controllers: [SystemArchitectController]</p>
                                <p className="text-secondary">{"})"}</p>
                                <p className="text-on-surface-variant mt-4">// Deploying to hybrid-cloud architecture...</p>
                            </div>
                        </div>
                        <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-primary/20 blur-[80px] rounded-full"></div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Portfolio