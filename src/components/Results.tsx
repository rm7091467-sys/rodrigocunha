import { useCallback, useEffect, useRef, useState } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import Reveal from './Reveal'

type Slide = { src: string; alt: string }

const slides: Slide[] = [
  {
    src: 'https://images.pexels.com/photos/7108129/pexels-photo-7108129.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Análise de mercado num portátil com gráficos de ações',
  },
  {
    src: 'https://images.pexels.com/photos/7567565/pexels-photo-7567565.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Trader a celebrar sucesso no mercado de ações',
  },
  {
    src: 'https://images.pexels.com/photos/5716051/pexels-photo-5716051.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Análise de gráficos financeiros num portátil',
  },
  {
    src: 'https://images.pexels.com/photos/7567444/pexels-photo-7567444.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Trader bem-sucedido frente a um painel do mercado de ações',
  },
  {
    src: 'https://images.pexels.com/photos/7947742/pexels-photo-7947742.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Relatório de ações com gráfico de desempenho do mercado',
  },
  {
    src: 'https://images.pexels.com/photos/35719588/pexels-photo-35719588.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Ecrãs de trading com calculadora e gráficos de dados',
  },
]

export default function Results() {
  const [index, setIndex] = useState(0)
  const [lightbox, setLightbox] = useState<number | null>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const touchStartX = useRef<number | null>(null)

  const scrollTo = useCallback((i: number) => {
    const track = trackRef.current
    if (!track) return
    const card = track.children[i] as HTMLElement | undefined
    if (card) {
      track.scrollTo({ left: card.offsetLeft - track.offsetLeft, behavior: 'smooth' })
    }
    setIndex(i)
  }, [])

  const next = useCallback(() => {
    setIndex((prev) => {
      const n = (prev + 1) % slides.length
      scrollTo(n)
      return n
    })
  }, [scrollTo])

  const prev = useCallback(() => {
    setIndex((prev) => {
      const n = (prev - 1 + slides.length) % slides.length
      scrollTo(n)
      return n
    })
  }, [scrollTo])

  // auto-scroll
  useEffect(() => {
    const id = setInterval(next, 4000)
    return () => clearInterval(id)
  }, [next])

  // track active index on manual swipe
  const onScroll = () => {
    const track = trackRef.current
    if (!track) return
    const cardWidth = (track.children[0] as HTMLElement)?.offsetWidth ?? 1
    const gap = 32
    const i = Math.round(track.scrollLeft / (cardWidth + gap))
    if (i !== index && i >= 0 && i < slides.length) setIndex(i)
  }

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return
    const delta = e.changedTouches[0].clientX - touchStartX.current
    if (delta < -40) next()
    else if (delta > 40) prev()
    touchStartX.current = null
  }

  // lightbox keyboard
  useEffect(() => {
    if (lightbox === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightbox(null)
      if (e.key === 'ArrowRight') setLightbox((l) => (l === null ? l : (l + 1) % slides.length))
      if (e.key === 'ArrowLeft') setLightbox((l) => (l === null ? l : (l - 1 + slides.length) % slides.length))
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightbox])

  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Resultados dos <span className="text-gradient-gold">nossos alunos</span>
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="mt-4 text-gray-400">
              Histórias reais de traders que aplicaram o método e mudaram a sua trajetória.
            </p>
          </Reveal>
        </div>

        {/* controls */}
        <div className="mt-12 flex items-center justify-between">
          <div className="flex gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollTo(i)}
                aria-label={`Ir para slide ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === index ? 'w-7 bg-gold' : 'w-2 bg-gold/30 hover:bg-gold/50'
                }`}
              />
            ))}
          </div>
          <div className="hidden gap-2 sm:flex">
            <button
              onClick={prev}
              aria-label="Slide anterior"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-gold/30 bg-gold/5 text-gold transition-all duration-300 hover:bg-gold hover:text-ink"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={next}
              aria-label="Próximo slide"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-gold/30 bg-gold/5 text-gold transition-all duration-300 hover:bg-gold hover:text-ink"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* carousel track */}
        <div
          ref={trackRef}
          onScroll={onScroll}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          className="no-scrollbar mt-6 flex snap-x snap-mandatory gap-8 overflow-x-auto scroll-smooth pb-4"
        >
          {slides.map((slide, i) => (
            <button
              key={i}
              onClick={() => setLightbox(i)}
              className="group relative h-64 w-full flex-shrink-0 snap-center overflow-hidden rounded-3xl border border-gold/20 glass sm:h-80 sm:w-[28rem]"
              aria-label="Abrir imagem em ecrã inteiro"
            >
              <img
                src={slide.src}
                alt={slide.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute inset-0 ring-1 ring-inset ring-gold/0 transition-all duration-300 group-hover:ring-gold/40" />
            </button>
          ))}
        </div>
      </div>

      {/* lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm animate-fade-in"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-white/10"
            onClick={() => setLightbox(null)}
            aria-label="Fechar"
          >
            <X className="h-5 w-5" />
          </button>
          <button
            className="absolute left-4 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-white/10 sm:left-8"
            onClick={(e) => { e.stopPropagation(); setLightbox((l) => (l === null ? l : (l - 1 + slides.length) % slides.length)) }}
            aria-label="Anterior"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <img
            src={slides[lightbox].src}
            alt={slides[lightbox].alt}
            className="max-h-[85vh] max-w-full rounded-2xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="absolute right-4 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-white/10 sm:right-8"
            onClick={(e) => { e.stopPropagation(); setLightbox((l) => (l === null ? l : (l + 1) % slides.length)) }}
            aria-label="Próxima"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
          <span className="absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-4 py-1.5 text-sm text-white">
            {lightbox + 1} / {slides.length}
          </span>
        </div>
      )}
    </section>
  )
}
