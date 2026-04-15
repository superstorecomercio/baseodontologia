// ====================================
// DADOS CENTRALIZADOS DA CLÍNICA
// Edite estes dados para personalizar o site
// ====================================

export const clinicData = {
  name: "Dr. Danilo Sorgini",
  clinicName: "Base Odontologia",
  /** Linha secundária do header (nome da clínica / cargo curto) */
  headerSubtitle: "Base Odontologia",
  specialty:
    "Gestor clínico | Prótese dentária, implantodontia e reabilitação oral (FORP/USP)",
  cro: "CRO-SP 99267",
  /** Telefone fixo da recepção */
  phone: "(11) 2985-2965",
  /** Celular / segundo contato */
  phoneMobile: "(11) 95959-3508",
  /** Exibição em uma linha (header, CTAs, etc.) */
  phonesDisplay: "(11) 2985-2965 / (11) 95959-3508",
  whatsapp: "5511959593508",
  email: "contato@baseodontologia.com.br",
  address: {
    street: "Rua Capitão Macedo, 143",
    complement: "",
    neighborhood: "Vila Clementino",
    city: "São Paulo",
    state: "SP",
    zip: "",
  },
  /** Texto curto para títulos de seção “Localização” */
  locationTagline:
    "Na Vila Clementino, com fácil acesso de transporte público ou particular e próximo a comércios e vias importantes.",
  /** Parágrafos sobre a clínica e a região (conteúdo institucional) */
  locationParagraphs: [
    "A Base Odontologia fica na Rua Capitão Macedo, 143, na Vila Clementino, em São Paulo–SP, próximo a diversos pontos de interesse e vias de fácil acesso de transporte público ou particular.",
    "Além da proximidade com comércios, shoppings e vias de acesso da cidade, a clínica também conta com o que há de mais moderno na odontologia, com equipamentos de última geração, para proporcionar mais assertividade e conforto aos nossos pacientes.",
    "Um time de dentistas experientes está sempre pronto para auxiliar na prevenção, diagnóstico e tratamento de problemas que afetam a saúde bucal de quem vem ao consultório.",
    "Por isso, agende já a sua consulta com a Base Odontologia e conte com uma clínica elegante e moderna para cuidar do seu sorriso.",
  ] as const,
  hours: {
    weekdays: "Segunda a Sexta: 8h às 19h",
    saturday: "Sábado: 8h às 13h",
    sunday: "Domingo: Fechado",
  },
  /** Perfil oficial (feed na home usa este link) */
  instagramHandle: "baseodontologiainteligente",
  social: {
    instagram: "https://www.instagram.com/baseodontologiainteligente/",
    facebook: "https://facebook.com/baseodontologia",
    tiktok: "https://tiktok.com/@baseodontologia",
    youtube: "https://youtube.com/@baseodontologia",
  },
  googleMapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.3061326145844!2d-46.64358392466901!3d-23.593351478777755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5b9127af8abb%3A0xc632ffa000e3273f!2sBASE%20Odontologia%20Inteligente!5e0!3m2!1spt-BR!2sbr!4v1776289640707!5m2!1spt-BR!2sbr",
  /** Ficha no Google Maps (ler todas as avaliações) */
  googleMapsListingUrl:
    "https://www.google.com/maps/search/?api=1&query_place_id=ChIJu4qvJ5FbzpQRPyfjAKD_MsY",
  /** Abre o fluxo de avaliação (conta Google) */
  googleWriteReviewUrl:
    "https://search.google.com/local/writereview?placeid=ChIJu4qvJ5FbzpQRPyfjAKD_MsY",
}

/**
 * Instagram na home (fallback): imagens em `/public/...` quando **não** há API nem `instagramOfficialEmbedUrls`.
 */
export interface InstagramCuratedPost {
  imageSrc: string
  href: string
  alt?: string
}

export const instagramCuratedPosts: InstagramCuratedPost[] = []

/**
 * Widget oficial (embed) na home — só se **não** houver `INSTAGRAM_ACCESS_TOKEN` + `INSTAGRAM_USER_ID` (API).
 * URLs de posts/reels (não só o perfil). Até ~6. Com a API ativa, os últimos posts vêm sozinhos.
 */
export const instagramOfficialEmbedUrls: string[] = []

/** Partes do título do hero (cor / ênfase por trecho) */
export const heroHeadlineSegments = [
  { text: "Excelência", className: "text-primary" },
  { text: " em ", className: "text-foreground/85" },
  { text: "reabilitação oral", className: "font-semibold text-foreground" },
  { text: " e ", className: "text-foreground/85" },
  { text: "implantes", className: "text-[#4a7287]" },
] as const

