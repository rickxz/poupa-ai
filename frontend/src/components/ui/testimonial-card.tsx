import { Card } from '@/components/ui/card'

interface TestimonialCardProps {
	quote: string
	name: string
	role: string
	avatar: string
}

export function TestimonialCard({ quote, name, role, avatar }: TestimonialCardProps) {
	return (
		<Card className="sm:p-8 bg-linear-to-br rounded-2xl ring-0 px-6 py-6 relative shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur from-white/10 to-white/0">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className="w-[34px] h-[34px] mb-4 text-emerald-400"
				viewBox="0 0 24 24"
				fill="currentColor"
				strokeWidth="2"
			>
				<path d="M7.17 6.18C5.2 7.62 4 9.76 4 12.1c0 3.4 2.38 5.9 5.6 5.9 2.1 0 3.4-1.05 3.4-2.63 0-1.36-1.02-2.36-2.44-2.36-1 0-1.76.45-2.18 1.24.06-2.06 1.36-3.76 3.4-4.54V6c-1.3.05-2.92.4-4.65 1.18Zm10 0C15.2 7.62 14 9.76 14 12.1c0 3.4 2.38 5.9 5.6 5.9 2.1 0 3.4-1.05 3.4-2.63 0-1.36-1.02-2.36-2.44-2.36-1 0-1.76.45-2.18 1.24.06-2.06 1.36-3.76 3.4-4.54V6c-1.3.05-2.92.4-4.65 1.18Z" />
			</svg>

			<blockquote className="text-2xl sm:text-3xl lg:text-4xl leading-tight font-light tracking-tight text-white">
				"{quote}"
			</blockquote>

			<figcaption className="mt-6 flex items-center gap-3">
				<img alt={name} className="w-10 h-10 object-cover rounded-full ring-1 ring-neutral-800" src={avatar} />
				<div>
					<div className="text-base font-semibold tracking-tight text-white">{name}</div>
					<div className="text-sm text-neutral-400">{role}</div>
				</div>
			</figcaption>
		</Card>
	)
}

