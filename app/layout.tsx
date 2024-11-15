import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Header } from "@/components/ui/header"
import ErrorBoundary from '@/components/ErrorBoundary'
import { Twitter, MessageCircle, Send } from 'lucide-react'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Kolam Prosper',
    description: 'Invest in real estate with Kolam Prosper',
    icons: [
        {
            rel: 'icon',
            type: 'image/svg+xml',
            url: '/kolam-logo.svg',
        },
        {
            rel: 'icon',
            type: 'image/x-icon',
            url: '/favicon.ico',
        },
    ],
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
                    <Header />
                    <main className="flex-grow">
                        {children}
                    </main>
                    <footer className="bg-gray-800 py-6">
                        <div className="container mx-auto px-4 text-center text-gray-400">
                            <div className="flex justify-center space-x-6 mb-4">
                                <Link href="https://wa.me/971523886321" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors duration-300">
                                    <MessageCircle size={24} />
                                    <span className="sr-only">WhatsApp</span>
                                </Link>
                                <Link href="https://twitter.com/kolam_prosper" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors duration-300">
                                    <Twitter size={24} />
                                    <span className="sr-only">Twitter</span>
                                </Link>
                                <Link href="https://t.me/kolamprosper" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors duration-300">
                                    <Send size={24} />
                                    <span className="sr-only">Telegram</span>
                                </Link>
                            </div>
                            <p>&copy; {new Date().getFullYear()} Kolam Prosper. All rights reserved.</p>
                        </div>
                    </footer>
                </ErrorBoundary>
            </body>
        </html>
    )
}