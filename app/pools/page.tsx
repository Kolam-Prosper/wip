'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowRight, Search } from 'lucide-react'

const properties = [
    {
        id: 1,
        name: "Fujairah Heights",
        location: "Fujairah",
        price: 1000,
        description: "Luxurious apartments with stunning mountain views",
        fullUnits: 8,
        fractionalUnits: 2,
        fractionalPrice: 50,
        expectedReturn: 7.5,
        type: "Residential"
    },
    {
        id: 2,
        name: "Ras Al Khaimah Oasis",
        location: "Ras Al Khaimah",
        price: 1500,
        description: "Modern living spaces with beachfront access",
        fullUnits: 6,
        fractionalUnits: 1,
        fractionalPrice: 75,
        expectedReturn: 8.2,
        type: "Residential"
    },
    {
        id: 3,
        name: "Dubai Marina Towers",
        location: "Dubai",
        price: 2000,
        description: "High-rise apartments in the heart of Dubai Marina",
        fullUnits: 10,
        fractionalUnits: 2,
        fractionalPrice: 100,
        expectedReturn: 9.0,
        type: "Residential"
    },
    {
        id: 4,
        name: "Sharjah Business Center",
        location: "Sharjah",
        price: 1800,
        description: "Prime office spaces in Sharjah's growing business district",
        fullUnits: 5,
        fractionalUnits: 0,
        fractionalPrice: 0,
        expectedReturn: 7.8,
        type: "Commercial"
    },
    {
        id: 5,
        name: "Abu Dhabi Waterfront Residences",
        location: "Abu Dhabi",
        price: 2500,
        description: "Luxury waterfront apartments with panoramic sea views",
        fullUnits: 12,
        fractionalUnits: 3,
        fractionalPrice: 125,
        expectedReturn: 8.5,
        type: "Residential"
    }
]

export default function PoolsPage() {
    const [searchTerm, setSearchTerm] = useState("")
    const [filteredProperties, setFilteredProperties] = useState(properties)
    const [sortOption, setSortOption] = useState("name")

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value)
    }

    const handleSort = (option: string) => {
        setSortOption(option)
    }

    useEffect(() => {
        const filtered = properties.filter(property =>
            property.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            property.location.toLowerCase().includes(searchTerm.toLowerCase())
        )

        const sorted = [...filtered].sort((a, b) => {
            if (sortOption === "name") return a.name.localeCompare(b.name)
            if (sortOption === "price") return a.price - b.price
            if (sortOption === "return") return b.expectedReturn - a.expectedReturn
            return 0
        })

        setFilteredProperties(sorted)
    }, [searchTerm, sortOption])

    return (
        <div className="min-h-screen bg-gray-900 text-white">
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
                            <Link href="/pools" className="text-sm text-yellow-400">
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
                <h1 className="text-3xl font-bold mb-6 text-yellow-400">Investment Pools</h1>

                <div className="flex justify-between items-center mb-6">
                    <div className="relative w-64">
                        <Input
                            type="text"
                            placeholder="Search properties..."
                            value={searchTerm}
                            onChange={handleSearch}
                            className="pl-10 bg-gray-800 border-gray-700 text-white"
                        />
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                    </div>
                    <Select onValueChange={handleSort}>
                        <SelectTrigger className="w-[180px] bg-gray-800 border-gray-700 text-white">
                            <SelectValue placeholder="Sort by" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="name">Name</SelectItem>
                            <SelectItem value="price">Price</SelectItem>
                            <SelectItem value="return">Expected Return</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                <Tabs defaultValue="all" className="space-y-6">
                    <TabsList className="bg-gray-800 p-1 rounded-lg">
                        <TabsTrigger value="all" className="data-[state=active]:bg-yellow-400 data-[state=active]:text-black">
                            All Properties
                        </TabsTrigger>
                        <TabsTrigger value="full" className="data-[state=active]:bg-yellow-400 data-[state=active]:text-black">
                            Full Bonds
                        </TabsTrigger>
                        <TabsTrigger value="fractional" className="data-[state=active]:bg-yellow-400 data-[state=active]:text-black">
                            Fractional Bonds
                        </TabsTrigger>
                    </TabsList>

                    <TabsContent value="all" className="grid md:grid-cols-2 gap-6">
                        {filteredProperties.map((property) => (
                            <PropertyCard key={property.id} property={property} />
                        ))}
                    </TabsContent>

                    <TabsContent value="full" className="grid md:grid-cols-2 gap-6">
                        {filteredProperties.filter(p => p.fullUnits > 0).map((property) => (
                            <PropertyCard key={property.id} property={property} fractionalOnly={false} />
                        ))}
                    </TabsContent>

                    <TabsContent value="fractional" className="grid md:grid-cols-2 gap-6">
                        {filteredProperties.filter(p => p.fractionalUnits > 0).map((property) => (
                            <PropertyCard key={property.id} property={property} fractionalOnly={true} />
                        ))}
                    </TabsContent>
                </Tabs>
            </main>
        </div>
    )
}

function PropertyCard({ property, fractionalOnly = false }) {
    return (
        <Card className="bg-gray-800 border-yellow-400/20">
            <CardHeader>
                <div className="flex justify-between items-start">
                    <div>
                        <CardTitle className="text-xl text-yellow-400">{property.name}</CardTitle>
                        <CardDescription className="text-gray-300">{property.location}</CardDescription>
                    </div>
                </div>
            </CardHeader>
            <CardContent className="space-y-4">
                <p className="text-gray-300 text-sm">{property.description}</p>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <p className="text-xs text-gray-400">Full Bond Price</p>
                        <p className="text-lg font-semibold text-white">${property.price}k</p>
                    </div>
                    <div>
                        <p className="text-xs text-gray-400">Expected Annual Return</p>
                        <p className="text-lg font-semibold text-green-400">{property.expectedReturn}%</p>
                    </div>
                    {!fractionalOnly && property.fullUnits > 0 && (
                        <div>
                            <p className="text-xs text-gray-400">Full Units Available</p>
                            <Badge variant="secondary" className="bg-yellow-400/20 text-yellow-400">
                                {property.fullUnits} Units
                            </Badge>
                        </div>
                    )}
                    {(fractionalOnly || !fractionalOnly) && property.fractionalUnits > 0 && (
                        <>
                            <div>
                                <p className="text-xs text-gray-400">Fractional Bond Price</p>
                                <p className="text-lg font-semibold text-white">${property.fractionalPrice}k</p>
                            </div>
                            <div>
                                <p className="text-xs text-gray-400">Fractional Units Available</p>
                                <Badge variant="secondary" className="bg-yellow-400/20 text-yellow-400">
                                    {property.fractionalUnits} Units
                                </Badge>
                            </div>
                        </>
                    )}
                </div>
            </CardContent>
            <CardFooter className="flex justify-between">
                <Button variant="outline" className="bg-gray-700 text-yellow-400 border-yellow-400 hover:bg-yellow-400 hover:text-gray-900">
                    Learn More
                </Button>
                <Link href={{
                    pathname: '/invest',
                    query: {
                        id: property.id,
                        name: property.name,
                        location: property.location,
                        price: property.price,
                        fractionalPrice: property.fractionalPrice,
                        expectedReturn: property.expectedReturn
                    }
                }}>
                    <Button className="bg-yellow-400 hover:bg-yellow-500 text-black">
                        Invest Now <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                </Link>
            </CardFooter>
        </Card>
    )
}