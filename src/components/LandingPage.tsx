import { Page } from '@/src/types';
import { 
  Target, 
  LineChart, 
  Eye, 
  Download, 
  Mail, 
  MapPin, 
  Globe, 
  Share2, 
  AtSign,
  ArrowRight,
  UserCircle,
  LayoutDashboard,
  CheckCircle2
} from 'lucide-react';

interface LandingPageProps {
  setPage: (page: Page) => void;
}

export default function LandingPage({ setPage }: LandingPageProps) {
  return (
    <div className="relative flex min-h-screen w-full flex-col gradient-mesh overflow-x-hidden text-slate-900 dark:text-slate-100">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-primary/10 bg-background-dark/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-primary p-1.5 rounded-lg shadow-lg shadow-primary/20">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path d="M42.4379 44C42.4379 44 36.0744 33.9038 41.1692 24C46.8624 12.9336 42.2078 4 42.2078 4L7.01134 4C7.01134 4 11.6577 12.932 5.96912 23.9969C0.876273 33.9029 7.27094 44 7.27094 44L42.4379 44Z" fill="currentColor"></path>
              </svg>
            </div>
            <span className="text-xl font-black tracking-tight text-white">NEXORA</span>
          </div>
          <nav className="hidden md:flex items-center gap-10">
            <a className="text-sm font-medium text-slate-400 hover:text-white transition-colors" href="#vision">Vision</a>
            <a className="text-sm font-medium text-slate-400 hover:text-white transition-colors" href="#partners">Partners</a>
            <a className="text-sm font-medium text-slate-400 hover:text-white transition-colors" href="#press">Press Kit</a>
            <a className="text-sm font-medium text-slate-400 hover:text-white transition-colors" href="#contact">Contact</a>
          </nav>
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setPage(Page.Dashboard)}
              className="text-sm font-bold text-slate-400 hover:text-white transition-colors"
            >
              Login
            </button>
            <button 
              onClick={() => setPage(Page.Dashboard)}
              className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-lg text-sm font-bold transition-all transform hover:scale-[1.02] active:scale-95 shadow-lg shadow-primary/25"
            >
              Sign Up
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1 flex flex-col">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 overflow-hidden border-b border-primary/10">
          <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-widest uppercase mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Introducing the Next Generation
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.1] tracking-tighter mb-8 max-w-4xl mx-auto">
              The Future of <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">High-Fidelity</span> NEXORA Intelligence.
            </h1>
            <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed">
              Nexora empowers consultants and global agencies with precision, scalability, and actionable vision through advanced algorithmic clarity.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button 
                onClick={() => setPage(Page.Dashboard)}
                className="w-full sm:w-auto px-8 py-4 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-all shadow-xl shadow-primary/20"
              >
                Sign Up Now
              </button>
              <button 
                onClick={() => setPage(Page.Dashboard)}
                className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-lg hover:bg-white/10 transition-all"
              >
                Login to Account
              </button>
            </div>
          </div>
          <div className="absolute inset-0 z-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#2a19e6 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }}></div>
        </section>

        {/* Vision Section */}
        <section className="py-24 bg-background-dark" id="vision">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row gap-16 items-start">
              <div className="md:w-1/2">
                <h2 className="text-primary font-bold text-sm tracking-[0.2em] uppercase mb-4">About Us</h2>
                <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                  Transitioning from raw data to high-fidelity intelligence.
                </h3>
                <p className="text-slate-400 text-lg leading-relaxed mb-8">
                  In an era of data saturation, insight is the new currency. Nexora was founded on the principle that precision outperforms volume. We build tools that cut through the noise, delivering refined data points for the world's most demanding enterprises.
                </p>
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <div className="text-3xl font-black text-white mb-1">99.9%</div>
                    <div className="text-slate-500 text-sm font-medium uppercase tracking-wider">Data Accuracy</div>
                  </div>
                  <div>
                    <div className="text-3xl font-black text-white mb-1">250+</div>
                    <div className="text-slate-500 text-sm font-medium uppercase tracking-wider">Global Agencies</div>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 grid grid-cols-1 gap-6">
                <div className="glass-card p-8 rounded-xl group hover:border-primary/50 transition-all">
                  <Target className="text-primary w-10 h-10 mb-4 group-hover:scale-110 transition-transform" />
                  <h4 className="text-xl font-bold text-white mb-2">Precision</h4>
                  <p className="text-slate-400">Refined data points for exact decision making. We eliminate ambiguity at every layer of the intelligence stack.</p>
                </div>
                <div className="glass-card p-8 rounded-xl group hover:border-primary/50 transition-all">
                  <LineChart className="text-primary w-10 h-10 mb-4 group-hover:scale-110 transition-transform" />
                  <h4 className="text-xl font-bold text-white mb-2">Scalability</h4>
                  <p className="text-slate-400">Architecture built to grow with your global enterprise. From local insights to worldwide expansion, we scale instantly.</p>
                </div>
                <div className="glass-card p-8 rounded-xl group hover:border-primary/50 transition-all">
                  <Eye className="text-primary w-10 h-10 mb-4 group-hover:scale-110 transition-transform" />
                  <h4 className="text-xl font-bold text-white mb-2">Vision</h4>
                  <p className="text-slate-400">Forward-thinking analytics that predict market shifts before they happen, giving you a decisive competitive edge.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section className="py-24 border-y border-white/5 bg-white/5" id="partners">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-primary font-bold text-sm tracking-[0.2em] uppercase mb-4">Our Ecosystem</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-12">Trusted by Global Growth Architects</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-60">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-16 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300">
                  <div className="w-32 h-8 bg-white/20 rounded"></div>
                </div>
              ))}
            </div>
            <div className="mt-16 p-10 glass-card rounded-2xl flex flex-col md:flex-row items-center justify-between gap-8 text-left">
              <div>
                <h4 className="text-2xl font-bold text-white mb-2">Become a Nexora Partner</h4>
                <p className="text-slate-400 max-w-xl">Join our network of elite consultants and agencies. Get early access to features, specialized training, and co-marketing opportunities.</p>
              </div>
              <button className="bg-primary text-white px-8 py-3 rounded-lg font-bold hover:bg-primary/90 transition-all">
                Apply to Partner Program
              </button>
            </div>
          </div>
        </section>

        {/* Press Kit Section */}
        <section className="py-24 bg-background-dark" id="press">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
              <div className="text-left">
                <h2 className="text-primary font-bold text-sm tracking-[0.2em] uppercase mb-4">Media Relations</h2>
                <h3 className="text-3xl md:text-4xl font-extrabold text-white">Press Kit & Brand Assets</h3>
              </div>
              <button className="flex items-center gap-2 text-primary font-bold hover:text-white transition-colors">
                <Download className="w-5 h-5" />
                Download Full Kit (42MB)
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/5 border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-all group">
                <div className="aspect-video bg-gradient-to-br from-primary/40 to-black rounded-lg mb-6 flex items-center justify-center overflow-hidden">
                  <svg className="w-16 h-16 text-white/50" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                    <path d="M42.4379 44C42.4379 44 36.0744 33.9038 41.1692 24C46.8624 12.9336 42.2078 4 42.2078 4L7.01134 4C7.01134 4 11.6577 12.932 5.96912 23.9969C0.876273 33.9029 7.27094 44 7.27094 44L42.4379 44Z" fill="currentColor"></path>
                  </svg>
                </div>
                <h5 className="text-white font-bold mb-1">Brand Identity</h5>
                <p className="text-slate-500 text-sm mb-4">Logos, icons, and color palette specs.</p>
                <a className="text-primary text-xs font-bold uppercase tracking-widest" href="#">Download Assets</a>
              </div>
              <div className="bg-white/5 border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-all group">
                <div className="aspect-video bg-gradient-to-br from-slate-700 to-black rounded-lg mb-6 overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center text-white/20">
                    <UserCircle className="w-16 h-16" />
                  </div>
                </div>
                <h5 className="text-white font-bold mb-1">Executive Headshots</h5>
                <p className="text-slate-500 text-sm mb-4">Official portraits of our leadership team.</p>
                <a className="text-primary text-xs font-bold uppercase tracking-widest" href="#">Download Photos</a>
              </div>
              <div className="bg-white/5 border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-all group">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-blue-900 rounded-lg mb-6 overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center text-white/20">
                    <LayoutDashboard className="w-16 h-16" />
                  </div>
                </div>
                <h5 className="text-white font-bold mb-1">Product Screenshots</h5>
                <p className="text-slate-500 text-sm mb-4">High-fidelity UI mockups and data visualizations.</p>
                <a className="text-primary text-xs font-bold uppercase tracking-widest" href="#">Download Images</a>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-24 bg-background-dark border-t border-white/5" id="pricing">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-primary font-bold text-sm tracking-[0.2em] uppercase mb-4">Pricing Plans</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-12">Scalable Intelligence for Every Team</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Starter */}
              <div className="glass-card p-8 rounded-2xl border border-white/10 flex flex-col text-left">
                <h4 className="text-xl font-bold text-white mb-2">Starter</h4>
                <p className="text-slate-400 text-sm mb-6">Perfect for individual consultants.</p>
                <div className="mb-8">
                  <span className="text-4xl font-black text-white">$49</span>
                  <span className="text-slate-500">/mo</span>
                </div>
                <ul className="space-y-4 mb-8 flex-1">
                  <li className="flex items-center gap-3 text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-primary" /> 5 Audits per month
                  </li>
                  <li className="flex items-center gap-3 text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-primary" /> Basic SEO Analysis
                  </li>
                  <li className="flex items-center gap-3 text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-primary" /> Email Support
                  </li>
                </ul>
                <button onClick={() => setPage(Page.Dashboard)} className="w-full py-3 bg-white/5 border border-white/10 text-white font-bold rounded-lg hover:bg-white/10 transition-all">Get Started</button>
              </div>

              {/* Pro */}
              <div className="glass-card p-8 rounded-2xl border-2 border-primary flex flex-col text-left relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">Most Popular</div>
                <h4 className="text-xl font-bold text-white mb-2">Pro</h4>
                <p className="text-slate-400 text-sm mb-6">Ideal for growing agencies.</p>
                <div className="mb-8">
                  <span className="text-4xl font-black text-white">$149</span>
                  <span className="text-slate-500">/mo</span>
                </div>
                <ul className="space-y-4 mb-8 flex-1">
                  <li className="flex items-center gap-3 text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-primary" /> 25 Audits per month
                  </li>
                  <li className="flex items-center gap-3 text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-primary" /> Full Module Access
                  </li>
                  <li className="flex items-center gap-3 text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-primary" /> AI Insights Engine
                  </li>
                  <li className="flex items-center gap-3 text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-primary" /> Priority Support
                  </li>
                </ul>
                <button onClick={() => setPage(Page.Dashboard)} className="w-full py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">Start Pro Trial</button>
              </div>

              {/* Enterprise */}
              <div className="glass-card p-8 rounded-2xl border border-white/10 flex flex-col text-left">
                <h4 className="text-xl font-bold text-white mb-2">Enterprise</h4>
                <p className="text-slate-400 text-sm mb-6">For global organizations.</p>
                <div className="mb-8">
                  <span className="text-4xl font-black text-white">Custom</span>
                </div>
                <ul className="space-y-4 mb-8 flex-1">
                  <li className="flex items-center gap-3 text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-primary" /> Unlimited Audits
                  </li>
                  <li className="flex items-center gap-3 text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-primary" /> Custom API Access
                  </li>
                  <li className="flex items-center gap-3 text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-primary" /> Dedicated Strategist
                  </li>
                  <li className="flex items-center gap-3 text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-primary" /> White-label Reports
                  </li>
                </ul>
                <button className="w-full py-3 bg-white/5 border border-white/10 text-white font-bold rounded-lg hover:bg-white/10 transition-all">Contact Sales</button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-24 bg-background-dark border-t border-white/5" id="contact">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-16">
              <div className="lg:w-1/3">
                <h2 className="text-primary font-bold text-sm tracking-[0.2em] uppercase mb-4">Get in Touch</h2>
                <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-6">Let's build the future together.</h3>
                <p className="text-slate-400 mb-8">Have questions about our technology or looking to partner? Our corporate relations team is here to assist.</p>
                <div className="space-y-6">
                  <div className="flex items-center gap-4 text-slate-300">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                      <Mail className="w-5 h-5" />
                    </div>
                    <span>corporate@nexora.io</span>
                  </div>
                  <div className="flex items-center gap-4 text-slate-300">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <span>Innovation District, San Francisco</span>
                  </div>
                </div>
              </div>
              <div className="lg:w-2/3">
                <form className="glass-card p-8 md:p-12 rounded-2xl grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Full Name</label>
                    <input className="bg-white/5 border-white/10 rounded-lg focus:border-primary focus:ring-1 focus:ring-primary text-white px-4 py-3 outline-none transition-all" placeholder="John Doe" type="text" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Work Email</label>
                    <input className="bg-white/5 border-white/10 rounded-lg focus:border-primary focus:ring-1 focus:ring-primary text-white px-4 py-3 outline-none transition-all" placeholder="john@company.com" type="email" />
                  </div>
                  <div className="flex flex-col gap-2 md:col-span-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Inquiry Type</label>
                    <select className="bg-white/5 border-white/10 rounded-lg focus:border-primary focus:ring-1 focus:ring-primary text-white px-4 py-3 outline-none transition-all appearance-none">
                      <option className="bg-background-dark">Partnership Opportunity</option>
                      <option className="bg-background-dark">Media & Press</option>
                      <option className="bg-background-dark">Enterprise Sales</option>
                      <option className="bg-background-dark">General Inquiry</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-2 md:col-span-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Message</label>
                    <textarea className="bg-white/5 border-white/10 rounded-lg focus:border-primary focus:ring-1 focus:ring-primary text-white px-4 py-3 outline-none transition-all" placeholder="How can we help?" rows={4}></textarea>
                  </div>
                  <div className="md:col-span-2">
                    <button className="w-full bg-primary text-white font-bold py-4 rounded-lg hover:bg-primary/90 transition-all shadow-lg shadow-primary/20" type="submit">
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-background-dark py-12 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <div className="bg-slate-700/30 p-1 rounded-lg">
              <svg className="w-5 h-5 text-white/50" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path d="M42.4379 44C42.4379 44 36.0744 33.9038 41.1692 24C46.8624 12.9336 42.2078 4 42.2078 4L7.01134 4C7.01134 4 11.6577 12.932 5.96912 23.9969C0.876273 33.9029 7.27094 44 7.27094 44L42.4379 44Z" fill="currentColor"></path>
              </svg>
            </div>
            <span className="text-sm font-bold text-slate-500 uppercase tracking-widest">© 2024 Nexora Intelligence</span>
          </div>
          <div className="flex gap-8">
            <a className="text-slate-500 hover:text-white transition-colors" href="#"><Globe className="w-5 h-5" /></a>
            <a className="text-slate-500 hover:text-white transition-colors" href="#"><Share2 className="w-5 h-5" /></a>
            <a className="text-slate-500 hover:text-white transition-colors" href="#"><AtSign className="w-5 h-5" /></a>
          </div>
          <div className="flex gap-6 text-xs font-bold text-slate-500 uppercase tracking-widest">
            <a className="hover:text-primary transition-colors" href="#">Privacy</a>
            <a className="hover:text-primary transition-colors" href="#">Terms</a>
            <a className="hover:text-primary transition-colors" href="#">Status</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
