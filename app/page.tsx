"use client";
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { FileText, MessageSquare, Zap, Shield,  CheckCircle, ArrowRight, Star, Menu } from 'lucide-react'
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-16 flex items-center fixed w-full bg-white/80 backdrop-blur-md z-50">
        <Link className="flex items-center justify-center" href="#">
          <FileText className="h-6 w-6 text-primary" />
          <span className="ml-2 text-2xl font-bold">ChatSphere</span>
        </Link>
        <div className="ml-auto flex items-center">
          <nav className={`${isMenuOpen ? 'flex' : 'hidden'} absolute top-full left-0 right-0 bg-white/80 backdrop-blur-md flex-col items-center pb-4 lg:static lg:flex lg:flex-row lg:pb-0 lg:space-x-6`}>
            <Link className="text-sm font-medium hover:text-primary py-2 lg:py-0" href="#features" onClick={() => setIsMenuOpen(false)}>
              Features
            </Link>
            <Link className="text-sm font-medium hover:text-primary py-2 lg:py-0" href="#how-it-works" onClick={() => setIsMenuOpen(false)}>
              How It Works
            </Link>
            <Link className="text-sm font-medium hover:text-primary py-2 lg:py-0" href="#pricing" onClick={() => setIsMenuOpen(false)}>
              Pricing
            </Link>
            <Link className="text-sm font-medium hover:text-primary py-2 lg:py-0" href="#testimonials" onClick={() => setIsMenuOpen(false)}>
              Testimonials
            </Link>
          </nav>
          <div className="hidden lg:flex items-center space-x-2 ml-4">
            <Button variant="outline">Log In</Button>
            <Button>Sign Up</Button>
          </div>
          <button
            className="ml-4 lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
          <div className="container px-4 md:px-6 relative z-10 pt-16 md:pt-24 lg:pt-0">
            <div className="grid gap-6 lg:grid-cols-[1fr_500px] items-center">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col justify-center space-y-4"
              >
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300">
                    Chat with Your PDFs,<br />
                    <span className="text-primary">Unlock Insights Instantly</span>
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                    Transform the way you interact with documents. Upload your PDF and start a conversation to get instant answers, summaries, and deep insights.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/uploadpdf">
                  <Button size="lg" className="inline-flex items-center justify-center transition-transform hover:scale-105">
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  </Link>
                  <Button size="lg" variant="outline" className="transition-transform hover:scale-105">
                    Watch Demo
                  </Button>
                </div>
                <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 text-sm">
                  <div className="flex items-center">
                    <CheckCircle className="text-primary mr-1 h-4 w-4" />
                    <span>No credit card required</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="text-primary mr-1 h-4 w-4" />
                    <span>14-day free trial</span>
                  </div>
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative w-full max-w-[500px] aspect-[4/3] mx-auto lg:mr-0 mt-8 lg:mt-0"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl"></div>
                <div className="absolute inset-2 bg-white dark:bg-gray-800 rounded-xl shadow-2xl overflow-hidden flex flex-col">
                  <div className="bg-gray-100 dark:bg-gray-700 p-4 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <FileText className="h-5 w-5 text-primary" />
                      <span className="font-semibold">sample.pdf</span>
                    </div>
                    <div className="flex space-x-1">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                  </div>
                  <div className="flex-1 p-4 overflow-auto">
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      className="space-y-4"
                    >
                      <div className="flex items-start space-x-2">
                        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold">U</div>
                        <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-2 max-w-[80%]">
                          <p className="text-sm">Can you summarize the key points of this document?</p>
                        </div>
                      </div>
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 1 }}
                        className="flex items-start space-x-2 justify-end"
                      >
                        <div className="bg-primary text-white rounded-lg p-2 max-w-[80%]">
                          <p className="text-sm">Here are the key points from the document:</p>
                          <ul className="list-disc list-inside text-sm mt-1">
                            <li>Point 1: Lorem ipsum dolor sit amet</li>
                            <li>Point 2: Consectetur adipiscing elit</li>
                            <li>Point 3: Sed do eiusmod tempor incididunt</li>
                          </ul>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-white font-bold">AI</div>
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
          <div className="absolute inset-0 bg-grid-gray-300/20 dark:bg-grid-gray-700/20 bg-[size:30px_30px] z-0"></div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Powerful Features</h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-3 text-center">
                <MessageSquare className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Interactive Chat</h3>
                <p className="text-gray-500 dark:text-gray-400">Engage in natural conversations with your PDF content.</p>
              </div>
              <div className="flex flex-col items-center space-y-3 text-center">
                <Zap className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Instant Answers</h3>
                <p className="text-gray-500 dark:text-gray-400">Get quick responses to your questions about the document.</p>
              </div>
              <div className="flex flex-col items-center space-y-3 text-center">
                <Shield className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Secure & Private</h3>
                <p className="text-gray-500 dark:text-gray-400">Your documents are encrypted and never stored permanently.</p>
              </div>
            </div>
          </div>
        </section>
        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">How It Works</h2>
            <div className="grid gap-6 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="bg-primary text-primary-foreground rounded-full p-3">
                  <FileText className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold">1. Upload Your PDF</h3>
                <p className="text-gray-500 dark:text-gray-400">Simply drag and drop or select your PDF file to upload.</p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="bg-primary text-primary-foreground rounded-full p-3">
                  <MessageSquare className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold">2. Start Chatting</h3>
                <p className="text-gray-500 dark:text-gray-400">Ask questions or request information about your document.</p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="bg-primary text-primary-foreground rounded-full p-3">
                  <Zap className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold">3. Get Instant Insights</h3>
                <p className="text-gray-500 dark:text-gray-400">Receive accurate answers and valuable insights in seconds.</p>
              </div>
            </div>
          </div>
        </section>
        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Pricing Plans</h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-center mb-4">Basic</h3>
                <p className="text-center text-gray-500 dark:text-gray-400 mb-4">For individual users</p>
                <p className="text-4xl font-bold text-center mb-6">$9.99<span className="text-lg font-normal">/month</span></p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2 text-primary" />
                    <span>Up to 50 pages per PDF</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2 text-primary" />
                    <span>5 PDFs per month</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2 text-primary" />
                    <span>Basic chat features</span>
                  </li>
                </ul>
                <Button className="mt-auto">Choose Plan</Button>
              </div>
              <div className="flex flex-col p-6 bg-primary text-primary-foreground rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-center mb-4">Pro</h3>
                <p className="text-center opacity-90 mb-4">For power users</p>
                <p className="text-4xl font-bold text-center mb-6">$24.99<span className="text-lg font-normal">/month</span></p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2" />
                    <span>Unlimited pages per PDF</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2" />
                    <span>20 PDFs per month</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2" />
                    <span>Advanced chat features</span>
                  </li>
                </ul>
                <Button className="mt-auto bg-white text-primary hover:bg-gray-200">Choose Plan</Button>
              </div>
              <div className="flex flex-col p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-center mb-4">Enterprise</h3>
                <p className="text-center text-gray-500 dark:text-gray-400 mb-4">For large teams</p>
                <p className="text-4xl font-bold text-center mb-6">Custom</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2 text-primary" />
                    <span>Unlimited everything</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2 text-primary" />
                    <span>Priority support</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2 text-primary" />
                    <span>Custom integrations</span>
                  </li>
                </ul>
                <Button className="mt-auto">Contact Sales</Button>
              </div>
            </div>
          </div>
        </section>
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">What Our Users Say</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
                <Star className="h-6 w-6 text-yellow-400 mb-4" />
                <p className="text-gray-500 dark:text-gray-400 mb-4">
                  &quot;PDFChat has revolutionized the way I interact with documents. It&apos;s like having a personal assistant for all my PDFs!&quot;
                </p>
                <p className="font-semibold">Sarah K.</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Marketing Manager</p>
              </div>
              <div className="flex flex-col p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
                <Star className="h-6 w-6 text-yellow-400 mb-4" />
                <p className="text-gray-500 dark:text-gray-400 mb-4">
                  &quot;As a researcher, PDFChat has saved me countless hours. It&apos;s incredibly easy to extract information and insights from complex papers.&quot;
                </p>
                <p className="font-semibold">Dr. Alex M.</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Research Scientist</p>
              </div>
              <div className="flex flex-col p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
                <Star className="h-6 w-6 text-yellow-400 mb-4" />
                <p className="text-gray-500 dark:text-gray-400 mb-4">
                  &quot;The speed and accuracy of PDFChat are unmatched. It&apos;s become an essential tool for our legal team.&quot;
                </p>
                <p className="font-semibold">Emily R.</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Corporate Lawyer</p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Transform Your PDF Experience?</h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Join thousands of satisfied users who have revolutionized the way they interact with their documents.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2 mx-auto">
                <form className="flex space-x-2">
                  <Input className="max-w-lg flex-1" placeholder="Enter your email" type="email" />
                  <Button type="submit">Get Started</Button>
                </form>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Start your 14-day free trial. No credit card required.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2023 PDFChat. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy Policy
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Cookie Policy
          </Link>
        </nav>
      </footer>
    </div>
  )
}

