'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Building, DollarSign, TrendingUp } from 'lucide-react'
import { FeatureNotCompleteModal } from "@/components/FeatureNotCompleteModal"
import { InvestmentChart } from "@/components/InvestmentChart"

// Mock data for demonstration purposes
const mockUserData = {
    name: "John Doe",
    totalInvestment: 250000,
    totalProperties: 3,
    projectedReturns: 15000
}

const mockInvestments = [
    { id: 1, name: "Dubai Marina Apartment", value: 100000, returns: 5000 },
    { id: 2, name: "Palm Jumeirah Apartment", value: 150000, returns: 7500 },
    { id: 3, name: "Downtown Dubai Apartment", value: 50000, returns: 2500 },
]

const mockChartData = [
    { name: 'Jan', value: 240000 },
    { name: 'Feb', value: 245000 },
    { name: 'Mar', value: 248000 },
    { name: 'Apr', value: 250000 },
    { name: 'May', value: 252000 },
    { name: 'Jun', value: 255000 },
    { name: 'Jul', value: 258000 },
    { name: 'Aug', value: 260000 },
    { name: 'Sep', value: 263000 },
    { name: 'Oct', value: 265000 },
    { name: 'Nov', value: 268000 },
    { name: 'Dec', value: 270000 },
    { name: 'Jan', value: 273000 },
    { name: 'Feb', value: 275000 },
    { name: 'Mar', value: 278000 },
    { name: 'Apr', value: 280000 },
    { name: 'May', value: 283000 },
    { name: 'Jun', value: 285000 },
]

export default function DashboardPage() {
    const [userData] = useState(mockUserData)
    const [investments] = useState(mockInvestments)
    const [chartData] = useState(mockChartData)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [selectedFeature, setSelectedFeature] = useState("")

    const handleViewDetails = (investmentName: string) => {
        setSelectedFeature(`${investmentName} Details`)
        setIsModalOpen(true)
    }

    return (
        <div className="min-h-screen bg-gray-900 text-white">
            <FeatureNotCompleteModal
                isOpen={isModalOpen}
                setIsOpen={setIsModalOpen}
                featureName={selectedFeature}
            />
            <main className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-6 text-yellow-400">Welcome back, {userData.name}</h1>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <Card className="bg-gray-800 border-yellow-400/20">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium text-gray-200">Total Investment</CardTitle>
                            <DollarSign className="h-4 w-4 text-yellow-400" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold text-yellow-400">${userData.totalInvestment.toLocaleString()}</div>
                        </CardContent>
                    </Card>
                    <Card className="bg-gray-800 border-yellow-400/20">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium text-gray-200">Properties Invested</CardTitle>
                            <Building className="h-4 w-4 text-yellow-400" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold text-yellow-400">{userData.totalProperties}</div>
                        </CardContent>
                    </Card>
                    <Card className="bg-gray-800 border-yellow-400/20">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium text-gray-200">Projected Returns</CardTitle>
                            <TrendingUp className="h-4 w-4 text-yellow-400" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold text-yellow-400">${userData.projectedReturns.toLocaleString()}</div>
                        </CardContent>
                    </Card>
                </div>

                <div className="mb-8">
                    <InvestmentChart data={chartData} />
                </div>

                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-semibold text-yellow-400">Your Investments</h2>
                    <Link href="/property-tracker">
                        <Button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold">
                            View Property Tracker
                        </Button>
                    </Link>
                </div>
                <div className="space-y-4">
                    {investments.map((investment) => (
                        <Card key={investment.id} className="bg-gray-800 border-yellow-400/20">
                            <CardHeader>
                                <CardTitle className="text-yellow-400">{investment.name}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex justify-between items-center">
                                    <div>
                                        <p className="text-sm text-gray-400">Investment Value</p>
                                        <p className="text-lg font-semibold text-white">${investment.value.toLocaleString()}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-400">Returns</p>
                                        <p className="text-lg font-semibold text-green-400">+${investment.returns.toLocaleString()}</p>
                                    </div>
                                    <Button
                                        className="bg-yellow-400 hover:bg-yellow-500 text-black"
                                        onClick={() => handleViewDetails(investment.name)}
                                    >
                                        View Details <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </main>
        </div>
    )
}