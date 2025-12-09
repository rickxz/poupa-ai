import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Header } from '@/components/layout/header'
import { Link } from 'react-router-dom'
import { useRegister } from '@/hooks/use-auth'
import { useState } from 'react'

const signupSchema = z.object({
	name: z.string().min(1, 'Nome é obrigatório'),
	email: z.string().email('Email inválido'),
	password: z.string().min(6, 'A senha deve ter no mínimo 6 caracteres'),
	confirmPassword: z.string().min(6, 'A senha deve ter no mínimo 6 caracteres'),
}).refine((data) => data.password === data.confirmPassword, {
	message: 'As senhas não coincidem',
	path: ['confirmPassword'],
})

type SignupFormData = z.infer<typeof signupSchema>

export function SignupPage() {
	const [errorMessage, setErrorMessage] = useState<string | null>(null)
	const [successMessage, setSuccessMessage] = useState<string | null>(null)
	const registerMutation = useRegister()

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<SignupFormData>({
		resolver: zodResolver(signupSchema),
	})

	const onSubmit = async (data: SignupFormData) => {
		setErrorMessage(null)
		setSuccessMessage(null)
		try {
			await registerMutation.mutateAsync({
				name: data.name,
				email: data.email,
				password: data.password,
			})
			setSuccessMessage('Conta criada com sucesso! Redirecionando para login...')
		} catch (error: any) {
			setErrorMessage(
				error.response?.data?.message || 'Erro ao criar conta. Tente novamente.'
			)
		}
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
							<h1 className="text-3xl font-bold mb-2">Crie sua conta</h1>
							<p className="text-neutral-400">
								Comece a gerenciar suas finanças com inteligência
							</p>
						</div>

						<form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
							{errorMessage && (
								<div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg">
									<p className="text-sm text-red-400">{errorMessage}</p>
								</div>
							)}

							{successMessage && (
								<div className="p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-lg">
									<p className="text-sm text-emerald-400">{successMessage}</p>
								</div>
							)}

							<div>
								<label htmlFor="name" className="block text-sm font-medium mb-2">
									Nome
								</label>
								<input
									{...register('name')}
									id="name"
									type="text"
									placeholder="Seu nome completo"
									className="w-full px-4 py-3 bg-neutral-800/50 border border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
								/>
								{errors.name && (
									<p className="mt-1 text-sm text-red-400">{errors.name.message}</p>
								)}
							</div>

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
									placeholder="Mínimo 6 caracteres"
									className="w-full px-4 py-3 bg-neutral-800/50 border border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
								/>
								{errors.password && (
									<p className="mt-1 text-sm text-red-400">{errors.password.message}</p>
								)}
							</div>

							<div>
								<label htmlFor="confirmPassword" className="block text-sm font-medium mb-2">
									Confirmar Senha
								</label>
								<input
									{...register('confirmPassword')}
									id="confirmPassword"
									type="password"
									placeholder="Confirme sua senha"
									className="w-full px-4 py-3 bg-neutral-800/50 border border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
								/>
								{errors.confirmPassword && (
									<p className="mt-1 text-sm text-red-400">{errors.confirmPassword.message}</p>
								)}
							</div>

							<button
								type="submit"
								disabled={registerMutation.isPending}
								className="w-full bg-emerald-500 hover:bg-emerald-600 disabled:bg-emerald-500/50 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-lg transition-all shadow-lg shadow-emerald-500/20"
							>
								{registerMutation.isPending ? 'Cadastrando...' : 'Cadastrar'}
							</button>
						</form>

						<p className="mt-6 text-center text-sm text-neutral-400">
							Já tem uma conta?{' '}
							<Link to="/login" className="text-emerald-400 hover:text-emerald-300 transition-colors">
								Entrar
							</Link>
						</p>
					</div>
				</div>
			</main>
		</div>
	)
}
