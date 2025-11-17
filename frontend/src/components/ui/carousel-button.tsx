import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface CarouselButtonProps {
	direction: 'prev' | 'next'
	onClick: () => void
	ariaLabel: string
	className?: string
}

export function CarouselButton({ direction, onClick, ariaLabel, className }: CarouselButtonProps) {
	const Icon = direction === 'prev' ? ChevronLeft : ChevronRight

	return (
		<Button
			onClick={onClick}
			aria-label={ariaLabel}
			className={cn(
				'inline-flex border-neutral-700 hover:bg-neutral-800 transition bg-linear-to-br w-11 h-11 rounded-full items-center justify-center from-white/10 to-white/0',
				className
			)}
		>
			<Icon className="h-5 w-5 text-white" />
		</Button>
	)
}

