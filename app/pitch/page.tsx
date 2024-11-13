'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, ArrowRight, Building, DollarSign, Users, Lock, Briefcase, Globe, ChevronRight, Shield } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import Image from 'next/image'

interface PitchSection {
    title: string;
    content: string;
    icon: React.ElementType;
}

const pitchSections: PitchSection[] = [
    {
        title: "Revolutionizing Real Estate Investment",
        content: "Kolam Prosper is transforming property investment in the UAE through innovative rent-to-own models and blockchain technology.",
        icon: Building
    },
    {
        title: "Our Mission",
        content: "Construct and manage rent-to-own properties, raising liquidity for construction while offering compelling returns for investors.",
        icon: Users
    },
    {
        title: "The Problem",
        content: "Most people can't meet homeownership requirements. Properties are mainly bought by investors, and rentals offer no long-term value to tenants.",
        icon: Lock
    },
    {
        title: "Our Solution",
        content: "We construct properties specifically for rent-to-own, offering preferential returns on investments and using Decentralized Bonds as property deeds.",
        icon: Building
    },
    {
        title: "Positive Sum Investment",
        content: "We've created a protocol where all parties prosper, following Nash's Equilibrium. 30% of investment is escrowed for construction, 70% is available back to investors as a non-liquidating 18-month loan.",
        icon: DollarSign
    },
    {
        title: "Our Expertise",
        content: "Licensed in 3 UAE emirates for project management, property development, construction, crypto operations, and retail sites.",
        icon: Briefcase
    },
    {
        title: "Investment Structure",
        content: "We offer Bonds sold in Dirhams stablecoin. 1% Fractional Bond ($1000), 10% Fractional Bond ($10,000), 100% Full Bond ($100,000). Bonds are locked for 5 years with automatic return of funds at expiry.",
        icon: Lock
    },
    {
        title: "Risk Mitigation",
        content: "Only 30% of funds at risk. Investors can take back 70% at any time. We retain 20% of properties for potential sale to bolster investors' positions if needed.",
        icon: Shield
    },
    {
        title: "Market Opportunity",
        content: "UAE is one of the fastest growing real estate markets. 85% immigrant population set to double by 2040. Our rent-to-buy model caters to expats who can't get traditional mortgages.",
        icon: Globe
    },
    {
        title: "Expansion Plans",
        content: "Primary focus on UAE, with interest in expanding to other areas like El Salvador after proving the concept.",
        icon: ChevronRight
    },
    {
        title: "Equal Opportunity",
        content: "We offer investment access on an equal basis—no special privileges, just open doors for all. Minimum investment of $1,000 to $10 million.",
        icon: Users
    },
    {
        title: "Join Us",
        content: "Be part of a revolutionary approach to real estate investment. Together, we're creating a platform where every dollar invested has equal weight and potential for growth.",
        icon: Briefcase
    }
]

export default function PitchDeck() {
    const [currentSection, setCurrentSection] = useState(0)

    const handleSectionChange = (direction: 'left' | 'right') => {
        setCurrentSection(prev => {
            if (direction === 'left') {
                return prev > 0 ? prev - 1 : prev
            } else {
                return prev < pitchSections.length - 1 ? prev + 1 : prev
            }
        })
    }

    const handleKeyDown = (event: React.KeyboardEvent) => {
        if (event.key === 'ArrowLeft') {
            handleSectionChange('left')
        } else if (event.key === 'ArrowRight') {
            handleSectionChange('right')
        }
    }

    useEffect(() => {
        const handleKeyDownGlobal = (event: KeyboardEvent) => {
            if (event.key === 'ArrowLeft') {
                handleSectionChange('left')
            } else if (event.key === 'ArrowRight') {
                handleSectionChange('right')
            }
        }

        document.addEventListener('keydown', handleKeyDownGlobal)
        return () => {
            document.removeEventListener('keydown', handleKeyDownGlobal)
        }
    }, [])

    return (
        <div className="min-h-screen bg-gray-900 text-white flex flex-col" onKeyDown={handleKeyDown} tabIndex={0}>
            <header className="fixed top-0 w-full bg-gray-900/80 backdrop-blur-sm z-50 border-b border-yellow-500/20">
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

            <main className="flex-grow flex overflow-hidden pt-16">
                <div className="w-1/4 bg-gray-800 p-4 flex flex-col justify-between">
                    <div>
                        <h2 className="text-xl font-bold mb-4 text-yellow-400">Kolam Prosper Pitch Deck</h2>
                        {pitchSections.map((section, index) => (
                            <div
                                key={index}
                                className={`mb-2 cursor-pointer flex items-center ${index === currentSection ? 'text-yellow-400' : 'text-gray-400'
                                    }`}
                                onClick={() => setCurrentSection(index)}
                            >
                                {React.createElement(section.icon, { className: "h-4 w-4 mr-2" })}
                                <span className="text-sm">{section.title}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex-grow relative">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentSection}
                            initial={{ opacity: 0, x: 300 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -300 }}
                            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                            className="absolute inset-0 flex items-center justify-center p-8"
                        >
                            <div className="max-w-3xl text-center">
                                {React.createElement(pitchSections[currentSection].icon, { className: "h-16 w-16 mx-auto mb-6 text-yellow-400" })}
                                <h2 className="text-4xl font-bold mb-6 text-yellow-400">{pitchSections[currentSection].title}</h2>
                                <p className="text-xl text-gray-300">{pitchSections[currentSection].content}</p>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                    <div className="absolute bottom-4 left-4 right-4 flex justify-between">
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={() => handleSectionChange('left')}
                            disabled={currentSection === 0}
                            className="bg-gray-700 text-yellow-400 border-yellow-400 hover:bg-yellow-400 hover:text-gray-900"
                        >
                            <ArrowLeft className="h-4 w-4" />
                        </Button>
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={() => handleSectionChange('right')}
                            disabled={currentSection === pitchSections.length - 1}
                            className="bg-gray-700 text-yellow-400 border-yellow-400 hover:bg-yellow-400 hover:text-gray-900"
                        >
                            <ArrowRight className="h-4 w-4" />
                        </Button>
                    </div>
                </div>
            </main>
        </div>
    )
}