export const heroData = {
  headline: "Excelência em reabilitação oral e implantes",
  subheadline:
    "Atendimento clínico e acadêmico de alto nível: prótese dentária, implantodontia e reabilitação oral com base científica e tecnologia de ponta.",
  ctaPrimary: "Agendar pelo WhatsApp",
  ctaSecondary: "Marcar Avaliação",
}

export const aboutData = {
  /** Texto curto acima do título nas seções “sobre” */
  eyebrow: "Conheça o Dr. Danilo",
  shortBio:
    "O Dr. Danilo Sorgini é gestor clínico da Base Odontologia, com formação e títulos acadêmicos pela FORP/USP (Ribeirão Preto), atuação em prótese, implantes e reabilitação oral, e forte dedicação à pesquisa e ao ensino.",
  fullBio: `O Dr. Danilo Sorgini é gestor clínico da Base Odontologia. Graduou-se em Odontologia pela Faculdade de Odontologia de Ribeirão Preto (USP). Na mesma instituição tornou-se especialista em Prótese Dentária e obteve os títulos de Mestre e Doutor em Reabilitação Oral. Além disso, acumula diversas pós-graduações em Implantodontia e Odontologia Estética.

Além de atuar na clínica, o Dr. Danilo coordena o curso de especialização em Implantodontia e Periodontia do Instituto Orofacial das Américas (IOA) e é professor convidado do curso de especialização em Prótese e Dentística (IOA) e do curso de atualização em Implantodontia da APCD (Santana).

Em sua jornada acadêmica, também publicou diversos artigos voltados ao segmento odontológico em revistas nacionais e internacionais.`,
  credentials: [
    "Graduação em Odontologia — FORP/USP (Ribeirão Preto)",
    "Especialização em Prótese Dentária — FORP/USP",
    "Mestrado e Doutorado em Reabilitação Oral — FORP/USP",
    "Pós-graduações em Implantodontia e Odontologia Estética",
    "Coordenador do curso de especialização em Implantodontia e Periodontia — IOA",
    "Professor convidado — IOA (Prótese e Dentística) e APCD Santana (Implantodontia)",
    "Autor de artigos científicos em revistas nacionais e internacionais",
  ],
  mission:
    "Oferecer reabilitação oral e tratamentos odontológicos com rigor científico, planejamento individualizado e tecnologia de ponta, em um ambiente ético e acolhedor.",
  vision:
    "Ser referência em reabilitação oral, prótese dentária e implantodontia, reconhecida pela excelência clínica, formação acadêmica e compromisso com resultados previsíveis.",
  values: [
    "Excelência em cada procedimento",
    "Atendimento humanizado e personalizado",
    "Ética e transparência",
    "Inovação e tecnologia",
    "Compromisso com resultados",
  ],
}

export const differentials = [
  {
    icon: "shield",
    title: "Biossegurança Total",
    description:
      "Protocolos rigorosos de esterilização e higienização, garantindo sua segurança em cada procedimento.",
  },
  {
    icon: "camera",
    title: "Scanner Intraoral 3D",
    description:
      "Tecnologia de ponta para diagnósticos precisos e planejamentos de tratamento mais eficientes.",
  },
  {
    icon: "clock",
    title: "Pontualidade",
    description:
      "Respeitamos seu tempo. Nossos atendimentos começam no horário agendado, sem longas esperas.",
  },
  {
    icon: "creditCard",
    title: "Facilidades de Pagamento",
    description:
      "Diversas formas de pagamento e condições especiais para você realizar o tratamento que precisa.",
  },
  {
    icon: "heart",
    title: "Atendimento Humanizado",
    description:
      "Cuidamos de você como pessoa, não apenas como paciente. Seu conforto é nossa prioridade.",
  },
  {
    icon: "award",
    title: "Profissionais Certificados",
    description:
      "Equipe constantemente atualizada com as mais recentes técnicas e tecnologias do mercado.",
  },
]

