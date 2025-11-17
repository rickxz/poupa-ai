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
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const chartData = {
	labels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'],
	datasets: [
		{
			label: 'Orçamento',
			data: [8, 19, 14, 27, 35, 22, 18],
			backgroundColor: 'rgba(16, 185, 129, 0.45)',
			borderColor: '#10b981',
			borderWidth: 1,
			borderRadius: 8,
			barPercentage: 0.6,
			categoryPercentage: 0.7,
		},
	],
}

const chartOptions: ChartOptions<'bar'> = {
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

export function DashboardMockup() {
	const chartRef = useRef<ChartJS<'bar'>>(null)

	useEffect(() => {
		if (chartRef.current) {
			const chart = chartRef.current
			const ctx = chart.canvas.getContext('2d')
			if (ctx) {
				const gradient = ctx.createLinearGradient(0, 0, 0, chart.canvas.height || 192)
				gradient.addColorStop(0, 'rgba(16, 185, 129, 0.45)')
				gradient.addColorStop(1, 'rgba(16, 185, 129, 0.06)')
				if (chart.data.datasets[0]) {
					chart.data.datasets[0].backgroundColor = gradient
				}
				chart.update()
			}
		}
	}, [])

	return (
		<div className="rounded-2xl ring-1 p-6 border backdrop-blur-md bg-neutral-950/80 border-white/10 ring-white/5 shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
			<div className="flex flex-col w-full h-full">
				<div className="flex items-start justify-between mb-4">
					<div>
						<div className="flex items-baseline gap-2">
							<p className="text-2xl font-geist font-light tracking-tight text-white">R$ 12.450,80</p>
							<Badge className="text-xs font-medium font-geist text-neutral-900 bg-emerald-400">+2.1%</Badge>
						</div>
						<p className="mt-1 text-xs font-geist text-neutral-400">Orçamento Mensal</p>
					</div>
				</div>

				<div className="mt-4 grow">
					<div className="relative h-48">
						<Bar ref={chartRef} data={chartData} options={chartOptions} />
					</div>
				</div>

				<div className="mt-6 grid grid-cols-2 gap-3">
					<Card className="rounded-xl ring-1 p-4 border bg-neutral-900/95 ring-white/10 border-white/10">
						<div className="flex items-center justify-between">
							<p className="text-xs font-geist text-neutral-400">Receitas Mensais</p>
						</div>
						<div className="mt-2 flex items-baseline gap-2">
							<p className="text-xl font-semibold tracking-tight font-geist text-white">R$ 8.240</p>
							<Badge className="text-xs font-medium font-geist text-neutral-900 bg-emerald-400">+4.2%</Badge>
						</div>
					</Card>
					<Card className="rounded-xl ring-1 p-4 border bg-neutral-900/95 ring-white/10 border-white/10">
						<div className="flex items-center justify-between">
							<p className="text-xs font-geist text-neutral-400">Despesas Mensais</p>
						</div>
						<div className="mt-2 flex items-baseline gap-2">
							<p className="text-xl font-semibold tracking-tight font-geist text-white">R$ 5.790</p>
							<Badge className="text-xs font-medium font-geist text-neutral-900 bg-emerald-400">-1.3%</Badge>
						</div>
					</Card>
				</div>
			</div>
		</div>
	)
}

