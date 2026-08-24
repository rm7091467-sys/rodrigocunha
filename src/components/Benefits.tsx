import { LineChart, Users } from 'lucide-react'
import { TELEGRAM_URL } from '../config'
import Reveal from './Reveal'

const benefits = [
  {
    icon: LineChart,
    title: 'Análises Diárias',
    description:
      'Sinais de entrada e saída baseados em análise técnica profissional, enviados todos os dias direto para o teu Telegram.',
  },
  {
    icon: Users,
    title: 'Comunidade Exclusiva',
    description:
      'Junta-te a uma comunidade de traders dedicada, onde partilhamos estratégias, gestao de risco e suporte constante.',
  },
]

export default function Benefits() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Porquê juntar-te ao <span className="text-gradient-gold">SignalX</span>
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="mt-4 text-gray-400">
              Tudo o que precisas para dar o próximo passo no teu trading, num só lugar.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {benefits.map((b, i) => {
            const Icon = b.icon
            return (
              <Reveal key={b.title} delay={i * 120}>
                <div className="group relative h-full overflow-hidden rounded-3xl border border-gold/15 glass p-10 transition-all duration-500 hover:border-gold/40 hover:-translate-y-1.5 hover:shadow-[0_20px_60px_-20px_rgba(212,175,55,0.35)]">
                  <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-gold/5 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />

                  <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-gold/30 bg-gold/10 transition-all duration-500 group-hover:bg-gold/20 group-hover:scale-110">
                    <Icon className="h-7 w-7 text-gold" strokeWidth={1.75} />
                  </div>

                  <h3 className="relative mt-7 text-2xl font-semibold text-white">
                    {b.title}
                  </h3>
                  <p className="relative mt-4 text-base leading-relaxed text-gray-400">
                    {b.description}
                  </p>
                </div>
              </Reveal>
            )
          })}
        </div>

        <Reveal delay={150}>
          <div className="mt-16 text-center">
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 rounded-2xl border border-gold/40 bg-gold/5 px-8 py-4 text-base font-semibold text-gold-soft transition-all duration-300 hover:bg-gold hover:text-ink hover:-translate-y-0.5 gold-glow"
            >
              Entrar Gratuitamente no Telegram
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
