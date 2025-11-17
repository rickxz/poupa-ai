import { cn } from '@/lib/utils'

interface CarouselDotsProps {
	count: number
	currentIndex: number
	onDotClick: (index: number) => void
}

export function CarouselDots({ count, currentIndex, onDotClick }: CarouselDotsProps) {
	return (
		<div className="flex gap-2">
			{Array.from({ length: count }).map((_, index) => (
				<button
					key={index}
					onClick={() => onDotClick(index)}
					aria-label={`Ir para depoimento ${index + 1}`}
					className={cn(
						'h-2.5 w-2.5 rounded-full ring-1 ring-white/10 transition',
						index === currentIndex ? 'bg-emerald-400' : 'bg-white/20'
					)}
				/>
			))}
		</div>
	)
}

