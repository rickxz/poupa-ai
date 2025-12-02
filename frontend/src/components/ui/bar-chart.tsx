import { BarChart as RechartsBar, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from 'recharts'

interface BarChartProps {
	data: {
		labels: string[]
		datasets: {
			label: string
			data: number[]
			backgroundColor?: string | CanvasGradient
			borderColor?: string
			borderWidth?: number
			borderRadius?: number
			barPercentage?: number
			categoryPercentage?: number
		}[]
	}
	height?: string
}

export function BarChart({ data, height = 'h-64 sm:h-80 md:h-96' }: BarChartProps) {
	const chartData = data.labels.map((label, index) => ({
		name: label,
		value: data.datasets[0].data[index],
	}))

	return (
		<div className={`relative ${height}`}>
			<ResponsiveContainer width="100%" height="100%">
				<RechartsBar data={chartData}>
					<CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
					<XAxis
						dataKey="name"
						tick={{ fill: 'rgba(255,255,255,0.65)', fontSize: 11 }}
						stroke="rgba(255,255,255,0.06)"
					/>
					<YAxis
						tick={{ fill: 'rgba(255,255,255,0.65)', fontSize: 11 }}
						stroke="rgba(255,255,255,0.06)"
						tickFormatter={(value) => `R$ ${value}k`}
					/>
					<Tooltip
						contentStyle={{
							backgroundColor: 'rgba(17,24,39,0.95)',
							border: 'none',
							borderRadius: '8px',
							color: '#fff',
						}}
						labelStyle={{ color: '#fff' }}
						itemStyle={{ color: '#e5e7eb' }}
					/>
					<Bar
						dataKey="value"
						fill="url(#colorGradient)"
						radius={[8, 8, 0, 0]}
					/>
					<defs>
						<linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
							<stop offset="0%" stopColor="rgba(16, 185, 129, 0.45)" />
							<stop offset="100%" stopColor="rgba(16, 185, 129, 0.06)" />
						</linearGradient>
					</defs>
				</RechartsBar>
			</ResponsiveContainer>
		</div>
	)
}
