"use client";

import Link from "next/link";
import {
  Pencil,
  Share2,
  Zap,
  Github,
  ChevronRight,
  Square,
  Circle,
  Type,
  MousePointer2,
  MousePointer,
  Triangle,
  PenTool,
  Hand,
  Trash2,
  Undo,
  Redo,
  Download,
  Users,
  PenLine,
} from "lucide-react";
import { useState, useEffect } from "react";

export default function LandingPage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 selection:bg-indigo-500/30 overflow-x-hidden font-sans">
      {/* Background Effects */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-indigo-500 opacity-20 blur-[100px]"></div>
        <div className="absolute right-0 bottom-0 -z-10 h-[400px] w-[400px] rounded-full bg-purple-500 opacity-10 blur-[120px]"></div>
      </div>

      {/* Navbar */}
      <header
        className={`fixed top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl z-50 transition-all duration-300 rounded-full border ${
          scrolled
            ? "bg-[#0B0B0F]/80 backdrop-blur-xl border-slate-800/50 py-3 shadow-lg shadow-indigo-500/10"
            : "bg-transparent border-transparent py-4"
        }`}
      >
        <div className="px-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-white tracking-tight">
              InkSync
            </span>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="https://github.com/Sushantjarial/ink-sync"
              target="_blank"
              className="hidden md:flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-white transition-colors"
            >
              <Github className="w-4 h-4" />
              <span className="hidden lg:inline">Star on GitHub</span>
            </Link>
          </div>
        </div>
      </header>

      <main className="relative z-10 pt-32 pb-20">
        {/* Hero Section */}
        <section className="container mx-auto px-4 md:px-6 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/50 border border-slate-800 text-indigo-300 text-xs font-medium mb-8 animate-fade-in-up backdrop-blur-sm hover:border-indigo-500/50 transition-colors cursor-default">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-8 max-w-5xl mx-auto leading-[1.1] animate-fade-in-up animation-delay-100">
            Collaborate at the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 animate-gradient-x">
              speed of thought
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-12 animate-fade-in-up animation-delay-200 leading-relaxed">
            The infinite canvas for engineering teams. Diagram, wireframe, and
            brainstorm in real-time with a tool designed for flow.
          </p>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-24 animate-fade-in-up animation-delay-300">
            <Link
              href="/"
              className="h-14 px-8 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold text-lg flex items-center gap-2 transition-all shadow-[0_6px_0_rgb(67,56,202)] hover:shadow-[0_3px_0_rgb(67,56,202)] hover:translate-y-[3px] active:shadow-none active:translate-y-[6px]"
            >
              Start Drawing Free
              <Zap className="w-5 h-5 fill-current" />
            </Link>
          </div>

          {/* App Interface Mockup */}
          <div className="relative max-w-6xl mx-auto animate-fade-in-up animation-delay-500 perspective-1000 group">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative rounded-xl border border-slate-800 bg-[#0B0B0F]/90 backdrop-blur-sm shadow-2xl overflow-hidden transform transition-transform duration-700 hover:scale-[1.01]">
              {/* Browser Bar */}
              <div className="h-12 bg-[#13131A] border-b border-slate-800 flex items-center px-4 gap-2">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-slate-700" />
                  <div className="w-3 h-3 rounded-full bg-slate-700" />
                  <div className="w-3 h-3 rounded-full bg-slate-700" />
                </div>
                <div className="ml-4 flex-1 flex justify-center">
                  <div className="h-6 w-80 bg-slate-800/50 rounded-full flex items-center justify-center text-[10px] text-slate-500 font-mono">
                    inksync.app/room/design-review
                  </div>
                </div>
              </div>

              {/* Canvas Area */}
              <div className="h-[400px] md:h-[600px] relative bg-[#0B0B0F] overflow-hidden">
                {/* Grid Pattern inside canvas */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#2a2a2a_1px,transparent_1px),linear-gradient(to_bottom,#2a2a2a_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>

                {/* Toolbar Mock */}
                <div className="absolute top-6 left-1/2 -translate-x-1/2 bg-[#1A1A23]/90 backdrop-blur border border-slate-700/50 p-1.5 rounded-xl flex gap-1 shadow-xl z-20">
                  {[Pencil, Square, Circle, Type, Share2].map((Icon, i) => (
                    <div
                      key={i}
                      className={`p-2.5 rounded-lg transition-all ${
                        i === 0
                          ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/25"
                          : "text-slate-400 hover:bg-slate-800 hover:text-white"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                  ))}
                </div>

                {/* Mock Content - Diagram */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-full max-w-2xl h-full">
                    {/* Node 1 */}
                    <div className="absolute top-[30%] left-[20%] p-4 rounded-xl border-2 border-indigo-500/50 bg-indigo-500/10 backdrop-blur-sm">
                      <div className="text-indigo-300 font-mono text-sm font-bold mb-2">
                        API Gateway
                      </div>
                      <div className="h-2 w-24 bg-indigo-500/20 rounded mb-1"></div>
                      <div className="h-2 w-16 bg-indigo-500/20 rounded"></div>
                    </div>

                    {/* Node 2 */}
                    <div className="absolute top-[30%] right-[20%] p-4 rounded-xl border-2 border-purple-500/50 bg-purple-500/10 backdrop-blur-sm">
                      <div className="text-purple-300 font-mono text-sm font-bold mb-2">
                        Postgres DB
                      </div>
                      <div className="h-2 w-24 bg-purple-500/20 rounded mb-1"></div>
                      <div className="h-2 w-16 bg-purple-500/20 rounded"></div>
                    </div>

                    {/* Node 3 */}
                    <div className="absolute bottom-[25%] left-[50%] -translate-x-1/2 p-4 rounded-xl border-2 border-pink-500/50 bg-pink-500/10 backdrop-blur-sm">
                      <div className="text-pink-300 font-mono text-sm font-bold mb-2">
                        Auth Service
                      </div>
                      <div className="h-2 w-24 bg-pink-500/20 rounded mb-1"></div>
                      <div className="h-2 w-16 bg-pink-500/20 rounded"></div>
                    </div>

                    {/* Connecting Lines (SVG) */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
                      <path
                        d="M 280 200 C 400 200, 400 200, 550 200"
                        stroke="url(#gradient1)"
                        strokeWidth="2"
                        fill="none"
                        strokeDasharray="6 6"
                        className="animate-dash"
                      />
                      <path
                        d="M 280 240 C 280 350, 400 400, 420 400"
                        stroke="url(#gradient2)"
                        strokeWidth="2"
                        fill="none"
                      />

                      <defs>
                        <linearGradient
                          id="gradient1"
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="0%"
                        >
                          <stop offset="0%" stopColor="#6366f1" />
                          <stop offset="100%" stopColor="#a855f7" />
                        </linearGradient>
                        <linearGradient
                          id="gradient2"
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="0%"
                        >
                          <stop offset="0%" stopColor="#6366f1" />
                          <stop offset="100%" stopColor="#ec4899" />
                        </linearGradient>
                      </defs>
                    </svg>

                    {/* Cursors */}
                    <div className="absolute top-[35%] left-[45%] animate-float">
                      <Cursor color="#EC4899" label="Sarah" />
                    </div>
                    <div className="absolute bottom-[35%] right-[30%] animate-float animation-delay-2000">
                      <Cursor color="#3B82F6" label="Mike" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How it works Section */}
        <section className="py-24 relative border-t border-slate-800/50">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/20 via-[#020617] to-[#020617] opacity-50 pointer-events-none" />

          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                From idea to reality in{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                  seconds
                </span>
              </h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                No sign-up required. Just start a session and invite your team.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  icon: <PenTool className="w-6 h-6 text-white" />,
                  title: "Start a Session",
                  desc: "Create a new room instantly. No account needed, just jump straight into the infinite canvas.",
                  color: "bg-blue-500",
                },
                {
                  icon: <Share2 className="w-6 h-6 text-white" />,
                  title: "Share the Link",
                  desc: "Copy your unique room URL and send it to your team. They join with a single click.",
                  color: "bg-purple-500",
                },
                {
                  icon: <Users className="w-6 h-6 text-white" />,
                  title: "Collaborate Live",
                  desc: "See everyone's cursors in real-time. Draw, diagram, and brainstorm together seamlessly.",
                  color: "bg-pink-500",
                },
              ].map((step, i) => (
                <div key={i} className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/10 to-purple-500/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 " />
                  <div className="relative h-full p-8 rounded-2xl border border-slate-800 bg-[#0F0F14] hover:border-slate-700 transition-colors ">
                  
                    <h3 className="text-xl font-bold text-white mb-3">
                      {step.title}
                    </h3>
                    <p className="text-slate-400 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <style jsx global>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        @keyframes dash {
          to {
            stroke-dashoffset: -24;
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-dash {
          animation: dash 1s linear infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </div>
  );
}

function Cursor({ color, label }: { color: string; label: string }) {
  return (
    <div className="relative drop-shadow-lg">
      <MousePointer2
        className="w-5 h-5"
        style={{ color: color, fill: color }}
      />
      <div
        className="absolute left-4 top-4 px-2 py-0.5 rounded-md text-[10px] font-bold text-white whitespace-nowrap shadow-sm"
        style={{ backgroundColor: color }}
      >
        {label}
      </div>
    </div>
  );
}
