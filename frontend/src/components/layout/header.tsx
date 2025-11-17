import { useState } from 'react'
import { Menu, X, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Header() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

	return (
		<header className="sticky supports-backdrop-filter:bg-neutral-950/60 border-neutral-800 z-50 border-b top-0 backdrop-blur">
			<div className="mx-auto max-w-7xl px-6 sm:px-8">
				<div className="h-16 flex items-center justify-between">
					<a href="#" className="flex items-center gap-2">
						<span className="sm:text-lg text-base font-semibold tracking-tight font-geist">Poupa AÍ</span>
					</a>

					<nav className="hidden md:flex items-center gap-8">
						<a href="#features" className="text-sm text-neutral-400 hover:text-white transition-colors font-geist">
							Funcionalidades
						</a>
						<a href="#how-it-works" className="text-sm text-neutral-400 font-geist">
							Como Funciona
						</a>
						<a href="#pricing" className="text-sm text-neutral-400 hover:text-white transition-colors font-geist">
							Planos
						</a>
						<a href="#" className="text-sm text-neutral-400 hover:text-white transition-colors font-geist">
							Educação
						</a>
						<Button className="rounded-full px-5 py-2.5 text-sm font-medium tracking-tight font-geist bg-emerald-600 text-white hover:bg-emerald-700">
							Comece Agora (Grátis)
							<ArrowRight className="w-4 h-4" />
						</Button>
					</nav>

					<button
						id="mobile-nav-toggle"
						className="md:hidden inline-flex items-center justify-center rounded-lg border border-neutral-800 w-10 h-10"
						onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
						aria-label="Toggle mobile menu"
					>
						{mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
					</button>
				</div>
			</div>
		</header>
	)
}