export const treatments = [
  {
    id: "dentistica",
    title: "Dentística",
    shortDescription:
      "Recupere a estética do seu sorriso com soluções inovadoras.",
    fullDescription:
      "A dentística reúne procedimentos restauradores e estéticos que devolvem forma, cor e função aos dentes. Utilizamos materiais modernos e técnicas conservadoras para um resultado natural, confortável e duradouro.",
    benefits: [
      "Restaurações estéticas em resina composta",
      "Correção de desgastes, fraturas e espaços",
      "Planejamento voltado a um sorriso harmônico",
      "Procedimentos minimamente invasivos quando possível",
    ],
    indication:
      "Indicado para quem deseja melhorar a aparência dos dentes ou tratar cáries e pequenas alterações com foco em estética e mastigação.",
    duration: "1 a 2 horas por sessão (conforme o caso)",
    icon: "gem",
    image: "/images/treatments/dentistica.png",
  },
  {
    id: "periodontia",
    title: "Periodontia",
    shortDescription:
      "Cuide da sua gengiva e evite consequências graves para seus dentes.",
    fullDescription:
      "A periodontia cuida das estruturas de suporte dos dentes—gengiva, osso e ligamento—prevenindo e tratando gengivite e periodontite. Realizamos raspagem supra e subgengival, alisamento radicular e acompanhamento para estabilizar a saúde bucal.",
    benefits: [
      "Redução de inflamação e sangramento gengival",
      "Prevenção da perda óssea e mobilidade dentária",
      "Hálito e conforto bucal melhores",
      "Base saudável para implantes, próteses e facetas",
    ],
    indication:
      "Indicado para pacientes com sangramento ao escovar, gengiva inchada ou sensação de dentes “solto”, ou com diagnóstico de doença periodontal.",
    duration: "Conforme protocolo e grau da doença",
    icon: "heartPulse",
    image: "/images/treatments/periodontia.png",
  },
  {
    id: "harmonizacao",
    title: "Harmonização Orofacial",
    shortDescription:
      "Diversos procedimentos para realçar a sua beleza e curvas faciais.",
    fullDescription:
      "A harmonização orofacial combina diferentes procedimentos estéticos para equilibrar e realçar os traços do rosto. Oferecemos botox, preenchimento labial, bichectomia e outros tratamentos.",
    benefits: [
      "Rejuvenescimento facial",
      "Correção de assimetrias",
      "Resultados naturais",
      "Procedimentos rápidos e seguros",
    ],
    indication:
      "Indicado para pacientes que desejam realçar a beleza natural do rosto.",
    duration: "30 minutos a 1 hora",
    icon: "heart",
    image: "/images/treatments/harmonizacao.png",
  },
  {
    id: "implantes",
    title: "Implantes Dentários",
    shortDescription:
      "Tratamento personalizado para recuperar seu prazer em sorrir.",
    fullDescription:
      "Os implantes dentários são a melhor solução para substituir dentes perdidos. Utilizamos implantes de titânio de última geração, com planejamento digital 3D para garantir precisão e resultados excepcionais.",
    benefits: [
      "Função mastigatória restaurada",
      "Estética natural",
      "Durabilidade de décadas",
      "Preservação do osso maxilar",
    ],
    indication:
      "Indicado para pacientes que perderam um ou mais dentes e desejam uma solução definitiva.",
    duration: "Tratamento de 3 a 6 meses",
    icon: "plus",
    image: "/images/treatments/implantes.png",
  },
  {
    id: "proteses",
    title: "Próteses Dentárias",
    shortDescription:
      "Próteses feitas sob medida para você sorrir com segurança e naturalidade.",
    fullDescription:
      "As próteses dentárias substituem dentes ausentes e restauram mastigação, fala e estética. Planejamos cada caso com critério clínico e laboratorial para próteses fixas ou removíveis com encaixe, conforto e aparência natural.",
    benefits: [
      "Reposição de dentes com estética personalizada",
      "Melhora da mastigação e da fala",
      "Materiais e desenho adaptados ao seu caso",
      "Acompanhamento para ajustes e manutenção",
    ],
    indication:
      "Indicado para quem perdeu dentes e precisa de rehabilitação parcial ou total, com ou sem implantes.",
    duration: "Conforme tipo de prótese e planejamento",
    icon: "layers",
    image: "/images/treatments/proteses.png",
  },
  {
    id: "clareamento",
    title: "Clareamento Dental",
    shortDescription:
      "Recupere o branco natural do seu sorriso com este tratamento.",
    fullDescription:
      "O clareamento dental é um dos tratamentos estéticos mais procurados. Oferecemos clareamento em consultório com LED e clareamento caseiro supervisionado, ambos seguros e com resultados comprovados.",
    benefits: [
      "Dentes até 8 tons mais claros",
      "Resultados visíveis já na primeira sessão",
      "Procedimento indolor",
      "Autoestima renovada",
    ],
    indication:
      "Ideal para quem deseja um sorriso mais branco e jovem, sem procedimentos invasivos.",
    duration: "1 a 2 horas por sessão",
    icon: "sun",
    image: "/images/treatments/clareamento.png",
  },
  {
    id: "limpeza",
    title: "Limpeza e Profilaxia",
    shortDescription:
      "Remoção de tártaro e placa bacteriana para uma saúde bucal impecável.",
    fullDescription:
      "A limpeza dental profissional é essencial para manter a saúde bucal em dia. Utilizamos equipamentos de última geração para remover tártaro, placa bacteriana e manchas superficiais, deixando seus dentes limpos, polidos e saudáveis.",
    benefits: [
      "Prevenção de cáries e doenças gengivais",
      "Remoção de manchas superficiais",
      "Hálito mais fresco",
      "Dentes mais brancos e brilhantes",
    ],
    indication:
      "Indicado para todos os pacientes, recomendamos realizar a cada 6 meses para manter a saúde bucal em dia.",
    duration: "45 minutos",
    icon: "sparkles",
    image: "/images/treatments/limpeza.jpg",
  },
  {
    id: "lentes-dentais",
    title: "Lentes de Contato Dental",
    shortDescription:
      "Transforme seu sorriso com lâminas ultrafinas de porcelana.",
    fullDescription:
      "As lentes de contato dental são lâminas ultrafinas de porcelana que são coladas na superfície dos dentes, corrigindo cor, forma, tamanho e alinhamento. É a solução perfeita para um sorriso de Hollywood.",
    benefits: [
      "Correção de dentes tortos ou desalinhados",
      "Fechamento de espaços entre dentes",
      "Correção de manchas permanentes",
      "Resultado natural e duradouro",
    ],
    indication:
      "Indicado para pacientes que desejam transformar completamente o visual do sorriso.",
    duration: "2 a 3 sessões",
    icon: "smile",
    image: "/images/treatments/lentes-dentais.jpg",
  },
  {
    id: "ortodontia",
    title: "Ortodontia",
    shortDescription:
      "Alinhe seus dentes com aparelhos tradicionais ou invisíveis.",
    fullDescription:
      "Oferecemos diversas opções de tratamento ortodôntico, desde aparelhos fixos tradicionais até alinhadores invisíveis. Cada caso é planejado individualmente para garantir os melhores resultados.",
    benefits: [
      "Correção de má oclusão",
      "Dentes alinhados e harmônicos",
      "Melhora na mastigação",
      "Facilita a higienização",
    ],
    indication:
      "Indicado para crianças, adolescentes e adultos com dentes desalinhados ou problemas de mordida.",
    duration: "12 a 36 meses",
    icon: "alignCenter",
    image: "/images/treatments/ortodontia.jpg",
  },
  {
    id: "avaliacao",
    title: "Avaliação Odontológica",
    shortDescription:
      "Diagnóstico completo para planejar seu tratamento ideal.",
    fullDescription:
      "Nossa avaliação odontológica é completa e detalhada. Utilizamos tecnologia de ponta, incluindo scanner intraoral 3D e radiografias digitais, para um diagnóstico preciso e um plano de tratamento personalizado.",
    benefits: [
      "Diagnóstico preciso e completo",
      "Plano de tratamento personalizado",
      "Prevenção de problemas futuros",
      "Orçamento detalhado",
    ],
    indication:
      "Recomendado para todos que desejam conhecer a real condição da saúde bucal.",
    duration: "1 hora",
    icon: "search",
    image: "/images/treatments/avaliacao.jpg",
  },
  {
    id: "odontopediatria",
    title: "Odontopediatria",
    shortDescription:
      "Cuidado especial e carinhoso para a saúde bucal dos pequenos.",
    fullDescription:
      "Nossa equipe é especializada em atender crianças de todas as idades, desde bebês até adolescentes. Criamos um ambiente lúdico e acolhedor para que a visita ao dentista seja uma experiência positiva.",
    benefits: [
      "Ambiente adaptado para crianças",
      "Prevenção desde cedo",
      "Tratamento de cáries e traumas",
      "Orientação para pais",
    ],
    indication:
      "Indicado para crianças de 0 a 14 anos, com acompanhamento preventivo e curativo.",
    duration: "30 a 45 minutos",
    icon: "baby",
    image: "/images/treatments/odontopediatria.jpg",
  },
]

