import Link from "next/link"
import { Pencil, Square, Circle, ArrowRight, Users, Share2, Download, Layers, Github } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col text-gray-900">
      <header className="border-b sticky top-0 z-40 bg-white">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2">
            <Pencil className="h-6 w-6 text-purple-600" />
            <span className="text-xl font-bold">DrawCanvas</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#features" className="text-sm font-medium hover:text-purple-600 transition-colors">
              Features
            </Link>
            <Link href="#how-it-works" className="text-sm font-medium hover:text-purple-600 transition-colors">
              How It Works
            </Link>
            <Link href="#testimonials" className="text-sm font-medium hover:text-purple-600 transition-colors">
              Testimonials
            </Link>
            <Link href="#pricing" className="text-sm font-medium hover:text-purple-600 transition-colors">
              Pricing
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link
              href="#try-now"
              className="inline-flex h-9 items-center justify-center rounded-md bg-purple-600 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-purple-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-purple-700"
            >
              Try Now
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 md:py-32 bg-gradient-to-b from-white to-purple-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-center">
              <div className="flex flex-col gap-4">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tighter animate-fade-up animate-once animate-duration-[800ms] animate-delay-100">
                  Create, Collaborate, <span className="text-purple-600">Draw</span> Together
                </h1>
                <p className="text-gray-500 md:text-xl max-w-[600px] animate-fade-up animate-once animate-duration-[800ms] animate-delay-200">
                  A beautiful, intuitive whiteboard for creating diagrams, sketches, and collaborative drawings. Just
                  like Excalidraw, but better.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 pt-4 animate-fade-up animate-once animate-duration-[800ms] animate-delay-300">
                  <Link
                    href="#try-now"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-purple-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-purple-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-purple-700"
                  >
                    Start Drawing Now
                  </Link>
                  <Link
                    href="#learn-more"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
              <div className="relative group animate-fade-left animate-once animate-duration-[800ms] animate-delay-300">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative bg-white rounded-lg shadow-xl overflow-hidden border border-gray-200">
                  <div className="h-[350px] w-full bg-gray-50 flex items-center justify-center">
                    <div className="relative w-full h-full">
                      <div className="absolute top-0 left-0 w-full h-8 bg-gray-100 flex items-center px-4">
                        <div className="flex gap-2">
                          <div className="w-3 h-3 rounded-full bg-red-400"></div>
                          <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                          <div className="w-3 h-3 rounded-full bg-green-400"></div>
                        </div>
                      </div>
                      <div className="pt-8 p-4 w-full h-full">
                        <div className="animate-draw-line w-32 h-32 border-2 border-purple-500 rounded-md absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2"></div>
                        <div className="animate-draw-circle w-24 h-24 border-2 border-pink-500 rounded-full absolute top-1/3 right-1/3"></div>
                        <div className="animate-draw-arrow absolute bottom-1/3 right-1/4">
                          <svg
                            width="100"
                            height="30"
                            viewBox="0 0 100 30"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M0 15H90M90 15L75 2M90 15L75 28" stroke="#8B5CF6" strokeWidth="3" />
                          </svg>
                        </div>
                        <div className="animate-fade-in absolute top-1/4 left-1/2 text-sm font-medium text-gray-600">
                          Whiteboard
                        </div>
                        <div className="animate-fade-in animate-delay-300 absolute bottom-1/4 right-1/3 text-sm font-medium text-gray-600">
                          Diagram
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Animated shapes */}
          <div className="absolute top-1/4 left-0 w-4 h-4 bg-purple-200 rounded-full animate-float"></div>
          <div className="absolute top-1/3 right-1/4 w-6 h-6 bg-pink-200 rounded-full animate-float animation-delay-1000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-5 h-5 bg-yellow-200 rounded-full animate-float animation-delay-2000"></div>
          <div className="absolute bottom-1/3 right-0 w-3 h-3 bg-blue-200 rounded-full animate-float animation-delay-3000"></div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-purple-100 px-3 py-1 text-sm text-purple-600">
                  Powerful Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Everything you need to draw and create
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our platform provides all the tools you need to bring your ideas to life, collaborate with others, and
                  share your creations.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="grid gap-4 group hover:bg-purple-50 p-6 rounded-lg transition-colors">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100 text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                  <Pencil className="h-6 w-6" />
                </div>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Intuitive Drawing</h3>
                  <p className="text-gray-500">Simple yet powerful drawing tools that feel natural and responsive.</p>
                </div>
              </div>
              <div className="grid gap-4 group hover:bg-purple-50 p-6 rounded-lg transition-colors">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100 text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                  <Users className="h-6 w-6" />
                </div>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Real-time Collaboration</h3>
                  <p className="text-gray-500">
                    Work together with your team in real-time, seeing changes as they happen.
                  </p>
                </div>
              </div>
              <div className="grid gap-4 group hover:bg-purple-50 p-6 rounded-lg transition-colors">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100 text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                  <Share2 className="h-6 w-6" />
                </div>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Easy Sharing</h3>
                  <p className="text-gray-500">Share your creations with a simple link or export to various formats.</p>
                </div>
              </div>
              <div className="grid gap-4 group hover:bg-purple-50 p-6 rounded-lg transition-colors">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100 text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                  <Layers className="h-6 w-6" />
                </div>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Layers & Components</h3>
                  <p className="text-gray-500">
                    Organize your work with layers and reusable components for complex diagrams.
                  </p>
                </div>
              </div>
              <div className="grid gap-4 group hover:bg-purple-50 p-6 rounded-lg transition-colors">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100 text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                  <Download className="h-6 w-6" />
                </div>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Multiple Export Options</h3>
                  <p className="text-gray-500">Export your drawings as PNG, SVG, or PDF with just a few clicks.</p>
                </div>
              </div>
              <div className="grid gap-4 group hover:bg-purple-50 p-6 rounded-lg transition-colors">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100 text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                  <Github className="h-6 w-6" />
                </div>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Open Source</h3>
                  <p className="text-gray-500">
                    Built on open source principles, allowing for community contributions and transparency.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-20 bg-purple-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-purple-100 px-3 py-1 text-sm text-purple-600">
                  Simple Process
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">How DrawCanvas Works</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Get started in seconds and bring your ideas to life with our intuitive drawing platform.
                </p>
              </div>
            </div>

            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-3 md:gap-12">
              <div className="flex flex-col items-center text-center space-y-4 group">
                <div className="relative">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-purple-100 text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                    <span className="text-2xl font-bold">1</span>
                  </div>
                  <div className="absolute top-1/2 left-full h-0.5 w-full bg-purple-200 hidden md:block"></div>
                </div>
                <h3 className="text-xl font-bold">Create a Canvas</h3>
                <p className="text-gray-500">
                  Start with a blank canvas or choose from our templates to kickstart your project.
                </p>
              </div>

              <div className="flex flex-col items-center text-center space-y-4 group">
                <div className="relative">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-purple-100 text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                    <span className="text-2xl font-bold">2</span>
                  </div>
                  <div className="absolute top-1/2 left-full h-0.5 w-full bg-purple-200 hidden md:block"></div>
                </div>
                <h3 className="text-xl font-bold">Draw & Collaborate</h3>
                <p className="text-gray-500">
                  Use our intuitive tools to draw, and invite others to collaborate in real-time.
                </p>
              </div>

              <div className="flex flex-col items-center text-center space-y-4 group">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-purple-100 text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                  <span className="text-2xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-bold">Share & Export</h3>
                <p className="text-gray-500">
                  Share your creation with a link or export it in various formats for your needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Demo Section */}
        <section className="py-20 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-center">
              <div className="flex flex-col gap-4 order-2 md:order-1">
                <div className="inline-block rounded-lg bg-purple-100 px-3 py-1 text-sm text-purple-600 w-fit">
                  Interactive Demo
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">See DrawCanvas in Action</h2>
                <p className="text-gray-500 max-w-[600px]">
                  Our intuitive interface makes it easy to create beautiful diagrams, flowcharts, and sketches. Try it
                  out and see for yourself!
                </p>
                <ul className="space-y-2 text-gray-500">
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-purple-600"></div>
                    <span>Simple drag-and-drop interface</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-purple-600"></div>
                    <span>Customizable shapes and connectors</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-purple-600"></div>
                    <span>Real-time collaboration with your team</span>
                  </li>
                </ul>
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <Link
                    href="#try-demo"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-purple-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-purple-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-purple-700"
                  >
                    Try Demo
                  </Link>
                </div>
              </div>
              <div className="order-1 md:order-2 animate-fade-up animate-once">
                <div className="relative bg-white rounded-lg shadow-xl overflow-hidden border border-gray-200 group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                  <div className="relative">
                    <div className="h-[400px] w-full bg-gray-50 flex items-center justify-center">
                      <div className="relative w-full h-full">
                        <div className="absolute top-0 left-0 w-full h-8 bg-gray-100 flex items-center px-4">
                          <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-400"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                            <div className="w-3 h-3 rounded-full bg-green-400"></div>
                          </div>
                          <div className="mx-auto text-xs text-gray-500">DrawCanvas - Interactive Demo</div>
                        </div>
                        <div className="pt-8 p-4 w-full h-full">
                          <div className="flex gap-2 absolute top-10 left-4">
                            <div className="w-8 h-8 rounded bg-gray-200 flex items-center justify-center">
                              <Square className="h-4 w-4 text-gray-600" />
                            </div>
                            <div className="w-8 h-8 rounded bg-gray-200 flex items-center justify-center">
                              <Circle className="h-4 w-4 text-gray-600" />
                            </div>
                            <div className="w-8 h-8 rounded bg-gray-200 flex items-center justify-center">
                              <ArrowRight className="h-4 w-4 text-gray-600" />
                            </div>
                          </div>

                          <div className="animate-draw-line w-40 h-24 border-2 border-purple-500 rounded-md absolute top-1/3 left-1/4 "></div>
                          <div className="animate-draw-circle w-32 h-32 border-2 border-pink-500 rounded-full absolute top-1/3 right-1/4"></div>
                          <div className="animate-draw-arrow absolute bottom-1/3 left-1/2 transform -translate-x-1/2 ">
                            <svg
                              width="120"
                              height="30"
                              viewBox="0 0 120 30"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M0 15H110M110 15L95 2M110 15L95 28" stroke="#8B5CF6" strokeWidth="3" />
                            </svg>
                          </div>

                          <div className="animate-fade-in absolute top-1/3 left-1/4 transform -translate-x-1/2 -translate-y-1/2 text-sm font-medium text-gray-600">
                            Process
                          </div>
                          <div className="animate-fade-in animate-delay-300 absolute top-1/3 right-1/4 transform translate-x-1/2 -translate-y-1/2 text-sm font-medium text-gray-600">
                            Result
                          </div>
                          <div className="animate-fade-in animate-delay-500 absolute bottom-1/4 left-1/2 transform -translate-x-1/2 text-sm font-medium text-gray-600">
                            Connection
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="py-20 bg-purple-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-purple-100 px-3 py-1 text-sm text-purple-600">
                  Testimonials
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What Our Users Say</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Don't just take our word for it. Here's what people are saying about DrawCanvas.
                </p>
              </div>
            </div>

            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col gap-4 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center">
                    <span className="text-lg font-bold text-purple-600">JD</span>
                  </div>
                  <div>
                    <h4 className="font-bold">Jane Doe</h4>
                    <p className="text-sm text-gray-500">Product Designer</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "DrawCanvas has completely transformed how our team collaborates on design projects. The intuitive
                  interface and real-time collaboration features are game-changers."
                </p>
                <div className="flex text-yellow-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="none"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="none"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="none"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="none"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="none"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                </div>
              </div>

              <div className="flex flex-col gap-4 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center">
                    <span className="text-lg font-bold text-purple-600">JS</span>
                  </div>
                  <div>
                    <h4 className="font-bold">John Smith</h4>
                    <p className="text-sm text-gray-500">Software Engineer</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "As a developer, I appreciate how easy it is to create diagrams for documentation. The export options
                  are fantastic, and the UI is clean and intuitive."
                </p>
                <div className="flex text-yellow-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="none"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="none"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="none"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="none"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="none"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="none"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                </div>
              </div>

              <div className="flex flex-col gap-4 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center">
                    <span className="text-lg font-bold text-purple-600">AR</span>
                  </div>
                  <div>
                    <h4 className="font-bold">Alex Rodriguez</h4>
                    <p className="text-sm text-gray-500">Project Manager</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "DrawCanvas has simplified our project planning process. Being able to collaborate in real-time with
                  my team has increased our productivity tenfold."
                </p>
                <div className="flex text-yellow-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="none"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="none"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="none"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="none"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="none"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-purple-100 px-3 py-1 text-sm text-purple-600">Pricing</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Simple, Transparent Pricing</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Choose the plan that's right for you and start creating amazing diagrams today.
                </p>
              </div>
            </div>

            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-3 lg:gap-12">
              <div className="flex flex-col p-6 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="mb-4">
                  <h3 className="text-xl font-bold">Free</h3>
                  <p className="text-gray-500 mt-1">For individuals just getting started</p>
                </div>
                <div className="mb-4">
                  <span className="text-4xl font-bold">$0</span>
                  <span className="text-gray-500">/month</span>
                </div>
                <ul className="space-y-2 mb-6 flex-1">
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-green-500"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Unlimited public diagrams</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-green-500"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Basic shapes and tools</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-green-500"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>PNG export</span>
                  </li>
                </ul>
                <Link
                  href="#get-started"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950"
                >
                  Get Started
                </Link>
              </div>

              <div className="flex flex-col p-6 bg-purple-50 rounded-lg border border-purple-200 shadow-sm hover:shadow-md transition-shadow relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Popular
                </div>
                <div className="mb-4">
                  <h3 className="text-xl font-bold">Pro</h3>
                  <p className="text-gray-500 mt-1">For professionals and small teams</p>
                </div>
                <div className="mb-4">
                  <span className="text-4xl font-bold">$12</span>
                  <span className="text-gray-500">/month</span>
                </div>
                <ul className="space-y-2 mb-6 flex-1">
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-green-500"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Everything in Free</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-green-500"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Unlimited private diagrams</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-green-500"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Advanced shapes and tools</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-green-500"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>SVG and PDF export</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-green-500"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Real-time collaboration (up to 5 users)</span>
                  </li>
                </ul>
                <Link
                  href="#get-started"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-purple-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-purple-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-purple-700"
                >
                  Get Started
                </Link>
              </div>

              <div className="flex flex-col p-6 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="mb-4">
                  <h3 className="text-xl font-bold">Enterprise</h3>
                  <p className="text-gray-500 mt-1">For organizations and large teams</p>
                </div>
                <div className="mb-4">
                  <span className="text-4xl font-bold">$29</span>
                  <span className="text-gray-500">/month</span>
                </div>
                <ul className="space-y-2 mb-6 flex-1">
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-green-500"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Everything in Pro</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-green-500"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Unlimited team members</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-green-500"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>SSO and advanced security</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-green-500"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Dedicated support</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-green-500"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Custom integrations</span>
                  </li>
                </ul>
                <Link
                  href="#contact-sales"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950"
                >
                  Contact Sales
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-purple-600 text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Start Drawing?</h2>
                <p className="max-w-[900px] text-purple-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join thousands of users who are already creating amazing diagrams with DrawCanvas.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <Link
                  href="#try-now"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-purple-600 shadow transition-colors hover:bg-purple-50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white"
                >
                  Start Drawing Now
                </Link>
                <Link
                  href="#learn-more"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-white bg-transparent px-8 text-sm font-medium text-white shadow-sm transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white border-t py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Pencil className="h-6 w-6 text-purple-600" />
                <span className="text-xl font-bold">DrawCanvas</span>
              </div>
              <p className="text-sm text-gray-500">
                The intuitive drawing tool for teams and individuals. Create beautiful diagrams, flowcharts, and more.
              </p>
              <div className="flex gap-4">
                <Link href="#" className="text-gray-500 hover:text-purple-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="#" className="text-gray-500 hover:text-purple-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link href="#" className="text-gray-500 hover:text-purple-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-bold uppercase tracking-wider">Product</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-gray-500 hover:text-purple-600">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-500 hover:text-purple-600">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-500 hover:text-purple-600">
                    Templates
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-500 hover:text-purple-600">
                    Integrations
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-bold uppercase tracking-wider">Resources</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-gray-500 hover:text-purple-600">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-500 hover:text-purple-600">
                    Tutorials
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-500 hover:text-purple-600">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-500 hover:text-purple-600">
                    Support
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-bold uppercase tracking-wider">Company</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-gray-500 hover:text-purple-600">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-500 hover:text-purple-600">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-500 hover:text-purple-600">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-500 hover:text-purple-600">
                    Terms
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t pt-8 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-xs text-gray-500">&copy; {new Date().getFullYear()} DrawCanvas. All rights reserved.</p>
            <div className="flex gap-4 mt-4 sm:mt-0">
              <Link href="#" className="text-xs text-gray-500 hover:text-purple-600">
                Privacy Policy
              </Link>
              <Link href="#" className="text-xs text-gray-500 hover:text-purple-600">
                Terms of Service
              </Link>
              <Link href="#" className="text-xs text-gray-500 hover:text-purple-600">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

