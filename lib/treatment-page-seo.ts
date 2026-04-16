import { treatments } from "@/lib/data"

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
  dentistica: {
    h1WhatIs: "O que é dentística?",
    whatIsParagraph:
      "A dentística é a área da odontologia dedicada à restauração e à estética dental com materiais modernos, como resinas compostas. Ela trata cáries, desgastes, fraturas e pequenas imperfeições, devolvendo forma, cor e função aos dentes de forma conservadora e natural.",
    whoCanH2: "Quem pode fazer tratamento de dentística?",
    indications: [
      "Pacientes com cáries ou restaurações antigas que precisam ser trocadas.",
      "Quem deseja corrigir espaços, bordas quebradas ou dentes com formato desarmônico.",
      "Pessoas com manchas ou pequenas alterações de cor que podem ser mascaradas com restaurações estéticas.",
      "Quem busca sorriso mais harmônico sem necessidade de grandes desgastes.",
    ],
    contraindications: [
      "Bruxismo não controlado sem proteção noturna planejada (risco de fratura da restauração).",
      "Higiene bucal muito deficiente sem compromisso de melhora (aumenta risco de nova cárie nas margens).",
      "Casos com necessidade ortodôntica grave antes de restaurações definitivas em posições inadequadas.",
      "Uso de tabaco intenso combinado com restaurações estéticas frontais (pode alterar cor e durabilidade).",
    ],
    howItWorksH2: "Como é feito o tratamento de dentística?",
    procedureSteps: [
      "Avaliação clínica e, se necessário, registros fotográficos ou moldagem para planejamento.",
      "Anestesia local quando o procedimento envolve remoção de tecido cariado ou sensível.",
      "Preparo mínimo do dente, remoção de lesões e condicionamento da superfície.",
      "Aplicação em camadas da resina composta com fotopolimerização e acabamento, polimento e verificação da mordida.",
    ],
    procedureDurationDetail:
      "Em geral, uma sessão leva de 1 a 2 horas, conforme o número de dentes e a complexidade do caso.",
    technologies: [
      "Resinas compostas nanohíbridas ou similares.",
      "Luz de fotopolimerização e instrumentos de acabamento e polimento.",
    ],
    benefitsH2: "Quais são os benefícios da dentística?",
    recoveryH2: "Como é a recuperação após dentística?",
    recoveryTime:
      "Não há “dias de repouso”: na maioria dos casos você retorna às atividades normais no mesmo dia.",
    painAndSwelling:
      "Sensibilidade leve aos líquidos frios ou quentes pode ocorrer por alguns dias, principalmente se o dente foi profundamente restaurado. Inchaço na gengiva é incomum quando a técnica é adequada.",
    postOpCare:
      "Evite morder lápis ou objetos duros; mantenha higiene com escova macia e fio dental; use pasta com flúor indicada pelo profissional; retorne se notar alta sensibilidade ou desconforto na mordida.",
    returnToActivities:
      "Alimentação e trabalho podem ser retomados logo após o término do procedimento, respeitando o tempo de “ficar” da resina se o dentista orientar cuidado com alimentos muito duros nas primeiras horas.",
    resultsH2: "Quais são os resultados esperados na dentística?",
    expectedResults: [
      "Restauração estética alinhada ao sorriso natural.",
      "Melhora da mastigação quando há reconstrução de cúspides ou bordas.",
      "Maior conforto ao falar e sorrir após correção de arestas ou cáries.",
    ],
    timeToFinalResult:
      "O aspecto final costuma ser visto ao fim da sessão; pequenos ajustes de polimento podem ser feitos em retorno.",
    beforeAfterNote:
      "Fotos clínicas antes e depois ajudam a documentar o caso; a disponibilidade depende do consentimento do paciente e do protocolo da clínica.",
    faqH2: "Dúvidas frequentes sobre dentística",
    faqItems: [
      {
        question: "A restauração em resina escurece com o tempo?",
        answer:
          "Pode haver pequena alteração de cor com anos de uso, café ou tabaco. Polimento periódico e higiene ajudam; quando necessário, a peça pode ser substituída.",
      },
      {
        question: "Dói fazer restauração estética?",
        answer:
          "Com anestesia adequada, o procedimento costuma ser confortável. Após, pode haver sensibilidade leve temporária.",
      },
      {
        question: "Quanto tempo dura uma restauração direta?",
        answer:
          "Depende de higiene, hábitos e mordida; muitas restaurações duram vários anos com manutenção e revisões.",
      },
    ],
  },

  periodontia: {
    h1WhatIs: "O que é periodontia?",
    whatIsParagraph:
      "A periodontia é a especialidade que cuida das gengivas, do osso alveolar e dos ligamentos que sustentam os dentes. Ela previne e trata gengivite e periodontite, reduzindo inflamação, sangramento e risco de perda dentária.",
    whoCanH2: "Quem pode fazer tratamento periodontal?",
    indications: [
      "Sangramento ao escovar ou usar fio dental.",
      "Gengiva inchada, vermelha ou sensível.",
      "Sensação de dentes “longos”, mobilidade ou mau hálito persistente.",
      "Diagnóstico de periodontite ou necessidade de preparo gengival antes de implantes ou próteses.",
    ],
    contraindications: [
      "Infecções agudas não tratadas que exijam antibioticoterapia ou controle prévio.",
      "Alguns quadros sistêmicos descompensados exigem liberação médica antes de procedimentos extensos.",
      "Pacientes que não aceitam manter higiene e retornos de manutenção podem ter pior prognóstico — o tratamento deve ser discutido com transparência.",
    ],
    howItWorksH2: "Como é feito o tratamento periodontal?",
    procedureSteps: [
      "Avaliação com sondagem periodontal e, quando indicado, exames de imagem.",
      "Raspagem supra e subgengival e alisamento radicular para remover biofilme e tártaro abaixo da gengiva.",
      "Reavaliação em algumas semanas; em casos avançados, pode haver necessidade de cirurgia periodontal ou regeneração.",
      "Plano de manutenção periódica (visitas de controle).",
    ],
    procedureDurationDetail:
      "A fase de raspagem pode ser dividida em quadrantes ou hemi-arcos; cada sessão costuma levar cerca de 1 hora, conforme extensão.",
    technologies: [
      "Instrumentos manuais e/ou ultrassom para remoção de depósitos.",
      "Radiografias periapicais ou panorâmica quando necessário ao planejamento.",
    ],
    benefitsH2: "Quais são os benefícios da periodontia?",
    recoveryH2: "Como é a recuperação após raspagem ou cirurgia periodontal?",
    recoveryTime:
      "Após raspagem não cirúrgica, a recuperação é rápida (dias). Após cirurgia, pode levar de 7 a 14 dias para a primeira cicatrização aparente.",
    painAndSwelling:
      "Sensibilidade a frio e leve desconforto à mastigação são comuns por poucos dias após raspagem profunda. Cirurgias podem gerar inchaço leve controlado com medicação orientada pelo cirurgião.",
    postOpCare:
      "Use colutórios se prescritos, evite fumar, siga dieta mole se orientado e não force a escovação sobre áreas operadas até a liberação.",
    returnToActivities:
      "Trabalho leve no mesmo dia costuma ser possível após raspagem; atividades físicas intensas podem ser liberadas gradualmente após cirurgia.",
    resultsH2: "Quais são os resultados esperados no tratamento periodontal?",
    expectedResults: [
      "Redução de sangramento e profundidade de bolsas.",
      "Hálito e conforto melhores.",
      "Base mais saudável para outros tratamentos restauradores ou implantes.",
    ],
    timeToFinalResult:
      "Melhora clínica costuma ser avaliada semanas após a conclusão da fase ativa; estabilidade exige manutenção de longo prazo.",
    beforeAfterNote: null,
    faqH2: "Dúvidas frequentes sobre periodontia",
    faqItems: [
      {
        question: "A raspagem “afina” o dente?",
        answer:
          "O procedimento remove tártaro e cemento contaminado, não desgasta dente saudável de forma indiscriminada. Sensibilidade transitória pode ocorrer.",
      },
      {
        question: "Periodontite tem cura?",
        answer:
          "O processo inflamatório pode ser controlado e a estabilidade mantida com higiene e manutenção; o osso perdido nem sempre se regenera totalmente sem técnicas específicas.",
      },
      {
        question: "Quanto tempo dura cada sessão?",
        answer:
          "Varia com a quantidade de dentes tratados e a técnica; o dentista informa o cronograma na avaliação.",
      },
    ],
  },

  harmonizacao: {
    h1WhatIs: "O que é harmonização orofacial?",
    whatIsParagraph:
      "A harmonização orofacial (HOF) é um conjunto de procedimentos minimamente invasivos — como toxina botulínica, preenchimentos com ácido hialurônico e outros — para equilibrar proporções do rosto e realçar traços, sempre com avaliação individualizada e critérios de segurança.",
    whoCanH2: "Quem pode fazer harmonização orofacial?",
    indications: [
      "Adultos com expectativas realistas e saúde geral adequada ao procedimento escolhido.",
      "Quem deseja suavizar linhas de expressão, volume labial discreto ou melhorar simetrias leves.",
      "Pacientes que buscam complemento estético após avaliação facial e odontológica.",
    ],
    contraindications: [
      "Gestação e amamentação (na maioria dos produtos e protocolos).",
      "Infecção ativa na pele da região, processos inflamatórios não tratados.",
      "Alergia conhecida aos componentes do produto utilizado.",
      "Distúrbios de coagulação não controlados ou uso de anticoagulantes sem liberação médica.",
      "Menores de idade sem critérios legais e acompanhamento adequados.",
    ],
    howItWorksH2: "Como é feita a harmonização orofacial?",
    procedureSteps: [
      "Consulta com anamnese, fotos e definição de metas realistas.",
      "Higienização da pele e, se necessário, anestesia tópica ou bloqueio conforme o procedimento.",
      "Aplicação precisa do produto nas doses e planos corretos; massagem ou moldagem quando indicado.",
      "Orientações de pós-imediato e data de revisão.",
    ],
    procedureDurationDetail:
      "Muitos procedimentos levam de 30 minutos a 1 hora, conforme complexidade e número de regiões.",
    technologies: [
      "Toxina botulínica e preenchedores à base de ácido hialurônico de uso registrado.",
      "Técnicas com agulhas finas ou cânulas conforme o caso.",
    ],
    benefitsH2: "Quais são os benefícios da harmonização orofacial?",
    recoveryH2: "Como é a recuperação após harmonização orofacial?",
    recoveryTime:
      "Na maioria dos casos não há afastamento; pequenos hematomas ou inchaço local somem em poucos dias.",
    painAndSwelling:
      "Desconforto leve na aplicação; inchaço e pequenos pontos roxos podem ocorrer e costumam regredir em 48 a 72 horas.",
    postOpCare:
      "Evitar exercício intenso, calor local e manipular a região nas primeiras 24 a 48 horas; seguir orientação sobre deitar de lado ou uso de maquiagem conforme o profissional.",
    returnToActivities:
      "Trabalho social costuma ser retomado no mesmo dia ou no dia seguinte, conforme a reação individual.",
    resultsH2: "Quais são os resultados esperados na harmonização?",
    expectedResults: [
      "Aparência mais descansada ou volumetria labial proporcional, conforme o plano.",
      "Simetrias leves corrigidas sem cirurgia.",
      "Efeito da toxina botulínica costuma aparecer em alguns dias e estabilizar em cerca de duas semanas.",
    ],
    timeToFinalResult:
      "Preenchimento: resultado visível imediato com refinamento após o assentamento do edema. Toxina: pico em torno de 10 a 14 dias.",
    beforeAfterNote:
      "Antes e depois é opcional e depende de consentimento; privacidade é respeitada.",
    faqH2: "Dúvidas frequentes sobre harmonização orofacial",
    faqItems: [
      {
        question: "Harmonização dói muito?",
        answer:
          "Na maioria dos pacientes a dor é leve; anestésicos tópicos ou técnicas com cânula ajudam no conforto.",
      },
      {
        question: "Quanto tempo dura o efeito?",
        answer:
          "Toxina costuma durar cerca de 4 a 6 meses; preenchimentos variam conforme produto, metabolismo e região.",
      },
      {
        question: "O resultado fica artificial?",
        answer:
          "Com planejamento conservador e doses adequadas, busca-se naturalidade; expectativas são alinhadas na consulta.",
      },
    ],
  },

  implantes: {
    h1WhatIs: "O que é implante dentário?",
    whatIsParagraph:
      "O implante dentário é um parafuso de titânio instalado no osso da mandíbula ou maxila para substituir a raiz do dente perdido. Sobre ele fixa-se coroa, prótese ou ponte, devolvendo função mastigatória e estética com planejamento clínico e, muitas vezes, digital.",
    whoCanH2: "Quem pode fazer implante dentário?",
    indications: [
      "Perda de um ou mais dentes com osso e gengiva adequados ou passíveis de enxerto.",
      "Quem não tolera ou não deseja prótese móvel convencional.",
      "Necessidade de suporte fixo para prótese sobre implantes.",
    ],
    contraindications: [
      "Falta de volume ósseo sem possibilidade de enxerto ou regeneração quando indispensável.",
      "Tabagismo intenso não reduzido (prejudica cicatrização).",
      "Doenças sistêmicas descompensadas (ex.: controle glicêmico inadequado).",
      "Higiene muito deficiente sem compromisso com manutenção.",
      "Uso de medicamentos ou condições que comprometam a osteointegração — avaliadas caso a caso.",
    ],
    howItWorksH2: "Como é feito o implante dentário?",
    procedureSteps: [
      "Planejamento com exames de imagem e, quando usado, planejamento virtual e guia cirúrgico.",
      "Instalação do implante em ambiente estéril, com anestesia local.",
      "Período de cicatrização e osteointegração (em muitos casos meses) antes da carga protética.",
      "Instalação do componente protético (coroa, ponte ou prótese) e ajustes oclusais.",
    ],
    procedureDurationDetail:
      "A cirurgia de uma unidade costuma levar de 40 a 90 minutos; o tratamento completo pode levar de 3 a 6 meses ou mais, conforme osso e protocolo.",
    technologies: [
      "Implantes de titânio com conexões modernas.",
      "Scanner intraoral, radiografias 3D (tomografia) e planejamento por software quando indicado.",
    ],
    benefitsH2: "Quais são os benefícios do implante dentário?",
    recoveryH2: "Como é a recuperação após implante dentário?",
    recoveryTime:
      "Os primeiros 7 a 10 dias são os mais importantes para cicatrização inicial; a osteointegração ocorre ao longo de semanas a meses.",
    painAndSwelling:
      "Edema e hematoma leves podem ocorrer; dor costuma ser controlada com analgésicos prescritos. Sensação de pressão é comum nas primeiras 48 horas.",
    postOpCare:
      "Dieta mole, gelo no local nas primeiras horas, higiene conforme orientação (não escovar agressivamente o sítio), antibiótico ou enxaguante se prescritos, evitar tabaco e esforço físico intenso no período inicial.",
    returnToActivities:
      "Trabalho não físico costuma ser retomado em 1 a 2 dias; musculação ou esportes de impacto devem ser liberados pelo cirurgião.",
    resultsH2: "Quais são os resultados esperados com implantes?",
    expectedResults: [
      "Reposição firme do dente para mastigar e sorrir.",
      "Estética natural com coroa bem planejada.",
      "Preservação óssea relativa na região do dente perdido.",
    ],
    timeToFinalResult:
      "A coroa definitiva ou prótese final costuma ser instalada após integração óssea; casos com enxerto podem prolongar o cronograma.",
    beforeAfterNote:
      "Registro fotográfico clínico pode ser oferecido com consentimento do paciente.",
    faqH2: "Dúvidas frequentes sobre implante dentário",
    faqItems: [
      {
        question: "Implante dentário dói?",
        answer:
          "O procedimento é feito com anestesia; após, pode haver desconforto controlável com medicação e repouso relativo.",
      },
      {
        question: "Quanto tempo dura um implante?",
        answer:
          "Com higiene e retornos, muitos implantes permanecem funcionais por muitos anos; o desenho da prótese e hábitos influenciam a longevidade.",
      },
      {
        question: "Qual a diferença entre implante e prótese móvel?",
        answer:
          "O implante fixa-se ao osso e não depende de cimento na mucosa como prótese total convencional; a sensação mastigatória costuma ser mais próxima do dente natural.",
      },
    ],
  },

  proteses: {
    h1WhatIs: "O que é prótese dentária?",
    whatIsParagraph:
      "A prótese dentária é o dispositivo que substitui dentes ausentes — fixa ou removível — restaurando mastigação, fala e estética. Pode ser apoiada em dentes, mucosa ou implantes, conforme o planejamento do caso.",
    whoCanH2: "Quem pode usar prótese dentária?",
    indications: [
      "Ausência de um ou vários dentes com indicação de reposição.",
      "Necessidade de reabilitação total quando não há dentes suficientes.",
      "Casos em que implantes serão usados como pilares para prótese fixa ou sobredentadura.",
    ],
    contraindications: [
      "Ausência de preparo ou cuidado com higiene em próteses removíveis aumenta risco de lesões — o tratamento exige compromisso do paciente.",
      "Alguns casos exigem tratamento periodontal ou ajuste oclusal antes da prótese definitiva.",
      "Expectativa de “dentes em um dia” sem planejamento adequado pode ser contraindicada ao protocolo seguro.",
    ],
    howItWorksH2: "Como é feita a prótese dentária?",
    procedureSteps: [
      "Planejamento com moldagens ou escaneamento intraoral.",
      "Preparo de dentes pilares quando a prótese é fixa convencional; ou planejamento de implantes para prótese sobre implante.",
      "Provas de estrutura e estética; ajustes oclusais.",
      "Cimentação ou entrega da prótese removível com orientações de uso e higiene.",
    ],
    procedureDurationDetail:
      "O tempo varia muito: próteses parciais podem levar algumas semanas entre moldagem e entrega; casos complexos podem levar meses.",
    technologies: [
      "Cerâmicas, resinas de alta resistência, ligas metálicas ou sem metal conforme indicação.",
      "Escaneamento digital e CAD/CAM em centros que oferecem o fluxo.",
    ],
    benefitsH2: "Quais são os benefícios da prótese dentária?",
    recoveryH2: "Como é a adaptação e o pós-operatório da prótese?",
    recoveryTime:
      "Prótese fixa: adaptação leve em poucos dias. Prótese removível nova: algumas semanas para musculatura e fala se acostumarem.",
    painAndSwelling:
      "Se houve preparo em dente vivo, sensibilidade transitória é possível. Prótese sobre implante segue orientações do período cirúrgico.",
    postOpCare:
      "Higiene específica (fio, escovas interdentais, limpeza de prótese removível), evitar morder objetos rígidos e comparecer aos ajustes programados.",
    returnToActivities:
      "Em geral não há afastamento; mastigar com cuidado até o ajuste oclusal estar finalizado.",
    resultsH2: "Quais são os resultados esperados com prótese?",
    expectedResults: [
      "Melhora da mastigação e da fala.",
      "Estética do sorriso recomposta.",
      "Distribuição melhor das forças na arcada.",
    ],
    timeToFinalResult:
      "O resultado estético e funcional é percebido após a inserção definitiva, com refinamentos em retornos.",
    beforeAfterNote: null,
    faqH2: "Dúvidas frequentes sobre prótese dentária",
    faqItems: [
      {
        question: "Prótese fixa é melhor que removível?",
        answer:
          "Depende do caso, número de dentes, osso e preferência; cada modalidade tem indicações e cuidados diferentes.",
      },
      {
        question: "Quanto tempo dura uma prótese?",
        answer:
          "Próteses bem higienizadas e revisadas podem durar muitos anos; desgaste do material e mudanças na boca podem exigir substituição.",
      },
      {
        question: "Prótese machuca a gengiva?",
        answer:
          "Ajustes podem ser necessários nas primeiras semanas; se persistir úlcera ou dor, é importante retornar à clínica.",
      },
    ],
  },

  clareamento: {
    h1WhatIs: "O que é clareamento dental?",
    whatIsParagraph:
      "O clareamento dental é um tratamento estético que clareia a cor dos dentes naturais por meio de agentes seguros em concentrações controladas, em consultório, em casa com supervisão ou combinação dos dois, sempre após avaliação clínica.",
    whoCanH2: "Quem pode fazer clareamento dental?",
    indications: [
      "Dentes naturais com manchas extrínsecas ou escurecimento leve a moderado.",
      "Pacientes com saúde gengival adequada e sem cáries ativas não tratadas.",
      "Quem busca melhora estética com expectativas realistas.",
    ],
    contraindications: [
      "Menores sem critérios legais e acompanhamento adequados.",
      "Gestantes ou lactantes (orientação geral de cautela).",
      "Dentes com exposição radicular severa ou hipersensibilidade extrema não controlada.",
      "Restaurações extensas na frente — elas não clareiam; pode ser necessário replanejar cor após o clareamento dos dentes naturais.",
      "Esmalte muito fino ou patologias que contraindiquem o agente.",
    ],
    howItWorksH2: "Como é feito o clareamento dental?",
    procedureSteps: [
      "Avaliação, profilaxia se necessária e registro de cor de referência.",
      "Proteção de gengiva em consultório ou confecção de moldeira individual para uso caseiro.",
      "Aplicação do gel clareador conforme protocolo (sessões em consultório e/ou uso domiciliar supervisionado).",
      "Avaliação de resultado e orientações de manutenção.",
    ],
    procedureDurationDetail:
      "Sessão em consultório costuma levar cerca de 1 a 2 horas; protocolos combinados podem estender por algumas semanas em casa.",
    technologies: [
      "Géis a base de peróxido de hidrogênio ou carbamida em concentrações indicadas.",
      "Ativação por luz em alguns protocolos de consultório, quando utilizados.",
    ],
    benefitsH2: "Quais são os benefícios do clareamento dental?",
    recoveryH2: "Como é a recuperação após o clareamento?",
    recoveryTime:
      "Sensibilidade a frio pode durar de alguns dias a duas semanas, com tendência a melhora gradual.",
    painAndSwelling:
      "Não há inchaço facial típico; sensibilidade dentinária é o sintoma mais comum e costuma ser manejável com produtos de suporte indicados.",
    postOpCare:
      "Evitar pigmentantes (café, vinho, tabaco) no período ativo; seguir tempo de uso do gel; não usar produtos não prescritos.",
    returnToActivities:
      "Vida normal imediata, com cuidado temporário na escolha de alimentos muito pigmentados.",
    resultsH2: "Quais são os resultados esperados do clareamento?",
    expectedResults: [
      "Sorriso mais claro mantendo naturalidade.",
      "Melhora da confiança ao sorrir.",
    ],
    timeToFinalResult:
      "Muitos casos mostram mudança já nas primeiras semanas; o resultado estabiliza após término do protocolo.",
    beforeAfterNote:
      "Fotos de cor em escala podem ser usadas para acompanhar evolução, com consentimento.",
    faqH2: "Dúvidas frequentes sobre clareamento dental",
    faqItems: [
      {
        question: "Clareamento estraga o dente?",
        answer:
          "Em protocolos supervisionados e indicação correta, o risco é minimizado; abusos ou produtos sem orientação aumentam sensibilidade e danos.",
      },
      {
        question: "Quanto tempo dura o efeito?",
        answer:
          "Depende de hábitos e higiene; manutenções pontuais podem prolongar o resultado.",
      },
      {
        question: "Clareamento dói?",
        answer:
          "Sensibilidade é possível, mas em geral é transitória e pode ser aliviada com recursos indicados pelo dentista.",
      },
    ],
  },

  limpeza: {
    h1WhatIs: "O que é limpeza e profilaxia dental?",
    whatIsParagraph:
      "A limpeza profissional (profilaxia) remove placa bacteriana, tártaro e manchas superficiais acima e, quando necessário, logo abaixo da gengiva, complementando a higiene caseira e ajudando a prevenir cáries e doença gengival.",
    whoCanH2: "Quem deve fazer limpeza profissional?",
    indications: [
      "Todos os pacientes em acompanhamento preventivo (em geral a cada 6 meses).",
      "Presença de tártaro, manchas ou sangramento leve ao higienizar.",
      "Antes de procedimentos estéticos ou cirúrgicos para melhorar o campo operatório.",
    ],
    contraindications: [
      "Alguns quadros infecciosos agudos podem exigir adiar até controle.",
      "Pacientes com necessidade de avaliação periodontal avançada podem precisar de raspagem específica além da profilaxia de manutenção.",
    ],
    howItWorksH2: "Como é feita a limpeza dental?",
    procedureSteps: [
      "Inspeção da boca e remoção de tártaro com ultrassom e/ou instrumentos manuais.",
      "Polimento coronal para suavizar superfícies e retirar biofilme remanescente.",
      "Orientação de higiene oral personalizada.",
    ],
    procedureDurationDetail:
      "Em média 45 minutos, variando com a quantidade de depósitos.",
    technologies: [
      "Pontas ultrassônicas e jatos de polimento profissional quando indicados.",
    ],
    benefitsH2: "Quais são os benefícios da limpeza profissional?",
    recoveryH2: "Como é a recuperação após a limpeza?",
    recoveryTime:
      "Imediata na maioria dos casos; sensibilidade leve de algumas horas pode ocorrer.",
    painAndSwelling:
      "Desconforto leve ou sensibilidade transitória em raízes expostas; sem inchaço facial relevante.",
    postOpCare:
      "Manter higiene diária; evitar alimentos muito ácidos por algumas horas se houver sensibilidade.",
    returnToActivities:
      "Retorno imediato a trabalho, estudos e esportes.",
    resultsH2: "Quais são os resultados esperados da profilaxia?",
    expectedResults: [
      "Superfícies mais lisas e brilho dental melhor.",
      "Redução de sangramento gengival quando ligado à inflamação por placa.",
      "Hálito mais agradável em muitos casos.",
    ],
    timeToFinalResult:
      "Resultado visível ao fim da sessão; manutenção depende da higiene domiciliar até o próximo retorno.",
    beforeAfterNote: null,
    faqH2: "Dúvidas frequentes sobre limpeza dental",
    faqItems: [
      {
        question: "Limpeza afina o dente?",
        answer:
          "Remove apenas depósitos e uma camada mínima de biofilme; não “afina” dente saudável.",
      },
      {
        question: "De quanto em quanto tempo devo fazer?",
        answer:
          "Em geral a cada 6 meses; intervalos podem ser personalizados pelo dentista.",
      },
      {
        question: "Posso comer depois?",
        answer:
          "Sim, salvo orientação específica em casos de sensibilidade.",
      },
    ],
  },

  "lentes-dentais": {
    h1WhatIs: "O que são lentes de contato dental?",
    whatIsParagraph:
      "As lentes de contato dental (lentes de porcelana ou facetas ultrafinas) são lâminas coladas na face vestibular dos dentes para corrigir cor, formato, tamanho e até pequenos desalinhamentos, com planejamento estético e mínimo desgaste quando o caso permite.",
    whoCanH2: "Quem pode colocar lentes de contato dental?",
    indications: [
      "Dentes com manchas de difícil clareamento, pequenas fraturas ou desgastes incisais.",
      "Espaços diastemas leves ou forma dentária que se deseja harmonizar.",
      "Pacientes com oclusão e saúde gengival compatíveis com o planejamento.",
    ],
    contraindications: [
      "Bruxismo não controlado sem plano de proteção (risco de fratura da lente).",
      "Higiene deficiente ou doença periodontal ativa.",
      "Oclusão que exija correção ortodôntica major antes da facetagem.",
      "Expectativas irreais de formato sem respeito aos limites biológicos.",
    ],
    howItWorksH2: "Como é feito o tratamento com lentes de contato?",
    procedureSteps: [
      "Planejamento estético, fotos e possível “mock-up” ou planejamento digital.",
      "Preparo mínimo do esmalte quando indicado; moldagem ou escaneamento.",
      "Prova das facetas e ajustes.",
      "Cimentação definitiva com protocolo de isolamento e fotopolimerização.",
    ],
    procedureDurationDetail:
      "Costuma envolver de 2 a 3 consultas principais ao longo de algumas semanas, conforme laboratório e complexidade.",
    technologies: [
      "Porcelana de alta estética; cimento resinoso dual ou fotopolimerizável conforme caso.",
      "Escaneamento digital em fluxos modernos.",
    ],
    benefitsH2: "Quais são os benefícios das lentes de contato?",
    recoveryH2: "Como é a recuperação após colocar lentes de contato?",
    recoveryTime:
      "Adaptação leve em poucos dias; sensibilidade transitória pode ocorrer após preparo.",
    painAndSwelling:
      "Desconforto leve ou sensibilidade a frio por curto período; inchaço gengival mínimo se houver manejo periodontal associado.",
    postOpCare:
      "Evitar morder objetos duros, não rasgar embalagens com os dentes, higiene com pasta não abrasiva conforme orientação, uso de protetor noturno se indicado.",
    returnToActivities:
      "Em geral retorno imediato às atividades; cuidado com alimentos muito duros nas primeiras 48 horas após cimentação.",
    resultsH2: "Quais são os resultados esperados com lentes de contato?",
    expectedResults: [
      "Sorriso mais alinhado visualmente e uniforme em cor.",
      "Correção de imperfeições com brilho natural da cerâmica.",
    ],
    timeToFinalResult:
      "Resultado estético final visível após a cimentação definitiva e ajustes oclusais finos.",
    beforeAfterNote:
      "Antes e depois é um excelente recurso de documentação quando autorizado pelo paciente.",
    faqH2: "Dúvidas frequentes sobre lentes de contato dental",
    faqItems: [
      {
        question: "Lente de contato cai fácil?",
        answer:
          "Com preparo e cimentação adequados e oclusão equilibrada, a retenção é alta; hábitos de bruxismo precisam ser geridos.",
      },
      {
        question: "Precisa desgastar muito o dente?",
        answer:
          "O desgaste é o menor possível compatível com o caso; alguns protocolos são ultra conservadores.",
      },
      {
        question: "Quanto tempo dura a lente?",
        answer:
          "Com higiene e revisões, muitas facetas duram muitos anos; fraturas por trauma ou hábitos são fatores de risco.",
      },
    ],
  },

  ortodontia: {
    h1WhatIs: "O que é ortodontia?",
    whatIsParagraph:
      "A ortodontia corrige dentes desalinhados e problemas de mordida com aparelhos fixos, móveis ou alinhadores transparentes, aplicando forças controladas ao longo do tempo para mover dentes com segurança.",
    whoCanH2: "Quem pode fazer ortodontia?",
    indications: [
      "Crianças, adolescentes e adultos com apinhamento, espaços ou mordida cruzada, profunda ou aberta.",
      "Casos que precisam de preparo para implantes ou próteses com espaço adequado.",
    ],
    contraindications: [
      "Doença periodontal ativa sem tratamento prévio.",
      "Pacientes com higiene muito deficiente sem plano de motivação (risco de cáries e lesões gengivais).",
      "Alguns casos de perda óssea severa exigem avaliação criteriosa da viabilidade.",
    ],
    howItWorksH2: "Como funciona o tratamento ortodôntico?",
    procedureSteps: [
      "Avaliação clínica, moldagens ou escaneamento e plano de movimentação.",
      "Instalação de aparelho ou entrega de sequência de alinhadores.",
      "Ativações ou trocas periódicas e controle de higiene.",
      "Conclusão com contenção fixa ou móvel para estabilizar o resultado.",
    ],
    procedureDurationDetail:
      "Em média de 12 a 36 meses, conforme complexidade e tipo de mecânica.",
    technologies: [
      "Bráquetes metálicos ou estéticos, fios termoativados, alinhadores por protocolo digital quando indicados.",
    ],
    benefitsH2: "Quais são os benefícios da ortodontia?",
    recoveryH2: "Como é a recuperação na ortodontia?",
    recoveryTime:
      "Não há recuperação cirúrgica; há períodos de adaptação após instalações ou ativações.",
    painAndSwelling:
      "Desconforto leve por 2 a 5 dias após cada ajuste; úlceras por atrito podem ocorrer no início e melhoram com cera ortodôntica.",
    postOpCare:
      "Higiene reforçada com escovas específicas, evitar alimentos muito duros ou pegajosos que quebrem bráquetes, comparecer às consultas de manutenção.",
    returnToActivities:
      "Estudos, trabalho e esportes não de contato intenso seguem normalmente; uso de protetor bucal em esportes de impacto é recomendado.",
    resultsH2: "Quais são os resultados esperados da ortodontia?",
    expectedResults: [
      "Arcada mais alinhada e mordida funcional.",
      "Facilidade de higiene e menor risco de desgastes por má oclusão.",
    ],
    timeToFinalResult:
      "O resultado final aparece ao término do tratamento ativo; a contenção é necessária para manutenção a longo prazo.",
    beforeAfterNote: null,
    faqH2: "Dúvidas frequentes sobre ortodontia",
    faqItems: [
      {
        question: "Aparelho dói?",
        answer:
          "Pressão leve após ativações é esperada e costuma regredir em poucos dias.",
      },
      {
        question: "Adulto pode usar aparelho?",
        answer:
          "Sim, desde que saúde periodontal e suporte ósseo permitam movimentação segura.",
      },
      {
        question: "Quanto tempo dura o tratamento?",
        answer:
          "Varia com a maloclusão; o ortodontista informa faixa estimada no plano.",
      },
    ],
  },

  avaliacao: {
    h1WhatIs: "O que é avaliação odontológica?",
    whatIsParagraph:
      "A avaliação odontológica é o primeiro passo para conhecer a saúde bucal de forma integral: exame clínico, registro de achados e, quando necessário, exames complementares para montar um plano de tratamento personalizado com prioridades claras.",
    whoCanH2: "Quem deve fazer avaliação odontológica?",
    indications: [
      "Qualquer pessoa que deseje prevenção ou queira entender o estado atual dos dentes e gengivas.",
      "Novos pacientes antes de iniciar tratamentos estéticos ou complexos.",
      "Quem sente dor, sensibilidade ou deseja segunda opinião organizada.",
    ],
    contraindications: [
      "Não há contraindicação à avaliação em si; em quadros de urgência extrema pode ser priorizado primeiro o socorro.",
      "Exames de imagem podem ter contraindicações específicas (ex.: gestação — uso de avental e critério clínico).",
    ],
    howItWorksH2: "Como é feita a avaliação odontológica?",
    procedureSteps: [
      "Anamnese e conversa sobre queixas e objetivos.",
      "Exame clínico detalhado da mucosa, dentes, gengiva e oclusão.",
      "Registros auxiliares (fotos, radiografias ou scanner) quando indicados.",
      "Apresentação do diagnóstico e plano de tratamento com etapas e prioridades.",
    ],
    procedureDurationDetail:
      "Em geral cerca de 1 hora, podendo variar se forem incluídos exames complementares no mesmo dia.",
    technologies: [
      "Radiografia digital, scanner intraoral 3D e softwares de planejamento quando disponíveis na clínica.",
    ],
    benefitsH2: "Quais são os benefícios da avaliação odontológica?",
    recoveryH2: "Como é o pós-avaliação?",
    recoveryTime:
      "Não há recuperação invasiva; se houver coleta radiográfica, não é necessário repouso.",
    painAndSwelling:
      "Ausência de dor relacionada ao exame clínico básico; sensibilidade não é esperada.",
    postOpCare:
      "Seguir o plano proposto, agendar próximos passos e manter higiene diária.",
    returnToActivities:
      "Retorno imediato a qualquer atividade após a consulta.",
    resultsH2: "Quais são os resultados esperados da avaliação?",
    expectedResults: [
      "Diagnóstico claro e compreensão das necessidades.",
      "Plano de tratamento com etapas e custos quando aplicável.",
    ],
    timeToFinalResult:
      "O “resultado” é o documento do plano ao fim da consulta; a execução depende dos tratamentos escolhidos.",
    beforeAfterNote: null,
    faqH2: "Dúvidas frequentes sobre avaliação odontológica",
    faqItems: [
      {
        question: "A avaliação dói?",
        answer:
          "O exame clínico é indolor; pode haver leve desconforto em sondagens se houver inflamação.",
      },
      {
        question: "Preciso levar exames?",
        answer:
          "Se já tiver radiografias recentes, leve; a clínica pode solicitar novos exames se necessário.",
      },
      {
        question: "Quanto tempo demora para receber o plano?",
        answer:
          "Muitas vezes o plano é discutido na mesma consulta; casos complexos podem precisar de estudo fora do horário clínico.",
      },
    ],
  },

  odontopediatria: {
    h1WhatIs: "O que é odontopediatria?",
    whatIsParagraph:
      "A odontopediatria é a odontologia dedicada a bebês, crianças e adolescentes, com foco em prevenção, interceptação de problemas e tratamento adequado à idade, em ambiente acolhedor e com linguagem lúdica.",
    whoCanH2: "Quem deve ir ao odontopediatra?",
    indications: [
      "Crianças desde o aparecimento dos primeiros dentes ou até o primeiro ano de vida (orientação preventiva).",
      "Presença de cáries, trauma dental, manchas ou alterações na erupção.",
      "Hábitos como sucção digital prolongada ou respiração oral avaliados pelo especialista.",
    ],
    contraindications: [
      "Procedimentos eletivos podem ser postergados em quadros agudos graves de saúde geral até liberação médica.",
      "Sedação ou anestesia geral, quando necessárias, seguem critérios hospitalares e de equipe — não são “contraindicações” à odontopediatria, mas exigem planejamento específico.",
    ],
    howItWorksH2: "Como funciona a consulta odontopediátrica?",
    procedureSteps: [
      "Acolhimento e adaptação ao consultório (especialmente na primeira visita).",
      "Exame clínico adaptado à idade; se necessário, radiografias com dose mínima e indicação justificada.",
      "Profilaxia, aplicação tópica de flúor ou restaurações conforme necessidade.",
      "Orientação aos pais sobre higiene, dieta e prevenção de trauma.",
    ],
    procedureDurationDetail:
      "Consultas de rotina costumam levar de 30 a 45 minutos; tratamentos mais extensos podem ser fracionados.",
    technologies: [
      "Materiais adequados à dentição decídua, selantes, ionômero de vidro e técnicas comportamentais.",
    ],
    benefitsH2: "Quais são os benefícios da odontopediatria?",
    recoveryH2: "Como é a recuperação após procedimentos em crianças?",
    recoveryTime:
      "Após restaurações simples, retorno imediato às brincadeiras; após extração, seguir orientação de mordida e alimentos moles por 24 horas.",
    painAndSwelling:
      "Leve sensibilidade local pode ocorrer; inchaço é mais comum após extrações e deve ser monitorado.",
    postOpCare:
      "Pais devem supervisionar higiene, evitar alimentos muito duros no período pós-operatório quando orientado e usar analgesia pediátrica somente se prescrita.",
    returnToActivities:
      "Escola e atividades leves costumam ser liberadas no mesmo dia, salvo orientação contrária após procedimentos específicos.",
    resultsH2: "Quais são os resultados esperados na odontopediatria?",
    expectedResults: [
      "Boca saudável e criança familiarizada com o dentista.",
      "Prevenção de complicações dolorosas e perda precoce de dentes de leite.",
    ],
    timeToFinalResult:
      "Acompanhamento contínuo ao longo do crescimento; cada fase dentária tem metas preventivas.",
    beforeAfterNote: null,
    faqH2: "Dúvidas frequentes sobre odontopediatria",
    faqItems: [
      {
        question: "Quando levar a criança pela primeira vez?",
        answer:
          "Idealmente até o primeiro ano de vida ou com o aparecimento do primeiro dente.",
      },
      {
        question: "Dente de leite cai sozinho, precisa tratar?",
        answer:
          "Cáries em dentes decíduos podem doer, infeccionar e prejudicar o permanente — avaliar sempre.",
      },
      {
        question: "A consulta traumatiza a criança?",
        answer:
          "O odontopediatra usa técnicas de acolhimento e adaptação para tornar a experiência positiva.",
      },
    ],
  },
}

const requiredIds = new Set(treatments.map((t) => t.id))
for (const id of requiredIds) {
  if (!(id in treatmentPageSeoById)) {
    throw new Error(`treatmentPageSeoById: falta conteúdo SEO para o id "${id}"`)
  }
}