// Dados mockados para integração futura com Google Business Profile
// TODO: Substituir por dados reais via API do Google quando disponível
export interface GoogleReview {
  id: string
  author: string
  rating: number
  date: string
  text: string
  avatar?: string
}

export interface GoogleBusinessData {
  rating: number
  totalReviews: number
  reviews: GoogleReview[]
  /** `live` = Places API (New); omit ou `mock` = dados locais de reserva */
  reviewsSource?: "live" | "mock"
}

export const googleBusinessData: GoogleBusinessData = {
  rating: 4.9,
  totalReviews: 347,
  reviews: [
    {
      id: "1",
      author: "Mariana Silva",
      rating: 5,
      date: "2 semanas atrás",
      text: "Atendimento excepcional! O Dr. Danilo e a equipe são extremamente atenciosos e competentes. Fiz clareamento e o resultado superou minhas expectativas. Ambiente acolhedor e muito profissional.",
    },
    {
      id: "2",
      author: "Roberto Fernandes",
      rating: 5,
      date: "1 mês atrás",
      text: "Melhor clínica odontológica que já fui! Fiz implantes e estou muito satisfeito com o resultado. Profissionais de primeira linha e tecnologia de ponta. Super recomendo!",
    },
    {
      id: "3",
      author: "Ana Paula Costa",
      rating: 5,
      date: "1 mês atrás",
      text: "Encontrei um profissional que me passa total confiança. O Dr. Danilo explicou todo o procedimento com paciência e o resultado das minhas lentes ficou incrível. Recomendo de olhos fechados!",
    },
    {
      id: "4",
      author: "Carlos Eduardo",
      rating: 5,
      date: "2 meses atrás",
      text: "Excelente experiência! Fiz uma avaliação completa e fiquei impressionado com a tecnologia utilizada. Scanner 3D, tudo muito moderno. Equipe pontual e muito educada.",
    },
    {
      id: "5",
      author: "Juliana Martins",
      rating: 4,
      date: "2 meses atrás",
      text: "Muito boa a clínica! Ambiente agradável, profissionais qualificados. Único ponto é que às vezes a agenda fica bem cheia, mas vale a pena a espera pela qualidade do atendimento.",
    },
  ],
}

