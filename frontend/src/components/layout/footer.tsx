export function Footer() {
	return (
		<footer className="sm:px-8 sm:py-20 max-w-7xl border-neutral-800 border-t mt-24 mr-auto ml-auto pt-14 pr-6 pb-14 pl-6">
			<div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
				<div>
					<span className="text-lg font-semibold tracking-tight text-white font-geist">Poupa AÍ</span>
					<p className="mt-4 text-sm text-neutral-400 font-geist">Assistente financeiro inteligente para todos.</p>
				</div>
				<div>
					<h3 className="text-sm font-medium text-white font-geist mb-4">Produto</h3>
					<nav className="space-y-3">
						<a href="#" className="block hover:text-white text-sm text-neutral-400 font-geist">
							Funcionalidades
						</a>
						<a href="#" className="block text-sm text-neutral-400 hover:text-white font-geist">
							Planos
						</a>
						<a href="#" className="block text-neutral-400 hover:text-white text-sm font-geist">
							Segurança
						</a>
					</nav>
				</div>
				<div>
					<h3 className="text-sm font-medium text-white mb-4 font-geist">Empresa</h3>
					<nav className="space-y-3">
						<a href="#" className="block text-sm text-neutral-400 hover:text-white font-geist">
							Sobre
						</a>
						<a href="#" className="block text-sm text-neutral-400 hover:text-white font-geist">
							Blog
						</a>
						<a href="#" className="block text-sm text-neutral-400 hover:text-white font-geist">
							Carreiras
						</a>
					</nav>
				</div>
				<div>
					<h3 className="text-sm font-medium text-white mb-4 font-geist">Suporte</h3>
					<nav className="space-y-3">
						<a href="#" className="block text-sm text-neutral-400 hover:text-white font-geist">
							Central de Ajuda
						</a>
						<a href="#" className="block text-sm text-neutral-400 hover:text-white font-geist">
							Contato
						</a>
						<a href="#" className="block text-sm text-neutral-400 hover:text-white font-geist">
							Privacidade
						</a>
					</nav>
				</div>
			</div>
			<div className="pt-8 border-t border-neutral-800">
				<p className="text-sm text-neutral-400 font-geist">© 2025 Poupa AÍ. Todos os direitos reservados.</p>
			</div>
		</footer>
	)
}

