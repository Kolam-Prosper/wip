'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
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

    return (
        <div className="min-h-screen bg-gray-900 text-white">
            <WIPModal isOpen={isWIPModalOpen} setIsOpen={setIsWIPModalOpen} />
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
                            <Link href="/invest" className="text-sm text-yellow-400">
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

            <main className="container mx-auto px-4 py-8 pt-24">
                <h1 className="text-3xl font-bold mb-6 text-yellow-400">Invest in UAE Real Estate</h1>

                <div className="grid md:grid-cols-2 gap-8">
                    <Card className="bg-gray-800 border-yellow-400/20">
                        <CardHeader>
                            <CardTitle className="text-2xl text-yellow-400">Investment Options</CardTitle>
                            <CardDescription className="text-gray-300">Choose your investment property and type</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
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
                                <Label className="text-white">Investment Type</Label>
                                <RadioGroup defaultValue="fractional" onValueChange={setInvestmentType}>
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="fractional" id="fractional" />
                                        <Label htmlFor="fractional" className="text-gray-300">Fractional Bond</Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="full" id="full" />
                                        <Label htmlFor="full" className="text-gray-300">Full Bond</Label>
                                    </div>
                                </RadioGroup>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="amount" className="text-white">Investment Amount (USD)</Label>
                                <div className="flex items-center space-x-4">
                                    <Input
                                        type="number"
                                        id="amount"
                                        placeholder="Enter amount"
                                        value={investmentAmount}
                                        onChange={(e) => setInvestmentAmount(parseInt(e.target.value) || 0)}
                                        className="bg-gray-700 border-gray-600 text-white"
                                    />
                                    <span className="text-gray-300">Min: $1,000</span>
                                </div>
                                <Slider
                                    min={1000}
                                    max={investmentType === "full" ? selectedProperty.value : 100000}
                                    step={1000}
                                    value={[investmentAmount]}
                                    onValueChange={(value) => setInvestmentAmount(value[0])}
                                    className="mt-2"
                                />
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
                                <span className="text-gray-300">Property Value:</span>
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
                                    {((investmentAmount / selectedProperty.value) * 100).toFixed(2)}%
                                </span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-300">Expected Annual Return:</span>
                                <span className="font-semibold text-green-400">{selectedProperty.expectedReturn}%</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-300">Estimated Annual Yield:</span>
                                <span className="font-semibold text-green-400">
                                    ${((investmentAmount * selectedProperty.expectedReturn) / 100).toLocaleString()}
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