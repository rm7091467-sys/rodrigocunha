import { TrendingUp } from 'lucide-react'
import { TELEGRAM_URL } from './config'
import Hero from './components/Hero'
import Benefits from './components/Benefits'
import Stats from './components/Stats'
import Results from './components/Results'
import HowItWorks from './components/HowItWorks'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'

export default function App() {
  return (
    <div className="min-h-screen bg-ink">
      {/* header */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-ink/80 backdrop-blur-lg">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#" className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-gold/30 bg-gold/10">
              <TrendingUp className="h-5 w-5 text-gold" strokeWidth={2} />
            </div>
            <span className="font-display text-lg font-bold tracking-tight text-white">
              Signal<span className="text-gold">X</span>
            </span>
          </a>

          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-gold/30 bg-gold/5 px-5 py-2 text-sm font-medium text-gold-soft transition-all duration-300 hover:bg-gold hover:text-ink"
          >
            Entrar no Telegram
          </a>
        </div>
      </header>

      <main>
        <Hero />
        <Benefits />
        <Stats />
        <Results />
        <HowItWorks />
        <FAQ />
        <FinalCTA />
      </main>

      {/* footer */}
      <footer className="border-t border-white/5 py-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-gold/30 bg-gold/10">
                <TrendingUp className="h-4 w-4 text-gold" strokeWidth={2} />
              </div>
              <span className="font-display text-base font-bold text-white">
                Signal<span className="text-gold">X</span> Academy
              </span>
            </div>
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} SignalX Academy. Todos os direitos reservados.
            </p>
          </div>
          <p className="mt-6 text-center text-xs text-gray-600">
            O trading envolve risco. Não é aconselhamento financeiro. Opera apenas com capital que podes perder.
          </p>
        </div>
      </footer>
    </div>
  )
}
