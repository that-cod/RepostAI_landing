import React, { useState, useEffect, useRef } from 'react';
import {
  Menu,
  X,
  Linkedin,
  Sparkles,
  Zap,
  Layout,
  BarChart3,
  ArrowRight,
  CheckCircle2,
  Globe,
  MessageSquare,
  Play,
  Clock,
  TrendingUp
} from 'lucide-react';

/**
 * Reusable Components for Consistency
 */

const SectionLabel = ({ children }) => (
  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#04a45b]/10 border border-[#04a45b]/20 text-[#04a45b] text-xs font-bold uppercase tracking-wider mb-6">
    {children}
  </div>
);

const GlassCard = ({ children, className = "", hoverEffect = true }) => (
  <div className={`
    relative overflow-hidden
    bg-[#131722]/60 backdrop-blur-xl 
    border border-white/5 
    rounded-3xl 
    p-8 h-full 
    flex flex-col
    ${hoverEffect ? 'transition-all duration-300 hover:bg-[#1A1F2E] hover:border-white/10 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/50' : ''}
    ${className}
  `}>
    {children}
  </div>
);

const FadeIn = ({ children, delay = 0, className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    }, { threshold: 0.1 });
    if (domRef.current) observer.observe(domRef.current);
    return () => {
      if (domRef.current) observer.unobserve(domRef.current);
    };
  }, []);

  return (
    <div
      ref={domRef}
      className={`transition-all duration-700 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#05080F] text-slate-200 font-sans selection:bg-[#04a45b]/30 selection:text-emerald-200 overflow-x-hidden scroll-smooth">

      {/* --- BACKGROUND EFFECTS --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#04a45b]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[0%] right-[-10%] w-[600px] h-[600px] bg-emerald-600/5 rounded-full blur-[100px]" />
      </div>

      {/* --- NAVBAR --- */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#05080F]/90 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#04a45b] to-emerald-600 flex items-center justify-center shadow-lg shadow-[#04a45b]/20 group-hover:scale-105 transition-transform">
              <Linkedin className="w-5 h-5 text-white fill-current" />
            </div>
            <span className="text-xl font-bold tracking-tight text-white group-hover:text-[#04a45b] transition-colors">Repost AI</span>
          </a>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
            {['Generator', 'Roadmap', 'Pricing'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-white transition-colors">
                {item}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button className="text-sm font-medium text-slate-400 hover:text-white transition-colors">Log in</button>
            <a
              href="https://app.repostai.io"
              className="px-5 py-2.5 rounded-lg bg-white text-slate-950 font-bold text-sm hover:bg-slate-200 transition-colors shadow-lg shadow-white/5"
              rel="noopener noreferrer"
            >
              Start Generating
            </a>
          </div>

          <button className="md:hidden p-2 text-slate-300" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-[#05080F] border-b border-white/5 p-6 flex flex-col gap-4 shadow-2xl">
            {['Generator', 'Roadmap', 'Pricing'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-slate-300 py-2">
                {item}
              </a>
            ))}
            <a
              href="https://app.repostai.io"
              className="w-full py-3 rounded-lg bg-[#04a45b] text-white font-bold flex items-center justify-center"
              rel="noopener noreferrer"
            >
              Get Started
            </a>
          </div>
        )}
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative z-10">

          <FadeIn>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 hover:bg-white/10 transition-colors cursor-pointer group">
              <Sparkles className="w-3.5 h-3.5 text-yellow-400" />
              <span className="text-sm font-medium text-slate-300">New: Viral Post Generator is Live</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:translate-x-1 transition-transform" />
            </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-8 leading-[1.1]">
              The Ultimate <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#04a45b] via-emerald-400 to-teal-400">
                LinkedIn Generator
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              Create engaging, viral-ready LinkedIn posts in seconds with AI. Stop staring at a blank screen and start growing your audience.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
              <a
                href="https://app.repostai.io"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[#04a45b] to-emerald-600 text-white font-bold hover:shadow-lg hover:shadow-[#04a45b]/25 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
                rel="noopener noreferrer"
              >
                Try Generator Free <ArrowRight className="w-4 h-4" />
              </a>
              <button className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#1A1F2E] border border-white/5 text-white font-semibold hover:bg-[#252b3d] transition-colors flex items-center justify-center gap-2">
                <Play className="w-4 h-4 text-slate-400" /> See How It Works
              </button>
            </div>
          </FadeIn>

          {/* Clean Dashboard Mockup */}
          <FadeIn delay={200}>
            <div className="relative max-w-5xl mx-auto rounded-2xl bg-[#0B0F19] border border-white/10 p-2 shadow-2xl shadow-black/50 ring-1 ring-white/5">
              <div className="rounded-xl bg-[#0B0F19] overflow-hidden aspect-[16/10] border border-white/5 relative flex">

                {/* Mock Sidebar */}
                <div className="hidden md:flex w-64 border-r border-white/5 bg-[#0F121C] p-6 flex-col gap-6">
                  <div className="flex items-center gap-3 opacity-50">
                    <div className="w-6 h-6 rounded bg-slate-700" />
                    <div className="h-3 w-20 bg-slate-700 rounded" />
                  </div>
                  <div className="space-y-2">
                    <div className="h-10 w-full rounded-lg bg-[#04a45b]/10 border border-[#04a45b]/20 flex items-center px-4 gap-3 text-[#04a45b]">
                      <Zap className="w-4 h-4" />
                      <span className="text-sm font-medium">Generator</span>
                    </div>
                    {['Trends', 'Schedule', 'Analytics'].map((item, i) => (
                      <div key={i} className="h-10 w-full rounded-lg flex items-center px-4 gap-3 text-slate-500 hover:bg-white/5 transition-colors cursor-pointer">
                        <div className="w-4 h-4 rounded-sm bg-slate-800" />
                        <span className="text-sm font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Mock Main Content */}
                <div className="flex-1 p-8 bg-gradient-to-br from-[#0B0F19] to-[#131722]">
                  <div className="flex justify-between items-center mb-8">
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1">New Post</h3>
                      <p className="text-xs text-slate-500">AI-powered content generation</p>
                    </div>
                    <div className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold border border-emerald-500/20">
                      AI Model Ready
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 h-[calc(100%-4rem)]">
                    <div className="bg-[#1A1F2E] rounded-xl border border-white/5 p-5 flex flex-col gap-4">
                      <div className="text-xs font-bold text-slate-500 uppercase">Input</div>
                      <div className="flex-1 rounded-lg bg-[#0F121C] border border-white/5 p-4 text-sm text-slate-300">
                        Topic: How to build a personal brand...
                      </div>
                      <div className="h-10 rounded-lg bg-[#04a45b] flex items-center justify-center text-white text-sm font-bold">
                        Generate
                      </div>
                    </div>
                    <div className="bg-[#1A1F2E]/50 rounded-xl border border-white/5 p-5 flex flex-col gap-4">
                      <div className="text-xs font-bold text-slate-500 uppercase">Preview</div>
                      <div className="space-y-3">
                        <div className="h-2 w-3/4 bg-white/10 rounded" />
                        <div className="h-2 w-full bg-white/10 rounded" />
                        <div className="h-2 w-full bg-white/10 rounded" />
                        <div className="h-32 w-full bg-black/20 rounded-lg border border-white/5 mt-2" />
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </FadeIn>

        </div>
      </section>

      {/* --- FEATURES GRID (Optimized Blocks) --- */}
      <section id="generator" className="py-24 px-6 bg-[#0B0F19] relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <SectionLabel>Capabilities</SectionLabel>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Current & <span className="text-[#04a45b]">Future</span> Tools</h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              Start with our powerful generator today. We are rapidly building the complete OS for LinkedIn creators.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">

            {/* Live Feature Block */}
            <FadeIn delay={100} className="h-full">
              <GlassCard className="!border-[#04a45b]/30 !bg-[#131722]/80 group">
                <div className="absolute top-4 right-4 px-2 py-1 rounded bg-[#04a45b] text-white text-[10px] font-bold uppercase tracking-wider">
                  Live Now
                </div>
                <div className="w-12 h-12 rounded-lg bg-[#04a45b]/20 flex items-center justify-center mb-6 text-[#04a45b] group-hover:scale-110 transition-transform">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Viral Post Generator</h3>
                <p className="text-slate-400 leading-relaxed text-sm mb-6 flex-1">
                  Turn simple topics into high-performing LinkedIn posts instantly. Our AI optimizes for readability, tone, and viral hooks.
                </p>
                <div className="flex items-center text-[#04a45b] text-sm font-bold group-hover:gap-2 transition-all">
                  Try Generator <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </GlassCard>
            </FadeIn>

            {/* Roadmap Block 1 */}
            <FadeIn delay={200} className="h-full">
              <GlassCard hoverEffect={false}>
                <div className="absolute top-4 right-4 px-2 py-1 rounded bg-[#1A1F2E] border border-white/10 text-slate-400 text-[10px] font-bold uppercase tracking-wider">
                  Coming Soon
                </div>
                <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-6 text-blue-400 border border-blue-500/20">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Trend Insights</h3>
                <p className="text-slate-400 leading-relaxed text-sm flex-1">
                  See what's trending on LinkedIn in real-time. Analyze winning strategies from top creators to inform your content.
                </p>
              </GlassCard>
            </FadeIn>

            {/* Roadmap Block 2 */}
            <FadeIn delay={300} className="h-full">
              <GlassCard hoverEffect={false}>
                <div className="absolute top-4 right-4 px-2 py-1 rounded bg-[#1A1F2E] border border-white/10 text-slate-400 text-[10px] font-bold uppercase tracking-wider">
                  Coming Soon
                </div>
                <div className="w-12 h-12 rounded-lg bg-fuchsia-500/10 flex items-center justify-center mb-6 text-fuchsia-400 border border-fuchsia-500/20">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Smart Scheduler</h3>
                <p className="text-slate-400 leading-relaxed text-sm flex-1">
                  Schedule posts for peak engagement windows. Auto-plug your newsletter in comments after 1 hour.
                </p>
              </GlassCard>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* --- HOW IT WORKS (Timeline Block) --- */}
      <section id="roadmap" className="py-24 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

          <FadeIn className="order-2 lg:order-1">
            {/* Abstract Visual Block */}
            <div className="relative rounded-3xl border border-white/10 bg-[#0F121C] p-8 shadow-2xl">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#04a45b] to-emerald-600 rounded-3xl opacity-20 blur-lg -z-10" />
              <div className="space-y-6">
                {/* Step 1 Mock */}
                <div className="flex gap-4 items-center p-4 rounded-xl bg-[#1A1F2E] border border-white/5 opacity-50">
                  <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-xs font-bold text-white">1</div>
                  <div className="h-2 w-32 bg-slate-600 rounded" />
                </div>
                {/* Step 2 Mock (Active) */}
                <div className="flex gap-4 items-center p-4 rounded-xl bg-[#1A1F2E] border border-[#04a45b]/30 shadow-lg relative overflow-hidden">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#04a45b]" />
                  <div className="w-8 h-8 rounded-full bg-[#04a45b] flex items-center justify-center text-xs font-bold text-white">2</div>
                  <div>
                    <div className="h-2 w-48 bg-white/20 rounded mb-2" />
                    <div className="h-2 w-32 bg-white/10 rounded" />
                  </div>
                  <Sparkles className="w-5 h-5 text-yellow-400 ml-auto" />
                </div>
                {/* Step 3 Mock */}
                <div className="flex gap-4 items-center p-4 rounded-xl bg-[#1A1F2E] border border-white/5 opacity-50">
                  <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-xs font-bold text-white">3</div>
                  <div className="h-2 w-40 bg-slate-600 rounded" />
                </div>
              </div>
            </div>
          </FadeIn>

          <div className="order-1 lg:order-2">
            <FadeIn>
              <SectionLabel>Workflow</SectionLabel>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">How <span className="text-[#04a45b]">Repost AI</span> Works</h2>

              <div className="space-y-10 border-l border-white/10 pl-8 ml-4">
                {[
                  { title: 'Input your Topic', text: 'Type a keyword, sentence, or paste a URL. Our AI extracts context instantly.' },
                  { title: 'Generate & Refine', text: 'Get a perfectly formatted post. Tweak tone, add emojis, or regenerate hooks.' },
                  { title: 'Grow (Upcoming)', text: 'Schedule the post and track performance directly from the dashboard.' }
                ].map((step, i) => (
                  <div key={i} className="relative">
                    <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-[#05080F] border border-[#04a45b] flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-[#04a45b]" />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2">{step.title}</h4>
                    <p className="text-slate-400 leading-relaxed max-w-md">{step.text}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

        </div>
      </section>

      {/* --- PRICING BLOCKS --- */}
      <section id="pricing" className="py-24 px-6 bg-[#0B0F19]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Simple Pricing</h2>
            <p className="text-slate-400">Lock in early adopter rates before we launch the full suite.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Free Plan Block */}
            <div className="rounded-3xl border border-white/10 bg-[#131722]/40 p-10 hover:bg-[#131722] transition-colors">
              <h3 className="text-2xl font-bold text-white mb-2">Free</h3>
              <div className="text-4xl font-bold text-white mb-6">$0<span className="text-lg text-slate-500 font-normal">/mo</span></div>
              <p className="text-slate-400 mb-8 pb-8 border-b border-white/5">Perfect for trying out the generator.</p>
              <ul className="space-y-4 mb-8 text-slate-300">
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-[#04a45b]" /> 5 Post Generations/mo</li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-[#04a45b]" /> Basic Formatting</li>
              </ul>
              <a
                href="https://app.repostai.io"
                className="w-full py-4 rounded-xl border border-white/10 text-white font-bold hover:bg-white/5 transition-colors flex items-center justify-center"
                rel="noopener noreferrer"
              >
                Start Free
              </a>
            </div>

            {/* Pro Plan Block */}
            <div className="rounded-3xl border border-[#04a45b]/50 bg-[#131722]/80 p-10 relative overflow-hidden group">
              <div className="absolute top-0 right-0 bg-[#04a45b] text-white text-xs font-bold px-4 py-2 rounded-bl-xl">EARLY BIRD</div>
              <h3 className="text-2xl font-bold text-white mb-2">Pro Creator</h3>
              <div className="text-4xl font-bold text-white mb-6">$19<span className="text-lg text-slate-500 font-normal">/mo</span></div>
              <p className="text-slate-400 mb-8 pb-8 border-b border-white/5">Unlimited power for serious creators.</p>
              <ul className="space-y-4 mb-8 text-white">
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-[#04a45b]" /> Unlimited Generations</li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-[#04a45b]" /> Premium Templates</li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-[#04a45b]" /> Priority Support</li>
              </ul>
              <a
                href="https://app.repostai.io"
                className="w-full py-4 rounded-xl bg-[#04a45b] text-white font-bold hover:bg-[#03854a] transition-colors shadow-lg shadow-[#04a45b]/20 flex items-center justify-center"
                rel="noopener noreferrer"
              >
                Get Pro Access
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* --- CTA BLOCK --- */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto relative rounded-[3rem] overflow-hidden bg-gradient-to-b from-[#1A1F2E] to-[#0B0F19] border border-white/10 text-center p-12 md:p-24">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-lg bg-[#04a45b]/10 blur-[100px] rounded-full pointer-events-none" />

          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Ready to grow?</h2>
            <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto">
              Join the new wave of creators using Repost AI to generate content in seconds.
            </p>
            <a
              href="https://app.repostai.io"
              className="px-10 py-4 rounded-xl bg-white text-slate-950 font-bold text-lg hover:bg-slate-100 transition-transform hover:scale-105 shadow-xl inline-block"
              rel="noopener noreferrer"
            >
              Get Started for Free
            </a>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="border-t border-white/5 bg-[#020408] py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12">
          <div className="space-y-6 max-w-xs">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#04a45b] to-emerald-600 flex items-center justify-center">
                <Linkedin className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Repost AI</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              The AI-powered workspace for modern LinkedIn creators. Write, design, and schedule in one place.
            </p>
          </div>

          <div className="flex gap-16 text-sm">
            <div>
              <h4 className="font-bold text-white mb-6">Product</h4>
              <ul className="space-y-4 text-slate-500">
                <li><a href="#" className="hover:text-[#04a45b] transition-colors">Generator</a></li>
                <li><a href="#" className="hover:text-[#04a45b] transition-colors">Roadmap</a></li>
                <li><a href="#" className="hover:text-[#04a45b] transition-colors">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-6">Legal</h4>
              <ul className="space-y-4 text-slate-500">
                <li><a href="#" className="hover:text-[#04a45b] transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-[#04a45b] transition-colors">Terms</a></li>
                <li><a href="mailto:info@launchnext.pro" className="hover:text-[#04a45b] transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 text-center text-slate-600 text-sm">
          © 2024 Launchnext.pro. All rights reserved.
        </div>
      </footer>

    </div>
  );
};

export default App;
