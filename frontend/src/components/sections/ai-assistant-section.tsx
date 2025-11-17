import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export function AIAssistantSection() {
	return (
		<section className="sm:px-8 sm:mt-32 max-w-7xl mt-32 mr-auto ml-auto pr-6 pl-6">
			<div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-16 bg-linear-to-br from-gray-500/10 via-gray-500/0 to-gray-500/10 rounded-3xl pt-8 pr-8 pb-8 pl-8 gap-y-12 items-center">
				{/* Left: Content */}
				<div className="lg:col-span-6">
					<Badge className="inline-flex items-center gap-2 text-xs font-medium text-emerald-300 tracking-tight font-geist bg-emerald-600/10 ring-emerald-500/30 ring-1 rounded-full pt-1.5 pr-4 pb-1.5 pl-4">
						RECURSO DE IA INTELIGENTE
					</Badge>

					<h2 className="sm:text-5xl lg:text-6xl text-4xl font-light text-white tracking-tight font-geist mt-6">
						Conheça seu assistente financeiro.
					</h2>

					<p className="mt-6 text-lg leading-8 font-geist text-neutral-300">
						Nossa IA não só classifica seus gastos, mas também analisa seu perfil, oferece dicas personalizadas de
						economia e entrega conteúdo educativo para você tomar decisões mais inteligentes.
					</p>

					<ul className="mt-6 space-y-4">
						<li className="flex items-center gap-3 text-base sm:text-lg font-geist text-neutral-300">
							<Check className="shrink-0 w-5 h-5 text-emerald-400" />
							Preveja Despesas Mensais
						</li>
						<li className="flex items-center gap-3 text-base sm:text-lg font-geist text-neutral-300">
							<Check className="shrink-0 w-5 h-5 text-emerald-400" />
							Otimize Estratégias de Economia
						</li>
					</ul>

					<div className="mt-8">
						<Button
							className="inline-flex items-center justify-center rounded-full px-6 sm:px-8 py-3.5 text-sm sm:text-base font-medium tracking-tight ring-1 font-geist text-white ring-emerald-400/30"
							style={{
								background: 'linear-gradient(135deg, rgb(16, 185, 129) 0%, rgb(5, 150, 105) 100%)',
							}}
						>
							Experimente Agora
						</Button>
					</div>
				</div>

				{/* Right: Chart Card */}
				<div className="lg:col-span-6">
					<div className="overflow-visible max-h-fit border rounded-2xl pt-4 pr-4 pb-8 pl-4 relative bg-black/40 border-white/10">
						<h3 className="text-lg font-semibold tracking-tight mb-2 font-geist">Painel de Insights da IA</h3>
						<p className="text-sm mb-4 font-geist text-gray-300">
							Visualize suas despesas, acompanhe hábitos e descubra padrões que ajudam a melhorar sua saúde
							financeira.
						</p>

						<div className="relative rounded-xl border ring-1 overflow-hidden p-4 sm:p-6 bg-neutral-900/60 border-white/10 ring-white/5">
							{/* Nodes */}
							<div className="z-10 flex relative items-center justify-between">
								{/* Left: AI Core */}
								<div className="flex flex-col items-center gap-2">
									<div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-xl border ring-1 backdrop-blur-sm overflow-hidden border-white/10 bg-neutral-900/70 ring-white/10">
										<div className="absolute -left-4 top-2 w-20 h-20 rounded-full bg-linear-to-tr from-emerald-500/70 to-lime-500/40 blur-2xl"></div>
										<div className="absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-linear-to-tr to-emerald-500/30 blur-xl from-lime-400/70"></div>
										<div className="absolute right-3 bottom-3 w-8 h-8 rounded-full bg-linear-to-tr to-transparent blur-lg from-emerald-300/60"></div>
										<div
											className="absolute inset-0 bg-cover ring-1 rounded-xl ring-white/5"
											style={{
												backgroundImage:
													'url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7cb11911-53c5-45cc-a756-9dbe2010e635_320w.jpg)',
											}}
										></div>
									</div>
									<span className="text-xs font-geist text-neutral-300">Núcleo de IA</span>
								</div>

								{/* Right: User Data */}
								<div className="flex flex-col items-center gap-2">
									<div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-xl border ring-1 backdrop-blur-sm overflow-hidden border-white/10 bg-neutral-900/70 ring-white/10">
										<div
											className="absolute right-4 top-4 w-8 h-6 bg-linear-to-br to-lime-500 from-emerald-400"
											style={{ clipPath: 'polygon(0% 0%, 100% 0%, 70% 100%, 0% 100%)' }}
										></div>
										<div
											className="absolute left-4 bottom-5 w-12 h-7 bg-linear-to-br from-lime-500 to-emerald-500"
											style={{ clipPath: 'polygon(0% 0%, 100% 0%, 85% 100%, 0% 100%)' }}
										></div>
										<div
											className="absolute inset-0 bg-cover ring-1 rounded-xl ring-white/5"
											style={{
												backgroundImage:
													'url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9f2ed82e-900a-4e17-843f-6340215c86a0_320w.jpg)',
											}}
										></div>
									</div>
									<span className="text-xs font-geist text-neutral-300">Dados do Usuário</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
