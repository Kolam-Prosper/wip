import { Metadata } from 'next'
import PoolDetails from './PoolDetails'

export const metadata: Metadata = {
    title: 'Investment Pool | KolamProsper',
    description: 'Investment details for a specific pool',
}

interface PageProps {
    params: { id: string }
}

export default function PoolPage({ params }: PageProps) {
    return <PoolDetails id={params.id} />
}

export async function generateStaticParams() {
    // In a real application, you would fetch this data from an API or database
    const pools = ['1', '2', '3']
    return pools.map((id) => ({ id }))
}