export const testimonials = [
  {
    id: "1",
    name: "Patricia Oliveira",
    role: "Empresária",
    image: "/testimonials/patricia.jpg",
    rating: 5,
    text: "O Dr. Danilo transformou meu sorriso e minha autoestima. As lentes de contato dental ficaram absolutamente naturais. Não me canso de sorrir!",
  },
  {
    id: "2",
    name: "Fernando Santos",
    role: "Advogado",
    image: "/testimonials/fernando.jpg",
    rating: 5,
    text: "Tinha muito medo de dentista, mas na Base Odontologia me senti acolhido desde a primeira consulta. Profissionalismo e humanidade andam juntos aqui.",
  },
  {
    id: "3",
    name: "Camila Rodrigues",
    role: "Médica",
    image: "/testimonials/camila.jpg",
    rating: 5,
    text: "Como profissional de saúde, sou exigente com a qualidade dos serviços. A clínica supera expectativas em todos os aspectos: tecnologia, higiene e atendimento.",
  },
]

export const faqData = [
  {
    question: "Quanto custa uma avaliação?",
    answer:
      "A avaliação inicial é gratuita. Nela, realizamos um exame completo da sua saúde bucal, tiramos dúvidas e apresentamos um plano de tratamento personalizado com valores detalhados.",
  },
  {
    question: "Quais formas de pagamento são aceitas?",
    answer:
      "Aceitamos dinheiro, PIX, cartões de débito e crédito (com parcelamento em até 12x), além de convênios odontológicos. Consulte nossas condições especiais.",
  },
  {
    question: "O clareamento dental é seguro?",
    answer:
      "Sim, quando realizado por profissionais qualificados, o clareamento é completamente seguro. Utilizamos produtos de qualidade e seguimos protocolos rigorosos para proteger seus dentes e gengivas.",
  },
  {
    question: "Quanto tempo dura um implante?",
    answer:
      "Com os devidos cuidados e manutenção adequada, os implantes dentários podem durar a vida toda. Recomendamos visitas regulares para acompanhamento e limpezas profissionais.",
  },
  {
    question: "Atendemos crianças?",
    answer:
      "Sim! Temos uma equipe especializada em odontopediatria, com um ambiente preparado para receber os pequenos de forma acolhedora e tornar a experiência positiva.",
  },
  {
    question: "Preciso agendar ou posso ir sem hora marcada?",
    answer:
      "Para garantir um atendimento com toda a atenção que você merece, trabalhamos com hora marcada. Agende sua consulta pelo WhatsApp ou telefone e escolha o melhor horário para você.",
  },
]

