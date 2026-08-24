import { Users, Headphones, Activity } from 'lucide-react'
import { useCountUp, useReveal } from '../hooks'
import Reveal from './Reveal'

type Stat = {
  icon: typeof Users
  display: string
  countTo?: number
  label: string
}

const stats: Stat[] = [
  { icon: Users, display: '+', countTo: 100, label: 'Alunos Ativos' },
  { icon: Headphones, display: 'Diário', label: 'Suporte Diário' },
  { icon: Activity, display: '24/7', label: 'Comunidade Ativa' },
]

function StatCard({ stat, delay }: { stat: Stat; delay: number }) {
  const { ref: revealRef, visible } = useReveal<HTMLDivElement>()
  const count = useCountUp(stat.countTo ?? 0)

  const valueText = stat.countTo
    ? `${count.value}${stat.display}`
    : stat.display

  return (
    <div
      ref={revealRef}
      className={`group relative overflow-hidden rounded-3xl border border-gold/15 glass p-10 text-center transition-all duration-700 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } hover:border-gold/40 hover:-translate-y-1.5 hover:shadow-[0_20px_60px_-20px_rgba(212,175,55,0.35)]`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-gold/5 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />

      <div className="relative mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-gold/30 bg-gold/10 transition-all duration-500 group-hover:bg-gold/20 group-hover:scale-110">
        <stat.icon className="h-7 w-7 text-gold" strokeWidth={1.75} />
      </div>

      <p className="relative mt-6 text-4xl font-extrabold text-white sm:text-5xl">
        <span ref={count.ref}>{valueText}</span>
      </p>
      <p className="relative mt-2 text-sm font-medium uppercase tracking-wider text-gray-400">
        {stat.label}
      </p>
    </div>
  )
}

export default function Stats() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Números que <span className="text-gradient-gold">falam por si</span>
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="mt-4 text-gray-400">
              Uma comunidade que cresce todos os dias, com resultados reais.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-3">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} delay={i * 120} />
          ))}
        </div>
      </div>
    </section>
  )
}
