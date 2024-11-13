import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Building, DollarSign, Percent, Users, Lock, Shield } from 'lucide-react'

export default function Home() {
    return (
        <div className="min-h-screen bg-gray-900 text-white">
            <main className="container mx-auto px-4 py-8">
                <section className="text-center mb-12">
                    <h1 className="text-4xl font-bold mb-4 text-yellow-400">Welcome to Kolam Prosper</h1>
                    <p className="text-xl text-gray-300 mb-8">Revolutionizing Real Estate Investment in the UAE through Innovative Rent-to-Own Models and Blockchain Technology</p>
                    <Link href="/pools">
                        <Button className="bg-yellow-400 hover:bg-yellow-500 text-black text-lg px-8 py-3">
                            Get Started <ArrowRight className="ml-2" />
                        </Button>
                    </Link>
                </section>

                <section className="grid md:grid-cols-3 gap-8 mb-12">
                    <Card className="bg-gray-800 border-yellow-400/20">
                        <CardHeader>
                            <Building className="h-12 w-12 text-yellow-400 mb-4" />
                            <CardTitle className="text-xl text-yellow-400">Premium Properties</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-300">Access high-value real estate in prime UAE locations, carefully selected for optimal returns.</p>
                        </CardContent>
                    </Card>
                    <Card className="bg-gray-800 border-yellow-400/20">
                        <CardHeader>
                            <Percent className="h-12 w-12 text-yellow-400 mb-4" />
                            <CardTitle className="text-xl text-yellow-400">Competitive Returns</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-300">Enjoy attractive annual yields from your real estate investments, outperforming traditional markets.</p>
                        </CardContent>
                    </Card>
                    <Card className="bg-gray-800 border-yellow-400/20">
                        <CardHeader>
                            <DollarSign className="h-12 w-12 text-yellow-400 mb-4" />
                            <CardTitle className="text-xl text-yellow-400">Flexible Investments</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-300">Choose between fractional and full bonds, allowing you to diversify your portfolio or make significant investments.</p>
                        </CardContent>
                    </Card>
                </section>

                <section className="mb-12">
                    <h2 className="text-3xl font-bold mb-6 text-yellow-400 text-center">Our Unique Approach</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <Card className="bg-gray-800 border-yellow-400/20">
                            <CardHeader>
                                <Users className="h-12 w-12 text-yellow-400 mb-4" />
                                <CardTitle className="text-xl text-yellow-400">Our Mission</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-300">Construct and manage rent-to-own properties, raising liquidity for construction while offering compelling returns for investors.</p>
                            </CardContent>
                        </Card>
                        <Card className="bg-gray-800 border-yellow-400/20">
                            <CardHeader>
                                <Lock className="h-12 w-12 text-yellow-400 mb-4" />
                                <CardTitle className="text-xl text-yellow-400">The Problem We Solve</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-300">Most people can&apos;t meet homeownership requirements. Properties are mainly bought by investors, and rentals offer no long-term value to tenants.</p>
                            </CardContent>
                        </Card>
                        <Card className="bg-gray-800 border-yellow-400/20">
                            <CardHeader>
                                <Building className="h-12 w-12 text-yellow-400 mb-4" />
                                <CardTitle className="text-xl text-yellow-400">Our Solution</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-300">We construct properties specifically for rent-to-own, offering preferential returns on investments and using Decentralized Bonds as property deeds.</p>
                            </CardContent>
                        </Card>
                        <Card className="bg-gray-800 border-yellow-400/20">
                            <CardHeader>
                                <Shield className="h-12 w-12 text-yellow-400 mb-4" />
                                <CardTitle className="text-xl text-yellow-400">Risk Mitigation</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-300">Only 30% of funds at risk. Investors can take back 70% at any time. We retain 20% of properties for potential sale to bolster investors&apos; positions if needed.</p>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                <section className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4 text-yellow-400">Investment Structure</h2>
                    <p className="text-xl text-gray-300 mb-8">We offer Bonds sold in Dirhams stablecoin:</p>
                    <div className="grid md:grid-cols-3 gap-8">
                        <Card className="bg-gray-800 border-yellow-400/20">
                            <CardHeader>
                                <CardTitle className="text-xl text-yellow-400">1% Fractional Bond</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-3xl font-bold text-white">$1,000</p>
                            </CardContent>
                        </Card>
                        <Card className="bg-gray-800 border-yellow-400/20">
                            <CardHeader>
                                <CardTitle className="text-xl text-yellow-400">10% Fractional Bond</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-3xl font-bold text-white">$10,000</p>
                            </CardContent>
                        </Card>
                        <Card className="bg-gray-800 border-yellow-400/20">
                            <CardHeader>
                                <CardTitle className="text-xl text-yellow-400">100% Full Bond</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-3xl font-bold text-white">$100,000</p>
                            </CardContent>
                        </Card>
                    </div>
                    <p className="text-gray-300 mt-4">Bonds are locked for 5 years with automatic return of funds at expiry.</p>
                </section>

                <section className="text-center">
                    <h2 className="text-3xl font-bold mb-4 text-yellow-400">Ready to Invest?</h2>
                    <p className="text-xl text-gray-300 mb-8">Join Kolam Prosper today and start your journey in UAE real estate investment.</p>
                    <Link href="/pools">
                        <Button className="bg-yellow-400 hover:bg-yellow-500 text-black text-lg px-8 py-3">
                            Explore Investment Options <ArrowRight className="ml-2" />
                        </Button>
                    </Link>
                </section>
            </main>
        </div>
    )
}