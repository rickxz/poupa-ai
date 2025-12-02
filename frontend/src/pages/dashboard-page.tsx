export function DashboardPage() {
	return (
		<div className="antialiased overflow-x-hidden selection:bg-white/10 selection:text-white text-neutral-100 bg-neutral-950 min-h-screen">
			<header className="sticky supports-[backdrop-filter]:bg-neutral-950/60 border-neutral-800 z-50 border-b top-0 backdrop-blur">
				<div className="w-full px-4 sm:px-6 lg:px-8">
					<div className="max-w-[1920px] mx-auto">
						<div className="h-16 flex items-center justify-between">
							<a href="/" className="flex items-center gap-2">
								<span className="sm:text-lg text-base font-semibold tracking-tight">Poupa AÍ</span>
							</a>

							<nav className="hidden md:flex items-center gap-6">
								<a href="/" className="text-sm text-neutral-400 hover:text-white transition-colors">Início</a>
								<div className="flex items-center gap-3">
									<img className="w-8 h-8 object-cover ring-1 rounded-full ring-white/15" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/2f70140f-4f5d-4ce1-bec2-b36510d07e52_320w.webp" alt="User" />
									<button className="text-sm text-neutral-400 hover:text-white transition-colors">Sair</button>
								</div>
							</nav>

							<button className="md:hidden inline-flex items-center justify-center rounded-lg border border-neutral-800 w-10 h-10">
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
									<path d="M4 5h16"></path>
									<path d="M4 12h16"></path>
									<path d="M4 19h16"></path>
								</svg>
							</button>
						</div>
					</div>
				</div>
			</header>

			<section className="w-full px-4 sm:px-6 lg:px-8 py-6">
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-6 max-w-[1920px] mx-auto">
					<aside className="lg:col-span-3">
						<div className="h-full rounded-xl border p-4 sm:p-5 ring-1 border-white/10 bg-neutral-900/90 ring-white/5">
							<div className="mt-5">
								<div className="relative">
									<svg xmlns="http://www.w3.org/2000/svg" className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
										<path d="m21 21-4.3-4.3"></path>
										<circle cx="11" cy="11" r="8"></circle>
									</svg>
									<input className="w-full rounded-xl ring-1 pl-9 pr-3 py-2.5 text-sm placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-emerald-400/40 bg-neutral-800/50 ring-white/10 text-white" placeholder="Buscar..." />
								</div>
							</div>

							<div className="mt-6">
								<p className="text-xs text-neutral-500 mb-3 uppercase tracking-wide">Navegação</p>
								<nav className="space-y-3">
									<a className="flex items-center justify-between rounded-xl bg-white/[0.06] ring-1 px-3 py-3 text-sm ring-white/10 text-white" href="#">
										<span className="inline-flex items-center gap-3">
											<span className="inline-flex h-8 w-8 items-center justify-center rounded-lg ring-1 bg-white/10 ring-white/10">
												<svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
													<rect x="3" y="3" width="7" height="7" rx="1"></rect>
													<rect x="14" y="3" width="7" height="7" rx="1"></rect>
													<rect x="14" y="14" width="7" height="7" rx="1"></rect>
													<rect x="3" y="14" width="7" height="7" rx="1"></rect>
												</svg>
											</span>
											Visão Geral
										</span>
										<span className="h-2 w-2 rounded-full bg-emerald-400"></span>
									</a>

									<a className="flex items-center gap-3 rounded-xl ring-1 px-3 py-3 text-sm transition-colors hover:bg-white/5 ring-white/10 text-neutral-300" href="#">
										<span className="inline-flex h-8 w-8 items-center justify-center rounded-lg ring-1 bg-white/5 ring-white/10">
											<svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
												<path d="M18 6H6"></path>
												<path d="M6 12h12"></path>
												<path d="M6 18h12"></path>
											</svg>
										</span>
										Transações
									</a>

									<a className="flex items-center gap-3 rounded-xl ring-1 px-3 py-3 text-sm transition-colors hover:bg-white/5 ring-white/10 text-neutral-300" href="#">
										<span className="inline-flex h-8 w-8 items-center justify-center rounded-lg ring-1 bg-white/5 ring-white/10">
											<svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
												<rect x="2" y="5" width="20" height="14" rx="2"></rect>
												<path d="M2 10h20"></path>
											</svg>
										</span>
										Categorias
									</a>
								</nav>
							</div>

							<div className="mt-8">
								<p className="text-xs text-neutral-500 mb-3 uppercase tracking-wide">Assistente de IA</p>
								<div className="rounded-xl bg-white/[0.06] ring-1 p-3 flex items-center gap-3 ring-white/10">
									<span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/15 ring-1 text-emerald-300 ring-emerald-400/30">
										<svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
											<path d="M12 3v18"></path>
											<path d="M3 12h18"></path>
										</svg>
									</span>
									<div className="text-sm">
										<p className="tracking-tight font-medium text-white">Orçamento Inteligente</p>
										<p className="text-xs text-neutral-400">Rastreamento com IA</p>
									</div>
								</div>
							</div>
						</div>
					</aside>

					<main className="lg:col-span-9 space-y-6">
						<div className="w-full rounded-2xl ring-1 p-5 border bg-neutral-900/95 ring-white/10 border-white/10">
							<div className="flex items-start justify-between">
								<div>
									<div className="flex items-baseline gap-2">
										<p className="text-3xl font-light tracking-tight text-white">R$ 742.560</p>
										<span className="text-xs rounded-full px-2 py-0.5 font-medium text-neutral-900 bg-emerald-400">+2.1%</span>
									</div>
									<p className="mt-1 text-xs text-neutral-400">Orçamento Mensal</p>
								</div>
							</div>

							<div className="mt-6">
								<div className="relative h-64 sm:h-80 md:h-96">
									<div className="w-full h-full flex items-center justify-center text-neutral-500">
										[Chart Placeholder]
									</div>
								</div>
							</div>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
							<div className="rounded-2xl ring-1 p-5 border bg-neutral-900/95 ring-white/10 border-white/10">
								<div className="flex items-center justify-between">
									<p className="text-sm text-neutral-400">Receitas Mensais</p>
								</div>
								<div className="mt-3 flex items-baseline gap-2">
									<p className="text-3xl sm:text-xl font-semibold tracking-tight text-white">R$ 31.240,12</p>
									<span className="text-xs rounded-full px-2 py-0.5 font-medium text-neutral-900 bg-emerald-400">+4.2%</span>
								</div>
								<p className="mt-1 text-xs text-neutral-500">vs. semana anterior</p>
							</div>

							<div className="rounded-2xl ring-1 p-5 border bg-neutral-900/95 ring-white/10 border-white/10">
								<div className="flex items-center justify-between">
									<p className="text-sm text-neutral-400">Despesas Mensais</p>
									<span className="inline-flex h-8 w-8 items-center justify-center rounded-lg ring-1 bg-white/5 ring-white/10">
										<svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-neutral-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
											<path d="M3 3v18h18"></path>
											<path d="M18 6 6 18"></path>
										</svg>
									</span>
								</div>
								<div className="mt-3 flex items-baseline gap-2">
									<p className="text-3xl sm:text-xl font-semibold tracking-tight text-white">R$ 4.860,00</p>
									<span className="text-xs rounded-full px-2 py-0.5 font-medium text-neutral-900 bg-emerald-400">-1.3%</span>
								</div>
								<p className="mt-1 text-xs text-neutral-500">vs. semana anterior</p>
							</div>

							<div className="rounded-2xl ring-1 p-5 border bg-neutral-900/95 ring-white/10 border-white/10">
								<div className="flex items-center justify-between">
									<p className="text-sm text-neutral-400">Meta de Economia</p>
									<span className="inline-flex h-8 w-8 items-center justify-center rounded-lg ring-1 bg-white/5 ring-white/10">
										<svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-neutral-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
											<circle cx="12" cy="12" r="10"></circle>
											<path d="M12 6v6l4 2"></path>
										</svg>
									</span>
								</div>
								<div className="mt-3 flex items-baseline gap-2">
									<p className="text-3xl sm:text-xl font-semibold tracking-tight text-white">R$ 2.140,00</p>
									<span className="text-xs rounded-full px-2 py-0.5 font-medium text-neutral-900 bg-emerald-400">-0.9%</span>
								</div>
								<p className="mt-1 text-xs text-neutral-500">últimos 30 dias</p>
							</div>

							<div className="rounded-2xl ring-1 p-5 border bg-neutral-900/95 ring-white/10 border-white/10">
								<div className="flex items-center justify-between">
									<p className="text-sm text-neutral-400">Saldo Atual</p>
									<span className="inline-flex h-8 w-8 items-center justify-center rounded-lg ring-1 bg-white/5 ring-white/10">
										<svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-neutral-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
											<rect x="2" y="5" width="20" height="14" rx="2"></rect>
											<path d="M2 10h20"></path>
										</svg>
									</span>
								</div>
								<div className="mt-3 flex items-baseline gap-2">
									<p className="text-3xl sm:text-xl font-semibold tracking-tight text-white">R$ 3.980,55</p>
									<span className="text-xs rounded-full px-2 py-0.5 font-medium text-neutral-900 bg-emerald-400">+1.7%</span>
								</div>
								<p className="mt-1 text-xs text-neutral-500">mês atual</p>
							</div>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
							<button className="flex items-center justify-center gap-2 rounded-2xl ring-1 p-4 border bg-emerald-600/95 hover:bg-emerald-600/70 ring-white/10 border-white/10 text-neutral-300 hover:text-white transition-colors">
								<svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
									<path d="M12 5v14"></path>
									<path d="M5 12h14"></path>
								</svg>
								<span className="text-sm font-medium tracking-tight">Adicionar Receita</span>
							</button>
							<button className="flex items-center justify-center gap-2 rounded-2xl ring-1 p-4 border bg-neutral-900/95 text-white hover:bg-neutral-900/70 ring-white/10 border-white/10 transition-colors">
								<svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
									<path d="M5 12h14"></path>
									<path d="m12 5 7 7-7 7"></path>
								</svg>
								<span className="text-sm font-medium tracking-tight">Nova Transação</span>
							</button>
							<button className="flex items-center justify-center gap-2 rounded-2xl ring-1 p-4 border bg-red-500/95 hover:bg-red-500/70 ring-white/10 border-white/10 text-neutral-300 hover:text-white transition-colors">
								<svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
									<path d="M5 12h14"></path>
								</svg>
								<span className="text-sm font-medium tracking-tight">Adicionar Despesa</span>
							</button>
						</div>

						<div className="rounded-2xl ring-1 p-5 border bg-neutral-900/95 ring-white/10 border-white/10 mt-6">
							<div className="flex items-center justify-between mb-4">
								<h3 className="text-lg font-semibold tracking-tight text-white">Transações Recentes</h3>
								<a href="#" className="text-sm text-emerald-300 hover:text-emerald-400 transition-colors">Ver todas</a>
							</div>
							<div className="space-y-3">
								<div className="flex items-center justify-between p-3 rounded-xl ring-1 bg-white/[0.06] ring-white/10 hover:bg-white/[0.08] transition-colors">
									<div className="flex items-center gap-4 flex-1">
										<div className="text-sm text-neutral-400 w-20">15/01</div>
										<div className="flex-1">
											<p className="text-sm font-medium text-white">Salário mensal</p>
											<div className="flex items-center gap-2 mt-1">
												<span className="text-xs px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 ring-1 ring-emerald-400/30">Salário</span>
												<span className="text-xs text-neutral-500">Receita</span>
											</div>
										</div>
										<div className="text-right">
											<p className="text-sm font-semibold text-emerald-400">+R$ 5.000,00</p>
										</div>
										<div className="flex items-center gap-2">
											<button className="p-2 rounded-lg hover:bg-white/5 transition-colors">
												<svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-neutral-400 hover:text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
													<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
													<path d="m18.5 2.5 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
												</svg>
											</button>
											<button className="p-2 rounded-lg hover:bg-white/5 transition-colors">
												<svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-neutral-400 hover:text-red-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
													<path d="M3 6h18"></path>
													<path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path>
													<path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
												</svg>
											</button>
										</div>
									</div>
								</div>

								<div className="flex items-center justify-between p-3 rounded-xl ring-1 bg-white/[0.06] ring-white/10 hover:bg-white/[0.08] transition-colors">
									<div className="flex items-center gap-4 flex-1">
										<div className="text-sm text-neutral-400 w-20">14/01</div>
										<div className="flex-1">
											<p className="text-sm font-medium text-white">Supermercado</p>
											<div className="flex items-center gap-2 mt-1">
												<span className="text-xs px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 ring-1 ring-emerald-400/30">Alimentação</span>
												<span className="text-xs text-neutral-500">Despesa</span>
											</div>
										</div>
										<div className="text-right">
											<p className="text-sm font-semibold text-red-400">-R$ 350,00</p>
										</div>
										<div className="flex items-center gap-2">
											<button className="p-2 rounded-lg hover:bg-white/5 transition-colors">
												<svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-neutral-400 hover:text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
													<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
													<path d="m18.5 2.5 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
												</svg>
											</button>
											<button className="p-2 rounded-lg hover:bg-white/5 transition-colors">
												<svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-neutral-400 hover:text-red-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
													<path d="M3 6h18"></path>
													<path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path>
													<path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
												</svg>
											</button>
										</div>
									</div>
								</div>

								<div className="flex items-center justify-between p-3 rounded-xl ring-1 bg-white/[0.06] ring-white/10 hover:bg-white/[0.08] transition-colors">
									<div className="flex items-center gap-4 flex-1">
										<div className="text-sm text-neutral-400 w-20">13/01</div>
										<div className="flex-1">
											<p className="text-sm font-medium text-white">Uber</p>
											<div className="flex items-center gap-2 mt-1">
												<span className="text-xs px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 ring-1 ring-emerald-400/30">Transporte</span>
												<span className="text-xs text-neutral-500">Despesa</span>
											</div>
										</div>
										<div className="text-right">
											<p className="text-sm font-semibold text-red-400">-R$ 45,50</p>
										</div>
										<div className="flex items-center gap-2">
											<button className="p-2 rounded-lg hover:bg-white/5 transition-colors">
												<svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-neutral-400 hover:text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
													<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
													<path d="m18.5 2.5 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
												</svg>
											</button>
											<button className="p-2 rounded-lg hover:bg-white/5 transition-colors">
												<svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-neutral-400 hover:text-red-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
													<path d="M3 6h18"></path>
													<path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path>
													<path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
												</svg>
											</button>
										</div>
									</div>
								</div>

								<div className="flex items-center justify-between p-3 rounded-xl ring-1 bg-white/[0.06] ring-white/10 hover:bg-white/[0.08] transition-colors">
									<div className="flex items-center gap-4 flex-1">
										<div className="text-sm text-neutral-400 w-20">12/01</div>
										<div className="flex-1">
											<p className="text-sm font-medium text-white">Freelance Design</p>
											<div className="flex items-center gap-2 mt-1">
												<span className="text-xs px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 ring-1 ring-emerald-400/30">Trabalho</span>
												<span className="text-xs text-neutral-500">Receita</span>
											</div>
										</div>
										<div className="text-right">
											<p className="text-sm font-semibold text-emerald-400">+R$ 1.200,00</p>
										</div>
										<div className="flex items-center gap-2">
											<button className="p-2 rounded-lg hover:bg-white/5 transition-colors">
												<svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-neutral-400 hover:text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
													<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
													<path d="m18.5 2.5 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
												</svg>
											</button>
											<button className="p-2 rounded-lg hover:bg-white/5 transition-colors">
												<svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-neutral-400 hover:text-red-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
													<path d="M3 6h18"></path>
													<path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path>
													<path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
												</svg>
											</button>
										</div>
									</div>
								</div>

								<div className="flex items-center justify-between p-3 rounded-xl ring-1 bg-white/[0.06] ring-white/10 hover:bg-white/[0.08] transition-colors">
									<div className="flex items-center gap-4 flex-1">
										<div className="text-sm text-neutral-400 w-20">11/01</div>
										<div className="flex-1">
											<p className="text-sm font-medium text-white">Netflix</p>
											<div className="flex items-center gap-2 mt-1">
												<span className="text-xs px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 ring-1 ring-emerald-400/30">Lazer</span>
												<span className="text-xs text-neutral-500">Despesa</span>
											</div>
										</div>
										<div className="text-right">
											<p className="text-sm font-semibold text-red-400">-R$ 45,90</p>
										</div>
										<div className="flex items-center gap-2">
											<button className="p-2 rounded-lg hover:bg-white/5 transition-colors">
												<svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-neutral-400 hover:text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
													<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
													<path d="m18.5 2.5 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
												</svg>
											</button>
											<button className="p-2 rounded-lg hover:bg-white/5 transition-colors">
												<svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-neutral-400 hover:text-red-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
													<path d="M3 6h18"></path>
													<path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path>
													<path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
												</svg>
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="rounded-2xl ring-1 p-5 border bg-neutral-900/95 ring-white/10 border-white/10 mt-6">
							<h3 className="text-lg font-semibold tracking-tight text-white mb-4">Gastos por Categoria</h3>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
								<div className="relative h-64">
									<div className="w-full h-full flex items-center justify-center text-neutral-500">
										[Chart Placeholder]
									</div>
								</div>
								<div className="space-y-3">
									<div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.06] ring-1 ring-white/10">
										<div className="flex items-center gap-3">
											<div className="w-3 h-3 rounded-full bg-emerald-400"></div>
											<span className="text-sm text-white">Alimentação</span>
										</div>
										<span className="text-sm font-semibold text-white">35%</span>
									</div>
									<div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.06] ring-1 ring-white/10">
										<div className="flex items-center gap-3">
											<div className="w-3 h-3 rounded-full bg-emerald-500"></div>
											<span className="text-sm text-white">Transporte</span>
										</div>
										<span className="text-sm font-semibold text-white">25%</span>
									</div>
									<div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.06] ring-1 ring-white/10">
										<div className="flex items-center gap-3">
											<div className="w-3 h-3 rounded-full bg-lime-400"></div>
											<span className="text-sm text-white">Lazer</span>
										</div>
										<span className="text-sm font-semibold text-white">20%</span>
									</div>
									<div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.06] ring-1 ring-white/10">
										<div className="flex items-center gap-3">
											<div className="w-3 h-3 rounded-full bg-emerald-600"></div>
											<span className="text-sm text-white">Saúde</span>
										</div>
										<span className="text-sm font-semibold text-white">15%</span>
									</div>
									<div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.06] ring-1 ring-white/10">
										<div className="flex items-center gap-3">
											<div className="w-3 h-3 rounded-full bg-neutral-500"></div>
											<span className="text-sm text-white">Outros</span>
										</div>
										<span className="text-sm font-semibold text-white">5%</span>
									</div>
								</div>
							</div>
						</div>

						<div className="rounded-2xl ring-1 p-5 border bg-neutral-900/95 ring-emerald-500/30 border-white/10 mt-6 relative overflow-hidden">
							<div className="flex items-center gap-3 mb-4">
								<svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-emerald-300 opacity-50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
									<path d="M12 2v4"></path>
									<path d="M12 18v4"></path>
									<path d="M4.93 4.93l2.83 2.83"></path>
									<path d="M16.24 16.24l2.83 2.83"></path>
									<path d="M2 12h4"></path>
									<path d="M18 12h4"></path>
									<path d="M4.93 19.07l2.83-2.83"></path>
									<path d="M16.24 7.76l2.83-2.83"></path>
								</svg>
								<h3 className="text-lg font-semibold tracking-tight text-white">Insights da IA</h3>
							</div>
							<div className="relative blur-sm pointer-events-none">
								<div className="space-y-3 opacity-50">
									<div className="p-4 rounded-xl bg-white/[0.06] ring-1 ring-white/10">
										<p className="text-sm text-neutral-400">Análise de padrões de gastos...</p>
									</div>
									<div className="p-4 rounded-xl bg-white/[0.06] ring-1 ring-white/10">
										<p className="text-sm text-neutral-400">Sugestões de economia personalizadas...</p>
									</div>
								</div>
							</div>
							<div className="absolute inset-0 flex items-center justify-center bg-neutral-900/60 backdrop-blur-sm">
								<div className="text-center">
									<p className="text-lg font-semibold text-emerald-300 mb-1">Em desenvolvimento...</p>
									<p className="text-sm text-neutral-400">Esta funcionalidade estará disponível em breve</p>
								</div>
							</div>
						</div>

						<div className="rounded-2xl ring-1 p-5 border bg-neutral-900/95 ring-white/10 border-white/10 mt-6">
							<h3 className="text-lg font-semibold tracking-tight text-white mb-4">Próximas Contas</h3>
							<div className="space-y-3">
								<div className="flex items-center justify-between p-4 rounded-xl ring-1 bg-white/[0.06] ring-white/10 hover:bg-white/[0.08] transition-colors">
									<div className="flex items-center gap-4 flex-1">
										<div className="w-12 h-12 rounded-xl bg-emerald-500/15 ring-1 ring-emerald-400/30 flex items-center justify-center">
											<svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-emerald-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
												<rect x="2" y="5" width="20" height="14" rx="2"></rect>
												<path d="M2 10h20"></path>
											</svg>
										</div>
										<div className="flex-1">
											<p className="text-sm font-medium text-white">Aluguel</p>
											<p className="text-xs text-neutral-400 mt-1">Vencimento: 05/02/2024</p>
										</div>
										<div className="text-right">
											<p className="text-sm font-semibold text-white">R$ 1.200,00</p>
											<p className="text-xs text-emerald-400 mt-1">Em 21 dias</p>
										</div>
									</div>
								</div>

								<div className="flex items-center justify-between p-4 rounded-xl ring-1 bg-white/[0.06] ring-white/10 hover:bg-white/[0.08] transition-colors">
									<div className="flex items-center gap-4 flex-1">
										<div className="w-12 h-12 rounded-xl bg-emerald-500/15 ring-1 ring-emerald-400/30 flex items-center justify-center">
											<svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-emerald-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
												<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
											</svg>
										</div>
										<div className="flex-1">
											<p className="text-sm font-medium text-white">Internet</p>
											<p className="text-xs text-neutral-400 mt-1">Vencimento: 10/02/2024</p>
										</div>
										<div className="text-right">
											<p className="text-sm font-semibold text-white">R$ 89,90</p>
											<p className="text-xs text-emerald-400 mt-1">Em 26 dias</p>
										</div>
									</div>
								</div>

								<div className="flex items-center justify-between p-4 rounded-xl ring-1 bg-white/[0.06] ring-white/10 hover:bg-white/[0.08] transition-colors">
									<div className="flex items-center gap-4 flex-1">
										<div className="w-12 h-12 rounded-xl bg-lime-500/15 ring-1 ring-lime-400/30 flex items-center justify-center">
											<svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-lime-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
												<path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
											</svg>
										</div>
										<div className="flex-1">
											<p className="text-sm font-medium text-white">Energia</p>
											<p className="text-xs text-neutral-400 mt-1">Vencimento: 15/02/2024</p>
										</div>
										<div className="text-right">
											<p className="text-sm font-semibold text-white">R$ 150,00</p>
											<p className="text-xs text-lime-400 mt-1">Em 31 dias</p>
										</div>
									</div>
								</div>

								<div className="flex items-center justify-between p-4 rounded-xl ring-1 bg-white/[0.06] ring-white/10 hover:bg-white/[0.08] transition-colors">
									<div className="flex items-center gap-4 flex-1">
										<div className="w-12 h-12 rounded-xl bg-emerald-500/15 ring-1 ring-emerald-400/30 flex items-center justify-center">
											<svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-emerald-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
												<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
												<circle cx="12" cy="10" r="3"></circle>
											</svg>
										</div>
										<div className="flex-1">
											<p className="text-sm font-medium text-white">Água</p>
											<p className="text-xs text-neutral-400 mt-1">Vencimento: 20/02/2024</p>
										</div>
										<div className="text-right">
											<p className="text-sm font-semibold text-white">R$ 65,00</p>
											<p className="text-xs text-emerald-400 mt-1">Em 36 dias</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</main>
				</div>
			</section>
		</div>
	)
}
