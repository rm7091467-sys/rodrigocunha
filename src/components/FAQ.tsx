import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import Reveal from './Reveal'

const faqs = [
  {
    q: 'O acesso ao Telegram é mesmo gratuito?',
    a: 'Sim. O acesso à comunidade e aos sinais diários é totalmente gratuito. Não pedimos cartão de crédito nem qualquer pagamento para entrares.',
  },
  {
    q: 'Preciso de experiência prévia em trading?',
    a: 'Não. A nossa comunidade foi pensada para todos os níveis. Recebes sinais com pontos de entrada e saída claros, além de suporte para tirares dúvidas.',
  },
  {
    q: 'Que instrumentos analisam?',
    a: 'Focamo-nos principalmente em Forex, índices e criptomoedas. As análises são enviadas diariamente com a gestão de risco recomendada.',
  },
  {
    q: 'Posso sair da comunidade quando quiser?',
    a: 'Claro. Podes sair a qualquer momento sem qualquer compromisso. Estás no controlo total.',
  },
  {
    q: 'O trading tem riscos?',
    a: 'Sim. O trading envolve risco de perda e não é aconselhamento financeiro. Opera apenas com capital que podes perder e segue sempre uma gestão de risco rigorosa.',
  },
]

function FaqItem({ item, isOpen, onToggle }: { item: { q: string; a: string }; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-gold/15 glass transition-colors duration-300 hover:border-gold/30">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
        aria-expanded={isOpen}
      >
        <span className="text-base font-semibold text-white sm:text-lg">{item.q}</span>
        <span className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-gold/30 bg-gold/10 text-gold transition-all duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
        </span>
      </button>
      <div
        className="grid transition-all duration-300 ease-out"
        style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-5 text-sm leading-relaxed text-gray-400 sm:text-base">
            {item.a}
          </p>
        </div>
      </div>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Perguntas <span className="text-gradient-gold">frequentes</span>
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="mt-4 text-gray-400">
              Tudo o que precisas de saber antes de entrares.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 space-y-4">
          {faqs.map((faq, i) => (
            <Reveal key={faq.q} delay={i * 80}>
              <FaqItem
                item={faq}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
