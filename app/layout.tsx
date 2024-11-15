import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Header } from "@/components/ui/Header"
import ErrorBoundary from '@/components/ErrorBoundary'
import { Twitter, MessageCircle, Send } from 'lucide-react'
import Link from 'next/link'

// Optimize font loading
const inter = Inter({
    subsets: ['latin'],
    display: 'swap', // Improve performance by allowing font swap
})

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
            rel: 'apple-touch-icon',
            sizes: '180x180',
            url: '/apple-touch-icon.png',
        },
        {
            rel: 'icon',
            type: 'image/png',
            sizes: '32x32',
            url: '/favicon-32x32.png',
        },
        {
            rel: 'icon',
            type: 'image/png',
            sizes: '16x16',
            url: '/favicon-16x16.png',
        },
        {
            rel: 'manifest',
            url: '/site.webmanifest',
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
                            <nav className="flex justify-center space-x-6 mb-4" aria-label="Social media links">
                                <Link href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors duration-300">
                                    <MessageCircle size={24} aria-hidden="true" />
                                    <span className="sr-only">WhatsApp</span>
                                </Link>
                                <Link href="https://twitter.com/kolamprosper" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors duration-300">
                                    <Twitter size={24} aria-hidden="true" />
                                    <span className="sr-only">Twitter</span>
                                </Link>
                                <Link href="https://t.me/kolamprosper" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors duration-300">
                                    <Send size={24} aria-hidden="true" />
                                    <span className="sr-only">Telegram</span>
                                </Link>
                            </nav>
                            <p>&copy; {new Date().getFullYear()} Kolam Prosper. All rights reserved.</p>
                        </div>
                    </footer>
                </ErrorBoundary>
            </body>
        </html>
    )
}