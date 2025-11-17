import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import type { BillingPeriod } from '@/hooks/use-billing-toggle'

interface PricingCardProps {
	name: string
	monthlyPrice: string
	annualPrice: string
	description: string
	features: string[]
	ctaText: string
	billingPeriod: BillingPeriod
}

export function PricingCard({ name, monthlyPrice, annualPrice, description, features, ctaText, billingPeriod }: PricingCardProps) {
	const price = billingPeriod === 'monthly' ? monthlyPrice : annualPrice
	const unit = billingPeriod === 'monthly' ? '/ mês' : '/ ano'

	return (
		<Card className="flex flex-col sm:p-6 h-full rounded-2xl ring-1 p-5 border bg-neutral-900/95 ring-white/10 border-white/10">
			<div className="flex items-start justify-between">
				<p className="text-sm font-medium tracking-tight text-white">{name}</p>
			</div>

			<div className="mt-3">
				<div className="flex gap-2 items-baseline">
					<span className="price text-5xl font-light tracking-tight text-white">{price}</span>
					<span className="price-unit text-sm text-neutral-400">{unit}</span>
				</div>
				<p className="mt-2 text-sm text-neutral-400">{description}</p>
				{billingPeriod === 'annual' && (
					<p className="billing-note mt-1 text-xs text-neutral-500">Cobrado anualmente</p>
				)}
			</div>

			<div className="mt-5 space-y-3">
				<Button
					className="w-full inline-flex items-center justify-center text-base font-medium tracking-tight rounded-full ring-1 py-3.5 px-6 transition-all duration-300 hover:brightness-110 text-white ring-emerald-400/30"
					style={{
						background: 'linear-gradient(135deg, rgb(16, 185, 129) 0%, rgb(5, 150, 105) 100%)',
					}}
				>
					{ctaText}
				</Button>
				<Button
					variant="outline"
					className="w-full inline-flex items-center justify-center text-base font-medium tracking-tight rounded-full ring-1 py-3.5 px-6 transition-all duration-300 text-neutral-200 ring-white/10 hover:bg-white/5"
				>
					Comparar recursos
				</Button>
			</div>

			<div className="mt-6 pt-6 border-t border-white/10">
				<p className="text-xs font-semibold tracking-tight text-neutral-300">
					{name === 'Plano Grátis' ? 'INCLUI' : 'TUDO DO PLANO GRÁTIS, MAIS'}
				</p>
				<p className="mt-1 text-xs text-neutral-500">
					{name === 'Plano Grátis' ? 'Tudo que você precisa para começar' : 'Controles avançados e colaboração'}
				</p>
				<ul className="mt-4 space-y-3">
					{features.map((feature, index) => (
						<li key={index} className="flex items-start gap-3 text-sm text-neutral-300">
							<span className="inline-flex h-5 w-5 items-center justify-center rounded-full ring-1 shrink-0 bg-white/5 text-neutral-200 ring-white/10">
								<Check className="w-3.5 h-3.5" />
							</span>
							{feature}
						</li>
					))}
				</ul>
			</div>
		</Card>
	)
}

