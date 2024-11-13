'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

interface PoolDetailsProps {
    id: string
}

export default function PoolDetails({ id }: PoolDetailsProps) {
    const [isLoading, setIsLoading] = useState(false)

    const handleInvest = () => {
        setIsLoading(true)
        // Simulating an API call
        setTimeout(() => {
            setIsLoading(false)
            alert('Investment successful! (This is a mock action)')
        }, 2000)
    }

    return (
        <div className="min-h-screen bg-gray-900 text-white">
            <main className="container mx-auto px-4 py-8">
                <Link
                    href="/pools"
                    className="text-yellow-400 hover:text-yellow-500 inline-flex items-center mb-6"
                >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Pools
                </Link>

                <h1 className="text-3xl font-bold mb-6 text-yellow-400">Pool {id}</h1>

                <Card className="bg-gray-800 border-yellow-400/20">
                    <CardHeader>
                        <CardTitle className="text-xl text-yellow-400">Investment Opportunity</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-lg text-gray-300 mb-4">
                            Investment opportunity in our carefully selected real estate portfolio.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                            <div className="space-y-4">
                                <h2 className="text-xl font-semibold text-yellow-400">Pool Details</h2>
                                <div className="space-y-2">
                                    {[
                                        { label: 'Total Value', value: '$1,000,000' },
                                        { label: 'Minimum Investment', value: '$10,000' },
                                        { label: 'Expected Return', value: '12% annually' },
                                        { label: 'Investment Term', value: '36 months' },
                                    ].map((item, index) => (
                                        <div key={index} className="flex justify-between items-center">
                                            <span className="text-gray-400">{item.label}:</span>
                                            <span className={item.label === 'Expected Return' ? 'text-green-400' : 'text-gray-100'}>
                                                {item.value}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-4">
                                <h2 className="text-xl font-semibold text-yellow-400">Property Information</h2>
                                <div className="space-y-2">
                                    {[
                                        { label: 'Location', value: 'Dubai Marina' },
                                        { label: 'Property Type', value: 'Luxury Apartments' },
                                        { label: 'Units', value: '12' },
                                        { label: 'Occupancy Rate', value: '95%' },
                                    ].map((item, index) => (
                                        <div key={index} className="flex justify-between items-center">
                                            <span className="text-gray-400">{item.label}:</span>
                                            <span className="text-gray-100">{item.value}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-xl font-semibold text-yellow-400">Investment Progress</h2>
                            <Progress value={65} className="h-4" />
                            <div className="flex justify-between text-sm">
                                <span className="text-gray-400">$650,000 raised</span>
                                <span className="text-gray-400">$1,000,000 goal</span>
                            </div>
                        </div>

                        <div className="mt-8">
                            <Button
                                className="bg-yellow-400 text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-yellow-500 transition duration-300"
                                onClick={handleInvest}
                                disabled={isLoading}
                            >
                                {isLoading ? 'Processing...' : 'Invest Now'}
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </main>
        </div>
    )
}