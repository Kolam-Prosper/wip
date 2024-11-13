import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import ErrorBoundary from '@/components/ErrorBoundary'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Kolam Prosper',
    description: 'Invest in real estate with Kolam Prosper',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={`${inter.className} bg-gray-900 text-white flex flex-col min-h-screen`}>
                <ErrorBoundary>
                    <div className="bg-yellow-400 text-gray-900 py-2 text-center" role="alert">
                        <p className="text-sm font-medium">
                            This project is a work in progress. Features may be incomplete or subject to change.
                        </p>
                    </div>
                    <header className="bg-gray-900/80 backdrop-blur-sm z-50 border-b border-yellow-500/20 sticky top-0">
                        <div className="container mx-auto px-4">
                            <nav className="flex items-center justify-between h-16">
                                <Link href="/" className="flex items-center space-x-2">
                                    <Image src="/kolam-logo.svg" alt="KolamProsper Logo" width={40} height={40} />
                                    <span className="text-xl font-bold text-yellow-400">Kolam Prosper</span>
                                </Link>
                                <div className="hidden md:flex items-center space-x-6">
                                    <Link href="/" className="text-sm text-gray-300 hover:text-yellow-400">
                                        Home
                                    </Link>
                                    <Link href="/dashboard" className="text-sm text-gray-300 hover:text-yellow-400">
                                        Dashboard
                                    </Link>
                                    <Link href="/invest" className="text-sm text-gray-300 hover:text-yellow-400">
                                        Invest
                                    </Link>
                                    <Link href="/pools" className="text-sm text-gray-300 hover:text-yellow-400">
                                        Pools
                                    </Link>
                                    <Link href="/property-tracker" className="text-sm text-gray-300 hover:text-yellow-400">
                                        Property Tracker
                                    </Link>
                                    <Button className="bg-yellow-400 hover:bg-yellow-500 text-black">
                                        Connect Wallet
                                    </Button>
                                </div>
                                <button className="md:hidden text-yellow-400 hover:text-yellow-500">
                                    <span className="sr-only">Open main menu</span>
                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                </button>
                            </nav>
                        </div>
                    </header>
                    <main className="flex-grow">
                        {children}
                    </main>
                    <footer className="bg-gray-800 py-6">
                        <div className="container mx-auto px-4 text-center text-gray-400">
                            <p>&copy; {new Date().getFullYear()} Kolam Prosper. All rights reserved.</p>
                        </div>
                    </footer>
                </ErrorBoundary>
            </body>
        </html>
    )
}