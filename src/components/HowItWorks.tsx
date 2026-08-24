import { UserPlus, Bell, TrendingUp, BarChart3 } from 'lucide-react'
import Reveal from './Reveal'

const steps = [
  {
    num: '01',
    icon: UserPlus,
    title: 'Entrar gratuitamente na comunidade',
    description: 'Junta-te ao nosso Telegram em segundos, sem custos e sem compromissos.',
  },
  {
    num: '02',
    icon: Bell,
    title: 'Receber sinais e estratégias',
    description: 'Recebe análises e sinais profissionais diretamente no teu telemóvel todos os dias.',
  },
  {
    num: '03',
    icon: TrendingUp,
    title: 'Aplicar o método',
    description: 'Segue as entradas com a gestão de risco recomendada e mantém a disciplina.',
  },
  {
    num: '04',
    icon: BarChart3,
    title: 'Acompanhar os resultados',
    description: 'Regista as tuas operações e acompanha a tua evolução com a comunidade.',
  },
]

export default function HowItWorks() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Como <span className="text-gradient-gold">funciona</span>
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="mt-4 text-gray-400">
              Quatro passos simples para começares a tua jornada no trading.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <Reveal key={step.num} delay={i * 120}>
                <div className="group relative h-full overflow-hidden rounded-3xl border border-gold/15 glass p-8 transition-all duration-500 hover:border-gold/40 hover:-translate-y-1.5 hover:shadow-[0_20px_60px_-20px_rgba(212,175,55,0.35)]">
                  <div className="pointer-events-none absolute -right-4 -top-6 text-8xl font-extrabold text-white/5 transition-colors duration-500 group-hover:text-gold/10">
                    {step.num}
                  </div>

                  <div className="relative">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-gold/30 bg-gold/10 transition-all duration-500 group-hover:bg-gold/20 group-hover:scale-110">
                      <Icon className="h-6 w-6 text-gold" strokeWidth={1.75} />
                    </div>

                    <div className="mt-5 text-sm font-semibold uppercase tracking-wider text-gold">
                      Passo {step.num}
                    </div>
                    <h3 className="mt-2 text-lg font-semibold text-white">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-gray-400">
                      {step.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