// Dados mockados para posts de redes sociais
// TODO: Integrar com Instagram Graph API ou outra fonte quando disponível
export interface SocialPost {
  id: string
  platform: "instagram" | "facebook" | "tiktok" | "youtube"
  image: string
  caption: string
  date: string
  likes: number
  comments: number
  link: string
}

export const socialPosts: SocialPost[] = [
  {
    id: "1",
    platform: "instagram",
    image: "/social/post1.jpg",
    caption:
      "Mais uma transformação incrível! Lentes de contato dental que realçam a beleza natural do sorriso.",
    date: "2 dias atrás",
    likes: 234,
    comments: 18,
    link: "https://instagram.com/p/example1",
  },
  {
    id: "2",
    platform: "instagram",
    image: "/social/post2.jpg",
    caption:
      "Você sabia que o clareamento dental pode deixar seus dentes até 8 tons mais brancos? Agende sua avaliação!",
    date: "5 dias atrás",
    likes: 189,
    comments: 12,
    link: "https://instagram.com/p/example2",
  },
  {
    id: "3",
    platform: "instagram",
    image: "/social/post3.jpg",
    caption:
      "Nossa clínica é equipada com o que há de mais moderno em tecnologia odontológica. Conheça nosso scanner 3D!",
    date: "1 semana atrás",
    likes: 312,
    comments: 25,
    link: "https://instagram.com/p/example3",
  },
  {
    id: "4",
    platform: "instagram",
    image: "/social/post4.jpg",
    caption:
      "Cuidar do sorriso das crianças desde cedo é fundamental. Conheça nossa odontopediatria!",
    date: "2 semanas atrás",
    likes: 276,
    comments: 31,
    link: "https://instagram.com/p/example4",
  },
  {
    id: "5",
    platform: "instagram",
    image: "/social/post5.jpg",
    caption:
      "Dica de ouro: escove os dentes por pelo menos 2 minutos e não esqueça de usar fio dental diariamente!",
    date: "2 semanas atrás",
    likes: 198,
    comments: 9,
    link: "https://instagram.com/p/example5",
  },
  {
    id: "6",
    platform: "instagram",
    image: "/social/post6.jpg",
    caption:
      "Resultado de implante dentário: função e estética restauradas. Agende sua consulta e recupere seu sorriso!",
    date: "3 semanas atrás",
    likes: 287,
    comments: 22,
    link: "https://instagram.com/p/example6",
  },
]

// Dados mockados para posts do blog
// TODO: Integrar com CMS (Sanity, Contentful, etc.) quando disponível
export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  image: string
  category: string
  author: string
  authorImage: string
  date: string
  readTime: string
  tags: string[]
}

