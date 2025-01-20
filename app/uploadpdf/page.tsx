
import FileUpload from "@/components/FileUpload"
import { Button } from "@/components/ui/button"
import { UserButton } from "@clerk/nextjs"
import { auth } from "@clerk/nextjs/server"
import { LogIn } from "lucide-react"
import Link from "next/link"
import AnimatedBackground from "@/components/AnimatedBackground"

export default async function Home() {
  const { userId } = await auth()
  const isAuth = !!userId

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <AnimatedBackground />
      <div className="container mx-auto px-4 py-8 sm:py-16">
        <header className="flex justify-between items-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            CHATSPHERE
          </h2>
          {isAuth ? (
            <UserButton />
           
          ) : (
            <Link href="/sign-in">
              <Button
                variant="outline"
                size="sm"
                className="text-sm sm:text-base hover:bg-gray-700 transition-colors duration-300"
              >
                Login <LogIn className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          )}
        </header>

        <main className="flex flex-col items-center text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Chat with Your PDFs,
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Powered by AI
            </span>
          </h1>
          <p className="max-w-2xl text-lg sm:text-xl text-gray-300 mb-10">
            Unlock the knowledge within your documents. Get instant answers, deep insights, and understand complex
            information in seconds with our cutting-edge AI technology.
          </p>

          {isAuth ? (
            <div className="w-full max-w-xl space-y-6">
              <FileUpload />
            </div>
          ) : (
            <Link href="/sign-in">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-all duration-300 text-lg px-8 py-3"
              >
                Start Chatting Now
              </Button>
            </Link>
          )}
        </main>
      </div>
    </div>
  )
}

