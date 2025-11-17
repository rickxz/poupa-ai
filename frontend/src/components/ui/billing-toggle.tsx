import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import type { BillingPeriod } from '@/hooks/use-billing-toggle'

interface BillingToggleProps {
	billingPeriod: BillingPeriod
	onToggle: (period: BillingPeriod) => void
}

export function BillingToggle({ billingPeriod, onToggle }: BillingToggleProps) {
	return (
		<div className="mb-4 flex items-center justify-center md:justify-end">
			<div className="inline-flex rounded-full ring-1 p-1 ring-white/10 bg-white/5">
				<Button
					type="button"
					onClick={() => onToggle('monthly')}
					aria-pressed={billingPeriod === 'monthly'}
					className={cn(
						'px-4 py-1.5 text-sm rounded-full ring-1 transition-all',
						billingPeriod === 'monthly'
							? 'text-white/90 bg-white/10 ring-white/15'
							: 'text-neutral-300 hover:text-white ring-0'
					)}
				>
					Mensal
				</Button>
				<Button
					type="button"
					onClick={() => onToggle('annual')}
					aria-pressed={billingPeriod === 'annual'}
					className={cn(
						'px-4 py-1.5 text-sm rounded-full transition-all',
						billingPeriod === 'annual'
							? 'text-white/90 bg-white/10 ring-1 ring-white/15'
							: 'text-neutral-300 hover:text-white ring-0'
					)}
				>
					Anual
				</Button>
			</div>
			<Badge className="ml-3 hidden md:inline text-xs bg-emerald-500/10 ring-1 px-2.5 py-1 rounded-full text-emerald-300/80 ring-emerald-400/30">
				Economize 20% anualmente
			</Badge>
		</div>
	)
}

