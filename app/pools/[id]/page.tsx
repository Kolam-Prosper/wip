import { Metadata } from 'next'
import PoolPageClient from './PoolPageClient'

export const metadata: Metadata = {
    title: 'Investment Pool | KolamProsper',
    description: 'Investment details for a specific pool',
}

export default function PoolPage({ params }: { params: { id: string } }) {
    return <PoolPageClient params={params} />
}