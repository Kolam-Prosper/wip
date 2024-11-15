﻿'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { ArrowRight, Building, DollarSign, Percent } from 'lucide-react'
import { WIPModal } from "@/components/WIPModal"

const properties = [
    { id: 1, name: "Dubai Marina Apartment", value: 500000, expectedReturn: 7.5 },
    { id: 2, name: "Palm Jumeirah Villa", value: 1500000, expectedReturn: 8.2 },
    { id: 3, name: "Downtown Dubai Office", value: 2000000, expectedReturn: 6.8 },
]

export default function InvestPage() {
    const [selectedProperty, setSelectedProperty] = useState(properties[0])
    const [investmentAmount, setInvestmentAmount] = useState(10000)
    const [investmentType, setInvestmentType] = useState("fractional")
    const [isWIPModalOpen, setIsWIPModalOpen] = useState(false)

    const handleInvest = () => {
        setIsWIPModalOpen(true)
    }

    const updateInvestmentAmount = (amount: number) => {
        if (investmentType === "fractional") {
            const fraction = selectedProperty.value / 100;
            amount = Math.round(amount / fraction) * fraction;
        }
        setInvestmentAmount(amount);
    }

    return (
        <div className="min-h-screen bg-gray-900 text-white">
            <WIPModal isOpen={isWIPModalOpen} setIsOpen={setIsWIPModalOpen} />
            <main className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-6 text-yellow-400">Invest in UAE Real Estate</h1>

                <div className="grid md:grid-cols-2 gap-8">
                    <Card className="bg-gray-800 border-yellow-400/20">
                        <CardHeader>
                            <CardTitle className="text-2xl text-yellow-400">Investment Options</CardTitle>
                            <CardDescription className="text-gray-300">Choose your investment property and type</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-8">
                            <div className="space-y-2">
                                <Label htmlFor="property" className="text-white">Select Property</Label>
                                <Select
                                    onValueChange={(value) => setSelectedProperty(properties.find(p => p.id === parseInt(value)) || properties[0])}
                                >
                                    <SelectTrigger id="property" className="bg-gray-700 border-gray-600 text-white">
                                        <SelectValue placeholder="Select a property" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {properties.map((property) => (
                                            <SelectItem key={property.id} value={property.id.toString()}>
                                                {property.name}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="investmentType" className="text-white">Investment Type</Label>
                                <Select onValueChange={setInvestmentType} defaultValue="fractional">
                                    <SelectTrigger id="investmentType" className="bg-gray-700 border-gray-600 text-white">
                                        <SelectValue placeholder="Select investment type" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="fractional">Fractional Bond</SelectItem>
                                        <SelectItem value="full">Full Bond</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="space-y-2 mb-4">
                                <Label htmlFor="amount" className="text-white">Investment Amount (USD)</Label>
                                <div className="flex items-center space-x-4">
                                    <Input
                                        type="number"
                                        id="amount"
                                        placeholder="Enter amount"
                                        value={investmentAmount}
                                        onChange={(e) => updateInvestmentAmount(parseInt(e.target.value) || 0)}
                                        className="bg-gray-700 border-gray-600 text-white"
                                    />
                                    <span className="text-gray-300">Min: $1,000</span>
                                </div>
                                <div className="py-4">
                                    <Slider
                                        min={1000}
                                        max={investmentType === "full" ? selectedProperty.value : 100000}
                                        step={1000}
                                        value={[investmentAmount]}
                                        onValueChange={(value) => updateInvestmentAmount(value[0])}
                                        className="[&_[role=slider]]:bg-yellow-400 [&_[role=slider]]:border-yellow-400 [&_[role=slider]]:focus:ring-yellow-400/20 [&_.bg-primary]:bg-yellow-400"
                                    />
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="bg-gray-800 border-yellow-400/20">
                        <CardHeader>
                            <CardTitle className="text-2xl text-yellow-400">Investment Summary</CardTitle>
                            <CardDescription className="text-gray-300">Review your investment details</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex justify-between">
                                <span className="text-gray-300">Selected Property:</span>
                                <span className="font-semibold text-white">{selectedProperty.name}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-300">Projected Completion Value:</span>
                                <span className="font-semibold text-white">${selectedProperty.value.toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-300">Investment Type:</span>
                                <span className="font-semibold text-white capitalize">{investmentType} Bond</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-300">Your Investment:</span>
                                <span className="font-semibold text-white">${investmentAmount.toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-300">Ownership Percentage:</span>
                                <span className="font-semibold text-white">
                                    {investmentType === "full" ? "100%" :
                                        `${Math.floor((investmentAmount / selectedProperty.value) * 100)}%`}
                                </span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-300">18 Months Yield:</span>
                                <span className="font-semibold text-green-400">
                                    ${((investmentAmount * selectedProperty.expectedReturn * 1.5) / 100).toLocaleString()}
                                </span>
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black" onClick={handleInvest}>
                                Invest Now <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </CardFooter>
                    </Card>
                </div>

                <section className="mt-12">
                    <h2 className="text-2xl font-semibold mb-4 text-yellow-400">Why Invest with Kolam Prosper?</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <Card className="bg-gray-800 border-yellow-400/20">
                            <CardHeader>
                                <Building className="h-8 w-8 text-yellow-400 mb-2" />
                                <CardTitle className="text-white">Premium Properties</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-300">Access high-value real estate in prime UAE locations, carefully selected for optimal returns.</p>
                            </CardContent>
                        </Card>
                        <Card className="bg-gray-800 border-yellow-400/20">
                            <CardHeader>
                                <Percent className="h-8 w-8 text-yellow-400 mb-2" />
                                <CardTitle className="text-white">Competitive Returns</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-300">Enjoy attractive annual yields from your real estate investments, outperforming traditional markets.</p>
                            </CardContent>
                        </Card>
                        <Card className="bg-gray-800 border-yellow-400/20">
                            <CardHeader>
                                <DollarSign className="h-8 w-8 text-yellow-400 mb-2" />
                                <CardTitle className="text-white">Flexible Investments</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-300">Choose between fractional and full bonds, allowing you to diversify your portfolio or make significant investments.</p>
                            </CardContent>
                        </Card>
                    </div>
                </section>
            </main>
        </div>
    )
}