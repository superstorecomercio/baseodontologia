export interface TreatmentFaqItem {
  question: string
  answer: string
}

export interface TreatmentPageSeo {
  h1WhatIs: string
  whatIsParagraph: string
  whoCanH2: string
  indications: string[]
  contraindications: string[]
  howItWorksH2: string
  procedureSteps: string[]
  procedureDurationDetail: string
  technologies: string[]
  benefitsH2: string
  recoveryH2: string
  recoveryTime: string
  painAndSwelling: string
  postOpCare: string
  returnToActivities: string
  resultsH2: string
  expectedResults: string[]
  timeToFinalResult: string
  beforeAfterNote: string | null
  faqH2: string
  faqItems: TreatmentFaqItem[]
}

export const treatmentPageSeoById: Record<string, TreatmentPageSeo> = {
  periodontia: {
    h1WhatIs: "O que são os tratamentos e cirurgias gengivais?",
    whatIsParagraph:
      "Os tratamentos e cirurgias gengivais reúnem procedimentos clínicos e cirúrgicos para tratar doenças da gengiva, corrigir alterações anatômicas e melhorar a estética e a função do sorriso. Incluem desde o controle de inflamações até cirurgias plásticas periodontais e a remoção ou remodelagem de freios e bridas que interferem na higiene, na ortodontia ou nas próteses.",
    whoCanH2: "Quando os tratamentos gengivais são indicados?",
    indications: [
      "Gengivite: inflamação superficial com sangramento, inchaço ou mau hálito, sem perda óssea — reversível com profilaxia e higiene orientada.",
      "Periodontite: bolsas periodontais, perda de inserção, mobilidade, recessão ou perda óssea — exige raspagem, alisamento radicular e, em casos avançados, cirurgia e manutenção contínua.",
      "Retração gengival: exposição radicular por escovação traumática, periodontal, bruxismo, posição dentária ou envelhecimento — pode indicar enxerto, técnicas de recobrimento ou dessensibilização.",
      "Frenectomia: freio labial ou lingual que favorece diastema, limita a língua, traciona a gengiva ou atrapalha ortodontia/prótese.",
      "Bridectomia: bridas fibrosas ou mucosas com tração local ou interferência em próteses e mobilidade tecidual.",
      "Gengivoplastia: sorriso gengival, contorno irregular, excesso ou assimetria de gengiva — muitas vezes integrada a planejamentos com lentes ou facetas.",
    ],
    contraindications: [
      "Cirurgias eletivas em quadros infecciosos agudos não controlados ou celulite em evolução — priorizar tratamento de urgência.",
      "Doenças sistêmicas descompensadas sem liberação médica para procedimento ambulatorial.",
      "Tabagismo ativo sem disposição para cessar no pós-operatório — prejudica cicatrização gengival.",
      "Falta de compromisso com higiene e manutenção periodontal após terapia — compromete o resultado a longo prazo.",
    ],
    howItWorksH2: "Como funcionam os tratamentos gengivais e cirúrgicos?",
    procedureSteps: [
      "Avaliação clínica periodontal com sondagem e registro de bolsas, mobilidade e recessão; exames radiográficos ou outros exames de imagem quando necessários.",
      "Diagnóstico preciso (gengivite, periodontite, retração, alterações de freio ou brida, indicação estética para gengivoplastia) e definição do plano em fases.",
      "Controle de inflamação: profilaxia, orientação de higiene, remoção de placa e cálculo; em periodontite, raspagem supra e subgengival, alisamento radicular e desbridamento; antissépticos ou antibióticos apenas quando indicados.",
      "Correções cirúrgicas ou plásticas quando necessárias: gengivoplastia (remodelação do contorno com bisturi, laser ou eletrocautério conforme protocolo), frenectomia ou bridectomia com anestesia local, suturas se preciso; retração com enxerto gengival ou conjuntivo e técnicas de recobrimento radicular em casos selecionados.",
      "Procedimento específico concluído com controle de sangramento e proteção inicial da área.",
      "Orientações pós-operatórias detalhadas e medicação quando prescrita.",
      "Manutenção periodontal periódica para estabilizar o resultado e prevenir recidiva.",
    ],
    procedureDurationDetail:
      "Sessões de raspagem costumam durar cerca de 1 hora por quadrante ou hemi-arco, conforme extensão. Cirurgias gengivais em geral exigem cerca de 7 a 14 dias para primeira cicatrização confortável; o plano completo pode se estender por semanas ou meses conforme complexidade.",
    technologies: [
      "Gengivite: profilaxia profissional, remoção de biofilme e cálculo, orientação domiciliar e antissépticos bucais quando indicados — inflamação superficial sem perda óssea, em geral reversível.",
      "Periodontite: raspagem e alisamento radicular, desbridamento subgengival, cirurgias periodontais em casos avançados, antibióticos sistêmicos ou locais em situações selecionadas e manutenção contínua para controle da progressão.",
      "Retração gengival: controle de causa (hábito de escovação, oclusão, bruxismo), enxerto gengival ou de tecido conjuntivo, técnicas de recobrimento radicular e dessensibilização dentária quando necessário.",
      "Frenectomia: remoção ou reposicionamento do freio labial superior, inferior ou lingual sob anestesia local, com bisturi ou laser conforme caso — auxilia função, ortodontia e estabilidade gengival.",
      "Bridectomia: ressecção de brida fibrosa ou mucosa com regularização tissular e sutura quando indicado — melhora adaptação de próteses e reduz tração local.",
      "Gengivoplastia: cirurgia estética periodontal para remodelar contorno gengival em sorriso gengival, assimetrias ou excesso de tecido, frequentemente combinada a reabilitações estéticas.",
    ],
    benefitsH2: "Quais são os benefícios dos tratamentos gengivais e cirurgias periodontais?",
    recoveryH2: "Recuperação e pós-operatório",
    recoveryTime:
      "Tratamentos clínicos de gengivite e periodontite leve costumam ter recuperação rápida, com possível sensibilidade leve temporária. Cirurgias (gengivoplastia, frenectomia, bridectomia, enxertos) costumam cursar com inchaço leve a moderado e desconforto controlado com medicação, com cicatrização inicial em torno de 7 a 14 dias e retorno gradual às atividades conforme orientação.",
    painAndSwelling:
      "Procedimentos sob anestesia local são indolores durante a execução. Após raspagem profunda pode haver sensibilidade à mastigação ou ao frio por poucos dias. Cirurgias podem gerar edema local e sensação de tensão na primeira semana.",
    postOpCare:
      "Higiene oral cuidadosa respeitando a área operada até a liberação; evitar alimentos muito duros ou quentes no início; usar medicação prescrita; não fumar durante a cicatrização; evitar traumatizar a região (escovação agressiva, objetos na boca); comparecer aos retornos para remoção de pontos ou ajustes quando agendados.",
    returnToActivities:
      "Após raspagem não cirúrgica, em geral é possível trabalho leve no mesmo dia. Após cirurgias gengivais, atividades físicas intensas e esforço prolongado podem ser liberados gradualmente após cerca de uma semana ou conforme orientação individual.",
    resultsH2: "Quais são os resultados esperados?",
    expectedResults: [
      "Gengivas mais saudáveis e estáveis, com redução ou eliminação do sangramento.",
      "Melhora estética do contorno gengival e do sorriso quando esse for o objetivo.",
      "Correção de alterações anatômicas (freio, brida, excesso gengival) que atrapalhavam função ou reabilitações.",
      "Maior estabilidade dentária e melhor suporte para ortodontia, próteses ou implantes.",
      "Melhora da autoestima e da função oral com manutenção periódica.",
    ],
    timeToFinalResult:
      "Gengivite bem tratada costuma reverter em semanas com higiene e profilaxia. Periodontite é controlada a longo prazo — o osso perdido nem sempre volta sem técnicas específicas, mas a estabilidade clínica é meta central. Resultados cirúrgicos estéticos costumam se consolidar após a cicatrização inicial de algumas semanas.",
    beforeAfterNote: null,
    faqH2: "Principais dúvidas sobre tratamentos gengivais e cirurgias",
    faqItems: [
      {
        question: "Gengivite tem cura?",
        answer:
          "Sim, em geral é totalmente reversível com remoção do biofilme, profilaxia e higiene adequada.",
      },
      {
        question: "Periodontite tem cura?",
        answer:
          "Não no sentido de eliminar todo o dano ósseo sem tratamentos avançados, mas pode ser muito bem controlada com terapia e manutenção.",
      },
      {
        question: "Gengivoplastia dói?",
        answer:
          "O procedimento é feito com anestesia local; após, pode haver desconforto leve controlado com orientação pós-operatória.",
      },
      {
        question: "Quanto tempo dura a recuperação gengival?",
        answer:
          "Em muitas cirurgias gengivais, a primeira cicatrização confortável fica na faixa de 7 a 14 dias, variando com o caso.",
      },
      {
        question: "Frenectomia resolve diastema?",
        answer:
          "Ajuda quando o freio é fator principal de manutenção do espaço; o plano pode incluir ortodontia ou outros procedimentos.",
      },
      {
        question: "Bridectomia é comum?",
        answer:
          "É menos frequente que a frenectomia e indicada em situações específicas de tração ou interferência protética.",
      },
      {
        question: "Retração gengival pode ser revertida?",
        answer:
          "Em vários casos sim, com enxertos ou técnicas de recobrimento, desde que haja indicação e suporte tecidual adequados.",
      },
      {
        question: "Posso fazer gengivoplastia junto com lentes de contato dental?",
        answer:
          "Sim, é combinação frequente em planejamentos estéticos integrados.",
      },
      {
        question: "Cirurgia gengival deixa cicatriz visível?",
        answer:
          "A gengiva cicatriza de forma natural na mucosa oral; o aspecto final depende do caso e da técnica.",
      },
      {
        question: "Preciso de manutenção após tratamento gengival?",
        answer:
          "Sim, a manutenção periodontal é essencial para manter o resultado e prevenir recidiva.",
      },
    ],
  },

  implantes: {
    h1WhatIs: "O que é implante dentário?",
    whatIsParagraph:
      "O implante dentário é uma estrutura de titânio ou outro material biocompatível, inserida cirurgicamente no osso maxilar ou mandibular para substituir a raiz do dente perdido. Sobre ele instala-se prótese (coroa, ponte ou protocolo), devolvendo mastigação e estética. Funciona como raiz artificial e permite reabilitações fixas, estáveis e muito duradouras.",
    whoCanH2: "Para quem o implante dentário é indicado?",
    indications: [
      "Perda de um ou mais dentes com indicação de reposição fixa.",
      "Dificuldade ou insatisfação com próteses removíveis.",
      "Boa saúde geral e gengival, ou condições tratáveis antes da cirurgia.",
      "Volume ósseo suficiente — ou possibilidade de enxerto/regeneração quando necessário.",
      "Desejo de reabilitação fixa e estética com previsibilidade a longo prazo.",
    ],
    contraindications: [
      "Volume ósseo crítico sem plano viável de reconstrução, quando o implante não pode ser estabilizado com segurança.",
      "Tabagismo ativo sem intenção de cessar no perioperatório (prejudica cicatrização e osseointegração).",
      "Doenças sistêmicas descompensadas (ex.: diabetes mal controlado) sem liberação médica.",
      "Higiene bucal muito deficiente sem acordo de manutenção — aumenta risco de periimplantite.",
      "Medicamentos ou condições locais (infecção ativa não tratada) que contraindiquem cirurgia — avaliação individualizada.",
    ],
    howItWorksH2: "Como funciona o tratamento com implante dentário?",
    procedureSteps: [
      "Avaliação inicial: exame clínico completo, radiografias e tomografia para medir osso e definir posição tridimensional dos implantes.",
      "Planejamento cirúrgico: escolha do tipo de reabilitação (unitário, ponte, protocolo ou overdenture), número de implantes e, quando disponível, planejamento digital ou guia cirúrgico.",
      "Cirurgia de instalação: anestesia local, inserção do implante no osso, suturas e, em casos selecionados, prótese provisória no mesmo período (carga imediata).",
      "Período de osseointegração: cicatrização óssea ao redor do implante — em muitos casos entre cerca de 2 e 6 meses, variável com protocolo e qualidade óssea.",
      "Instalação da prótese definitiva: coroa unitária, ponte sobre implantes ou protocolo, com ajustes de mordida e estética; em overdenture, acoplamento da prótese removível aos pilares.",
    ],
    procedureDurationDetail:
      "A cirurgia de uma unidade costuma levar de 40 a 90 minutos; arcos completos ou enxertos prolongam o tempo. O tratamento completo até a prótese definitiva frequentemente leva de 2 a 6 meses ou mais, conforme osso, enxertos e tipo de carga.",
    technologies: [
      "Implante unitário: um implante e coroa individual para substituir um único dente, preservando vizinhos saudáveis.",
      "Implantes múltiplos (ponte sobre implantes): dois ou mais implantes sustentando prótese fixa com vários elementos — indicado para perda de vários dentes consecutivos e para evitar removível quando possível.",
      "Implante total (protocolo sobre implantes): reabilitação fixa da arcada com distribuição estratégica em cerca de 4 a 6 implantes — para pacientes desdentados ou com dentadura instável.",
      "Overdenture: prótese removível estabilizada por implantes, com mais retenção que dentadura convencional e remoção para higiene.",
      "Carga imediata: implante e prótese provisória no mesmo período em casos selecionados com boa estabilidade primária e critérios estéticos rigorosos.",
      "Enxertos ósseos e regeneração: aumento de volume antes ou junto ao implante quando há perda óssea severa ou reabsorção após extrações antigas.",
    ],
    benefitsH2: "Quais são os benefícios do implante dentário?",
    recoveryH2: "Recuperação e pós-operatório",
    recoveryTime:
      "Nos primeiros dias podem ocorrer leve inchaço e desconforto controlado com medicação, com dieta pastosa e fria conforme orientação. Na primeira semana o edema costuma regredir e inicia-se a cicatrização superficial. Durante a osseointegração em geral não há dor contínua — é um processo biológico silencioso até a prótese definitiva.",
    painAndSwelling:
      "O procedimento é realizado com anestesia local. Após a cirurgia, edema leve e hematoma são possíveis; dor aguda intensa não é o esperado quando as orientações são seguidas.",
    postOpCare:
      "Higiene oral rigorosa com técnica indicada para implantes; escovas interdentais e fio dental ou acessórios específicos; evitar alimentos muito duros no início; não fumar; comparecer aos retornos e manutenções profissionais regulares.",
    returnToActivities:
      "Trabalho sedentário costuma ser retomado em 1 a 2 dias; esforço físico intenso e esportes de impacto devem ser liberados gradualmente pelo cirurgião.",
    resultsH2: "Quais são os resultados esperados?",
    expectedResults: [
      "Recuperação da função mastigatória com sensação próxima à do dente natural.",
      "Estética natural do sorriso com prótese bem planejada.",
      "Estabilidade a longo prazo e preservação relativa do osso alveolar.",
      "Melhora significativa da qualidade de vida com acompanhamento periódico.",
    ],
    timeToFinalResult:
      "A prótese definitiva é colocada após a osseointegração bem avaliada; com bons cuidados, implantes podem permanecer em funcionamento por décadas, embora a prótese sobre o implante possa precisar de manutenção ou troca ao longo dos anos.",
    beforeAfterNote:
      "Registro fotográfico clínico pode ser oferecido com consentimento do paciente.",
    faqH2: "Principais dúvidas sobre implante dentário",
    faqItems: [
      {
        question: "Implante dentário dói?",
        answer:
          "Não durante a cirurgia, que é feita com anestesia local. Após, pode haver desconforto leve controlado com medicação e orientações.",
      },
      {
        question: "Quanto tempo dura um implante?",
        answer:
          "Pode durar décadas com higiene adequada, controle de fatores de risco e manutenção profissional.",
      },
      {
        question: "Todo mundo pode fazer implante?",
        answer:
          "A maioria dos pacientes pode, desde que passe por avaliação clínica, de imagem e de saúde geral adequada.",
      },
      {
        question: "Precisa de osso para colocar implante?",
        answer:
          "Sim, é necessário suporte ósseo; quando falta volume, muitas vezes é possível reconstruir com enxerto ou técnicas regenerativas.",
      },
      {
        question: "O implante pode rejeitar?",
        answer:
          "Não ocorre rejeição imunológica como em transplantes de órgãos; podem existir falhas de integração ou complicações locais, por isso o acompanhamento importa.",
      },
      {
        question: "Quanto tempo demora o tratamento?",
        answer:
          "Em muitos casos a fase biológica fica na faixa de cerca de 2 a 6 meses até a prótese definitiva, podendo ser mais longa com enxertos ou protocolos complexos.",
      },
      {
        question: "Posso colocar implante no mesmo dia da extração?",
        answer:
          "Sim, em casos selecionados (implante imediato), desde que osso, infecção e estabilidade primária permitam.",
      },
      {
        question: "Quem usa dentadura pode trocar por implante?",
        answer:
          "Frequentemente sim, com planejamento para protocolo ou overdenture conforme osso e preferências.",
      },
      {
        question: "Implante é melhor que prótese?",
        answer:
          "Depende do caso clínico, mas em muitas situações o implante oferece mais estabilidade e conforto mastigatório que prótese convencional sobre mucosa.",
      },
      {
        question: "Implante pode cair?",
        answer:
          "É incomum, mas pode haver perda por falha de osseointegração, periimplantite ou falta de manutenção — por isso higiene e retornos são essenciais.",
      },
    ],
  },

  proteses: {
    h1WhatIs: "O que são próteses dentárias?",
    whatIsParagraph:
      "As próteses dentárias são dispositivos utilizados para substituir dentes perdidos ou parcialmente comprometidos, restaurando a mastigação, a estética do sorriso e a saúde bucal. Podem ser fixas ou removíveis, parciais ou totais, e são planejadas de forma individualizada conforme as necessidades clínicas de cada paciente.",
    whoCanH2: "Para quem as próteses dentárias são indicadas?",
    indications: [
      "Perda parcial ou total dos dentes.",
      "Dentes muito destruídos ou sem possibilidade de restauração conservadora.",
      "Dificuldade mastigatória por ausência ou comprometimento dentário.",
      "Comprometimento estético do sorriso.",
      "Reabilitação funcional após perdas dentárias.",
      "Necessidade de suporte para estruturas faciais, quando indicado pelo planejamento.",
    ],
    contraindications: [
      "Próteses removíveis sem compromisso com higiene e retornos — maior risco de cáries nos dentes remanescentes e lesões de mucosa.",
      "Doença periodontal ou cáries ativas não tratadas antes da fase protética definitiva (salvo fases provisórias planejadas).",
      "Insuficiência óssea ou tecidual para implantes, quando a prótese depende deles, sem alternativa viável discutida em equipe.",
      "Expectativas irreais sem diagnóstico, exame de imagem e planejamento de oclusão adequados.",
    ],
    howItWorksH2: "Como funciona o tratamento com próteses dentárias?",
    procedureSteps: [
      "Avaliação clínica e radiográfica: exame intraoral, radiografias ou tomografia quando necessário, análise da mordida e da estrutura óssea.",
      "Planejamento protético: definição do tipo de prótese ideal (fixa, removível ou sobre implantes), avaliação estética e funcional, moldagens ou escaneamento digital.",
      "Preparação da boca: tratamento de cáries ou gengiva, extrações quando indicadas, preparos em dentes pilares (prótese fixa convencional) e/ou instalação e integração de implantes quando fazem parte do plano.",
      "Confecção da prótese: produção laboratorial personalizada, com provas de adaptação, estética e oclusão.",
      "Instalação e ajustes finais: cimentação ou entrega da removível, ajuste de mordida, adaptação funcional e orientações detalhadas ao paciente.",
    ],
    procedureDurationDetail:
      "O cronograma é personalizado: casos mais simples podem evoluir em poucas semanas entre moldagem e entrega; reabilitações com implantes ou cirurgias associadas costumam levar meses até a prótese definitiva.",
    technologies: [
      "Prótese fixa (cimentada ou parafusada): coroa total sobre dente comprometido (porcelana, zircônia ou metalocerâmica) ou ponte fixa apoiada em dentes pilares preparados, substituindo um ou mais dentes ausentes, com alta estabilidade e estética.",
      "Prótese removível: prótese parcial removível (PPR) com dentes remanescentes na arcada (estrutura metálica ou acrílica) ou prótese total (dentadura) para arcada sem dentes, apoiada em mucosa e osso — soluções acessíveis que exigem adaptação e manutenção periódica.",
      "Próteses sobre implantes: coroa unitária, ponte fixa sobre pilares, prótese protocolo (fixa total em 4 a 6 implantes) ou overdenture removível estabilizada por implantes, com retenção e conforto superiores aos modelos convencionais sobre mucosa.",
    ],
    benefitsH2: "Quais são os benefícios das próteses dentárias?",
    recoveryH2: "Recuperação e adaptação pós-tratamento",
    recoveryTime:
      "Próteses fixas costumam ter adaptação rápida, com sensação próxima à dos dentes naturais. Próteses removíveis podem exigir dias a semanas de adaptação, com possível desconforto inicial e ajustes para conforto. Sobre implantes, após a fase cirúrgica e os prazos de integração, a fase protética costuma oferecer estabilidade funcional muito previsível.",
    painAndSwelling:
      "A colocação ou cimentação da prótese em si costuma ser confortável, com anestesia local quando há preparo em dente vital. Sensibilidade transitória pode ocorrer após desgastes; implantes seguem o pós-operatório específico da cirurgia.",
    postOpCare:
      "Higienização diária adequada; escovas interdentais, fio dental ou irrigadores conforme orientação; retornos periódicos para revisão e reembasamento quando necessário; evitar alimentos extremamente duros no início; não usar os dentes como ferramenta; em removíveis, higiene fora da boca com produtos indicados; em próteses sobre implantes, controle rigoroso de placa e gengiva ao redor dos pilares.",
    returnToActivities:
      "Em geral não há longo afastamento de trabalho ou estudos; mastigar com moderação até finalizar os ajustes oclusais e respeitar o repouso quando houver cirurgia de implante no mesmo plano.",
    resultsH2: "Quais são os resultados esperados?",
    expectedResults: [
      "Restauração da mastigação e melhora da fala.",
      "Ganho estético facial e do sorriso.",
      "Correção funcional da oclusão e maior estabilidade da arcada.",
      "Mais confiança e qualidade de vida com manutenção adequada.",
    ],
    timeToFinalResult:
      "O benefício funcional e estético é percebido após a inserção definitiva e os ajustes finais. A longevidade varia com o tipo de prótese, material, oclusão e higiene — em muitos casos fala-se em faixas da ordem de 5 a 20 anos ou mais, com revisões.",
    beforeAfterNote: null,
    faqH2: "Principais dúvidas sobre próteses dentárias",
    faqItems: [
      {
        question: "Prótese dentária parece dente natural?",
        answer:
          "Sim, especialmente próteses fixas e sobre implantes bem planejadas, com escolha adequada de material e cor.",
      },
      {
        question: "A prótese dói para colocar?",
        answer:
          "Não costuma doer; quando há preparo dental, utiliza-se anestesia local para conforto.",
      },
      {
        question: "Quanto tempo dura uma prótese?",
        answer:
          "Pode variar bastante — frequentemente entre cerca de 5 e 20 anos ou mais, conforme tipo, oclusão, higiene e revisões.",
      },
      {
        question: "Quem usa dentadura pode comer normalmente?",
        answer:
          "Sim, na maioria dos casos, após período de adaptação e com alguns cuidados iniciais indicados pelo profissional.",
      },
      {
        question: "Prótese fixa é melhor que removível?",
        answer:
          "Depende do caso clínico, da quantidade de dentes e osso, da higiene e da preferência — cada opção tem indicações.",
      },
      {
        question: "Implante é obrigatório para prótese?",
        answer:
          "Não, mas em muitas situações melhora estabilidade, conforto e previsibilidade mastigatória.",
      },
      {
        question: "A prótese pode cair?",
        answer:
          "Próteses fixas e bem retidas sobre implantes raramente se soltam sozinhas; removíveis são retiradas pelo paciente conforme orientação.",
      },
      {
        question: "Precisa tirar a prótese para dormir?",
        answer:
          "Apenas as removíveis, e somente quando isso for indicado no seu plano individual.",
      },
      {
        question: "É difícil se adaptar à prótese?",
        answer:
          "Removíveis costumam exigir mais tempo de adaptação; fixas tendem a parecer mais naturais mais rapidamente.",
      },
      {
        question: "Vale a pena fazer prótese dentária?",
        answer:
          "Sim, quando bem indicada devolve função, estética e qualidade de vida de forma significativa.",
      },
    ],
  },

  clareamento: {
    h1WhatIs: "O que é o clareamento dental profissional?",
    whatIsParagraph:
      "O clareamento dental profissional é um procedimento estético para clarear a cor dos dentes naturais, reduzindo pigmentações extrínsecas e algumas alterações intrínsecas, com agentes à base de peróxidos sob supervisão do cirurgião-dentista — garantindo segurança, controle e previsibilidade. O gel atua por oxidação: penetra esmalte e dentina e fragmenta moléculas pigmentadas, deixando o dente visualmente mais claro. O clareamento não muda a cor de restaurações, coroas ou facetas, atuando só em tecido dental natural.",
    whoCanH2: "Para quem o clareamento dental é indicado?",
    indications: [
      "Escurecimento por pigmentos alimentares (café, vinho, tabaco etc.).",
      "Amarelamento natural dos dentes ao longo do tempo.",
      "Alterações leves a moderadas de cor em dentes vitais.",
      "Dentes não vitais, quando indicado clareamento interno ou protocolos específicos.",
      "Pacientes com boa saúde bucal geral e expectativas alinhadas ao plano clínico.",
    ],
    contraindications: [
      "Gestantes e lactantes (dependendo do protocolo clínico e orientação individual).",
      "Crianças e adolescentes com dentição imatura, salvo exceções avaliadas pelo profissional.",
      "Hipersensibilidade dentária severa não controlada.",
      "Cáries ativas ou doença periodontal não tratada.",
      "Restaurações extensas na região estética: o resultado pode ser limitado ou desuniforme em relação ao dente natural.",
    ],
    howItWorksH2: "Como funciona o procedimento?",
    procedureSteps: [
      "Avaliação clínica, definição do protocolo (consultório, caseiro supervisionado, combinado ou interno em dente tratado endodonticamente), profilaxia prévia e controle de cáries ou gengiva quando necessário.",
      "Clareamento em consultório (in-office): proteção gengival e de tecidos moles, aplicação do gel clareador de alta concentração em sessões controladas por tempo (em geral 40 a 90 minutos), remoção e avaliação; fonte de luz (LED) ou laser pode ou não fazer parte do protocolo.",
      "Clareamento caseiro supervisionado: moldagem ou escaneamento digital, confecção de moldeiras personalizadas, orientação de uso do gel de menor concentração por período diário definido, acompanhamento periódico e ajuste de concentração ou tempo se necessário (tratamento frequentemente na faixa de 2 a 4 semanas).",
      "Clareamento combinado: sessão inicial em consultório com continuidade em moldeiras em casa para potencializar resultado e previsibilidade em escurecimentos moderados a graves.",
      "Clareamento interno (quando indicado): aplicação do agente na câmara pulpar de dente escurecido após canal, trocas periódicas até a cor desejada e vedação final.",
      "Encerramento do protocolo ativo com avaliação de cor, orientações de manutenção (hábitos, higiene e retouches futuros) e uso de produtos de suporte à sensibilidade quando prescritos.",
    ],
    procedureDurationDetail:
      "Consultório: em geral sessões de 40 a 90 minutos, com possível efeito mais imediato. Caseiro supervisionado: frequentemente cerca de 2 a 4 semanas de uso conforme orientação. Prazo total varia com técnica, pigmentação inicial e resposta individual.",
    technologies: [
      "Clareamento de consultório (in-office): gel de alta concentração, isolamento gengival, sessões controladas; opcionalmente fonte de luz (LED ou laser) conforme protocolo — resultados em geral mais rápidos.",
      "Clareamento caseiro supervisionado (home bleaching): moldeiras personalizadas, gel de menor concentração, uso diário por período definido — resultados progressivos e bom controle de sensibilidade.",
      "Clareamento combinado: associação consultório + caseiro para maior eficácia e estabilidade em alguns casos.",
      "Clareamento interno: técnica específica para dentes tratados endodonticamente com escurecimento.",
    ],
    benefitsH2: "Quais são os benefícios do clareamento dental?",
    recoveryH2: "Sensibilidade e recuperação pós-tratamento",
    recoveryTime:
      "A sensibilidade ao frio é o efeito colateral mais comum; costuma ser leve a moderada, temporária e manejável com dessensibilizantes e ajustes no protocolo sob orientação profissional.",
    painAndSwelling:
      "Não há inchaço facial típico do procedimento. Dor intensa não é o padrão; o que mais se relata é sensibilidade durante ou após o tratamento, em geral transitória.",
    postOpCare:
      "Evitar alimentos muito pigmentados nas primeiras 48 horas quando orientado; reduzir café, vinho, chá preto e refrigerantes escuros; manter higiene oral rigorosa; usar creme dental dessensibilizante quando indicado; seguir à risca tempo de aplicação e produtos prescritos — sem clareadores “caseiros” não supervisionados.",
    returnToActivities:
      "Trabalho, estudos e rotina seguem normalmente; recomenda-se cautela temporária com alimentos e bebidas pigmentadas conforme orientação pós-sessão ou durante o protocolo domiciliar.",
    resultsH2: "Quais são os resultados esperados?",
    expectedResults: [
      "Clareamento visível já nas primeiras sessões ou nas primeiras semanas, conforme a técnica (consultório x caseiro).",
      "Resultado final em torno de 1 a 4 semanas em muitos protocolos caseiros, ou evolução mais imediata/progressiva em consultório, conforme o caso.",
      "Sorriso mais claro e harmonioso, com naturalidade compatível com a cor inicial e o tipo de pigmentação.",
      "Estabilidade da cor variável ao longo dos meses e anos, conforme hábitos alimentares, tabaco e manutenção.",
    ],
    timeToFinalResult:
      "O ganho de cor depende da cor inicial, do tipo de pigmentação, da técnica e da resposta individual. Manutenção prolonga o efeito: reduzir pigmentantes, não fumar, limpezas profissionais periódicas, retouches quando indicados e higiene rigorosa.",
    beforeAfterNote:
      "Registros fotográficos ou escala de cor podem documentar a evolução, conforme consentimento e protocolo da clínica.",
    faqH2: "Principais dúvidas sobre clareamento dental",
    faqItems: [
      {
        question: "O clareamento dental enfraquece os dentes?",
        answer:
          "Não. Quando realizado corretamente, não se trata de remover estrutura dental; o protocolo deve ser individualizado e supervisionado.",
      },
      {
        question: "O resultado é permanente?",
        answer:
          "Não. Pode ser duradouro, mas os dentes podem escurecer novamente com o tempo conforme hábitos alimentares e outros fatores.",
      },
      {
        question: "Dói fazer clareamento?",
        answer:
          "Não costuma “doer”, mas sensibilidade temporária é comum e pode ser controlada com ajustes e produtos de apoio.",
      },
      {
        question: "Quanto tempo dura o tratamento?",
        answer:
          "De alguns dias ou sessões (consultório) até algumas semanas (caseiro supervisionado), conforme o plano.",
      },
      {
        question: "Clareamento funciona em qualquer dente?",
        answer:
          "Atua em dentes naturais; não clareia restaurações, coroas ou facetas da mesma forma.",
      },
      {
        question: "Posso fazer clareamento com restaurações?",
        answer:
          "Sim, em muitos casos, mas pode haver diferença de cor entre dente natural e material restaurador — o plano deve considerar isso.",
      },
      {
        question: "Quem fuma pode fazer clareamento?",
        answer:
          "Pode, em geral, mas o tabaco reduz a durabilidade do resultado e mancha mais rápido.",
      },
      {
        question: "Posso repetir o clareamento?",
        answer:
          "Sim, desde que haja avaliação profissional e intervalo adequado ao seu caso.",
      },
      {
        question: "Luz ou laser aceleram o clareamento?",
        answer:
          "Podem ser coadjuvantes em alguns protocolos, mas o efeito principal vem do gel clareador e do planejamento clínico.",
      },
      {
        question: "Qual a diferença entre clareamento caseiro e de consultório?",
        answer:
          "O caseiro supervisionado costuma ser mais gradual; o de consultório costuma ser mais rápido, sempre com supervisão direta na clínica.",
      },
    ],
  },

  "lentes-dentais": {
    h1WhatIs: "O que são lentes de contato dental?",
    whatIsParagraph:
      "As lentes de contato dental são lâminas extremamente finas de porcelana ou resina cerâmica, confeccionadas sob medida e cimentadas na face frontal dos dentes para melhorar a estética do sorriso — cor, formato, tamanho e pequenos desalinhamentos. São um dos procedimentos mais modernos da odontologia estética, permitindo grande transformação com desgaste mínimo ou, em alguns protocolos, nenhum desgaste.",
    whoCanH2: "Para quem as lentes de contato dental são indicadas?",
    indications: [
      "Dentes escurecidos ou com coloração irregular.",
      "Pequenos desalinhamentos dentários.",
      "Diastemas (espaços entre os dentes).",
      "Dentes com formato irregular ou tamanho reduzido.",
      "Desgastes dentários leves.",
      "Assimetria do sorriso.",
      "Reabilitação estética da região anterior.",
    ],
    contraindications: [
      "Bruxismo ou apertamento não controlados sem plano de proteção noturna (alto risco de fratura ou descolamento).",
      "Doença periodontal ativa ou higiene bucal muito deficiente sem compromisso de tratamento.",
      "Maloclusão grave que deva ser corrigida ortodonticamente antes do planejamento estético em cerâmica.",
      "Expectativas estéticas irreais ou incompatíveis com a anatomia dental e gengival.",
    ],
    howItWorksH2: "Como funciona o procedimento de lentes de contato dental?",
    procedureSteps: [
      "Avaliação clínica e planejamento: exame detalhado, fotografias intra e extraorais, escaneamento digital ou moldagem e análise da oclusão.",
      "Planejamento digital do sorriso (DSD): simulação do novo sorriso, definição de formato, proporção e estética, com aprovação do paciente.",
      "Preparo dental quando necessário: desgaste mínimo ou inexistente, condicionamento do esmalte e máxima preservação da estrutura.",
      "Confecção das lentes em laboratório protético especializado, com alta precisão estética e funcional.",
      "Prova das lentes no consultório, ajustes de cor e adaptação, seguidos da cimentação adesiva definitiva (com anestesia local quando necessária).",
    ],
    procedureDurationDetail:
      "Em geral há 2 a 3 sessões principais distribuídas ao longo de algumas semanas, conforme complexidade do caso e tempo de laboratório.",
    technologies: [
      "Lentes de porcelana (cerâmica): padrão ouro em estética — alta resistência e durabilidade, mimetização da cor natural, estabilidade de cor e alta previsibilidade; indicadas para reabilitações estéticas completas, alterações de cor moderadas, diastemas e correção de forma e tamanho.",
      "Lentes de resina composta: alternativa mais conservadora e acessível, confecção direta ou indireta, reparo mais simples e menor durabilidade e estabilidade de cor que a porcelana; indicadas para correções leves, casos temporários ou pacientes jovens, com reversibilidade parcial em alguns desenhos.",
      "Lentes ultrafinas (mínimo ou sem desgaste): porcelana de espessura muito reduzida, podendo dispensar desgaste com planejamento digital preciso e máxima preservação dental.",
    ],
    benefitsH2: "Quais são os benefícios das lentes de contato dental?",
    recoveryH2: "Recuperação e pós-tratamento",
    recoveryTime:
      "A recuperação costuma ser rápida por ser minimamente invasiva. Nos primeiros dias pode haver leve sensibilidade ao frio, adaptação à nova mordida e ao volume dental; em poucos dias o paciente costuma estar totalmente adaptado, sem necessidade de afastamento de atividades.",
    painAndSwelling:
      "O procedimento não costuma ser doloroso; quando há preparo, utiliza-se anestesia local. Não há inchaço facial esperado como padrão; sensação estética nova é comum até a adaptação.",
    postOpCare:
      "Evitar alimentos muito duros nos primeiros dias; higiene oral rigorosa e fio dental diário; não morder objetos, unhas ou usar os dentes como ferramenta; consultas de manutenção periódicas; placa de proteção noturna (miorrelaxante) em casos de bruxismo. Manutenção: profilaxias regulares, evitar hábitos parafuncionais e revisões periódicas com o dentista.",
    returnToActivities:
      "Em geral não há necessidade de afastamento de trabalho ou estudos; retorno imediato à rotina, com os cuidados alimentares iniciais indicados.",
    resultsH2: "Quais são os resultados esperados?",
    expectedResults: [
      "Sorriso mais branco, harmônico e simétrico.",
      "Melhora de formato e proporção dentária.",
      "Correção estética de imperfeições leves a moderadas com aparência personalizada e natural.",
      "Alta satisfação e resultados duradouros, especialmente com lentes de porcelana bem indicadas e mantidas.",
    ],
    timeToFinalResult:
      "O resultado estético definitivo percebe-se após a cimentação e os ajustes finais de oclusão. A longevidade em porcelana costuma ser da ordem de 10 a 15 anos ou mais, variando com higiene, hábitos e revisões.",
    beforeAfterNote:
      "Registros fotográficos antes e depois ajudam a documentar o caso quando autorizados pelo paciente.",
    faqH2: "Principais dúvidas sobre lentes de contato dental",
    faqItems: [
      {
        question: "Lente de contato dental desgasta o dente?",
        answer:
          "Pode haver desgaste mínimo ou nenhum, dependendo do tipo de lente, do planejamento digital e das necessidades do caso.",
      },
      {
        question: "As lentes ficam naturais?",
        answer:
          "Sim. Quando bem planejadas e executadas, a aparência costuma ser extremamente natural.",
      },
      {
        question: "Quanto tempo duram?",
        answer:
          "Em média 10 a 15 anos para porcelana, podendo durar mais com cuidados e revisões; resina costuma ter menor longevidade.",
      },
      {
        question: "O procedimento dói?",
        answer:
          "Não costuma doer; quando há preparo, utiliza-se anestesia local para conforto.",
      },
      {
        question: "Lentes de resina são boas?",
        answer:
          "Sim para indicações específicas, mas em geral têm menor durabilidade e estabilidade de cor que a porcelana.",
      },
      {
        question: "Quem tem bruxismo pode colocar lentes?",
        answer:
          "Pode, na maioria dos casos, desde que haja controle clínico e uso de placa de proteção noturna quando indicado.",
      },
      {
        question: "As lentes podem cair?",
        answer:
          "Raramente, se a cimentação e a oclusão forem adequadas e os cuidados forem mantidos.",
      },
      {
        question: "Posso clarear as lentes depois?",
        answer:
          "Não. Clareamento atua em dente natural; não altera a cor de porcelana ou resina já instalada.",
      },
      {
        question: "Qual a diferença entre lente e faceta?",
        answer:
          "São termos muito próximos; a diferença prática costuma estar na espessura, no material e na indicação clínica de cada caso.",
      },
      {
        question: "Vale a pena fazer lentes de contato dental?",
        answer:
          "Quando bem indicadas, costumam oferecer grande impacto estético e satisfação, com planejamento individualizado.",
      },
    ],
  },

  ortodontia: {
    h1WhatIs: "O que são tratamentos ortodônticos?",
    whatIsParagraph:
      "Os tratamentos ortodônticos corrigem o alinhamento dos dentes e a posição relativa dos ossos maxilares, melhorando a estética do sorriso, a mastigação e a saúde bucal. Podem afetar crianças, adolescentes e adultos e são realizados principalmente com aparelhos fixos, expansores, elásticos e outras mecânicas; alinhadores transparentes podem integrar o plano em casos selecionados. Em desarmonias esqueléticas severas pode haver indicação de cirurgia ortognática associada.",
    whoCanH2: "Quais problemas a ortodontia trata?",
    indications: [
      "Apinhamento dentário: falta de espaço, dentes sobrepostos ou tortos.",
      "Diastema: espaço entre dentes, em geral entre incisivos centrais superiores.",
      "Mordida cruzada: dentes superiores oclusando por dentro dos inferiores, anterior ou posterior.",
      "Prognatismo e outras discrepâncias esqueléticas: mandíbula projetada ou desalinhamento facial e oclusal que necessitem correção dentária e/ou óssea.",
      "Recidivas leves de tratamentos anteriores ou planejamento interceptivo em crianças, quando indicado.",
    ],
    contraindications: [
      "Doença periodontal ativa sem terapia prévia — a movimentação exige suporte gengival e ósseo estável.",
      "Higiene muito deficiente sem plano de motivação (maior risco de cáries e lesões gengivais com aparelho fixo).",
      "Expectativas estéticas ou funcionais irreais sem diagnóstico completo (modelos, fotos, radiografias ou tomografia quando necessário).",
      "Uso de alinhadores sem colaboração com tempo de uso diário adequado — pode comprometer o resultado.",
    ],
    howItWorksH2: "Como funciona o tratamento ortodôntico?",
    procedureSteps: [
      "Avaliação clínica e radiográfica (e tomografia ou outros exames quando indicados ao planejamento).",
      "Moldagens ou escaneamento digital da arcada.",
      "Diagnóstico ortodôntico e definição do tipo de mecânica: fixa, alinhadores, expansor, elásticos ou combinações.",
      "Planejamento do tratamento com metas de oclusão, estética e saúde periodontal.",
      "Instalação do aparelho fixo ou início do protocolo com alinhadores; ajustes periódicos conforme a evolução.",
      "Conclusão da fase ativa e instalação de contenções fixas ou removíveis para estabilidade.",
      "Manutenção com retornos para checagem de contenção e saúde bucal.",
    ],
    procedureDurationDetail:
      "Em muitos casos o tratamento ativo leva em média cerca de 12 a 36 meses, variando com a severidade da maloclusão, idade, tipo de aparelho e necessidade de cirurgia ou expansão. Consultas de ajuste costumam ocorrer a cada algumas semanas conforme o protocolo.",
    technologies: [
      "Apinhamento: aparelho fixo com bráquetes e fios; alinhadores transparentes em casos leves a moderados; expansão de arcada (comum em crianças e adolescentes); extrações selecionadas para ganho de espaço quando indicado pelo diagnóstico.",
      "Diastema: fechamento ortodôntico progressivo; frenectomia quando o freio labial contribui para recidiva; em alguns casos lentes de contato ou resinas para fechamento estético complementar.",
      "Mordida cruzada: expansores palatinos (eficazes principalmente em fases de crescimento); aparelho fixo; alinhadores em casos leves a moderados; cirurgia ortognática em discrepâncias severas entre arcadas.",
      "Prognatismo: ortodontia compensatória em casos leves; aparelho com elásticos intermaxilares quando indicado; cirurgia ortognática para reposicionamento da mandíbula ou maxila em casos moderados a graves.",
    ],
    benefitsH2: "Quais são os benefícios do tratamento ortodôntico?",
    recoveryH2: "Recuperação e pós-tratamento",
    recoveryTime:
      "Durante o uso do aparelho pode haver leve desconforto inicial e após cada ajuste, com normalização em poucos dias. Alinhadores exigem adaptação à fala e à rotina de uso. Após a remoção do aparelho ativo, inicia-se a fase de contenção (fixa ou removível) para evitar movimentação indesejada dos dentes.",
    painAndSwelling:
      "Pressão leve nos dentes é esperada após ativações; úlceras por atrito podem ocorrer no início do fixo e melhoram com cera ortodôntica. Não há inchaço facial típico, salvo em cirurgia ortognática associada.",
    postOpCare:
      "Higiene oral rigorosa com escovas e acessórios interdentais; evitar alimentos muito duros ou pegajosos que quebrem bráquetes; uso correto de alinhadores (tempo diário e higiene das placas); comparecer às consultas de manutenção; usar contenção conforme orientação após o término do tratamento ativo.",
    returnToActivities:
      "Estudos, trabalho e a maioria dos esportes seguem durante o tratamento; em esportes de contato recomenda-se protetor bucal. Cirurgia ortognática segue repouso e liberação específicos da equipe cirúrgica.",
    resultsH2: "Quais são os resultados esperados?",
    expectedResults: [
      "Dentes mais alinhados e oclusão mais equilibrada.",
      "Melhora estética do sorriso e, em muitos casos, harmonia facial.",
      "Facilidade de higiene e menor risco de cáries e gengivite relacionadas a apinhamento.",
      "Estabilidade com contenção e prevenção de recidivas quando os fatores de risco são controlados.",
    ],
    timeToFinalResult:
      "O resultado ativo consolida-se ao fim da ortodontia; a estabilidade a longo prazo depende da contenção e dos retornos. Em casos com cirurgia ortognática, o tempo total do plano é prolongado conforme as fases cirúrgicas e ortodônticas.",
    beforeAfterNote: null,
    faqH2: "Principais dúvidas sobre ortodontia",
    faqItems: [
      {
        question: "Aparelho dói?",
        answer:
          "Pode causar leve desconforto no início ou após ajustes, em geral transitório.",
      },
      {
        question: "Quanto tempo dura o tratamento?",
        answer:
          "Em muitos casos fica na faixa média de cerca de 12 a 36 meses, dependendo da maloclusão e da mecânica.",
      },
      {
        question: "Alinhadores funcionam como aparelho fixo?",
        answer:
          "Podem substituir o fixo em muitos casos leves a moderados; casos mais complexos podem exigir fixo ou combinação.",
      },
      {
        question: "Diastema pode voltar?",
        answer:
          "Sim, se não houver contenção adequada ou se o freio e os hábitos não forem manejados quando necessário.",
      },
      {
        question: "Mordida cruzada tem cura?",
        answer:
          "Sim, com tratamento ortodôntico bem planejado; formas severas podem exiger abordagem cirúrgica.",
      },
      {
        question: "Prognatismo sempre precisa de cirurgia?",
        answer:
          "Não. Apenas os casos mais severos ou esqueléticos costumam indicar cirurgia ortognática; muitos respondem a ortodontia compensatória.",
      },
      {
        question: "Crianças podem usar aparelho?",
        answer:
          "Sim; em algumas situações a interceptação precoce é recomendada pelo ortodontista.",
      },
      {
        question: "Precisa usar contenção após o aparelho?",
        answer:
          "Sim, é essencial para estabilidade e prevenção de recidiva.",
      },
      {
        question: "Aparelho prejudica a higiene?",
        answer:
          "Pode exigir mais tempo e técnica, mas com orientação adequada a higiene é mantida sob controle.",
      },
      {
        question: "Ortodontia melhora o rosto?",
        answer:
          "Pode melhorar bastante a harmonia facial e do perfil, especialmente quando há componente esquelético tratado de forma adequada.",
      },
    ],
  },

  "alinhadores-transparentes": {
    h1WhatIs: "O que são aparelhos ortodônticos transparentes?",
    whatIsParagraph:
      "Os aparelhos transparentes (alinhadores ortodônticos) são placas removíveis, individuais e quase imperceptíveis, produzidas após escaneamento ou moldagem digital da arcada. Cada etapa da sequência aplica forças leves e controladas para mover os dentes em direção ao plano aprovado pelo ortodontista — com exigência de tempo de uso diário e consultas de acompanhamento.",
    whoCanH2: "Para quem os alinhadores transparentes são indicados?",
    indications: [
      "Apinhamentos leves a moderados, pequenos espaços e correções estéticas compatíveis com movimentação por plástica.",
      "Adultos e adolescentes colaborativos, capazes de usar as placas pelo período diário orientado.",
      "Pacientes com boa higiene bucal e suporte periodontal estável.",
      "Casos em que o diagnóstico ortodôntico permite execução predominante ou parcial por alinhadores, eventualmente combinados a aparelho fixo em fases específicas.",
    ],
    contraindications: [
      "Falta de comprometimento com o uso diário prolongado das placas — sem isso o tratamento não evolui de forma previsível.",
      "Maloclusões graves, controle vertical complexo ou necessidade esquelética que exijam fixo, microimplantes ou cirurgia.",
      "Periodontite ativa ou mobilidade dentária sem tratamento prévio.",
      "Bruxismo descontrolado sem estratégia de proteção — pode danificar ou desgastar as placas.",
    ],
    howItWorksH2: "Como funciona o tratamento com alinhadores?",
    procedureSteps: [
      "Consulta diagnóstica com exame clínico e exames de imagem quando necessários.",
      "Escaneamento intraoral ou moldagem para modelo tridimensional.",
      "Planejamento digital da sequência de placas e aprovação do movimento virtual.",
      "Entrega das placas, orientação de troca (em geral a cada 1 a 2 semanas, conforme protocolo) e marcação de retornos.",
      "Consultas de controle para verificar encaixe, progresso e eventuais “refinamentos” com novas séries.",
      "Conclusão da fase ativa e contenção (placas noturnas ou contenção fixa, conforme planejamento).",
    ],
    procedureDurationDetail:
      "Em muitos casos a fase ativa fica entre cerca de 6 e 24 meses, variando com a complexidade, refinamentos e colaboração do paciente.",
    technologies: [
      "Scanner intraoral 3D e software de simulação de movimentação dentária.",
      "Fabricação de placas termoformadas ou impressas em material transparente biocompatível.",
    ],
    benefitsH2: "Quais são os benefícios dos alinhadores transparentes?",
    recoveryH2: "Adaptação e desconforto",
    recoveryTime:
      "Não há recuperação cirúrgica; pressão leve nos primeiros dias de cada nova placa é comum e tende a diminuir rapidamente.",
    painAndSwelling:
      "Desconforto leve tipo pressão dentária; alteração breve da fala no início. Inchaço facial não é esperado.",
    postOpCare:
      "Retirar apenas para comer e higienizar; limpar as placas com escova macia e água morna ou produto indicado; evitar água fervente que deforme o material; armazenar na caixa quando fora da boca.",
    returnToActivities:
      "Trabalho, estudos e esportes em geral sem restrição; em esportes de contato usar protetor bucal conforme orientação.",
    resultsH2: "Quais resultados são esperados?",
    expectedResults: [
      "Melhora progressiva do alinhamento e da estética do sorriso quando o caso é compatível.",
      "Oclusão mais harmônica em planos bem indicados.",
      "Estabilidade com fase de contenção após o término das placas ativas.",
    ],
    timeToFinalResult:
      "Mudanças graduais a cada troca de placa; resultado ativo ao completar a série planejada e refinamentos eventualmente necessários.",
    beforeAfterNote: null,
    faqH2: "Dúvidas frequentes sobre aparelhos transparentes",
    faqItems: [
      {
        question: "Preciso usar o dia todo?",
        answer:
          "Em geral o ortodontista prescreve muitas horas diárias de uso contínuo, interrompendo só para refeições e higiene — o cumprimento do tempo é decisivo para o prazo e o resultado.",
      },
      {
        question: "Posso comer com a placa?",
        answer:
          "Não é recomendado: alimentos podem rachar o material e favorecer cáries se restarem resíduos sob a placa.",
      },
      {
        question: "Alinhador substitui aparelho fixo em qualquer caso?",
        answer:
          "Não. Casos complexos podem exigir fixo, microimplantes ou cirurgia; a escolha é individual após diagnóstico completo.",
      },
      {
        question: "Como higienizar as placas?",
        answer:
          "Lavar com água morna, escova macia e sabão neutro ou produtos específicos indicados; evitar dentifrícios abrasivos ou água fervente.",
      },
    ],
  },

  odontopediatria: {
    h1WhatIs: "O que é odontopediatria?",
    whatIsParagraph:
      "A odontopediatria é a especialidade responsável pela saúde bucal de bebês, crianças e adolescentes, desde o nascimento até o início da vida adulta. Seu objetivo é prevenir doenças, tratar problemas e promover hábitos saudáveis, garantindo o desenvolvimento adequado dos dentes, dos ossos e das funções orais. O acompanhamento desde cedo ajuda a prevenir cáries e gengivite, favorecer a erupção correta, reduzir medo futuro do consultório e interceptar alterações oclusais quando necessário.",
    whoCanH2: "Quem deve ser acompanhado pelo odontopediatra?",
    indications: [
      "Bebês: idealmente a partir do primeiro dente ou até 1 ano — primeira consulta, orientação aos pais, higiene de gengivas e prevenção da cárie de mamadeira.",
      "Crianças de aproximadamente 3 a 12 anos: dentição decídua e mista — profilaxia, flúor, selantes, restaurações, pulpotomia/pulpectomia quando indicada, manutenção de espaço após perda precoce.",
      "Adolescentes de cerca de 12 a 18 anos: dentição permanente — ortodontia, profilaxia e controle de tártaro, restaurações estéticas, clareamento apenas se houver indicação rigorosa, placa para bruxismo quando necessário.",
      "Qualquer faixa etária com trauma dental, dor, inchaço, alteração na erupção ou hábitos (sucção digital prolongada, respiração oral) que mereçam avaliação.",
    ],
    contraindications: [
      "Procedimentos eletivos devem ser postergados em quadros agudos graves de saúde geral até liberação médica.",
      "Sedação ou anestesia geral, quando necessárias, exigem centro e equipe habilitados — planejamento específico, não impeditivo à própria especialidade.",
      "Uso de flúor, clareamento ou produtos sem dosagem e indicação profissional — evitar automedicação ou “caseiro”.",
    ],
    howItWorksH2: "Como funciona o tratamento odontopediátrico?",
    procedureSteps: [
      "Avaliação clínica completa com abordagem humanizada, adaptada à idade e ao comportamento.",
      "Diagnóstico do desenvolvimento bucal (erupção, oclusão, higiene, hábitos e risco de cárie).",
      "Plano de tratamento individualizado — preventivo, restaurador ou encaminhamento ortodôntico quando for o caso.",
      "Procedimentos preventivos (profilaxia, flúor, selantes) ou restauradores (resina, ionômero) conforme necessidade.",
      "Orientação de higiene para pais e, conforme a maturidade, para o próprio paciente; dieta e controle de açúcar.",
      "Acompanhamento periódico com intervalos definidos pelo risco de cárie e pelo estágio de desenvolvimento.",
    ],
    procedureDurationDetail:
      "Consultas de rotina costumam levar de 30 a 45 minutos. Tratamentos mais longos ou múltiplas restaurações podem ser fracionados em várias visitas para conforto da criança.",
    technologies: [
      "Bebês (0 a 3 anos): primeira consulta com avaliação da boca e orientação; higiene precoce com gaze ou escova infantil; prevenção da cárie de mamadeira com orientação alimentar e controle de açúcar e mamadeira noturna.",
      "Crianças (3 a 12 anos): profilaxia; aplicação de flúor; selantes em molares; restaurações com resina ou ionômero; pulpotomia/pulpectomia em dentes decíduos comprometidos; mantenedor de espaço após perda precoce de dente de leite.",
      "Adolescentes (12 a 18 anos): ortodontia para alinhamento e oclusão; profilaxia e controle de gengivite; restaurações estéticas; clareamento somente em casos selecionados; placa miorrelaxante para bruxismo quando indicado.",
    ],
    benefitsH2: "Quais são os benefícios da odontopediatria?",
    recoveryH2: "Recuperação e pós-tratamento",
    recoveryTime:
      "Procedimentos preventivos em geral não exigem “recuperação”. Após restaurações, a adaptação costuma ser rápida, com possível sensibilidade leve temporária. Na ortodontia, a adaptação ao aparelho é gradual nas primeiras semanas.",
    painAndSwelling:
      "Consultas de prevenção são indoloras. Procedimentos com anestesia local são realizados com técnica adequada à idade; edema é mais esperado após extrações ou cirurgias, não após selante ou flúor.",
    postOpCare:
      "Higiene supervisionada pelos responsáveis; escova e fio adequados ao caso; reduzir açúcar entre refeições; retornos regulares; uso de flúor (creme ou gel) conforme orientação do dentista; em ortodontia, seguir higiene interdental e dieta indicada.",
    returnToActivities:
      "Após a maioria dos procedimentos preventivos e restaurações simples, escola e brincadeiras podem ser retomadas no mesmo dia, salvo orientação específica.",
    resultsH2: "Quais são os resultados esperados na odontopediatria?",
    expectedResults: [
      "Dentes e gengiva mais saudáveis e menor incidência de cáries.",
      "Desenvolvimento harmônico da arcada e interceptação precoce de problemas.",
      "Sorriso mais alinhado e funcional quando há ortodontia.",
      "Criança e adolescente mais confiantes e com melhor qualidade de vida bucal.",
    ],
    timeToFinalResult:
      "Resultados preventivos são contínuos ao longo das idades; ortodontia evolui ao longo de meses ou anos conforme o caso. O sucesso depende da combinação entre consultório e hábitos em casa.",
    beforeAfterNote: null,
    faqH2: "Principais dúvidas sobre odontopediatria",
    faqItems: [
      {
        question: "Quando devo levar meu filho ao dentista?",
        answer:
          "A partir do nascimento do primeiro dente ou, no máximo, até cerca de 1 ano de idade, para orientação e prevenção.",
      },
      {
        question: "Dente de leite precisa tratar cárie?",
        answer:
          "Sim, pois pode doer, infeccionar e prejudicar o germe do dente permanente.",
      },
      {
        question: "Criança pode usar flúor?",
        answer:
          "Sim, com dosagem e produtos adequados à idade e orientação profissional.",
      },
      {
        question: "Aparelho pode ser usado em crianças?",
        answer:
          "Sim, quando houver indicação ortodôntica e momento certo de interceptação ou correção.",
      },
      {
        question: "Criança pode ter canal?",
        answer:
          "Sim, em casos de trauma ou infecção profunda em dente decíduo — com técnicas como pulpotomia ou pulpectomia conforme o caso.",
      },
      {
        question: "Levar ao dentista cedo evita medo?",
        answer:
          "Sim, consultas precoces e positivas ajudam na adaptação e reduzem ansiedade futura.",
      },
      {
        question: "Criança pode ter gengivite?",
        answer:
          "Sim, principalmente quando a higiene é inadequada ou há acúmulo de placa.",
      },
      {
        question: "Dentes de leite caem sozinhos sempre?",
        answer:
          "Na maioria sim, mas alguns precisam de acompanhamento ou remoção planejada se atrapalharem a erupção do permanente.",
      },
      {
        question: "Clareamento pode ser feito em adolescentes?",
        answer:
          "Apenas em casos criteriosamente indicados e supervisionados pelo dentista.",
      },
      {
        question: "Odontopediatria é só prevenção?",
        answer:
          "Não — inclui prevenção, mas também restauração, controle de trauma, manutenção de espaço, encaminhamento ortodôntico e outros tratamentos conforme necessidade.",
      },
    ],
  },

  "extracao-dentaria": {
    h1WhatIs: "O que é a extração dentária (exodontia)?",
    whatIsParagraph:
      "A extração dentária, também chamada de exodontia, é o procedimento para remover um dente da cavidade oral quando ele não pode ser mantido com segurança ou funcionalidade — por comprometimento estrutural, infeccioso, ortodôntico ou traumático. Embora a odontologia moderna priorize a preservação dos dentes naturais, a extração continua necessária em diversos casos para proteger a saúde bucal geral e evitar complicações mais graves.",
    whoCanH2: "Para quem a extração dentária é indicada?",
    indications: [
      "Cáries profundas irreversíveis ou dente não restaurável.",
      "Infecções dentárias recorrentes, como abscessos, quando a manutenção não é viável.",
      "Doença periodontal avançada com mobilidade severa ou prognóstico ruim.",
      "Dentes fraturados sem possibilidade de reconstrução adequada.",
      "Dentes impactados ou inclusos (incluindo terceiros molares).",
      "Necessidade ortodôntica por falta de espaço na arcada.",
      "Lesões periapicais extensas sem resposta a tratamento conservador.",
      "Dentes supranumerários (extras) que prejudicam oclusão ou higiene.",
    ],
    contraindications: [
      "Quadros sistêmicos agudos ou descompensados sem liberação médica para procedimento eletivo.",
      "Distúrbios de coagulação não investigados ou uso de anticoagulantes sem critério de manejo definido pela equipe.",
      "Infecção aguda difusa ou celulite em evolução — pode ser necessário controle inicial antes da extração eletiva.",
      "Contraindicações ou cautelas específicas à anestesia local conforme anamnese (devem ser discutidas individualmente).",
    ],
    howItWorksH2: "Como o procedimento funciona?",
    procedureSteps: [
      "Avaliação clínica e radiográfica (e, em inclusos, exame de imagem mais detalhado quando indicado).",
      "Planejamento do tipo de extração: simples, cirúrgica ou cirúrgica para dente incluso.",
      "Anestesia local para conforto durante o ato; em alguns casos pode-se discutir sedação conforme centro e indicação.",
      "Remoção do dente: em extração simples, mobilização com fórceps e alavancas até a saída completa; em cirúrgica, incisão, remoção de osso ou odontosecção (divisão do dente) e sutura quando necessário.",
      "Controle de sangramento e, se houver, sutura do leito operatório.",
      "Orientações pós-operatórias detalhadas e prescrição quando indicada.",
    ],
    procedureDurationDetail:
      "Em geral de 20 minutos a 1 hora, dependendo da complexidade, anatomia radicular e necessidade de técnica cirúrgica.",
    technologies: [
      "Extração simples: anestesia local, fórceps e alavancas em dente visível, sem grandes complicações anatômicas — indicada em cárie extensa não restaurável, mobilidade periodontal severa ou fratura com raiz acessível.",
      "Extração cirúrgica: anestesia local (ou sedação em casos selecionados), incisão, remoção pontual de osso, odontosecção quando necessário e suturas ao final — para dentes inclusos, semi-inclusos, fraturados abaixo da gengiva ou anatomia radicular complexa.",
      "Extração de inclusos (ex.: sisos): cirurgia comum em terceiros molares, com avaliação por panorâmica ou tomografia quando há proximidade anatômica relevante e cuidados pós-operatórios frequentemente mais rigorosos.",
    ],
    benefitsH2: "Quais são os benefícios da extração dentária?",
    recoveryH2: "Recuperação pós-operatória",
    recoveryTime:
      "Nas primeiras 24 a 72 horas podem ocorrer inchaço leve a moderado, desconforto controlado com analgésicos conforme prescrição, pequeno sangramento inicial e necessidade de repouso relativo. Entre 3 e 7 dias há redução do inchaço e cicatrização inicial da gengiva, com retorno gradual às atividades. Entre 7 e 14 dias costuma ocorrer remoção de pontos quando utilizados e cicatrização mais avançada dos tecidos moles.",
    painAndSwelling:
      "Durante o procedimento a anestesia local torna a extração indolor. Após, dor e inchaço variam com o tipo de extração: cirurgias e sisos costumam gerar mais edema que extrações simples.",
    postOpCare:
      "Manter compressa de gaze com mordida suave nas primeiras horas quando orientado; evitar bochechos vigorosos nas primeiras 24 horas; não usar canudo (risco de perda do coágulo — alveolite); evitar alimentos duros, quentes ou crocantes no início; higiene oral cuidadosa sem traumatizar a região; usar medicações prescritas corretamente; evitar esforço físico intenso por 48 a 72 horas; não fumar nem ingerir álcool na fase inicial de cicatrização.",
    returnToActivities:
      "Em extrações simples muitas pessoas retomam atividades leves no mesmo dia ou no dia seguinte; em cirurgias ou sisos pode ser recomendado repouso relativo ou afastamento de 1 a 3 dias do trabalho, conforme o caso e a orientação profissional.",
    resultsH2: "Quais são os resultados esperados?",
    expectedResults: [
      "Eliminação do foco infeccioso ou doloroso após cicatrização adequada.",
      "Cicatrização progressiva do alvéolo e melhora do tecido gengival e ósseo ao redor.",
      "Possibilidade de reabilitação com implante, prótese ou ortodontia quando planejado.",
      "Redução do risco de complicações futuras associadas ao dente problemático.",
    ],
    timeToFinalResult:
      "O alívio de dor aguda costuma ser imediato após resolver a causa; remodelação óssea completa do local leva semanas a meses, sem interferir no retorno gradual à mastigação normal quando liberado.",
    beforeAfterNote: null,
    faqH2: "Principais dúvidas sobre extração dentária",
    faqItems: [
      {
        question: "A extração dói?",
        answer:
          "Não durante o procedimento: a anestesia local bloqueia a dor. Pode haver desconforto após, gerenciado com medicação e cuidados.",
      },
      {
        question: "Quanto tempo dura uma extração?",
        answer:
          "Em geral de 20 minutos a 1 hora, dependendo da complexidade e da técnica.",
      },
      {
        question: "Vou ficar muito inchado?",
        answer:
          "Pode haver inchaço leve a moderado, principalmente em extrações cirúrgicas ou de sisos.",
      },
      {
        question: "Preciso faltar ao trabalho?",
        answer:
          "Em alguns casos recomenda-se 1 a 3 dias de repouso relativo; em extrações simples muitas pessoas precisam de menos tempo.",
      },
      {
        question: "Posso comer normalmente depois?",
        answer:
          "Nas primeiras horas costuma-se indicar alimentos frios e macios; a dieta é liberada gradualmente conforme a cicatrização.",
      },
      {
        question: "O que é alveolite?",
        answer:
          "É uma complicação em que o coágulo de proteção se perde, causando dor intensa no local; boa parte dos casos pode ser prevenida com os cuidados pós-operatórios.",
      },
      {
        question: "Quando posso voltar a escovar os dentes?",
        answer:
          "No mesmo dia, com cuidado, evitando friccionar diretamente a ferida operada no início.",
      },
      {
        question: "Sempre precisa de pontos?",
        answer:
          "Não. Pontos são mais comuns em extrações cirúrgicas ou mais complexas.",
      },
      {
        question: "Posso fumar depois da extração?",
        answer:
          "Não é recomendado por pelo menos 48 a 72 horas — idealmente por mais tempo — pois prejudica a cicatrização.",
      },
      {
        question: "O dente pode voltar depois de extraído?",
        answer:
          "Não. O dente não “cresce” de novo; se houver falta estética ou funcional, pode ser necessário planejar implante ou prótese.",
      },
    ],
  },

  "disfuncao-temporomandibular": {
    h1WhatIs: "O que é disfunção temporomandibular (DTM)?",
    whatIsParagraph:
      "A disfunção temporomandibular (DTM) é um conjunto de alterações que afetam a articulação temporomandibular (ATM), os músculos da mastigação e estruturas associadas. A ATM liga a mandíbula ao crânio e é essencial para mastigar, falar e mover a mandíbula. A DTM não é uma única doença, e sim um grupo de condições musculares e articulares que podem causar dor, estalos, limitação de movimento e desconforto facial.",
    whoCanH2: "Quais são os principais sintomas da DTM?",
    indications: [
      "Dor na mandíbula ou na face.",
      "Dor ao mastigar ou ao falar.",
      "Estalos ou crepitação na articulação.",
      "Travamento da mandíbula ou dificuldade de abrir ou fechar a boca.",
      "Cefaleias frequentes, muitas vezes em padrão tensional.",
      "Dor no ouvido ou sensação de pressão auricular.",
      "Tensão muscular na face e no pescoço.",
    ],
    contraindications: [
      "Postergar avaliação presencial quando há dor torácica irradiada, déficit neurológico súbito ou outros sinais de emergência — o diagnóstico diferencial é fundamental.",
      "Automedicação prolongada com anti-inflamatórios ou opioides sem acompanhamento (risco renal, gástrico e de mascarar causas).",
      "Expectativa de “cura definitiva” sem adesão a hábitos, placa ou fisioterapia quando esses fatores são centrais no caso.",
      "Alguns exames de imagem e medicações têm cautelas específicas (ex.: gestação) — devem ser individualizados com o profissional.",
    ],
    howItWorksH2: "Como é feito o diagnóstico e o tratamento da DTM?",
    procedureSteps: [
      "Diagnóstico clínico e funcional: anamnese, palpação muscular e articular, medição e análise da abertura bucal, identificação de estalos, crepitações e desvios da trajetória mandibular.",
      "Classificação do quadro (muscular/miofascial, articular ou mista) e definição de metas — por exemplo, controle de dor, ganho de amplitude ou redução de parafunção.",
      "Exames complementares quando indicados: radiografia panorâmica, tomografia computadorizada e, para avaliação do disco articular, ressonância magnética.",
      "Tratamento conservador e multidisciplinar: placa oclusal (placa de mordida) para reduzir sobrecarga e proteger dentes, fisioterapia e terapia orofacial (alongamentos, exercícios mandibulares, terapia manual e reeducação funcional).",
      "Medicações de suporte quando necessário (analgésicos, anti-inflamatórios, relaxantes musculares) sempre com critério clínico; toxina botulínica em casos selecionados de dor muscular ou bruxismo severo.",
      "Tratamentos minimamente invasivos em indicações específicas, como artrocentese (lavagem da ATM) ou infiltrações articulares; cirurgia é reservada a situações raras.",
      "Fases de manutenção: controle de estresse, revisão periódica e uso contínuo ou parcial da placa quando prescrito, além de prevenção (postura, hábitos, bruxismo).",
    ],
    procedureDurationDetail:
      "Não há prazo único: a evolução depende do tipo (muscular, articular ou mista), da gravidade, da adesão à placa, à fisioterapia e ao controle de fatores como estresse e bruxismo — em muitos casos o alívio começa nas primeiras semanas de manejo adequado.",
    technologies: [
      "DTM muscular (miofascial): dor e fadiga nos músculos da mastigação, irradiação para cabeça, pescoço ou ouvido, tensão crônica — frequentemente ligada a bruxismo, estresse ou sobrecarga funcional.",
      "DTM articular: deslocamento do disco com redução (estalo ao abrir/fechar com amplitude em geral preservada); sem redução (travamento e limitação importante); ou doença degenerativa (desgaste, dor, limitação, possível crepitação).",
      "DTM mista: combinação de componente muscular e articular — muito comum na prática clínica.",
      "Recursos de apoio: placa oclusal acrílica removível, protocolos fisioterápicos, medicação conforme prescrição, toxina botulínica selecionada, artrocentese ou infiltrações quando indicadas.",
    ],
    benefitsH2: "Quais são os benefícios do tratamento da DTM?",
    recoveryH2: "Recuperação e pós-tratamento da DTM",
    recoveryTime:
      "Fase inicial: foco em controle da dor, adaptação à placa quando indicada e redução da inflamação muscular. Fase intermediária: melhora da função mandibular, menos sintomas articulares e ajuste de hábitos parafuncionais. Fase de manutenção: controle do estresse, acompanhamento odontológico periódico e uso contínuo ou parcial da placa conforme orientação.",
    painAndSwelling:
      "A dor facial, mandibular ou em têmporas é o sintoma mais frequente; estalos e travamentos variam conforme o subtipo articular. O inchaço facial não é o achado típico da DTM primária, salvo complicações ou procedimentos invasivos.",
    postOpCare:
      "Prevenção e autocuidado: controlar estresse, evitar apertar os dentes fora da mastigação, corrigir postura cervical, não roer unhas nem morder objetos duros, tratar bruxismo precocemente e manter consultas regulares. Seguir o uso da placa e dos exercícios conforme prescrito.",
    returnToActivities:
      "O tratamento conservador em geral não exige afastamento de trabalho ou estudos; podem ser sugeridas pausas na mastigação de alimentos muito resistentes e alongamentos ao longo do dia.",
    resultsH2: "Quais são os resultados esperados do tratamento da DTM?",
    expectedResults: [
      "Redução significativa ou controle da dor.",
      "Melhora da abertura bucal e da função mandibular.",
      "Diminuição de estalos e episódios de travamento, quando aplicável ao caso.",
      "Menos tensão muscular facial e melhora do sono e da qualidade de vida.",
      "Controle dos sintomas a longo prazo, com manutenção dos hábitos de saúde e revisões.",
    ],
    timeToFinalResult:
      "Muitos pacientes respondem bem ao plano conservador; a DTM pode ter caráter recorrente se fatores como estresse e bruxismo não forem endereçados — o objetivo é controle estável e previsível, não raro com excelente resposta clínica.",
    beforeAfterNote: null,
    faqH2: "Principais dúvidas sobre disfunção temporomandibular (DTM)",
    faqItems: [
      {
        question: "DTM tem cura?",
        answer:
          "Na maioria dos casos não se fala em cura definitiva, e sim em controle eficaz dos sintomas com tratamento e hábitos adequados.",
      },
      {
        question: "DTM pode causar dor de cabeça?",
        answer:
          "Sim; é uma das causas mais comuns de cefaleia do tipo tensional associada à musculatura cervicofacial.",
      },
      {
        question: "Estalos na mandíbula sempre indicam DTM?",
        answer:
          "Não necessariamente, mas podem ser um sinal de alteração articular que merece avaliação clínica.",
      },
      {
        question: "Bruxismo causa DTM?",
        answer:
          "Pode ser um fator importante de sobrecarga muscular e articular, embora a DTM seja multifatorial.",
      },
      {
        question: "DTM pode piorar com ansiedade?",
        answer:
          "Sim; o estresse emocional é um dos principais fatores associados ao apertamento e à tensão muscular.",
      },
      {
        question: "A placa resolve a DTM?",
        answer:
          "Ajuda muito no controle de sintomas e na proteção dos dentes, mas em geral integra um plano que pode incluir fisioterapia, medicação e mudança de hábitos.",
      },
      {
        question: "Preciso de cirurgia para DTM?",
        answer:
          "Raramente; a maior parte dos casos é tratada de forma conservadora.",
      },
      {
        question: "DTM pode travar a boca?",
        answer:
          "Sim, especialmente em quadros de deslocamento discal sem redução, com limitação importante da abertura.",
      },
      {
        question: "Toxina botulínica funciona para DTM?",
        answer:
          "Pode ser útil em casos musculares selecionados, com avaliação individualizada.",
      },
      {
        question: "DTM pode voltar após o tratamento?",
        answer:
          "Sim, se fatores causais como estresse e bruxismo não forem controlados — por isso a manutenção e o acompanhamento importam.",
      },
    ],
  },

  "terceira-idade": {
    h1WhatIs: "O que são os tratamentos odontológicos para terceira idade?",
    whatIsParagraph:
      "Os tratamentos odontológicos para pessoas da terceira idade envolvem cuidados específicos para prevenir e tratar alterações bucais relacionadas ao envelhecimento, ao uso de medicamentos e a doenças sistêmicas. Com o avanço da idade, mudanças na saliva, nos dentes e na gengiva são comuns e exigem abordagem individualizada para manter saúde bucal, mastigação e qualidade de vida.",
    whoCanH2: "Quais são os principais problemas bucais na terceira idade?",
    indications: [
      "Boca seca (xerostomia) com desconforto, alteração do paladar ou maior risco de cárie.",
      "Cáries dentárias, em especial na raiz exposta (cárie radicular) ou em dentes com recessão.",
      "Perda dentária parcial ou total por cárie, doença periodontal ou desgaste acumulado.",
      "Saburra lingual, mau hálito ou sensação de boca “pesada” por biofilme na língua.",
      "Dificuldade com próteses removíveis, mastigação ou higiene que precise de reorientação e reabilitação.",
    ],
    contraindications: [
      "Procedimentos eletivos sem avaliação sistêmica quando há doenças agudas descompensadas — pode ser necessário adiar até estabilização com o médico assistente.",
      "Automedicação prolongada ou troca de medicamentos sem envolvimento médico para controle da xerostomia.",
      "Ignorar sinais de infecção aguda (abscesso, febre, celulite) em favor apenas de “limpezas” — urgências devem ser tratadas em primeiro lugar.",
      "Falta de compromisso com higiene diária e consultas de manutenção em quem usa prótese — aumenta risco de estomatite e perda óssea.",
    ],
    howItWorksH2: "Como funciona o tratamento odontológico para idosos?",
    procedureSteps: [
      "Avaliação clínica completa: anamnese com medicamentos e doenças sistêmicas, exame da mucosa, dentes, gengiva, língua e próteses.",
      "Exames radiográficos ou outros exames de imagem quando necessários para diagnosticar cáries, perda óssea ou condições periapicais.",
      "Diagnóstico das condições bucais (xerostomia, cáries ativas, necessidade protética, saburra lingual etc.) e definição de prioridades.",
      "Planejamento terapêutico personalizado: por exemplo, manejo da boca seca, restaurações ou flúor, reabilitação com implantes ou próteses, orientação de higiene da língua.",
      "Tratamentos clínicos ou reabilitadores executados em fases, com anestesia local quando necessário e conforto adaptado ao paciente.",
      "Orientação de higiene oral domiciliar (escova macia, língua, prótese, hidratação) e de uso correto de substitutos de saliva ou produtos indicados.",
      "Acompanhamento contínuo com retornos periódicos para manutenção, profilaxia e ajustes de prótese.",
    ],
    procedureDurationDetail:
      "Consultas de avaliação costumam levar cerca de 1 hora; o tempo total do plano depende do número de restaurações, necessidade de prótese ou implantes e da resposta à terapia da xerostomia — pode variar de semanas a meses.",
    technologies: [
      "Boca seca (xerostomia): sialogogos quando indicados, chicletes sem açúcar com xilitol, géis e sprays lubrificantes, ajuste de medicamentos em conjunto com o médico, hidratação e redução de álcool e cafeína.",
      "Cáries em idosos: restaurações em resina ou ionômero de vidro (com liberação de flúor), flúor profissional, selantes ou vernizes em indicações específicas, controle da causa (higiene e xerostomia).",
      "Perda dentária: reabilitação com implantes, próteses fixas (coroas e pontes), próteses removíveis totais ou parciais, ou overdenture sobre implantes para mais estabilidade.",
      "Saburra lingual: higienização com raspador lingual ou escovação suave da língua, controle da higiene geral, tratamento da xerostomia e da hidratação para reduzir halitose e biofilme.",
    ],
    benefitsH2: "Quais são os benefícios do tratamento odontológico na terceira idade?",
    recoveryH2: "Recuperação e pós-tratamento",
    recoveryTime:
      "Tratamentos clínicos simples costumam ter recuperação imediata, com pequenos ajustes de hábitos. Reabilitações com implantes ou próteses novas podem exigir adaptação gradual, ajustes de mordida e retorno funcional progressivo ao longo de semanas.",
    painAndSwelling:
      "Procedimentos restauradores e de higiene em geral são confortáveis com anestesia local quando necessária. Cirurgias ou extrações seguem o pós-operatório específico de cada caso.",
    postOpCare:
      "Higiene oral diária rigorosa com escova macia; limpeza da língua; hidratação frequente; uso e higiene corretos das próteses; evitar tabaco; comparecer às consultas regulares (em muitos casos a cada 6 meses ou conforme indicação individual).",
    returnToActivities:
      "Na maioria dos atendimentos de manutenção e restaurações simples não há afastamento. Após cirurgias ou grandes reabilitações, o retorno a atividades plenas segue o calendário orientado pelo dentista.",
    resultsH2: "Quais são os resultados esperados?",
    expectedResults: [
      "Boca mais saudável, confortável e com menor risco de cáries e infecções.",
      "Melhora da mastigação e da fala quando há reabilitação adequada.",
      "Melhor controle da boca seca e redução do desconforto associado.",
      "Menos mau hálito e melhor aparência da língua com controle da saburra.",
      "Maior qualidade de vida e autonomia alimentar com acompanhamento contínuo.",
    ],
    timeToFinalResult:
      "Melhora da xerostomia e da halitose pode ser progressiva nas primeiras semanas após mudanças de hábito e terapia. Resultados protéticos consolidam-se após adaptação e ajustes; a manutenção define a estabilidade a longo prazo.",
    beforeAfterNote: null,
    faqH2: "Principais dúvidas sobre odontologia na terceira idade",
    faqItems: [
      {
        question: "É normal perder dentes com a idade?",
        answer:
          "Não como “destino inevitável”: a perda dentária costuma estar ligada a cárie, doença periodontal ou trauma, que podem ser prevenidos ou tratados.",
      },
      {
        question: "Boca seca tem tratamento?",
        answer:
          "Sim, com estratégias como substitutos de saliva, estímulo salivar, hidratação e, quando possível, revisão de medicamentos com o médico.",
      },
      {
        question: "Idosos podem fazer implantes?",
        answer:
          "Sim, na maioria dos casos, desde que haja avaliação clínica, de imagem e de saúde geral adequada.",
      },
      {
        question: "Cáries são comuns em idosos?",
        answer:
          "Sim, especialmente na raiz exposta pela recessão e pela combinação com boca seca e dieta.",
      },
      {
        question: "Saburra lingual causa mau hálito?",
        answer:
          "Sim, é uma das causas mais frequentes de halitose, junto com gengiva e dentes.",
      },
      {
        question: "Próteses são confortáveis?",
        answer:
          "Sim, após o período de adaptação e com ajustes periódicos quando necessários.",
      },
      {
        question: "Qual a frequência ideal ao dentista?",
        answer:
          "Em geral a cada 6 meses para prevenção, ou em intervalos menores se o dentista indicar por causa de prótese, xerostomia ou periodontite.",
      },
      {
        question: "A odontologia para idosos é segura?",
        answer:
          "Sim, com anamnese completa, planejamento e eventualmente liberação médica quando há condições sistêmicas.",
      },
      {
        question: "Boca seca piora a saúde bucal?",
        answer:
          "Sim, reduz a defesa natural da saliva e aumenta o risco de cárie, infecção fúngica e desconforto.",
      },
      {
        question: "O tratamento melhora a qualidade de vida?",
        answer:
          "Sim, de forma significativa, ao recuperar mastigação, estética, fala e conforto.",
      },
    ],
  },

  "tratamento-de-canal": {
    h1WhatIs: "O que é tratamento de canal?",
    whatIsParagraph:
      "O tratamento de canal, também chamado de endodontia, trata infecções ou inflamações na polpa do dente — o tecido interno com nervos e vasos. O objetivo é remover a polpa comprometida, desinfetar os canais radiculares e obturá-los com material biocompatível, preservando o dente natural e evitando extração quando o dente pode ser restaurado. Saiba quando fazer, quais tipos existem, como funciona a recuperação e as principais dúvidas com seu cirurgião-dentista.",
    whoCanH2: "Quando o tratamento de canal é indicado?",
    indications: [
      "Cárie profunda que atingiu ou compromete a polpa.",
      "Fratura dentária com exposição pulpar ou risco de necrose.",
      "Traumas (batidas no dente) com alteração vascular ou sintomas.",
      "Infecção, abscesso periapical ou fístula associada ao dente.",
      "Dor intensa e prolongada ou sensibilidade que indique comprometimento pulpar irreversível.",
    ],
    contraindications: [
      "Dente sem condição estrutural de suportar restauração definitiva — pode ser discutida extração e substituição.",
      "Infecção aguda difusa com risco sistêmico sem controle inicial adequado (priorizar urgência e antibioticoterapia quando prescrita).",
      "Não conclusão do tratamento (obturação incompleta ou sem restauração coronal) — aumenta risco de falha e reinfecção.",
      "Impossibilidade de isolamento relativo do campo ou colaboração mínima em casos que exijam segurança técnica — avaliar alternativas.",
    ],
    howItWorksH2: "Como funciona o tratamento de canal?",
    procedureSteps: [
      "Diagnóstico: exame clínico, testes quando necessários e radiografia ou tomografia para mapear canais e lesão periapical.",
      "Anestesia local para que o procedimento seja confortável na grande maioria dos casos.",
      "Abertura do dente com acesso controlado à câmara pulpar e aos canais radiculares.",
      "Limpeza e desinfecção: remoção da polpa infectada ou inflamada, instrumentação e irrigação com soluções específicas.",
      "Modelagem dos canais: preparo tridimensional para receber a obturação.",
      "Obturação: preenchimento selado dos canais com material biocompatível (em uma ou mais sessões conforme o protocolo).",
      "Restauração final do dente (e, em muitos casos, indicação de coroa, principalmente em posteriores) para proteção e função.",
    ],
    procedureDurationDetail:
      "Costuma levar de 1 a 3 sessões por dente, conforme número de canais, anatomia, presença de infecção aguda e necessidade de medicação intracanal temporária. A sessão única pode ser possível em casos selecionados.",
    technologies: [
      "Canal em dente vital (pulpectomia parcial ou total): polpa ainda viva porém inflamada — remoção parcial ou total da polpa, limpeza, desinfecção e obturação; indicações incluem dor intensa e pulpites reversíveis ou irreversíveis conforme diagnóstico.",
      "Canal em dente necrosado: polpa morta e infectada — remoção do tecido necrótico, desinfecção rigorosa, medicação intracanal quando necessário e selamento final; indicações incluem abscesso, infecção crônica ou fístula.",
      "Retratamento de canal: remoção do material de obturação prévio, nova desinfecção e reobturação quando há falha, dor persistente, infecção ou obturação inadequada.",
      "Canal com infecção avançada (abscesso agudo): pode incluir drenagem, limpeza dos canais, medicação intracanal e finalização em etapas até resolução dos sintomas.",
    ],
    benefitsH2: "Quais são os benefícios do tratamento de canal?",
    recoveryH2: "Recuperação e pós-tratamento",
    recoveryTime:
      "Nas primeiras 24 a 72 horas pode haver leve sensibilidade ou desconforto ao mastigar, em geral controlável com orientação e medicação quando prescrita. Na primeira semana os sintomas costumam regredir progressivamente. Após a restauração definitiva, o dente volta a ser funcional na mastigação com cuidados habituais.",
    painAndSwelling:
      "Com anestesia local o procedimento é indolor na grande maioria dos casos; o alívio da dor intensa da polpite ou abscesso costuma ocorrer já nas primeiras horas após o início do tratamento. Inchaço facial importante exige acompanhamento específico da infecção.",
    postOpCare:
      "Evitar mastigar alimentos muito duros no dente tratado até a restauração definitiva; higiene oral rigorosa sem ignorar a área; usar medicação apenas se prescrita; retornar para conclusão da coroa ou restauração; manter consultas de revisão.",
    returnToActivities:
      "Em geral não há afastamento de trabalho ou estudos; mastigar do lado oposto pode ser orientado até a finalização da restauração.",
    resultsH2: "Quais são os resultados esperados?",
    expectedResults: [
      "Eliminação ou grande redução da dor de origem pulpar.",
      "Dente mantido na arcada com infecção controlada.",
      "Função mastigatória restabelecida após restauração adequada.",
      "Estabilidade a longo prazo com higiene, restauração coronal e revisões.",
    ],
    timeToFinalResult:
      "O alívio sintomático costuma ser rápido após o início da terapia; a estabilidade radiográfica e clínica evolui ao longo de meses. Com bons cuidados, o dente tratado pode durar muitos anos ou décadas; a coroa ou restauração pode precisar de manutenção ao longo do tempo.",
    beforeAfterNote: null,
    faqH2: "Principais dúvidas sobre tratamento de canal",
    faqItems: [
      {
        question: "Quando preciso fazer canal?",
        answer:
          "Quando a polpa está inflamada de forma irreversível ou infectada — o diagnóstico é clínico e radiográfico.",
      },
      {
        question: "Canal dói?",
        answer:
          "O procedimento é feito com anestesia local e costuma ser indolor; pode haver sensibilidade leve após.",
      },
      {
        question: "Quantas sessões são necessárias?",
        answer:
          "Em geral de 1 a 3 sessões, dependendo do dente, da infecção e do protocolo.",
      },
      {
        question: "Dente com canal fica fraco?",
        answer:
          "Pode ficar mais fragilizado; por isso muitas vezes indica-se restauração robusta ou coroa, principalmente em molares.",
      },
      {
        question: "O dente escurece após o canal?",
        answer:
          "Pode ocorrer em alguns casos; existem opções estéticas como facetas, coroas ou clareamento interno quando indicado.",
      },
      {
        question: "Canal pode falhar?",
        answer:
          "Sim, por exemplo com reinfecção, anatomia complexa ou obturação incompleta — por isso técnica e restauração final importam.",
      },
      {
        question: "É melhor extrair o dente do que fazer canal?",
        answer:
          "Na maioria dos casos em que o dente é restaurável, preservá-lo é preferível à extração.",
      },
      {
        question: "Posso comer normalmente após o canal?",
        answer:
          "Sim, após a restauração final e liberação do dentista; antes disso, costuma-se evitar carga excessiva no dente temporário.",
      },
      {
        question: "Quanto tempo dura um dente com canal?",
        answer:
          "Pode durar muitos anos ou décadas com higiene, restauração adequada e revisões.",
      },
      {
        question: "Precisa colocar coroa após o canal?",
        answer:
          "Em muitos casos sim, especialmente em dentes posteriores que recebem grande força mastigatória.",
      },
    ],
  },
}
