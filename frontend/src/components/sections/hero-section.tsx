import { EmailSignupForm } from '@/components/forms/email-signup-form'
import { DashboardMockup } from '@/components/ui/dashboard-mockup'

export function HeroSection() {
	return (
		<main className="sm:px-8 sm:mt-24 max-w-7xl mt-16 mr-auto ml-auto pr-4 pl-4">
			<div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-16 gap-x-10 gap-y-10 items-center">
				<div className="lg:col-span-5">
					<h1 className="text-[clamp(2rem,6vw,4rem)] leading-[0.95] text-white font-light tracking-tight font-geist">
						Inteligência financeira. Bem AÍ, na palma da sua mão.
					</h1>
					<p className="text-neutral-400 leading-8 text-lg font-geist mt-6">
						O Poupa AÍ é o aplicativo de gestão financeira pessoal e empresarial que une simplicidade e
						Inteligência Artificial para resolver o maior problema do brasileiro: a falta de controle sobre o
						próprio dinheiro.
					</p>

					<EmailSignupForm />

					<div className="flex mt-10 gap-x-8 gap-y-8 items-center">
						<div>
							<div className="text-2xl font-light text-white tracking-tight font-geist">+70%</div>
							<div className="text-sm text-neutral-400 font-geist">dos brasileiros não possuem planejamento financeiro.</div>
						</div>
					</div>
				</div>

				<div className="lg:col-span-7 opacity-100">
					<DashboardMockup />
				</div>
			</div>
		</main>
	)
}
