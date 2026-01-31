import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MessageSquare, Shield, Zap, Globe, Download, ArrowRight, Info } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 overflow-x-hidden selection:bg-blue-500/30">
      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">✦</span>
            </div>
            <span className="text-xl font-bold tracking-tight">Nexus</span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <Link href="#" className="hover:text-white transition-colors">Features</Link>
            <Link href="#" className="hover:text-white transition-colors">Security</Link>
            <Link href="#" className="hover:text-white transition-colors">Status</Link>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="secondary" size="sm">Login</Button>
            </Link>
            <Link href="/register">
              <Button size="sm">Register</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-20"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-500/20 rounded-full blur-[120px] -z-10"></div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Next Gen Messaging
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 bg-gradient-to-b from-white to-slate-400 bg-clip-text text-transparent">
            Chat instantly <br />
            <span className="text-blue-500">with friends.</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Simple, secure, and fast. The communication platform of the future built for the modern desktop experience.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/login">
              <Button size="lg" className="min-w-[180px] h-12 text-base shadow-lg shadow-blue-500/25">
                Get Started Now
              </Button>
            </Link>
            <Button variant="secondary" size="lg" className="min-w-[180px] h-12 text-base border border-slate-700 bg-slate-900/50">
              <Download className="mr-2 h-5 w-5" />
              Download App
            </Button>
          </div>

          {/* App Preview Mockup */}
          <div className="mt-20 relative mx-auto max-w-5xl rounded-2xl border border-slate-800 bg-slate-900/50 backdrop-blur shadow-2xl overflow-hidden aspect-[16/9] group">
            <div className="absolute inset-x-0 top-0 h-10 bg-slate-900 border-b border-slate-800 flex items-center gap-2 px-4">
              <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
            </div>
            <div className="flex items-center justify-center h-full pt-10 text-slate-500 group-hover:text-blue-400 transition-colors duration-500">
              <div className="text-center">
                <div className="grid grid-cols-2 gap-2 mb-2 w-8 h-8 mx-auto opacity-50">
                  <div className="bg-current rounded-sm"></div><div className="bg-current rounded-sm"></div>
                  <div className="bg-current rounded-sm"></div><div className="bg-current rounded-sm"></div>
                </div>
                <span className="text-xs font-medium tracking-widest uppercase">Intuitive Workspace Preview</span>
              </div>
            </div>
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-slate-800 bg-slate-900/30">
        <div className="container mx-auto grid grid-cols-3 gap-8 p-12">
          {[
            { label: 'Active Users', value: '2M+' },
            { label: 'Messages Sent', value: '500M+' },
            { label: 'Uptime', value: '99.9%' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-1">{stat.label}</p>
              <p className="text-3xl md:text-4xl font-bold text-white">{stat.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Why choose Nexus?</h2>
            <p className="text-slate-400">Experience the next generation of communication with features designed for speed and privacy.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: 'End-to-End Encryption', desc: 'Your conversations are always private and secure. Not even we can read them.' },
              { icon: Zap, title: 'Instant Sync', desc: 'Access your chats from any device seamlessly. Switch from mobile to desktop instantly.' },
              { icon: Globe, title: 'Unlimited Storage', desc: 'Store all your media, files, and documents without any limits or hidden costs.' },
            ].map((feature, i) => (
              <div key={i} className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-blue-500/50 transition-colors group">
                <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors text-blue-500">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                <p className="text-slate-400 leading-relaxed text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 pb-32">
        <div className="container mx-auto px-6">
          <div className="bg-blue-600 rounded-3xl p-12 md:p-20 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl -ml-32 -mb-32"></div>

            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 relative z-10">
              Ready to join the <br /> conversation?
            </h2>
            <p className="text-blue-100 max-w-xl mx-auto mb-10 relative z-10">
              Download the desktop app or start chatting in your browser. Experience communication without boundaries.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
              <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-blue-50 shadow-xl border-none">
                Get Started Now
              </Button>
              <Button size="lg" variant="ghost" className="text-white hover:bg-white/20 border border-white/30">
                <Info className="mr-2 h-5 w-5" />
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-950 py-12">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
              <span className="text-white text-xs font-bold">✦</span>
            </div>
            <span className="font-bold text-white">Nexus</span>
          </div>

          <div className="flex gap-8 text-sm text-slate-500">
            <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms</Link>
            <Link href="#" className="hover:text-white transition-colors">Cookies</Link>
            <Link href="#" className="hover:text-white transition-colors">Support</Link>
          </div>

          <p className="text-xs text-green-500 font-medium flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            SYSTEM STATUS: ONLINE
          </p>
        </div>
      </footer>
    </div>
  );
}
