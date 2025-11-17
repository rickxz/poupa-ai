import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { CreditCard } from '@/components/ui/credit-card'

export function SmartCardsSection() {
	return (
		<section className="sm:px-8 sm:mt-32 max-w-7xl mt-32 mr-auto ml-auto pr-6 pl-6">
			<div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-16 bg-linear-to-br from-gray-500/10 via-gray-500/0 to-gray-500/10 rounded-3xl pt-8 pr-8 pb-8 pl-8 gap-y-12 items-center">
				{/* Left: Content */}
				<div className="lg:col-span-6">
					<Badge className="inline-flex items-center gap-2 text-xs font-medium text-emerald-300 tracking-tight font-geist bg-emerald-600/10 ring-emerald-500/30 ring-1 rounded-full pt-1.5 pr-4 pb-1.5 pl-4">
						CARTÕES INTELIGENTES
					</Badge>

					<h2 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-geist font-light tracking-tight text-white">
						Gaste de forma mais inteligente com
						<span className="block font-light tracking-tight font-geist">cartões com IA</span>
					</h2>

					<p className="mt-6 text-lg leading-8 font-geist text-neutral-300">
						Crie cartões virtuais com limites inteligentes, alertas em tempo real e categorização automática. Mantenha o
						controle de assinaturas e gastos do dia a dia sem planilhas.
					</p>

					<ul className="mt-6 space-y-4">
						<li className="flex items-center gap-3 text-base sm:text-lg font-geist text-neutral-300">
							<Check className="shrink-0 w-5 h-5 text-emerald-400" />
							Categorização automática de cada compra
						</li>
						<li className="flex items-center gap-3 text-base sm:text-lg font-geist text-neutral-300">
							<Check className="shrink-0 w-5 h-5 text-emerald-400" />
							Defina limites, congele e receba alertas instantâneos
						</li>
					</ul>

					<div className="mt-8">
						<Button
							className="inline-flex items-center justify-center sm:px-8 sm:text-base text-sm font-medium tracking-tight font-geist ring-1 rounded-full pt-3.5 pr-6 pb-3.5 pl-6 text-white ring-emerald-400/30"
							style={{
								background: 'linear-gradient(135deg, rgb(16, 185, 129) 0%, rgb(5, 150, 105) 100%)',
							}}
						>
							Criar um Cartão Inteligente
						</Button>
					</div>
				</div>

				{/* Right: Card Stack */}
				<div className="lg:col-span-6">
					<div className="w-full max-w-3xl relative grid lg:[grid-template-areas:'stack'] lg:place-items-center lg:aspect-[4/3] sm:aspect-auto">
						{/* Back glass (violet tint) */}
						<CreditCard
							cardNumber="4521 9083 7610"
							holderName="Eva Kim"
							expiryDate="09/27"
							variant="default"
							className="w-full max-w-[340px] mx-auto mb-6 lg:mb-0 lg:absolute lg:left-6 lg:top-6 lg:w-[320px] lg:-translate-x-16 lg:-translate-y-16 lg:[grid-area:stack]"
						/>

						{/* Middle glass (lime tint) */}
						<CreditCard
							cardNumber="5249 3820 1145"
							holderName="Daniel Park"
							expiryDate="03/29"
							variant="lime"
							className="w-full max-w-[340px] mx-auto mb-6 lg:mb-0 lg:absolute lg:left-16 lg:top-20 lg:w-[380px] lg:-translate-y-2 lg:z-20 lg:[grid-area:stack]"
						/>

						{/* Soft glow (hidden on mobile) */}
						<div
							className="hidden lg:block lg:absolute lg:left-16 lg:top-20 lg:w-[380px] lg:h-[230px] lg:z-10 pointer-events-none rounded-3xl lg:[grid-area:stack]"
							style={{
								filter: 'blur(18px)',
								background: 'radial-gradient(50% 60% at 55% 50%, rgba(255, 255, 255, 0.35) 0%, rgba(255, 255, 255, 0.12) 40%, rgba(255, 255, 255, 0) 70%)',
							}}
						></div>

						{/* Bottom glass (dark tint) */}
						<CreditCard
							cardNumber="6019 7321 8550"
							holderName="Lena Tran"
							expiryDate="11/26"
							variant="dark"
							className="w-full max-w-[340px] mx-auto lg:absolute lg:right-6 lg:bottom-2 lg:w-[330px] lg:-translate-x-6 lg:translate-y-12 lg:[grid-area:stack] backdrop-blur-lg"
						/>
					</div>
				</div>
			</div>
		</section>
	)
}