export const blogCategories = [
  "Todos",
  "Estética Dental",
  "Implantes",
  "Saúde Bucal",
  "Ortodontia",
  "Dicas",
]

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "lentes-de-contato-dental-tudo-que-voce-precisa-saber",
    title: "Lentes de Contato Dental: Tudo que Você Precisa Saber",
    excerpt:
      "Descubra como as lentes de contato dental podem transformar seu sorriso de forma rápida e minimamente invasiva.",
    content: `
## O que são Lentes de Contato Dental?

As lentes de contato dental são finas lâminas de porcelana que são coladas na superfície frontal dos dentes. Com espessura que varia de 0,2mm a 0,5mm, elas são capazes de transformar completamente a aparência do sorriso.

## Indicações

As lentes são indicadas para:

- **Correção de cor**: dentes amarelados ou manchados
- **Correção de forma**: dentes pequenos ou irregulares
- **Fechamento de espaços**: diastemas (espaços entre os dentes)
- **Correção de alinhamento leve**: dentes levemente tortos

## O Procedimento

O tratamento com lentes de contato dental é realizado em algumas etapas:

1. **Avaliação inicial**: análise completa do sorriso e expectativas
2. **Planejamento digital**: simulação do resultado final
3. **Preparo dos dentes**: mínimo desgaste, quando necessário
4. **Moldagem**: impressão dos dentes para confecção das lentes
5. **Instalação**: cimentação das lentes nos dentes

## Cuidados Necessários

Para garantir a longevidade das suas lentes de contato dental:

- Evite morder alimentos muito duros
- Não use os dentes como ferramenta
- Mantenha uma higiene bucal impecável
- Visite o dentista regularmente

## Quanto Tempo Dura?

Com os cuidados adequados, as lentes de contato dental podem durar de 10 a 15 anos ou mais.

---

**Quer saber se as lentes são indicadas para você?** Agende uma avaliação gratuita e venha conhecer as possibilidades para transformar seu sorriso!
    `,
    image: "/blog/lentes-dental.jpg",
    category: "Estética Dental",
    author: "Dr. Danilo Sorgini",
    authorImage: "/images/dentist-hero.png",
    date: "15 de março de 2024",
    readTime: "5 min",
    tags: ["lentes de contato", "estética", "porcelana", "sorriso"],
  },
  {
    id: "2",
    slug: "implantes-dentarios-guia-completo",
    title: "Implantes Dentários: O Guia Completo",
    excerpt:
      "Saiba tudo sobre implantes dentários: como funciona, quem pode fazer, recuperação e muito mais.",
    content: `
## O que são Implantes Dentários?

Os implantes dentários são pinos de titânio que funcionam como raízes artificiais, instalados diretamente no osso maxilar para suportar próteses fixas.

## Vantagens dos Implantes

- Recuperação da função mastigatória
- Estética natural
- Preservação do osso
- Conforto superior às dentaduras
- Durabilidade de décadas

## Quem Pode Fazer?

A maioria das pessoas pode receber implantes, mas é necessário:

- Ter boa saúde geral
- Possuir quantidade óssea suficiente
- Gengivas saudáveis
- Não fumar (ou estar disposto a parar)

## Como é o Procedimento?

O tratamento acontece em fases:

1. **Planejamento**: exames e simulação 3D
2. **Cirurgia**: instalação do implante
3. **Osseointegração**: período de cicatrização (3-6 meses)
4. **Prótese**: instalação do dente definitivo

## Recuperação

A recuperação da cirurgia é tranquila para a maioria dos pacientes, com desconforto leve nos primeiros dias.

---

**Perdeu um ou mais dentes?** Agende sua avaliação e descubra como os implantes podem devolver seu sorriso!
    `,
    image: "/blog/implantes.jpg",
    category: "Implantes",
    author: "Dr. Danilo Sorgini",
    authorImage: "/images/dentist-hero.png",
    date: "8 de março de 2024",
    readTime: "7 min",
    tags: ["implantes", "cirurgia", "prótese", "reabilitação"],
  },
  {
    id: "3",
    slug: "clareamento-dental-mitos-e-verdades",
    title: "Clareamento Dental: Mitos e Verdades",
    excerpt:
      "Desvende os principais mitos sobre clareamento dental e descubra a verdade por trás deste procedimento.",
    content: `
## Mitos e Verdades sobre Clareamento

O clareamento dental é um dos tratamentos estéticos mais populares, mas ainda existem muitas dúvidas. Vamos esclarecer!

### MITO: Clareamento enfraquece os dentes

**VERDADE**: Quando realizado corretamente por um profissional, o clareamento não prejudica o esmalte dental.

### MITO: Resultados são permanentes

**VERDADE**: Os resultados duram em média 2-3 anos, dependendo dos hábitos alimentares e de higiene.

### MITO: Causa muita sensibilidade

**VERDADE**: Pode haver sensibilidade temporária, mas técnicas modernas minimizam muito esse efeito.

### MITO: Qualquer pessoa pode fazer

**VERDADE**: É necessária uma avaliação prévia para verificar a saúde bucal e indicar o melhor tratamento.

## Tipos de Clareamento

- **Clareamento em consultório**: mais rápido, resultados imediatos
- **Clareamento caseiro**: mais gradual, uso de moldeiras
- **Clareamento combinado**: melhores resultados

---

**Quer um sorriso mais branco?** Agende sua avaliação e descubra qual clareamento é ideal para você!
    `,
    image: "/blog/clareamento.jpg",
    category: "Estética Dental",
    author: "Dr. Danilo Sorgini",
    authorImage: "/images/dentist-hero.png",
    date: "1 de março de 2024",
    readTime: "4 min",
    tags: ["clareamento", "estética", "branqueamento", "dentes brancos"],
  },
  {
    id: "4",
    slug: "como-cuidar-da-saude-bucal-das-criancas",
    title: "Como Cuidar da Saúde Bucal das Crianças",
    excerpt:
      "Dicas essenciais para manter a saúde bucal dos pequenos desde os primeiros dentinhos.",
    content: `
## A Importância da Saúde Bucal Infantil

Cuidar da saúde bucal desde cedo é fundamental para garantir dentes saudáveis na vida adulta.

## Quando Começar?

- **Antes dos dentes nascerem**: limpe as gengivas com gaze úmida
- **Primeiro dentinho**: inicie a escovação com escova infantil
- **Primeira consulta**: leve ao dentista por volta de 1 ano

## Dicas para Pais

1. Escove os dentes junto com a criança
2. Torne a escovação divertida
3. Use creme dental com flúor na quantidade adequada
4. Limite o consumo de doces e refrigerantes
5. Visite o dentista regularmente

## Problemas Comuns

- Cárie de mamadeira
- Chupeta e dedo
- Mordida cruzada
- Medo de dentista

---

**Seu filho precisa de atendimento odontológico?** Nossa odontopediatria oferece um ambiente acolhedor e divertido!
    `,
    image: "/blog/odontopediatria.jpg",
    category: "Saúde Bucal",
    author: "Dr. Danilo Sorgini",
    authorImage: "/images/dentist-hero.png",
    date: "22 de fevereiro de 2024",
    readTime: "5 min",
    tags: ["crianças", "odontopediatria", "higiene", "prevenção"],
  },
  {
    id: "5",
    slug: "aparelho-invisivel-vs-aparelho-tradicional",
    title: "Aparelho Invisível vs Aparelho Tradicional: Qual Escolher?",
    excerpt:
      "Compare as vantagens e desvantagens de cada tipo de aparelho ortodôntico e descubra qual é o melhor para você.",
    content: `
## Aparelho Tradicional

### Vantagens
- Eficaz para todos os tipos de má oclusão
- Custo mais acessível
- Não depende da colaboração do paciente

### Desvantagens
- Visível
- Dificulta a higienização
- Restrições alimentares

## Aparelho Invisível

### Vantagens
- Praticamente invisível
- Removível para comer e escovar
- Mais confortável
- Menos visitas ao consultório

### Desvantagens
- Custo mais elevado
- Requer disciplina do paciente
- Não indicado para casos muito complexos

## Qual Escolher?

A escolha depende de diversos fatores:
- Complexidade do caso
- Estilo de vida
- Orçamento disponível
- Disciplina do paciente

---

**Em dúvida sobre qual aparelho usar?** Agende uma avaliação ortodôntica e receba orientação personalizada!
    `,
    image: "/blog/ortodontia.jpg",
    category: "Ortodontia",
    author: "Dr. Danilo Sorgini",
    authorImage: "/images/dentist-hero.png",
    date: "15 de fevereiro de 2024",
    readTime: "6 min",
    tags: ["ortodontia", "aparelho", "invisalign", "alinhadores"],
  },
  {
    id: "6",
    slug: "dicas-para-manter-dentes-saudaveis",
    title: "10 Dicas para Manter seus Dentes Saudáveis",
    excerpt:
      "Hábitos simples que fazem toda a diferença na saúde dos seus dentes e gengivas.",
    content: `
## 10 Dicas Essenciais

### 1. Escove os dentes corretamente
Pelo menos 2 minutos, 3 vezes ao dia, com movimentos suaves e circulares.

### 2. Use fio dental diariamente
Remove a placa bacteriana onde a escova não alcança.

### 3. Não esqueça da língua
A língua acumula bactérias que causam mau hálito.

### 4. Troque a escova regularmente
A cada 3 meses ou quando as cerdas estiverem gastas.

### 5. Limite açúcar e ácidos
Alimentos açucarados e ácidos favorecem cáries.

### 6. Beba bastante água
Ajuda a limpar a boca e estimula a produção de saliva.

### 7. Visite o dentista regularmente
Pelo menos a cada 6 meses para limpeza e check-up.

### 8. Use enxaguante bucal
Como complemento, não substituto da escovação.

### 9. Não fume
O cigarro causa manchas, mau hálito e doenças graves.

### 10. Proteja seus dentes
Use protetor bucal ao praticar esportes.

---

**Há quanto tempo você não vai ao dentista?** Agende sua consulta de rotina!
    `,
    image: "/blog/dicas-saude.jpg",
    category: "Dicas",
    author: "Dr. Danilo Sorgini",
    authorImage: "/images/dentist-hero.png",
    date: "8 de fevereiro de 2024",
    readTime: "4 min",
    tags: ["dicas", "saúde bucal", "prevenção", "higiene"],
  },
]
