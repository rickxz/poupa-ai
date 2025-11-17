import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { RadarChart } from '@/components/ui/radar-chart'

const radarData = {
	labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
	datasets: [
		{
			label: 'Receitas',
			data: [65, 45, 60, 30, 40, 55],
			borderColor: 'rgba(16, 185, 129, 1)',
			backgroundColor: 'rgba(16, 185, 129, 0.35)',
			pointBackgroundColor: 'rgba(16, 185, 129, 1)',
			pointBorderColor: '#0b1020',
			pointRadius: 3,
			tension: 0.3,
		},
		{
			label: 'Despesas',
			data: [50, 55, 70, 20, 35, 65],
			borderColor: 'rgba(163, 230, 53, 1)',
			backgroundColor: 'rgba(163, 230, 53, 0.35)',
			pointBackgroundColor: 'rgba(163, 230, 53, 1)',
			pointBorderColor: '#0b1020',
			pointRadius: 3,
			tension: 0.3,
		},
	],
}

export function BudgetSection() {
	return (
		<section className="sm:px-8 sm:mt-32 max-w-7xl mt-32 mr-auto ml-auto pr-6 pl-6">
			<div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-16 bg-linear-to-br from-gray-500/10 via-gray-500/0 to-gray-500/10 rounded-3xl pt-8 pr-8 pb-8 pl-8 gap-y-12 items-center">
				{/* Left: Visual Panel */}
				<div className="lg:col-span-6">
					<Card className="bg-[radial-gradient(circle_at_top_left,var(--tw-gradient-stops))] border rounded-2xl pt-5 pr-5 pb-5 pl-5 shadow-xl shadow-black/20 from-slate-200/10 to-slate-800/0 border-white/10">
						<div className="flex items-start justify-between">
							<div>
								<h2 className="text-[18px] tracking-tight font-semibold font-geist text-white">Orçamento Mensal</h2>
								<p className="text-xs font-geist text-white/60">Visão geral</p>
							</div>
						</div>

						<div className="mt-3 text-2xl font-geist font-light tracking-tight text-white">R$ 2.895,89</div>

						<div className="mt-6">
							<RadarChart data={radarData} />
						</div>

						<div className="mt-4 flex items-center justify-between text-xs text-white/70">
							<span className="inline-flex items-center gap-2 font-geist">
								<span className="h-1.5 w-8 rounded-full bg-emerald-400"></span> Receitas
								<span className="font-geist text-white/40">6:47</span>
							</span>
							<span className="inline-flex items-center gap-2 font-geist">
								<span className="h-1.5 w-8 rounded-full bg-lime-400"></span> Despesas
								<span className="font-geist text-white/40">18:51</span>
							</span>
						</div>
					</Card>
				</div>

				{/* Right: Text Content */}
				<div className="lg:col-span-6">
					<Badge className="inline-flex items-center gap-2 text-xs font-medium text-emerald-300 tracking-tight font-geist ring-emerald-500/40 ring-1 rounded-full pt-1.5 pr-4 pb-1.5 pl-4">
						ASSISTENTE DE ORÇAMENTO IA
					</Badge>

					<h2 className="sm:text-5xl lg:text-6xl text-4xl font-light tracking-tight font-geist mt-6 text-white">
						Planeje, acompanhe e otimize seu
						<span className="block font-geist font-light tracking-tight">orçamento com IA</span>
					</h2>

					<p className="mt-6 text-lg leading-8 font-geist text-white/70">
						Obtenha insights em tempo real, sugestões inteligentes de economia e previsões que ajudam você a permanecer
						no alvo—sem planilhas. Conecte suas contas e deixe o assistente fazer o trabalho pesado.
					</p>

					<div className="mt-8 grid grid-cols-2 gap-8">
						<div>
							<div className="text-4xl sm:text-5xl font-geist font-light tracking-tight text-emerald-400">2M+</div>
							<div className="text-base mt-2 font-geist text-white/80">Orçamentos criados</div>
						</div>
						<div>
							<div className="text-4xl sm:text-5xl font-geist font-light tracking-tight text-emerald-400">500+</div>
							<div className="text-base mt-2 font-geist text-white/80">Integrações bancárias</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
