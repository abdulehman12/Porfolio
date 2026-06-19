
import caseStudy from '../../assets/casestudy.png'
function CaseStudy() {
  return (
    <section className="py-section_gap bg-surface-container-low/30" id="portfolio">
    <div className="max-w-container_max_width mx-auto px-gutter">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl">
                <h2 className="font-display-lg text-display-lg mb-4 text-white">Featured Case Study</h2>
                <p className="text-on-surface-variant">Deep dive into a recent project focusing on high-concurrency education data management.</p>
            </div>
            <a
             className="text-primary font-bold flex items-center gap-2 group" 
             href="https://github.com/abdulehman12" 
  target="_blank" 
  rel="noopener noreferrer"
            >
                Browse Full Archive
            </a>
        </div>

        <div className="grid lg:grid-cols-5 gap-0 rounded-2xl overflow-hidden glass-card glow-blue group">
            <div className="lg:col-span-3 h-[400px] lg:h-auto overflow-hidden relative">
                <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10"></div>
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="A high-fidelity dashboard interface for an educational platform, featuring vibrant data visualizations, student performance charts, and a clean minimalist aesthetic. The UI uses deep charcoal backgrounds with neon blue and soft white highlights. The composition is sleek and professional, illustrating enterprise-grade modular architecture in a SaaS context." src={caseStudy} />
            </div>
            <div className="lg:col-span-2 p-12 flex flex-col justify-center bg-surface-container">
                <div className="flex gap-2 mb-6">
                    <span className="technical-chip text-primary bg-primary/10 px-2 py-1 rounded">React</span>
                    <span className="technical-chip text-secondary bg-secondary/10 px-2 py-1 rounded">NestJS</span>
                    <span className="technical-chip text-tertiary bg-tertiary/10 px-2 py-1 rounded">PostgreSQL</span>
                </div>
                <h3 className="text-4xl font-extrabold text-white mb-6">CampusInsight</h3>
                <p className="text-on-surface-variant mb-8 text-lg leading-relaxed">
                    An enterprise-grade analytics engine for higher education institutions. Integrated modular microservices to handle over 100k concurrent student data points with sub-second latency.
                </p>
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-4 text-sm font-code-sm text-on-surface-variant">
                        <span className="material-symbols-outlined text-secondary">check_circle</span>
                        Optimized SQL queries by 45% using TypeORM indexing
                    </div>
                    <div className="flex items-center gap-4 text-sm font-code-sm text-on-surface-variant">
                        <span className="material-symbols-outlined text-secondary">check_circle</span>
                        Integrated GPT-4 for automated student feedback loops
                    </div>
                </div>
                <div className="mt-10">
                    <button className="bg-primary text-on-primary font-bold px-8 py-4 rounded-lg flex items-center gap-2 hover:bg-primary-fixed-dim transition-colors">
                        View Case Study
                    </button>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default CaseStudy