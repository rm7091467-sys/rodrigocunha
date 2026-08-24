import { Send, ShieldCheck, Sparkles } from 'lucide-react'
import { TELEGRAM_URL } from '../config'

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-24 md:pt-36 md:pb-32">
      {/* ambient glows */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-gold/10 blur-3xl animate-glow-pulse" />
      <div className="pointer-events-none absolute top-40 -right-32 h-[28rem] w-[28rem] rounded-full bg-gold/5 blur-3xl animate-glow-pulse" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-10">
          {/* left — copy */}
          <div className="flex flex-col items-start">
            <span className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5 text-xs font-medium tracking-wide text-gold-soft">
              <Sparkles className="h-3.5 w-3.5" />
              ANÁLISES PREMIUM DE TRADING
            </span>

            <h1 className="animate-fade-up animate-delay-100 mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
              Domina o mercado com
              <span className="block text-gradient-gold animate-shimmer">sinais de precisão</span>
            </h1>

            <p className="animate-fade-up animate-delay-200 mt-6 max-w-xl text-base leading-relaxed text-gray-400 sm:text-lg">
              Recebe análises diárias, gestao de risco profissional e uma comunidade
              exclusiva de traders. Tudo gratuito, direto no teu Telegram.
            </p>

            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="animate-fade-up animate-delay-300 group mt-9 inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-gold-soft via-gold to-gold-deep px-8 py-4 text-base font-semibold text-ink shadow-[0_8px_30px_-8px_rgba(212,175,55,0.6)] transition-all duration-300 hover:shadow-[0_12px_40px_-6px_rgba(212,175,55,0.8)] hover:-translate-y-0.5"
            >
              <Send className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5" />
              Entrar Gratuitamente no Telegram
            </a>

            <div className="animate-fade-up animate-delay-400 mt-8 flex items-center gap-5 text-sm text-gray-500">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-gold" />
                Sem custos
              </span>
              <span className="h-4 w-px bg-gray-700" />
              <span>Acesso imediato</span>
            </div>
          </div>

          {/* right — image */}
          <div className="animate-fade-in animate-delay-300 relative">
            <div className="absolute inset-0 -m-4 rounded-3xl bg-gold/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl border border-gold/20 glass">
              <img
                src="https://images.pexels.com/photos/38375326/pexels-photo-38375326.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Ecrãs com gráficos de trading em ambiente escuro"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
            </div>

            {/* floating stat card */}
            <div className="animate-float absolute -bottom-6 -left-4 hidden rounded-2xl border border-gold/20 glass px-5 py-4 shadow-xl sm:block">
              <p className="text-2xl font-bold text-white">+5.000</p>
              <p className="text-xs text-gray-400">traders ativos</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
