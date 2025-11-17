import { useEffect, useRef } from 'react'
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
	type ChartOptions,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

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
	const chartRef = useRef<ChartJS<'bar'>>(null)

	useEffect(() => {
		if (chartRef.current) {
			const chart = chartRef.current
			const ctx = chart.canvas.getContext('2d')
			if (ctx && chart.data.datasets[0]) {
				const gradient = ctx.createLinearGradient(0, 0, 0, chart.canvas.height || 256)
				gradient.addColorStop(0, 'rgba(16, 185, 129, 0.45)')
				gradient.addColorStop(1, 'rgba(16, 185, 129, 0.06)')
				chart.data.datasets[0].backgroundColor = gradient
				chart.update()
			}
		}
	}, [])

	const options: ChartOptions<'bar'> = {
		responsive: true,
		maintainAspectRatio: false,
		plugins: {
			legend: { display: false },
			tooltip: {
				backgroundColor: 'rgba(17,24,39,0.95)',
				titleColor: '#fff',
				bodyColor: '#e5e7eb',
				displayColors: false,
				padding: 10,
			},
		},
		scales: {
			x: {
				grid: { color: 'rgba(255,255,255,0.06)' },
				border: { display: false },
				ticks: { color: 'rgba(255,255,255,0.65)', font: { size: 11 } },
			},
			y: {
				grid: { color: 'rgba(255,255,255,0.06)' },
				border: { display: false },
				ticks: {
					color: 'rgba(255,255,255,0.65)',
					callback: (value) => `R$ ${value}k`,
					maxTicksLimit: 5,
				},
			},
		},
	}

	return (
		<div className={`relative ${height}`}>
			<Bar ref={chartRef} data={data} options={options} />
		</div>
	)
}

