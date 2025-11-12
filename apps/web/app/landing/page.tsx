import Link from "next/link";
import {
  Pencil,
  Square,
  Circle,
  ArrowRight,
  Users,
  Share2,
  Download,
  Layers
} from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-950 text-gray-100">
      <header className="border-b border-gray-800 sticky top-0 z-40 bg-gray-950">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2">
            <Pencil className="h-6 w-6 text-purple-400" />
            <span className="text-xl font-bold text-white">InkSync</span>
          </div>
          <nav className="hidden md:flex gap-6">
            {/* <Link
              href="#features"
              className="text-sm font-medium hover:text-purple-400 transition-colors"
            >
              Features
            </Link>
            <Link
              href="#how-it-works"
              className="text-sm font-medium hover:text-purple-400 transition-colors"
            >
              How It Works
            </Link> */}
          </nav>
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="inline-flex h-9 items-center justify-center rounded-md bg-purple-600 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-purple-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-purple-700"
            >
              Try Now
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 md:py-32 bg-gradient-to-b from-gray-950 to-gray-900">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-center">
              <div className="flex flex-col gap-4">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tighter animate-fade-up animate-once animate-duration-[800ms] animate-delay-100 text-white">
                  Create, Collaborate,{" "}
                  <span className="text-purple-400">Draw</span> Together
                </h1>
                <p className="text-gray-400 md:text-xl max-w-[600px] animate-fade-up animate-once animate-duration-[800ms] animate-delay-200">
                  A beautiful, intuitive whiteboard for creating diagrams,
                  sketches, and collaborative drawings. Just like Excalidraw,
                  but better.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 pt-4 animate-fade-up animate-once animate-duration-[800ms] animate-delay-300">
                  <Link
                    href="/"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-purple-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-purple-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-purple-700"
                  >
                    Start Drawing Now
                  </Link>
                  {/* <Link
                    href="#learn-more"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-gray-700 bg-gray-950 px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-900 hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950"
                  >
                    Learn More
                  </Link> */}
                </div>
              </div>
              <div className="relative group animate-fade-left animate-once animate-duration-[800ms] animate-delay-300">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative bg-gray-900 rounded-lg shadow-xl overflow-hidden border border-gray-800">
                  <div className="h-[350px] w-full bg-gray-950 flex items-center justify-center">
                    <div className="relative w-full h-full">
                      <div className="absolute top-0 left-0 w-full h-8 bg-gray-900 flex items-center px-4">
                        <div className="flex gap-2">
                          <div className="w-3 h-3 rounded-full bg-red-500"></div>
                          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                          <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                      </div>
                      <div className="pt-8 p-4 w-full h-full">
                        <div className="animate-draw-line w-32 h-32 border-2 border-purple-400 rounded-md absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2"></div>
                        <div className="animate-draw-line w-24 h-24 border-2 border-pink-400 rounded-full absolute top-1/3 right-1/3"></div>
                        <div className="animate-draw-line absolute top-1/3 right-1/8  ">
                          <svg
                            width="100"
                            height="30"
                            viewBox="0 0 100 30"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M0 15H90M90 15L75 2M90 15L75 28"
                              stroke="#a78bfa"
                              strokeWidth="3"
                            />
                          </svg>
                        </div>
                        <div className="animate-fade-in absolute top-1/4 left-1/2 text-sm font-medium text-gray-400"></div>
                        <div className="animate-fade-in animate-delay-300 absolute bottom-1/4 right-1/3 text-sm font-medium text-gray-400"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Animated shapes */}
          <div className="absolute top-1/4 left-0 w-4 h-4 bg-purple-900 rounded-full animate-float"></div>
          <div className="absolute top-1/3 right-1/4 w-6 h-6 bg-pink-900 rounded-full animate-float animation-delay-1000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-5 h-5 bg-yellow-900 rounded-full animate-float animation-delay-2000"></div>
          <div className="absolute bottom-1/3 right-0 w-3 h-3 bg-blue-900 rounded-full animate-float animation-delay-3000"></div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-gray-950">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-purple-900 px-3 py-1 text-sm text-purple-400">
                  Powerful Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">
                  Everything you need to draw and create
                </h2>
                <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our platform provides all the tools you need to bring your
                  ideas to life, collaborate with others, and share your
                  creations.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="grid gap-4 group hover:bg-purple-900 p-6 rounded-lg transition-colors">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-900 text-purple-400 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                  <Pencil className="h-6 w-6" />
                </div>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold text-white">
                    Intuitive Drawing
                  </h3>
                  <p className="text-gray-400">
                    Simple yet powerful drawing tools that feel natural and
                    responsive.
                  </p>
                </div>
              </div>
              <div className="grid gap-4 group hover:bg-purple-900 p-6 rounded-lg transition-colors">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-900 text-purple-400 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                  <Users className="h-6 w-6" />
                </div>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold text-white">
                    Real-time Collaboration
                  </h3>
                  <p className="text-gray-400">
                    Work together with your team in real-time, seeing changes as
                    they happen.
                  </p>
                </div>
              </div>
              <div className="grid gap-4 group hover:bg-purple-900 p-6 rounded-lg transition-colors">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-900 text-purple-400 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                  <Share2 className="h-6 w-6" />
                </div>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold text-white">Easy Sharing</h3>
                  <p className="text-gray-400">
                    Share your creations with a simple link or export to various
                    formats.
                  </p>
                </div>
              </div>
              <div className="grid gap-4 group hover:bg-purple-900 p-6 rounded-lg transition-colors">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-900 text-purple-400 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                  <Layers className="h-6 w-6" />
                </div>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold text-white">
                    Layers & Components
                  </h3>
                  <p className="text-gray-400">
                    Organize your work with layers and reusable components for
                    complex diagrams.
                  </p>
                </div>
              </div>
              <div className="grid gap-4 group hover:bg-purple-900 p-6 rounded-lg transition-colors">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-900 text-purple-400 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                  <Download className="h-6 w-6" />
                </div>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold text-white">
                    Multiple Export Options
                  </h3>
                  <p className="text-gray-400">
                    Export your drawings as PNG, SVG, or PDF with just a few
                    clicks.
                  </p>
                </div>
              </div>
              <div className="grid gap-4 group hover:bg-purple-900 p-6 rounded-lg transition-colors">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-900 text-purple-400 group-hover:bg-purple-600 group-hover:text-white transition-colors">

                </div>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold text-white">Open Source</h3>
                  <p className="text-gray-400">
                    Built on open source principles, allowing for community
                    contributions and transparency.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-20 bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-purple-900 px-3 py-1 text-sm text-purple-400">
                  Simple Process
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">
                  How DrawCanvas Works
                </h2>
                <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Get started in seconds and bring your ideas to life with our
                  intuitive drawing platform.
                </p>
              </div>
            </div>

            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-3 md:gap-12">
              <div className="flex flex-col items-center text-center space-y-4 group">
                <div className="relative">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-purple-900 text-purple-400 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                    <span className="text-2xl font-bold">1</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white">
                  Create a Canvas
                </h3>
                <p className="text-gray-400">
                  Start with a blank canvas or choose from our templates to
                  kickstart your project.
                </p>
              </div>

              <div className="flex flex-col items-center text-center space-y-4 group">
                <div className="relative">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-purple-900 text-purple-400 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                    <span className="text-2xl font-bold">2</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white">
                  Draw & Collaborate
                </h3>
                <p className="text-gray-400">
                  Use our intuitive tools to draw, and invite others to
                  collaborate in real-time.
                </p>
              </div>

              <div className="flex flex-col items-center text-center space-y-4 group">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-purple-900 text-purple-400 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                  <span className="text-2xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-bold text-white">Share & Export</h3>
                <p className="text-gray-400">
                  Share your creation with a link or export it in various
                  formats for your needs.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
