import { Link } from 'react-router-dom';
import { Home, SearchX, ArrowLeft } from 'lucide-react';
import { Header } from '../components/layout/header';
import { Button } from '../components/ui/button';

export function NotFoundPage() {
  return (
    <div className="antialiased overflow-x-hidden selection:bg-white/10 selection:text-white text-neutral-100 bg-neutral-950 min-h-screen">
      <Header />

      <main className="flex items-center justify-center min-h-[calc(100vh-4rem)] px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-2xl mx-auto text-center">
          <div className="relative">
            <div className="absolute inset-0 flex items-center justify-center opacity-10">
              <SearchX className="w-96 h-96 text-emerald-500" strokeWidth={0.5} />
            </div>

            <div className="relative space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-900/50 border border-white/10 ring-1 ring-white/5">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                  </span>
                  <span className="text-sm font-semibold text-neutral-400">Erro 404</span>
                </div>

                <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold font-geist">
                  <span className="bg-linear-to-br from-neutral-100 via-neutral-300 to-neutral-500 bg-clip-text text-transparent">
                    404
                  </span>
                </h1>
              </div>

              <div className="space-y-3">
                <h2 className="text-2xl sm:text-3xl font-semibold text-neutral-100">
                  Página Não Encontrada
                </h2>
                <p className="text-neutral-400 max-w-md mx-auto">
                  A página que você está procurando não existe ou foi movida.
                  Vamos te ajudar a voltar ao caminho certo.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <Button
                  asChild
                  className="bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg shadow-emerald-500/20 transition-all"
                >
                  <Link to="/">
                    <Home className="w-4 h-4 mr-2" />
                    Ir para Início
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  className="border-white/10 bg-white/5 hover:bg-white/10 text-neutral-100 transition-all"
                >
                  <Link to="/dashboard">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Voltar ao Dashboard
                  </Link>
                </Button>
              </div>

              <div className="pt-8">
                <div className="inline-flex items-center gap-6 text-sm text-neutral-500">
                  <Link to="/" className="hover:text-emerald-500 transition-colors">
                    Início
                  </Link>
                  <span className="text-neutral-800">•</span>
                  <Link to="/dashboard" className="hover:text-emerald-500 transition-colors">
                    Dashboard
                  </Link>
                  <span className="text-neutral-800">•</span>
                  <Link to="/login" className="hover:text-emerald-500 transition-colors">
                    Login
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
