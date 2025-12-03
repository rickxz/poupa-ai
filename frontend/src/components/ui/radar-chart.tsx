import { RadarChart as RechartsRadar, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer, Tooltip } from 'recharts'

interface RadarChartProps {
	data: {
		labels: string[]
		datasets: {
			label: string
			data: number[]
			borderColor: string
			backgroundColor: string
			pointBackgroundColor: string
			pointBorderColor: string
			pointRadius: number
			tension: number
		}[]
	}
	height?: string
}

export function RadarChart({ data, height = 'h-56 md:h-64' }: RadarChartProps) {
	const chartData = data.labels.map((label, index) => ({
		subject: label,
		[data.datasets[0].label]: data.datasets[0].data[index],
		[data.datasets[1].label]: data.datasets[1].data[index],
	}))

	return (
		<div className={`relative ${height} [&_svg]:outline-none **:outline-none`}>
			<ResponsiveContainer width="100%" height="100%">
				<RechartsRadar data={chartData}>
					<PolarGrid stroke="rgba(255,255,255,0.08)" />
					<PolarAngleAxis
						dataKey="subject"
						tick={{ fill: 'rgba(255,255,255,0.7)', fontSize: 11 }}
					/>
					<PolarRadiusAxis
						tick={{ fill: 'transparent' }}
						axisLine={false}
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
						cursor={{ fill: 'rgba(255, 255, 255, 0.3)' }}
					/>
					<Radar
						name={data.datasets[0].label}
						dataKey={data.datasets[0].label}
						stroke="rgba(16, 185, 129, 1)"
						fill="rgba(16, 185, 129, 0.35)"
						fillOpacity={1}
					/>
					<Radar
						name={data.datasets[1].label}
						dataKey={data.datasets[1].label}
						stroke="rgba(163, 230, 53, 1)"
						fill="rgba(163, 230, 53, 0.35)"
						fillOpacity={1}
					/>
				</RechartsRadar>
			</ResponsiveContainer>
		</div>
	)
}
