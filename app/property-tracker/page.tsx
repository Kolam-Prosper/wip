'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { TrendingUp, DollarSign, ArrowRight } from 'lucide-react'

export default function PropertyTrackerPage() {
    const [activeTab, setActiveTab] = useState('overview')

    return (
        <div className="min-h-screen bg-gray-900 text-gray-100">
            <header className="fixed top-0 w-full bg-gray-900/80 backdrop-blur-sm z-50 border-b border-gray-700">
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
                            <Link href="/property-tracker" className="text-sm text-yellow-400">
                                Property Tracker
                            </Link>
                            <Button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900">
                                Connect Wallet
                            </Button>
                        </div>
                    </nav>
                </div>
            </header>

            <main className="container mx-auto px-4 py-8 pt-24">
                <h1 className="text-3xl font-bold mb-6 text-yellow-400">Property Tracker</h1>

                <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
                    <TabsList className="bg-gray-800 border border-gray-700">
                        <TabsTrigger value="overview" className="data-[state=active]:bg-yellow-400 data-[state=active]:text-gray-900">Overview</TabsTrigger>
                        <TabsTrigger value="financials" className="data-[state=active]:bg-yellow-400 data-[state=active]:text-gray-900">Financials</TabsTrigger>
                        <TabsTrigger value="documents" className="data-[state=active]:bg-yellow-400 data-[state=active]:text-gray-900">Documents</TabsTrigger>
                    </TabsList>

                    <TabsContent value="overview" className="space-y-4">
                        <Card className="bg-gray-800 border-gray-700">
                            <CardHeader>
                                <CardTitle className="text-xl text-yellow-400">Property Overview</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="grid gap-2">
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-400">Address:</span>
                                        <span className="text-gray-100">123 Palm Jumeirah, Dubai</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-400">Type:</span>
                                        <span className="text-gray-100">Luxury Apartment</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-400">Size:</span>
                                        <span className="text-gray-100">2,500 sq ft</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-400">Purchase Date:</span>
                                        <span className="text-gray-100">January 15, 2024</span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="bg-gray-800 border-gray-700">
                            <CardHeader>
                                <CardTitle className="text-xl text-yellow-400">Investment Progress</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-2">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-400">Current Value</span>
                                        <span className="text-gray-100">$750,000</span>
                                    </div>
                                    <Progress value={75} className="h-2 bg-gray-700" indicatorClassName="bg-yellow-400" />
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-400">Initial Investment</span>
                                        <span className="text-gray-400">Target Value</span>
                                    </div>
                                    <div className="flex justify-between text-sm font-medium">
                                        <span className="text-gray-100">$500,000</span>
                                        <span className="text-gray-100">$1,000,000</span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <div className="grid md:grid-cols-2 gap-4">
                            <Card className="bg-gray-800 border-gray-700">
                                <CardHeader>
                                    <CardTitle className="text-lg text-yellow-400 flex items-center">
                                        <TrendingUp className="mr-2" />
                                        Appreciation
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <span className="text-2xl font-bold text-gray-100">+15%</span>
                                    <p className="text-sm text-gray-400">Since purchase</p>
                                </CardContent>
                            </Card>

                            <Card className="bg-gray-800 border-gray-700">
                                <CardHeader>
                                    <CardTitle className="text-lg text-yellow-400 flex items-center">
                                        <DollarSign className="mr-2" />
                                        Rental Yield
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <span className="text-2xl font-bold text-gray-100">7.5%</span>
                                    <p className="text-sm text-gray-400">Annual</p>
                                </CardContent>
                            </Card>
                        </div>
                    </TabsContent>

                    <TabsContent value="financials">
                        <Card className="bg-gray-800 border-gray-700">
                            <CardHeader>
                                <CardTitle className="text-xl text-yellow-400">Financial Details</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-400">Total Investment:</span>
                                        <span className="text-gray-100">$500,000</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-400">Current Value:</span>
                                        <span className="text-gray-100">$750,000</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-400">Total Return:</span>
                                        <span className="text-green-400">$250,000 (50%)</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-400">Annual Rental Income:</span>
                                        <span className="text-gray-100">$37,500</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-400">Monthly Rental Income:</span>
                                        <span className="text-gray-100">$3,125</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-400">Property Management Fees:</span>
                                        <span className="text-gray-100">$4,500 (12% of rental income)</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-400">Annual Property Taxes:</span>
                                        <span className="text-gray-100">$3,750</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-400">Insurance Costs:</span>
                                        <span className="text-gray-100">$2,500</span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    <TabsContent value="documents">
                        <Card className="bg-gray-800 border-gray-700">
                            <CardHeader>
                                <CardTitle className="text-xl text-yellow-400">Property Documents</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2">
                                    <li className="flex justify-between items-center">
                                        <span className="text-gray-100">Purchase Agreement</span>
                                        <Button variant="outline" size="sm" className="bg-gray-700 text-gray-100 hover:bg-gray-600">
                                            View <ArrowRight className="ml-2 h-4 w-4" />
                                        </Button>
                                    </li>
                                    <li className="flex justify-between items-center">
                                        <span className="text-gray-100">Property Deed</span>
                                        <Button variant="outline" size="sm" className="bg-gray-700 text-gray-100 hover:bg-gray-600">
                                            View <ArrowRight className="ml-2 h-4 w-4" />
                                        </Button>
                                    </li>
                                    <li className="flex justify-between items-center">
                                        <span className="text-gray-100">Rental Agreement</span>
                                        <Button variant="outline" size="sm" className="bg-gray-700 text-gray-100 hover:bg-gray-600">
                                            View <ArrowRight className="ml-2 h-4 w-4" />
                                        </Button>
                                    </li>
                                    <li className="flex justify-between items-center">
                                        <span className="text-gray-100">Property Inspection Report</span>
                                        <Button variant="outline" size="sm" className="bg-gray-700 text-gray-100 hover:bg-gray-600">
                                            View <ArrowRight className="ml-2 h-4 w-4" />
                                        </Button>
                                    </li>
                                    <li className="flex justify-between items-center">
                                        <span className="text-gray-100">Insurance Policy</span>
                                        <Button variant="outline" size="sm" className="bg-gray-700 text-gray-100 hover:bg-gray-600">
                                            View <ArrowRight className="ml-2 h-4 w-4" />
                                        </Button>
                                    </li>
                                    <li className="flex justify-between items-center">
                                        <span className="text-gray-100">Tax Assessment</span>
                                        <Button variant="outline" size="sm" className="bg-gray-700 text-gray-100 hover:bg-gray-600">
                                            View <ArrowRight className="ml-2 h-4 w-4" />
                                        </Button>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>
            </main>
        </div>
    )
}