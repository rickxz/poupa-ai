import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { ArrowRight } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

const emailSchema = z.object({
	email: z.email('Email inválido'),
})

type EmailFormData = z.infer<typeof emailSchema>

export function EmailSignupForm() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<EmailFormData>({
		resolver: zodResolver(emailSchema),
	})

	const onSubmit = (data: EmailFormData) => {
		console.log('Email submitted:', data.email)
		// Handle form submission
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-2xl">
			<label htmlFor="poupa-ai-email" className="sr-only font-geist">
				Email
			</label>

			<div className="group flex flex-row ring-1 rounded-full p-2 relative shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06),0_10px_30px_rgba(0,0,0,0.35)] backdrop-blur-xl gap-3 items-center mt-6 bg-white/5 ring-white/15">
				<span
					aria-hidden="true"
					className="pointer-events-none absolute inset-0 rounded-full blur-md opacity-30 bg-white/5"
				></span>

				<Input
					type="email"
					inputMode="email"
					autoComplete="email"
					placeholder="Qual é o seu email?"
					className="flex-1 placeholder:text-white/60 outline-none text-base tracking-tight bg-transparent py-3 px-4 relative z-10 text-white/90 border-0 focus-visible:ring-0"
					{...register('email')}
					id="poupa-ai-email"
				/>

				<Button
					type="submit"
					className="hidden md:inline-flex items-center justify-center gap-2 select-none ring-1 rounded-full px-6 py-3 backdrop-blur-xl transition-all duration-300 shadow-[0_8px_25px_rgba(0,0,0,0.4)] group relative overflow-hidden shrink-0 text-white/90 bg-white/5 hover:bg-white/10 ring-white/20 hover:ring-cyan-400/40"
					style={{
						boxShadow:
							'inset 0 0 0 1px rgba(255, 255, 255, 0.18), inset 0 -10px 25px rgba(0, 0, 0, 0.3), 0 8px 25px rgba(0, 0, 0, 0.35)',
					}}
				>
					<span
						aria-hidden="true"
						className="absolute inset-px rounded-full bg-linear-to-b from-white/18 via-white/8 to-white/5 pointer-events-none"
					></span>
					<span
						aria-hidden="true"
						className="absolute left-1 right-1 top-1 h-1/2 rounded-full bg-linear-to-b to-transparent pointer-events-none from-white/70"
					></span>
					<span
						aria-hidden="true"
						className="absolute inset-0 rounded-full ring-2 group-hover:ring-cyan-400/40 blur-sm transition-all duration-500 ring-cyan-400/0"
					></span>
					<span className="relative z-10 text-sm font-medium tracking-tight font-geist">Começar (Grátis)</span>
					<ArrowRight className="relative z-10 w-4 h-4" />
				</Button>

				<Button
					type="submit"
					className="md:hidden relative inline-flex items-center justify-center select-none ring-1 rounded-full w-12 h-12 backdrop-blur-xl transition-all duration-300 shadow-[0_8px_25px_rgba(0,0,0,0.4)] group overflow-hidden shrink-0 text-white/90 bg-white/5 hover:bg-white/10 ring-white/20 hover:ring-cyan-400/40"
					style={{
						boxShadow:
							'inset 0 0 0 1px rgba(255, 255, 255, 0.18), inset 0 -10px 25px rgba(0, 0, 0, 0.3), 0 8px 25px rgba(0, 0, 0, 0.35)',
					}}
				>
					<span
						aria-hidden="true"
						className="absolute inset-px rounded-full bg-linear-to-b from-white/18 via-white/8 to-white/5 pointer-events-none"
					></span>
					<span
						aria-hidden="true"
						className="absolute left-1 right-1 top-1 h-1/2 rounded-full bg-linear-to-b to-transparent pointer-events-none from-white/70"
					></span>
					<span
						aria-hidden="true"
						className="absolute inset-0 rounded-full ring-2 group-hover:ring-cyan-400/40 blur-sm transition-all duration-500 ring-cyan-400/0"
					></span>
					<ArrowRight className="relative z-10 w-5 h-5" />
				</Button>
			</div>
			{errors.email && (
				<p className="mt-2 text-sm text-red-400 font-geist">{errors.email.message}</p>
			)}
		</form>
	)
}

