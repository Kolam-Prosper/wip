import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts'

interface InvestmentData {
  name: string
  value: number
}

interface InvestmentChartProps {
  data: InvestmentData[]
}

export function InvestmentChart({ data }: InvestmentChartProps) {
  return (
    <Card className="bg-gray-800 border-yellow-400/20">
      <CardHeader>
        <CardTitle className="text-yellow-400">Investment Performance</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis 
              dataKey="name" 
              stroke="#9CA3AF"
              interval="preserveStartEnd"
              tickFormatter={(value, index) => index % 3 === 0 ? value : ''}
            />
            <YAxis stroke="#9CA3AF" />
            <Tooltip 
              contentStyle={{ backgroundColor: '#1F2937', border: 'none', color: '#E5E7EB' }}
              itemStyle={{ color: '#E5E7EB' }}
            />
            <Legend wrapperStyle={{ color: '#E5E7EB' }} />
            <Line type="monotone" dataKey="value" name="Investment Value" stroke="#FBBF24" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}