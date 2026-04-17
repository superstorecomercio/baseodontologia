/**
 * Largura da moldura da foto da Hero (wrapper interno da imagem).
 * Mobile: largura total do `page-container`; a partir de `sm`, mesma escala da Hero.
 */
export const photoFrameWidthMatchHero =
  "relative mx-auto w-full max-w-full sm:max-w-[17rem] md:max-w-[18rem]" as const

export const photoFrameLgHeroEnd =
  "lg:mx-0 lg:ml-auto lg:max-w-[min(100%,21rem)] xl:max-w-[min(100%,23rem)]" as const

export const photoFrameLgHeroStart =
  "lg:mx-0 lg:max-w-[min(100%,21rem)] xl:max-w-[min(100%,23rem)]" as const

export const photoFrameLgFullWidth = "lg:mx-0 lg:max-w-none" as const
