import { useEffect, useRef } from 'react'
import {
	Chart as ChartJS,
	RadialLinearScale,
	PointElement,
	LineElement,
	Filler,
	Tooltip,
	Legend,
	type ChartOptions,
} from 'chart.js'
import { Radar } from 'react-chartjs-2'

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend)

interface RadarChartProps {
	data: {
		labels: string[]
		datasets: {
			label: string
			data: number[]
			borderColor: string
			backgroundColor: string | CanvasGradient
			pointBackgroundColor: string
			pointBorderColor: string
			pointRadius: number
			tension: number
		}[]
	}
	height?: string
}

export function RadarChart({ data, height = 'h-56 md:h-64' }: RadarChartProps) {
	const chartRef = useRef<ChartJS<'radar'>>(null)

	useEffect(() => {
		if (chartRef.current) {
			const chart = chartRef.current
			const ctx = chart.canvas.getContext('2d')
			if (ctx && chart.data.datasets.length > 0) {
				const container = chart.canvas.parentElement
				const chartHeight = container?.clientHeight || 256

				// Update gradients for income
				if (chart.data.datasets[0]) {
					const gradientIncome = ctx.createLinearGradient(0, 0, 0, chartHeight)
					gradientIncome.addColorStop(0, 'rgba(16, 185, 129, 0.35)')
					gradientIncome.addColorStop(1, 'rgba(16, 185, 129, 0.05)')
					chart.data.datasets[0].backgroundColor = gradientIncome
				}

				// Update gradients for outcome
				if (chart.data.datasets[1]) {
					const gradientOutcome = ctx.createLinearGradient(0, 0, 0, chartHeight)
					gradientOutcome.addColorStop(0, 'rgba(163, 230, 53, 0.35)')
					gradientOutcome.addColorStop(1, 'rgba(163, 230, 53, 0.05)')
					chart.data.datasets[1].backgroundColor = gradientOutcome
				}

				chart.update()
			}
		}
	}, [])

	const options: ChartOptions<'radar'> = {
		responsive: true,
		maintainAspectRatio: false,
		plugins: {
			legend: { display: false },
			tooltip: {
				backgroundColor: 'rgba(0,0,0,0.8)',
				borderColor: 'rgba(255,255,255,0.1)',
				borderWidth: 1,
				padding: 10,
				titleColor: '#fff',
				bodyColor: 'rgba(255,255,255,0.9)',
				titleFont: { family: 'Inter', size: 12, weight: 600 },
				bodyFont: { family: 'Inter', size: 12, weight: 500 },
			},
		},
		scales: {
			r: {
				angleLines: { color: 'rgba(255,255,255,0.08)' },
				grid: { color: 'rgba(255,255,255,0.08)' },
				pointLabels: { color: 'rgba(255,255,255,0.7)', font: { family: 'Inter', size: 11 } },
				ticks: { display: false },
			},
		},
	}

	return (
		<div className={`relative ${height}`}>
			<Radar ref={chartRef} data={data} options={options} />
		</div>
	)
}

