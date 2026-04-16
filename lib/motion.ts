/** Curva tipo “expo out” — sensação premium sem exagero */
export const easePremium = [0.22, 1, 0.36, 1] as const

export const transitionReveal = {
  duration: 0.62,
  ease: easePremium,
} as const

export const transitionHero = {
  duration: 0.58,
  ease: easePremium,
} as const
