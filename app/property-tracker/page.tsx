'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { TrendingUp, ArrowRight, Bell, ArrowUpRight } from 'lucide-react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const properties = [
    { id: 1, name: "Dubai Marina Apartment", address: "123 Palm Jumeirah, Dubai", type: "Luxury Apartment", size: "2,500 sq ft", purchaseDate: "January 15, 2024", currentValue: 750000, initialInvestment: 500000, targetValue: 1000000, appreciation: 15, status: "Staked", statusDescription: "Earning additional rewards" },
    { id: 2, name: "Downtown Dubai Office", address: "456 Burj Khalifa Area, Dubai", type: "Commercial Office", size: "3,000 sq ft", purchaseDate: "March 1, 2024", currentValue: 1200000, initialInvestment: 1000000, targetValue: 1500000, appreciation: 20, status: "Loaned", statusDescription: "Generating loan interest" },
]

const mockChartData = [
    { month: 'Jan', value: 500000 },
    { month: 'Feb', value: 520000 },
    { month: 'Mar', value: 550000 },
    { month: 'Apr', value: 600000 },
    { month: 'May', value: 650000 },
    { month: 'Jun', value: 750000 },
]

export default function PropertyTrackerPage() {
    const [activeTab, setActiveTab] = useState('overview')
    const [selectedProperty, setSelectedProperty] = useState(properties[0])

    return (
        <div className="min-h-screen bg-gray-900 text-gray-100">
            <main className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-6 text-yellow-400">Property Tracker</h1>

                <div className="mb-6">
                    <Select onValueChange={(value) => setSelectedProperty(properties.find(p => p.id === parseInt(value)) || properties[0])}>
                        <SelectTrigger className="w-[250px] bg-gray-800 border-gray-700 text-white">
                            <SelectValue placeholder="Select property" />
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
                                        <span className="text-gray-100">{selectedProperty.address}</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-400">Type:</span>
                                        <span className="text-gray-100">{selectedProperty.type}</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-400">Size:</span>
                                        <span className="text-gray-100">{selectedProperty.size}</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-400">Purchase Date:</span>
                                        <span className="text-gray-100">{selectedProperty.purchaseDate}</span>
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
                                        <span className="text-gray-100">${selectedProperty.currentValue.toLocaleString()}</span>
                                    </div>
                                    <Progress
                                        value={(selectedProperty.currentValue / selectedProperty.targetValue) * 100}
                                        className="h-2 bg-gray-700"
                                        indicatorClassName="bg-yellow-400"
                                    />
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-400">Initial Investment</span>
                                        <span className="text-gray-400">Target Value</span>
                                    </div>
                                    <div className="flex justify-between text-sm font-medium">
                                        <span className="text-gray-100">${selectedProperty.initialInvestment.toLocaleString()}</span>
                                        <span className="text-gray-100">${selectedProperty.targetValue.toLocaleString()}</span>
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
                                    <span className="text-2xl font-bold text-gray-100">+{selectedProperty.appreciation}%</span>
                                    <p className="text-sm text-gray-400">Since purchase</p>
                                </CardContent>
                            </Card>

                            <Card className="bg-gray-800 border-gray-700">
                                <CardHeader>
                                    <CardTitle className="text-lg text-yellow-400 flex items-center">
                                        <Bell className="mr-2" />
                                        Property Status
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <span className="text-xl font-bold text-gray-100">{selectedProperty.status}</span>
                                    <p className="text-sm text-gray-400">{selectedProperty.statusDescription}</p>
                                    {selectedProperty.status !== "Staked" && selectedProperty.status !== "Loaned" && (
                                        <Button className="mt-2 bg-yellow-400 hover:bg-yellow-500 text-black">
                                            Stake or Loan <ArrowUpRight className="ml-2 h-4 w-4" />
                                        </Button>
                                    )}
                                </CardContent>
                            </Card>
                        </div>

                        <Card className="bg-gray-800 border-gray-700">
                            <CardHeader>
                                <CardTitle className="text-xl text-yellow-400">Value Over Time</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ResponsiveContainer width="100%" height={300}>
                                    <LineChart data={mockChartData}>
                                        <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                                        <XAxis dataKey="month" stroke="#9CA3AF" />
                                        <YAxis stroke="#9CA3AF" />
                                        <Tooltip contentStyle={{ backgroundColor: '#1F2937', border: 'none', color: '#E5E7EB' }} />
                                        <Line type="monotone" dataKey="value" stroke="#FBBF24" strokeWidth={2} />
                                    </LineChart>
                                </ResponsiveContainer>
                            </CardContent>
                        </Card>
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
                                        <span className="text-gray-100">${selectedProperty.initialInvestment.toLocaleString()}</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-400">Current Value:</span>
                                        <span className="text-gray-100">${selectedProperty.currentValue.toLocaleString()}</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-400">Total Return:</span>
                                        <span className="text-green-400">${(selectedProperty.currentValue - selectedProperty.initialInvestment).toLocaleString()} ({selectedProperty.appreciation}%)</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-400">Property Management Fees:</span>
                                        <span className="text-gray-100">$4,500 (Annual)</span>
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