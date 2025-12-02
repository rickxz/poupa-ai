import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Header } from '@/components/layout/header'

const loginSchema = z.object({
	email: z.string().email('Email inválido'),
	password: z.string().min(6, 'A senha deve ter no mínimo 6 caracteres'),
})

type LoginFormData = z.infer<typeof loginSchema>

export function LoginPage() {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm<LoginFormData>({
		resolver: zodResolver(loginSchema),
	})

	const onSubmit = async (data: LoginFormData) => {
		console.log('Login data:', data)
	}

	return (
		<div className="antialiased selection:bg-white/10 selection:text-white text-neutral-100 bg-neutral-950 min-h-screen">
			<div
				className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
			/>

			<Header />

			<main className="relative flex items-center justify-center min-h-[calc(100vh-80px)] px-4 py-12">
				<div className="w-full max-w-md">
					<div className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-2xl p-8 shadow-2xl">
						<div className="text-center mb-8">
							<h1 className="text-3xl font-bold mb-2">Bem-vindo de volta</h1>
							<p className="text-neutral-400">
								Entre na sua conta para acessar seu dashboard financeiro
							</p>
						</div>

						<form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
							<div>
								<label htmlFor="email" className="block text-sm font-medium mb-2">
									E-mail
								</label>
								<input
									{...register('email')}
									id="email"
									type="email"
									placeholder="seu@email.com"
									className="w-full px-4 py-3 bg-neutral-800/50 border border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
								/>
								{errors.email && (
									<p className="mt-1 text-sm text-red-400">{errors.email.message}</p>
								)}
							</div>

							<div>
								<label htmlFor="password" className="block text-sm font-medium mb-2">
									Senha
								</label>
								<input
									{...register('password')}
									id="password"
									type="password"
									placeholder="Digite sua senha"
									className="w-full px-4 py-3 bg-neutral-800/50 border border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
								/>
								{errors.password && (
									<p className="mt-1 text-sm text-red-400">{errors.password.message}</p>
								)}
							</div>

							<div className="text-right">
								<a
									href="#"
									className="text-sm text-neutral-400 hover:text-emerald-400 transition-colors"
								>
									Esqueceu sua senha?
								</a>
							</div>

							<button
								type="submit"
								disabled={isSubmitting}
								className="w-full bg-emerald-500 hover:bg-emerald-600 disabled:bg-emerald-500/50 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-lg transition-all shadow-lg shadow-emerald-500/20"
							>
								{isSubmitting ? 'Entrando...' : 'Entrar'}
							</button>
						</form>

						<p className="mt-6 text-center text-sm text-neutral-400">
							Não tem conta?{' '}
							<a href="#" className="text-emerald-400 hover:text-emerald-300 transition-colors">
								Cadastre-se
							</a>
						</p>
					</div>
				</div>
			</main>
		</div>
	)
}
