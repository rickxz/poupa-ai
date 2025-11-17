import { Badge } from '@/components/ui/badge'
import { CarouselButton } from '@/components/ui/carousel-button'
import { TestimonialCard } from '@/components/ui/testimonial-card'
import { useTestimonials } from '@/hooks/use-testimonials'

export function TestimonialsSection() {
	const { currentTestimonial, next, prev, setIsPaused } = useTestimonials()

	return (
		<section className="sm:px-8 sm:mt-32 max-w-7xl mt-32 mr-auto ml-auto pr-6 pl-6">
			<section
				className="overflow-hidden sm:mt-32 sm:pl-8 sm:pr-8 sm:pt-8 sm:pb-8 bg-linear-to-br from-gray-500/10 via-gray-500/0 to-gray-500/10 max-w-7xl rounded-3xl ring-0 mt-24 pt-6 pr-6 pb-6 pl-6 relative"
				onMouseEnter={() => setIsPaused(true)}
				onMouseLeave={() => setIsPaused(false)}
			>
				<span aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/5"></span>

				<div className="grid grid-cols-1 md:grid-cols-2 md:gap-16 gap-8 gap-x-8 gap-y-8">
					{/* Left: Intro */}
					<div>
						<Badge className="inline-flex items-center gap-1 uppercase text-xs font-medium text-emerald-400 tracking-tight bg-emerald-950 ring-emerald-400/20 ring-1 rounded-full pt-1 pr-3 pb-1 pl-3">
							Depoimentos
						</Badge>

						<h2 className="sm:text-5xl lg:text-6xl text-4xl font-light text-white tracking-tight font-geist mt-6">
							Aprovado por quem leva orçamento a sério
						</h2>

						<p className="mt-6 text-base sm:text-lg text-neutral-400">
							Veja como o Poupa AÍ ajuda pessoas a reduzir desperdícios, automatizar economias e manter o plano com
							insights impulsionados por IA.
						</p>

						{/* Controls */}
						<div className="flex gap-3 mt-8 gap-x-3 gap-y-3 items-center">
							<CarouselButton direction="prev" onClick={prev} ariaLabel="Depoimento anterior" />
							<CarouselButton direction="next" onClick={next} ariaLabel="Próximo depoimento" />
						</div>
					</div>

					{/* Right: Testimonial Card */}
					<div className="md:pl-4">
						<div className="transition-opacity duration-150">
							<TestimonialCard
								quote={currentTestimonial.quote}
								name={currentTestimonial.name}
								role={currentTestimonial.role}
								avatar={currentTestimonial.avatar}
							/>
						</div>
					</div>
				</div>
			</section>
		</section>
	)
}
