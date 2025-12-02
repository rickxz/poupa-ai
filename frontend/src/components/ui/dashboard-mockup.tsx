import { BarChart as RechartsBar, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from 'recharts'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'

const chartData = [
	{ name: 'Seg', value: 8 },
	{ name: 'Ter', value: 19 },
	{ name: 'Qua', value: 14 },
	{ name: 'Qui', value: 27 },
	{ name: 'Sex', value: 35 },
	{ name: 'Sáb', value: 22 },
	{ name: 'Dom', value: 18 },
]

export function DashboardMockup() {
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
									fill="url(#dashboardGradient)"
									radius={[8, 8, 0, 0]}
								/>
								<defs>
									<linearGradient id="dashboardGradient" x1="0" y1="0" x2="0" y2="1">
										<stop offset="0%" stopColor="rgba(16, 185, 129, 0.45)" />
										<stop offset="100%" stopColor="rgba(16, 185, 129, 0.06)" />
									</linearGradient>
								</defs>
							</RechartsBar>
						</ResponsiveContainer>
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
