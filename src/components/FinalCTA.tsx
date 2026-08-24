import { Send } from 'lucide-react'
import { TELEGRAM_URL } from '../config'
import Reveal from './Reveal'

export default function FinalCTA() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-gold/25 glass px-8 py-16 text-center sm:px-16 md:py-24">
            {/* ambient glow */}
            <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-gold/15 blur-3xl animate-glow-pulse" />
            <div className="pointer-events-none absolute -bottom-32 -right-24 h-80 w-80 rounded-full bg-gold/10 blur-3xl animate-glow-pulse" />

            <div className="relative">
              <h2 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl md:text-5xl">
                O teu próximo grande trade
                <span className="block text-gradient-gold animate-shimmer">começa hoje</span>
              </h2>

              <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-gray-400 sm:text-lg">
                Junta-te a milhares de traders que já estão a transformar o seu trading
                com análises premium, gestão de risco e uma comunidade que te apoia todos os dias.
              </p>

              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-10 inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-gold-soft via-gold to-gold-deep px-10 py-5 text-lg font-semibold text-ink gold-glow transition-all duration-300 hover:-translate-y-0.5"
              >
                <Send className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5" />
                Entrar Gratuitamente no Telegram
              </a>

              <p className="mt-5 text-sm text-gray-500">
                Acesso imediato · Sem custos · Sem compromissos
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
