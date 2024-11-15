'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from 'lucide-react'

const navItems = [
    { href: '/', label: 'Home' },
    { href: '/dashboard', label: 'Dashboard' },
    { href: '/invest', label: 'Invest' },
    { href: '/pools', label: 'Pools' },
    { href: '/property-tracker', label: 'Property Tracker' },
]

export function Header() {
    const pathname = usePathname()

    return (
        <header className="bg-gray-900/80 backdrop-blur-sm z-50 border-b border-yellow-500/20 sticky top-0">
            <div className="container mx-auto px-4">
                <nav className="flex items-center justify-between h-16">
                    <Link href="/" className="flex items-center space-x-2">
                        <Image src="/kolam-logo.svg" alt="Kolam Prosper Logo" width={40} height={40} />
                        <span className="text-xl font-bold text-yellow-400">Kolam Prosper</span>
                    </Link>
                    <div className="hidden md:flex items-center space-x-6">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    "text-sm text-gray-300 hover:text-yellow-400 transition-colors duration-300",
                                    pathname === item.href && "text-yellow-400"
                                )}
                            >
                                {item.label}
                            </Link>
                        ))}
                        <Button className="bg-yellow-400 hover:bg-yellow-500 text-black transition-colors duration-300">
                            Connect Wallet
                        </Button>
                    </div>
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="md:hidden"
                            >
                                <Menu className="h-6 w-6 text-yellow-400" />
                                <span className="sr-only">Open menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-gray-900 border-l border-yellow-500/20">
                            <nav className="flex flex-col gap-4">
                                {navItems.map((item) => (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className={cn(
                                            "flex items-center gap-2 px-3 py-2 rounded-md text-gray-300 transition-all hover:text-yellow-400",
                                            pathname === item.href ? "bg-gray-800 text-yellow-400" : "hover:bg-gray-800"
                                        )}
                                    >
                                        {item.label}
                                    </Link>
                                ))}
                                <Button
                                    className="bg-yellow-400 hover:bg-yellow-500 text-black mt-4 transition-colors duration-300"
                                >
                                    Connect Wallet
                                </Button>
                            </nav>
                        </SheetContent>
                    </Sheet>
                </nav>
            </div>
        </header>
    )
}