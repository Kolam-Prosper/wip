'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

type Props = {
    params: {
        id: string
    }
}

type PoolData = {
    id: string
    totalValue: number
    minimumInvestment: number
    expectedReturn: number
    investmentTerm: number
    location: string
    propertyType: string
    units: number
    occupancyRate: number
    currentInvestment: number
    targetInvestment: number
}

const mockPoolData: PoolData = {
    id: '1',
    totalValue: 1000000,
    minimumInvestment: 10000,
    expectedReturn: 12,
    investmentTerm: 36,
    location: 'Dubai Marina',
    propertyType: 'Luxury Apartments',
    units: 12,
    occupancyRate: 95,
    currentInvestment: 650000,
    targetInvestment: 1000000
}

export default function PoolPageClient({ params }: Props) {
    const [poolData, setPoolData] = useState<PoolData | null>(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                // In a real application, you would fetch the data here
                // For now, we're simulating an API call with a timeout
                await new Promise(resolve => setTimeout(resolve, 1000))
                setPoolData(mockPoolData)
            } catch (err) {
                setError('Failed to fetch pool data. Please try again later.')
            } finally {
                setIsLoading(false)
            }
        }

        fetchData()
    }, [params.id])

    if (isLoading) {
        return <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">Loading...</div>
    }

    if (error) {
        return <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">{error}</div>
    }

    if (!poolData) {
        return <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">No data available</div>
    }

    const investmentProgress = (poolData.currentInvestment / poolData.targetInvestment) * 100

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

                <h1 className="text-3xl font-bold mb-6 text-yellow-400">Pool {poolData.id}</h1>

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
                                        { label: 'Total Value', value: `$${poolData.totalValue.toLocaleString()}` },
                                        { label: 'Minimum Investment', value: `$${poolData.minimumInvestment.toLocaleString()}` },
                                        { label: 'Expected Return', value: `${poolData.expectedReturn}% annually` },
                                        { label: 'Investment Term', value: `${poolData.investmentTerm} months` },
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
                                        { label: 'Location', value: poolData.location },
                                        { label: 'Property Type', value: poolData.propertyType },
                                        { label: 'Units', value: poolData.units },
                                        { label: 'Occupancy Rate', value: `${poolData.occupancyRate}%` },
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
                            <Progress value={investmentProgress} className="h-4" />
                            <div className="flex justify-between text-sm">
                                <span className="text-gray-400">${poolData.currentInvestment.toLocaleString()} raised</span>
                                <span className="text-gray-400">${poolData.targetInvestment.toLocaleString()} goal</span>
                            </div>
                        </div>

                        <div className="mt-8">
                            <Button className="bg-yellow-400 text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-yellow-500 transition duration-300">
                                Invest Now
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </main>
        </div>
    )
}