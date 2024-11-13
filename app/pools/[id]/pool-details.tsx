'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

type PoolData = Awaited<ReturnType<typeof getPoolData>>

export function PoolDetails({ initialData }: { initialData: PoolData }) {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="fixed top-0 w-full bg-black/80 backdrop-blur-sm z-50 border-b border-yellow-500/20">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/kolam-logo.svg" alt="KolamProsper Logo" width={40} height={40} />
              <span className="text-xl font-bold text-yellow-400">KolamProsper</span>
            </Link>
            <div className="hidden md:flex items-center space-x-6">
              <Link href="/rent-to-own" className="text-sm text-gray-300 hover:text-yellow-400">
                Rent-to-Own
              </Link>
              <Link href="/invest" className="text-sm text-gray-300 hover:text-yellow-400">
                Invest
              </Link>
              <Link href="/about" className="text-sm text-gray-300 hover:text-yellow-400">
                About
              </Link>
              <Button className="bg-yellow-400 hover:bg-yellow-500 text-black">
                Launch App
              </Button>
            </div>
          </nav>
        </div>
      </header>

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-8">
            <Button variant="ghost" size="icon" asChild>
              <Link href="/pools">
                <ArrowLeft className="h-4 w-4" />
                <span className="sr-only">Back to pools</span>
              </Link>
            </Button>
            <div>
              <h1 className="text-2xl font-bold">{initialData.name}</h1>
              <p className="text-gray-400">{initialData.location}</p>
            </div>
            <Badge className="ml-auto bg-green-500/20 text-green-500">
              {initialData.status}
            </Badge>
          </div>

          <div className="grid gap-6">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card className="bg-gray-800 border-yellow-400/20">
                <CardHeader className="pb-2">
                  <CardDescription>Total Value Locked</CardDescription>
                  <CardTitle className="text-2xl">USD ${initialData.tvl}</CardTitle>
                </CardHeader>
              </Card>
              <Card className="bg-gray-800 border-yellow-400/20">
                <CardHeader className="pb-2">
                  <CardDescription>Current APY</CardDescription>
                  <CardTitle className="text-2xl text-green-400">{initialData.apy}</CardTitle>
                </CardHeader>
              </Card>
              <Card className="bg-gray-800 border-yellow-400/20">
                <CardHeader className="pb-2">
                  <CardDescription>Total Investors</CardDescription>
                  <CardTitle className="text-2xl">{initialData.totalInvestors}</CardTitle>
                </CardHeader>
              </Card>
              <Card className="bg-gray-800 border-yellow-400/20">
                <CardHeader className="pb-2">
                  <CardDescription>Min. Investment</CardDescription>
                  <CardTitle className="text-2xl">USD ${initialData.minimumInvestment}</CardTitle>
                </CardHeader>
              </Card>
            </div>

            <Card className="bg-gray-800 border-yellow-400/20">
              <CardHeader>
                <CardTitle>About this Property</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">{initialData.description}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}