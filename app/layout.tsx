import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"

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
            <body className={`${inter.className} bg-gray-900 text-white`}>
                <div className="bg-yellow-400 text-gray-900 py-2 text-center">
                    <p className="text-sm font-medium">
                        This project is a work in progress. Features may be incomplete or subject to change.
                    </p>
                </div>
                <header className="fixed top-[32px] w-full bg-gray-900/80 backdrop-blur-sm z-50 border-b border-yellow-500/20">
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
                        </nav>
                    </div>
                </header>
                <main className="pt-32">
                    {children}
                </main>
            </body>
        </html>
    )
}