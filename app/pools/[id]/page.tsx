import { PoolDetails } from './pool-details'

// Mock pool data - replace with actual data fetch function
const getPoolData = async (id: string) => ({
    id,
    name: "Fujairah Beachfront Complex",
    location: "Fujairah, UAE",
    type: "Residential",
    tvl: "10.5M",
    apy: "15.2%",
    totalInvestors: 127,
    minimumInvestment: "1,000",
    status: "Active",
    description: "Premium beachfront residential complex featuring luxury apartments with modern amenities and stunning ocean views.",
})

export default async function PoolPage({ params }: { params: { id: string } }) {
    const poolData = await getPoolData(params.id)
    return <PoolDetails initialData={poolData} />
}