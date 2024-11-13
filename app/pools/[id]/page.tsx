'use client'

import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from "@/components/ui/button"

type Props = {
    params: {
        id: string
    }
}

export const metadata: Metadata = {
    title: 'Investment Pool | KolamProsper',
    description: 'Investment details for a specific pool',
}

export default function PoolPage({ params }: Props) {
    const poolId = params.id

    return (
        <div className="min-h-screen bg-gray-900 text-white">
            <main className="container mx-auto px-4 py-8">
                <div className="mb-6">
                    <Link
                        href="/pools"
                        className="text-yellow-400 hover:text-yellow-500 inline-flex items-center"
                    >
                        ← Back to Pools
                    </Link>
                </div>

                <h1 className="text-3xl font-bold mb-6 text-yellow-400">Pool {poolId}</h1>

                <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
                    <p className="text-lg text-gray-300 mb-4">
                        Investment opportunity in our carefully selected real estate portfolio.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                            <h2 className="text-xl font-semibold text-yellow-400">Pool Details</h2>
                            <div className="space-y-2">
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-400">Total Value:</span>
                                    <span className="text-gray-100">$1,000,000</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-400">Minimum Investment:</span>
                                    <span className="text-gray-100">$10,000</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-400">Expected Return:</span>
                                    <span className="text-green-400">12% annually</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-400">Investment Term:</span>
                                    <span className="text-gray-100">36 months</span>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-xl font-semibold text-yellow-400">Property Information</h2>
                            <div className="space-y-2">
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-400">Location:</span>
                                    <span className="text-gray-100">Dubai Marina</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-400">Property Type:</span>
                                    <span className="text-gray-100">Luxury Apartments</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-400">Units:</span>
                                    <span className="text-gray-100">12</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-400">Occupancy Rate:</span>
                                    <span className="text-gray-100">95%</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 space-y-4">
                        <h2 className="text-xl font-semibold text-yellow-400">Investment Progress</h2>
                        <div className="w-full bg-gray-700 rounded-full h-4">
                            <div
                                className="bg-yellow-400 h-4 rounded-full"
                                style={{ width: '65%' }}
                            />
                        </div>
                        <div className="flex justify-between text-sm">
                            <span className="text-gray-400">$650,000 raised</span>
                            <span className="text-gray-400">$1,000,000 goal</span>
                        </div>
                    </div>

                    <div className="mt-8">
                        <Button className="bg-yellow-400 text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-yellow-500 transition duration-300">
                            Invest Now
                        </Button>
                    </div>
                </div>
            </main>
        </div>
    )
}