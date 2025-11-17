import { TrendingUp, Plus, Upload } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { PricingCard } from '@/components/ui/pricing-card'
import { BillingToggle } from '@/components/ui/billing-toggle'
import { useBillingToggle } from '@/hooks/use-billing-toggle'

export function PricingSection() {
	const { billingPeriod, toggleBilling } = useBillingToggle()

	const freePlanFeatures = [
		'Categorização automática com IA (perfil único)',
		'2 conexões bancárias, sincronização diária',
	]

	const premiumPlanFeatures = [
		'Conexões bancárias ilimitadas, sincronização por hora',
		'Orçamentos compartilhados e funções (Visualizador/Editor)',
	]

	return (
		<section id="pricing" className="sm:px-8 sm:mt-32 max-w-7xl mt-32 mr-auto ml-auto pr-6 pl-6">
			<div className="sm:pt-8 sm:pl-8 sm:pr-8 sm:pb-8 bg-linear-to-br from-gray-500/10 via-gray-500/0 to-gray-500/10 rounded-3xl ring-0 pt-6 pr-8 pb-6 pl-8">
				<div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-10 gap-8">
					{/* Left: Feature bullets */}
					<div className="lg:col-span-5">
						<div className="space-y-8">
							<div>
								<Badge className="inline-flex items-center gap-2 text-xs font-medium text-emerald-300 tracking-tight font-geist bg-emerald-600/10 ring-emerald-500/30 ring-1 rounded-full pt-1.5 pr-4 pb-1.5 pl-4">
									PREÇOS
								</Badge>
								<h2 className="sm:text-5xl lg:text-6xl text-4xl font-light text-white tracking-tight font-geist mt-6">
									Preços simples, inteligentes e transparentes
								</h2>
								<p className="mt-6 text-base sm:text-lg text-neutral-400">
									Veja como o Poupa AÍ ajuda indivíduos e pequenas empresas a assumir o controle de seus
									orçamentos, economizar de forma mais inteligente e planejar com insights impulsionados por IA.
								</p>
							</div>

							<div className="flex items-start gap-4">
								<span className="shrink-0 inline-flex h-10 w-10 items-center justify-center rounded-full ring-1 bg-white/5 ring-white/10">
									<TrendingUp className="w-5 h-5 text-neutral-200" />
								</span>
								<div>
									<h3 className="text-base sm:text-lg font-semibold tracking-tight text-white">
										Categorização automática com IA
									</h3>
									<p className="mt-1 text-sm text-neutral-400">
										O Poupa AÍ aprende seus hábitos e classifica transações com alta precisão — sem mais limpeza
										manual.
									</p>
								</div>
							</div>

							<div className="flex items-start gap-4">
								<span className="shrink-0 inline-flex h-10 w-10 items-center justify-center rounded-full ring-1 bg-white/5 ring-white/10">
									<Plus className="w-5 h-5 text-neutral-200" />
								</span>
								<div>
									<h3 className="text-base sm:text-lg font-semibold tracking-tight text-white">
										Orçamentos e envelopes inteligentes
									</h3>
									<p className="mt-1 text-sm text-neutral-400">
										Crie orçamentos mensais ou contínuos com proteção contra desvios, alertas e regras no estilo
										envelope.
									</p>
								</div>
							</div>

							<div className="flex items-start gap-4">
								<span className="shrink-0 inline-flex h-10 w-10 items-center justify-center rounded-full ring-1 bg-white/5 ring-white/10">
									<Upload className="w-5 h-5 text-neutral-200" />
								</span>
								<div>
									<h3 className="text-base sm:text-lg font-semibold tracking-tight text-white">
										Sincronização bancária e alertas de anomalias
									</h3>
									<p className="mt-1 text-sm text-neutral-400">
										Conecte contas com segurança, obtenha sincronização em tempo real e detecte gastos incomuns antes
										que se tornem um problema.
									</p>
								</div>
							</div>
						</div>
					</div>

					{/* Right: Plans */}
					<div className="lg:col-span-7">
						<BillingToggle billingPeriod={billingPeriod} onToggle={toggleBilling} />

						{/* Equal height cards */}
						<div className="grid grid-cols-1 md:grid-cols-2 [grid-auto-rows:1fr] gap-x-6 gap-y-6 items-stretch max-w-3xl mx-auto">
							<PricingCard
								name="Plano Grátis"
								monthlyPrice="R$ 0"
								annualPrice="R$ 0"
								description="Controle básico de receitas e despesas com relatórios e sugestões para suas finanças."
								features={freePlanFeatures}
								ctaText="Começar grátis"
								billingPeriod={billingPeriod}
							/>

							<PricingCard
								name="Plano Premium"
								monthlyPrice="R$ 30,00"
								annualPrice="R$ 300,00"
								description="Relatórios mais avançados, previsões, integrações multi-contas e insights de IA."
								features={premiumPlanFeatures}
								ctaText="Começar grátis"
								billingPeriod={billingPeriod}
							/>
						</div>
						<div className="mt-8 text-center max-w-3xl mx-auto">
							<p className="text-sm text-neutral-400 font-geist">
								Para licenciamento White Label e planos corporativos, entre em contato.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
