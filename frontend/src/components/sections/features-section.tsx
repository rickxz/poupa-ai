import { Search, LayoutGrid, List, CreditCard, TrendingDown, Clock, Wallet } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { BarChart } from '@/components/ui/bar-chart'
import { StatCard } from '@/components/ui/stat-card'

const chartData = {
	labels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'],
	datasets: [
		{
			label: 'Orçamento',
			data: [8, 19, 14, 27, 35, 22, 18],
			borderColor: '#10b981',
			borderWidth: 1,
			borderRadius: 8,
			barPercentage: 0.6,
			categoryPercentage: 0.7,
		},
	],
}

export function FeaturesSection() {
	return (
		<section id="features" className="sm:px-8 sm:mt-32 max-w-7xl mt-32 mr-auto ml-auto px-4">
			<div className="relative">
				<div className="sm:p-6 border rounded-2xl ring-1 pt-4 pr-4 pb-4 pl-4 backdrop-blur-md bg-neutral-950/80 border-white/10 ring-white/5">
					<div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
						{/* Sidebar */}
						<aside className="lg:col-span-3">
							<Card className="h-full rounded-xl border p-4 sm:p-5 ring-1 border-white/10 bg-neutral-900/90 ring-white/5">
								<div className="mt-5">
									<div className="relative">
										<Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
										<Input
											className="w-full rounded-xl ring-1 pl-9 pr-3 py-2.5 text-sm placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-emerald-400/40 bg-neutral-800/50 ring-white/10 text-white font-geist border-0"
											placeholder="Buscar..."
										/>
									</div>
								</div>

								<div className="mt-6">
									<p className="text-xs text-neutral-500 mb-3 uppercase tracking-wide font-geist">Navegação</p>
									<nav className="space-y-3">
										<a
											href="#"
											className="flex items-center justify-between rounded-xl bg-white/6 ring-1 px-3 py-3 text-sm ring-white/10 text-white"
										>
											<span className="inline-flex items-center gap-3 font-geist">
												<span className="inline-flex h-8 w-8 items-center justify-center rounded-lg ring-1 bg-white/10 ring-white/10">
													<LayoutGrid className="w-4 h-4 text-white" />
												</span>
												Visão Geral
											</span>
											<span className="h-2 w-2 rounded-full bg-emerald-400"></span>
										</a>

										<a
											href="#"
											className="flex items-center gap-3 rounded-xl ring-1 px-3 py-3 text-sm transition-colors font-geist hover:bg-white/5 ring-white/10 text-neutral-300"
										>
											<span className="inline-flex h-8 w-8 items-center justify-center rounded-lg ring-1 bg-white/5 ring-white/10">
												<List className="w-4 h-4" />
											</span>
											Transações
										</a>

										<a
											href="#"
											className="flex items-center gap-3 rounded-xl ring-1 px-3 py-3 text-sm transition-colors font-geist hover:bg-white/5 ring-white/10 text-neutral-300"
										>
											<span className="inline-flex h-8 w-8 items-center justify-center rounded-lg ring-1 bg-white/5 ring-white/10">
												<CreditCard className="w-4 h-4" />
											</span>
											Categorias
										</a>
									</nav>
								</div>

								<div className="mt-8">
									<p className="text-xs text-neutral-500 mb-3 uppercase tracking-wide font-geist">Assistente de IA</p>
									<div className="rounded-xl bg-white/6 ring-1 p-3 flex items-center gap-3 ring-white/10">
										<span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/15 ring-1 text-emerald-300 ring-emerald-400/30">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												className="w-4 h-4"
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												strokeWidth="2"
											>
												<path d="M12 3v18"></path>
												<path d="M3 12h18"></path>
											</svg>
										</span>
										<div className="text-sm">
											<p className="tracking-tight font-medium font-geist text-white">Orçamento Inteligente</p>
											<p className="text-xs font-geist text-neutral-400">Rastreamento com IA</p>
										</div>
									</div>
								</div>
							</Card>
						</aside>

						{/* Main */}
						<main className="lg:col-span-9 space-y-6">
							{/* Earnings Chart */}
							<Card className="w-full rounded-2xl ring-1 p-5 border bg-neutral-900/95 ring-white/10 border-white/10">
								<div className="flex items-start justify-between">
									<div>
										<div className="flex items-baseline gap-2">
											<p className="text-3xl font-geist font-light tracking-tight text-white">R$ 742.560</p>
											<Badge className="text-xs font-medium font-geist text-neutral-900 bg-emerald-400">+2.1%</Badge>
										</div>
										<p className="mt-1 text-xs font-geist text-neutral-400">Orçamento Mensal</p>
									</div>
								</div>

								<div className="mt-6">
									<BarChart data={chartData} />
								</div>
							</Card>

							{/* KPI Cards */}
							<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
								<StatCard
									title="Receitas Mensais"
									value="R$ 31.240,12"
									change="+4.2%"
									subtitle="vs. semana anterior"
								/>
								<StatCard
									title="Despesas Mensais"
									value="R$ 4.860,00"
									change="-1.3%"
									subtitle="vs. semana anterior"
									icon={<TrendingDown className="w-4 h-4 text-neutral-300" />}
								/>
								<StatCard
									title="Meta de Economia"
									value="R$ 2.140,00"
									change="-0.9%"
									subtitle="últimos 30 dias"
									icon={<Clock className="w-4 h-4 text-neutral-300" />}
								/>
								<StatCard
									title="Saldo Atual"
									value="R$ 3.980,55"
									change="+1.7%"
									subtitle="mês atual"
									icon={<Wallet className="w-4 h-4 text-neutral-300" />}
								/>
							</div>
						</main>
					</div>
				</div>
			</div>
		</section>
	)
}
