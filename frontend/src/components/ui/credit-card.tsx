interface CreditCardProps {
	cardNumber: string
	holderName: string
	expiryDate: string
	variant?: 'default' | 'lime' | 'dark'
	className?: string
}

export function CreditCard({ cardNumber, holderName, expiryDate, variant = 'default', className }: CreditCardProps) {
	const variantStyles = {
		default: {
			card: 'bg-white/10 ring-white/15',
			gradient1: 'radial-gradient(80% 90% at 70% 40%, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.1) 45%, rgba(0, 0, 0, 0.2) 65%, rgba(0, 0, 0, 0) 78%)',
			gradient2: 'linear-gradient(135deg, rgba(184, 141, 255, 0.3), rgba(157, 133, 255, 0.2))',
			text: 'text-white/90',
		},
		lime: {
			card: 'bg-white/10 ring-white/15',
			gradient1: 'radial-gradient(85% 95% at 50% 48%, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.18) 35%, rgba(0, 0, 0, 0.08) 55%, rgba(0, 0, 0, 0) 75%)',
			gradient2: 'linear-gradient(135deg, rgba(231, 255, 140, 0.35), rgba(183, 255, 158, 0.25))',
			text: 'text-white/95',
		},
		dark: {
			card: 'bg-white/5 ring-white/10 text-white/85',
			gradient1: 'radial-gradient(90% 100% at 60% 45%, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.04) 40%, rgba(0, 0, 0, 0.25) 62%, rgba(0, 0, 0, 0) 80%)',
			gradient2: 'linear-gradient(135deg, rgba(15, 23, 42, 0.65), rgba(31, 41, 55, 0.55))',
			text: 'text-white/85',
		},
	}

	const styles = variantStyles[variant]

	return (
		<div className={`relative rounded-3xl ring-1 shadow-2xl backdrop-blur-xl ${styles.card} ${className || ''}`}>
			<div className="absolute inset-0 rounded-3xl pointer-events-none">
				<div className="absolute inset-0 rounded-3xl" style={{ background: styles.gradient1 }}></div>
				<div className="absolute inset-0 rounded-3xl mix-blend-soft-light" style={{ background: styles.gradient2 }}></div>
			</div>

			<div className="relative p-5">
				<div className="flex items-center justify-between">
					<div className="flex items-center gap-2">
						<span className="inline-flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-medium font-geist bg-white/90 text-neutral-900">
							P
						</span>
						<span className={`text-sm font-medium tracking-tight font-geist ${styles.text}`}>Poupa AÍ</span>
					</div>
					<svg width="28" height="18" viewBox="0 0 28 18" className={variant === 'dark' ? 'opacity-50' : 'opacity-70'}>
						<circle cx="10" cy="9" r="7" fill={variant === 'lime' ? 'rgba(255,255,255,0.45)' : 'rgba(255,255,255,0.35)'}></circle>
						<circle cx="18" cy="9" r="7" fill={variant === 'lime' ? 'rgba(255,255,255,0.25)' : 'rgba(255,255,255,0.2)'}></circle>
					</svg>
				</div>

				<div className="mt-6">
					<div className={`text-xl sm:text-2xl font-geist font-light tracking-tight ${styles.text}`}>
						{cardNumber} <span className="font-geist font-light tracking-tight text-white/70">XXXX</span>
					</div>
				</div>

				<div className="mt-6 flex items-end justify-between">
					<div>
						<div className={`text-[11px] font-geist ${variant === 'dark' ? 'text-white/55' : 'text-white/60'}`}>TITULAR</div>
						<div className={`text-sm tracking-tight font-geist ${styles.text}`}>{holderName}</div>
					</div>
					<div className="text-right">
						<div className={`text-[11px] font-geist ${variant === 'dark' ? 'text-white/55' : 'text-white/60'}`}>VÁLIDO ATÉ</div>
						<div className={`text-sm tracking-tight font-geist ${styles.text}`}>{expiryDate}</div>
					</div>
				</div>
			</div>
		</div>
	)
}

