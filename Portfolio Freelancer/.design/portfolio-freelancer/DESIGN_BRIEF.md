# Design Brief: Gabriel Leal — Portfólio freelance

Status: briefing consolidado; entrevista de direção concluída; primeiro protótipo visual disponível em `/prototype/`.
Atualizado em: 16 de setembro de 2026.

Entrega de protótipo: [notas de implementação e revisão](PROTOTYPE_NOTES.md), [assets e prompts](ASSET_SOURCES.md) e [prévias](previews/). Esta primeira execução segue as decisões abaixo e ainda não foi publicada.

Este documento reúne as decisões confirmadas durante a entrevista grill-me + design-brief e orienta a criação do portfólio. Público, oferta, conteúdo principal, referências e comportamentos estão definidos. Composição final, tipografia, ilustração e coreografia serão desenvolvidas no protótipo visual, dentro desta direção. As recomendações técnicas estão identificadas como diretrizes de execução.

## Decisões confirmadas

| Tema | Decisão do usuário |
| --- | --- |
| Objetivo | Criar um novo portfólio para vender serviços freelance; já existe um portfólio voltado a desenvolvimento. |
| Público principal inicial | Pequenos negócios e profissionais autônomos. |
| Outros públicos atendidos | Marcas e empresas; agências e designers que precisam de desenvolvimento. |
| Serviços em destaque | Landing pages e sites institucionais. |
| Outros serviços oferecidos | Lojas virtuais, sistemas e aplicações sob medida. |
| Identidade | Usar o próprio nome como marca e apresentar o responsável pelo trabalho. |
| Nome profissional | Gabriel Leal, com essa grafia na marca, na abertura, na navegação e no contato. |
| Idioma da primeira versão | Português brasileiro (pt-BR). Adicionar inglês futuramente, quando o usuário começar a atender projetos internacionais. |
| Primeira tela | Combinar um avatar/ilustração pessoal como protagonista com o nome e a aparição dos projetos na mesma composição (resposta: “B, com a aparição dos projetos A.”). |
| Estilo do avatar | Ilustração 2D com traços desenhados, próxima da linguagem da S0 e personalizada com a aparência do usuário. |
| Referência pessoal do avatar | Foto fornecida pelo usuário e preservada em `references/gabriel-leal-reference.png`, relativa a este briefing. Usar como referência de aparência para a ilustração. |
| Pose do avatar | Em pé, com as mãos livres, interagindo visualmente com os projetos ao redor. |
| Cores do site | Base branca e preta, com as cores concentradas no avatar e nos projetos. |
| Projetos da primeira versão | Élan Estética, Laura Nayara, Amanda Óculos e Dra. Jane (Biodiagnóstico — Dra. Saara Jane). Élan abre a seleção. |
| Apresentação dos quatro projetos | Mostrar contexto, objetivo, direção visual e trabalho construído, sem rótulos sobre a origem comercial dos estudos. |
| Abertura de um projeto | Abrir uma página própria, com imagens grandes, textos curtos sobre o objetivo e o trabalho realizado, além de link para visitar o site. |
| Estrutura da página principal | Abertura, projetos, Como trabalho, Sobre mim e contato. Sem seção dedicada a Serviços. |
| Frequência da animação de entrada | Uma vez por sessão, na primeira entrada. Não repetir ao navegar entre projetos e página inicial ou ao voltar de um projeto durante a mesma sessão. |
| Navegação | Navbar com Nome + Menu + Contato, que se compacta na rolagem. Menu animado em tela cheia no computador e no celular; contato sempre acessível. Combina a navbar da Maria com o movimento do menu do Khanh. |
| Como trabalho | Seção com mais destaque, totalmente animada para ajudar o visitante a entender o fluxo de trabalho. Quatro etapas: Conversa e Briefing; Escopo e Proposta; Protótipo e Aprovação; Desenvolvimento e Publicação. A rolagem controla o avanço da cena pelas etapas, no ritmo do visitante. |
| Revisão solicitada pelo cliente | Opcional e tratada em contrato; não integra as etapas anunciadas no site. A futura cobrança adicional também não deve ser apresentada no site. |
| Sobre mim | Seção clean, curta, de leitura rápida e fácil. Texto inicial aceito pelo usuário, com refinamento posterior; ver a redação em Content and Evidence. |
| Contato principal | WhatsApp direto: **(89) 99410-2170**. Formato internacional: `5589994102170`. Link base: `https://wa.me/5589994102170`. Mensagem inicial conforme o serviço de interesse. |
| Preços | Não exibir preços no site. O orçamento acontece em conversa sobre o projeto. |
| Ambição visual | Acabamento, estética e movimento no nível das referências escolhidas no Awwwards. |
| Limites das animações | Animações expressivas, com textos legíveis, navegação que responda prontamente e sem som automático. Recomendação aceita pelo usuário na pergunta 23. |
| Stack | Astro, Tailwind, shadcn e GSAP. |
| Three.js | Autorizado como recurso opcional; a inclusão depende da direção visual. |
| Outras bibliotecas | Acrescentar somente bibliotecas indicadas pelo usuário e respeitar eventuais substituições que ele determinar. |
| Processo | Entrevista com uma pergunta por vez e recomendação; registrar o briefing antes de construir. |

## Problem

O potencial cliente precisa entender se este profissional consegue criar um site adequado ao seu negócio, avaliar a qualidade do trabalho e descobrir como iniciar a contratação. Um portfólio apresentado apenas pela perspectiva técnica não organiza necessariamente essas respostas para quem está comprando um serviço.

Necessidade principal proposta: “Quero encontrar alguém em quem confiar para criar ou reformular o site do meu negócio e entender se vale a pena conversar sobre o projeto.”

## Solution

Apresentar o profissional por seu próprio nome, dar espaço para os trabalhos demonstrarem sua capacidade e tornar seu processo compreensível por uma seção animada. O visitante deve conseguir explorar os projetos, entender como o trabalho acontece e iniciar uma conversa no WhatsApp sobre sua necessidade.

A comunicação prioriza landing pages e sites institucionais, mantendo lojas virtuais e aplicações sob medida como possibilidades. Não haverá uma seção dedicada a Serviços; a oferta deve ficar compreensível na apresentação, nos projetos e no contexto do processo. O foco inicial em pequenos negócios não exclui empresas, agências ou designers.

## Critério de sucesso

Objetivo confirmado: gerar oportunidades de contratação por WhatsApp.

Critérios propostos para avaliar a experiência:

- O visitante entende quem presta o serviço, o que pode contratar e como entrar em contato.
- Os projetos permitem avaliar qualidade visual e adequação ao negócio.
- A experiência continua utilizável no celular, por teclado e com redução de movimento.
- As animações contribuem para a apresentação e não impedem consultar projetos ou contato.

Ainda sem definição: metas quantitativas, origem principal dos visitantes e ferramentas de medição. Não instalar analytics por dedução a partir deste briefing.

## Experience Principles

Princípios derivados das decisões da entrevista:

1. **O trabalho demonstra a qualidade.** Imagens e contexto dos projetos sustentam a apresentação comercial; texto explica o que foi feito e para quem.
2. **Movimento com propósito.** Entrada, navegação e transições constroem uma identidade reconhecível, mantendo o conteúdo acessível durante o percurso.
3. **Contato direto e compreensível.** O visitante reconhece o responsável e consegue conversar sobre seu projeto sem precisar entender a stack.

## Aesthetic Direction

### Referências e limites confirmados

| Referência | O que o usuário gostou | Papel na direção |
| --- | --- | --- |
| [Khanh Nguyen — Menu](https://www.awwwards.com/inspiration/menu-khanh-nguyen-porfolio) | Animações | Referência de movimento para abertura, fechamento e estados do menu. Não pressupõe adoção da paleta ou da família tipográfica. |
| [Maria João Abrantes](https://www.awwwards.com/sites/maria-joao-abrantes) | Apenas onboarding e navbar | Referência restrita à entrada inicial e à navegação. As demais seções, cores e efeitos não foram escolhidos. |
| [S0 Animation — Design](https://www.s0animation.com/design) | Estética e apresentação dos projetos | Referência principal para composição visual e exposição dos trabalhos. O usuário também escolheu uma ilustração 2D pessoal como protagonista, próxima da linguagem da S0, combinada com a aparição dos projetos na primeira tela. Disposição, desenho final e recursos 3D para outros elementos ainda não foram escolhidos. |

### Observações da inspeção em 15/09/2026

- **Khanh:** o vídeo da referência apresenta um menu que ocupa a tela, links grandes numerados e destaque de um item enquanto os demais ficam visualmente atenuados. O vídeo foi encontrado em reprodução no navegador. Tempos, curvas e sequência exata ainda precisam de estudo específico antes da implementação.
- **Maria:** o [site real](https://www.mariajoaoabrantes.work/) começa com o nome no centro de um fundo escuro. A navegação inicialmente ampla se transforma em uma barra flutuante compacta com cantos arredondados após a rolagem; a identificação também se reduz. Esta observação não estende a seleção do usuário ao restante do site.
- **S0:** fundo claro, contraste preto/branco, títulos grandes e marcantes, respiro e projetos organizados em painéis largos com molduras finas. A abertura combina personagem ilustrado e telas em perspectiva. Nos trabalhos, há nome, categoria, imagem grande e acesso a detalhes. As telas dos projetos foram observadas após carregar; não foram inspecionados todos os estudos de caso nem a versão móvel.

### Direção consolidada

- **Filosofia:** composição gráfica autoral, com projetos em grande escala e navegação animada.
- **Tom:** criativo e seguro, com clareza comercial. A representação pessoal será uma ilustração 2D com traços desenhados, próxima da linguagem da S0, em pé e com as mãos livres, interagindo visualmente com os projetos ao redor. Expressão e intensidade lúdica ainda serão desenhadas.
- **Base visual confirmada:** branca e preta, com as cores concentradas no avatar e nos projetos. Definir os valores neutros exatos na etapa de tokens, respeitando essa direção.
- **Direção de movimento confirmada:** entrada com identidade pessoal uma vez por sessão; navbar com Nome + Menu + Contato que se compacta na rolagem; menu animado em tela cheia no computador e no celular. Coreografia e detalhes visuais ainda serão desenhados.
- **Limites de movimento confirmados:** preservar a expressividade das animações, a legibilidade dos textos e a resposta da navegação. Não reproduzir som automaticamente.
- **Composição confirmada da primeira tela:** avatar pessoal protagonista, nome e projetos aparecendo juntos. A distribuição, o movimento e a relação de escala ainda serão desenhados.
- **Detalhamento para o protótipo:** fontes, valores neutros exatos da base branca e preta, expressão e arquivo final da ilustração 2D, textos de abertura, assinatura visual e eventual uso de Three.js em outros elementos. A referência fotográfica da aparência pessoal e a pose em pé com mãos livres já estão definidas. Estes itens são trabalho de design dentro do briefing, não decisões de direção pendentes da entrevista.

### Anti-referências e limites

- Respeitar a seleção parcial feita pelo usuário: Maria contribui apenas com entrada e navbar.
- Não transportar a identidade comercial dos sites dos clientes para a marca pessoal.
- Não assumir que escolher a S0 implica querer o mesmo personagem, logo, mockups ou textos.
- Evitar som automático e efeitos que comprometam a leitura ou a resposta da navegação. Não houve veto específico a cursor personalizado ou distorções; qualquer exploração desses recursos deve respeitar os limites aceitos e ter função clara.

## Existing Patterns

O novo projeto começa nesta pasta como documentação. Ainda não há aplicativo, configuração de Tailwind, tokens, componentes, fontes, Storybook ou dependências próprios deste portfólio.

Os projetos freelance existentes foram consultados como contexto de stack. Astro, React, Tailwind, componentes em `src/components/ui`, layout Astro e estilos globais orientam a organização do novo projeto.

- **Tipografia existente no projeto consultado:** Cormorant Garamond e Manrope, carregadas no layout. São escolhas da marca do cliente, não decisões deste portfólio.
- **Cores existentes no projeto consultado:** tons escuros, areia e dourado via `@theme`. Não são a paleta do novo projeto.
- **Espaçamento do novo projeto:** pendente.
- **Componentes candidatos a reutilização técnica:** primitivas de botão e utilitários de classes, com revisão de semântica e estilo quando houver implementação.
- **Arquivos futuros:** páginas e layouts Astro; interatividade React/shadcn onde necessária; GSAP para a coreografia definida no briefing.

## Component Inventory

Inventário do escopo definido. Os componentes serão criados para este projeto; as notas distinguem decisões fechadas, detalhes de produção e o recurso opcional de Three.js.

| Componente | Status | Notas |
| --- | --- | --- |
| Apresentação inicial | Novo, confirmado | Exibição uma vez por sessão. Conteúdo, duração exata e possibilidade de pular ainda a definir. |
| Navegação | Novo, confirmado | Nome + Menu + Contato, com compactação na rolagem e menu animado em tela cheia no computador e no celular. Contato sempre acessível. |
| Hero com identidade pessoal | Novo, confirmado | Ilustração 2D pessoal em pé, com mãos livres e interação visual com os projetos ao redor, acompanhada do nome Gabriel Leal. Produzir desenho final, composição e chamada no protótipo. |
| Apresentação de projetos | Novo, confirmado | Grandes composições visuais a partir da S0. Quatro trabalhos confirmados: Élan Estética, Laura Nayara, Amanda Óculos e Dra. Jane. Élan abre a seleção. |
| Detalhe de projeto | Novo, confirmado | Página própria para cada demonstração, com imagens grandes, contexto de prospecção, objetivo, descrição do trabalho realizado e link para visitar a demonstração disponível. Conteúdo e links ainda precisam ser verificados. |
| Apresentação pessoal | Novo, confirmado | Sobre mim clean, curto, de leitura rápida e fácil. Texto inicial aceito para uso por enquanto; uso de foto e composição final ainda a definir. |
| Processo de trabalho | Novo, confirmado | Como trabalho recebe mais destaque e será uma seção totalmente animada com as quatro etapas confirmadas, controlada pela rolagem. Texto explicativo, desenho das cenas e adaptação para celular pendentes. |
| Chamada para WhatsApp | Novo | Número confirmado: (89) 99410-2170. Texto final das chamadas e mensagens iniciais ainda a definir. |
| Rodapé | Novo | Nome Gabriel Leal e WhatsApp (89) 99410-2170 confirmados; composição e eventuais links complementares a definir. |
| Elemento Three.js | Opcional | Sem cena ou objeto aprovado; instalar skills não obriga o uso da biblioteca no site. |

## Key Interactions

### Confirmado quanto à intenção

- Exibir a animação de entrada uma vez por sessão, mantendo a navegação entre projetos e página inicial sem repetição da apresentação durante essa sessão.
- Compactar a navbar Nome + Menu + Contato durante a rolagem. O botão Menu abre a navegação animada em tela cheia tanto no computador quanto no celular, mantendo o contato acessível.
- Ver o avatar pessoal e os projetos já na primeira tela e explorar os trabalhos apresentados visualmente.
- Ao selecionar um projeto, abrir sua página própria, com apresentação visual, objetivo, trabalho realizado e link para visitar o site.
- Na seção Como trabalho, controlar pela rolagem uma cena que evolui pelas quatro etapas reais do fluxo, da conversa inicial até o site publicado. O visitante controla o ritmo da explicação.
- Consultar um Sobre mim clean e breve, com leitura rápida.
- Identificar o serviço desejado e iniciar conversa no WhatsApp com uma mensagem pertinente.
- Ter entrada e navbar inspiradas nos elementos escolhidos da Maria, com animações de menu referenciadas em Khanh.
- Manter animações expressivas, textos legíveis e navegação responsiva, sem som automático.

### Diretrizes de execução e detalhamento visual

- Na entrada, apresentar o nome e revelar a página com uma animação breve. A exibição uma vez por sessão está confirmada; duração exata e coreografia ficam pendentes. Evitar espera artificial.
- Abrir e fechar o menu com uma sequência consistente; garantir operação por teclado e retorno de foco.
- Apresentar cada projeto em uma composição ampla. Definir se a rolagem envolve sobreposição de painéis e como isso se traduz para o celular.
- Se houver Three.js, manter títulos, projetos e contatos acessíveis por HTML mesmo sem a cena.

## Responsive Behavior

Requisitos propostos para a etapa de design:

- Planejar desktop e celular como composições próprias da mesma identidade.
- No celular, preservar título, contexto e ação dos projetos sem depender de hover.
- Adaptar o menu à área disponível e impedir que a navbar cubra conteúdo ou foco.
- Se cenas ou transições complexas forem escolhidas, prever uma alternativa visual leve para telas pequenas e dispositivos limitados.
- Breakpoints e dimensões finais serão derivados da composição escolhida e validados no navegador.

## Accessibility Requirements

Baseline proposto para implementação:

- Contraste mínimo pretendido de 4,5:1 para texto comum e 3:1 para texto grande.
- Operação de navegação e projetos por teclado, com foco visível.
- Menu com estado expandido comunicado, fechamento por Escape e retorno de foco ao acionador.
- Estrutura semântica de títulos, regiões e links; imagens com alternativas adequadas ao conteúdo.
- Respeitar preferência por redução de movimento e manter o conteúdo legível quando animações estiverem desativadas.
- Não depender de cursor personalizado, hover ou objetos 3D para acessar informações essenciais.
- Definir controle para pausar ou reduzir movimento contínuo caso seja adotado.
- Não iniciar reprodução sonora automaticamente.

## Performance

Propostas a detalhar quando a composição estiver definida:

- Astro entrega o conteúdo principal em HTML; carregar interatividade nos componentes que precisam dela.
- Otimizar imagens e dimensionar mídias de projetos para a tela em que aparecem.
- Não condicionar o contato ao carregamento de uma cena 3D.
- Validar comportamento em celular real ou viewport confiável; uma compilação bem-sucedida não comprova qualidade visual.
- Metas quantitativas de carregamento, JavaScript e quadros por segundo ainda não foram estabelecidas.

## Processo de trabalho

O usuário confirmou uma seção totalmente animada, com maior destaque na página, e definiu a sequência abaixo. Desenvolvimento e Publicação foram mantidos juntos, conforme a formulação da resposta.

1. **Conversa e Briefing**
2. **Escopo e Proposta**
3. **Protótipo e Aprovação**
4. **Desenvolvimento e Publicação**

A narrativa deverá explicar o que acontece em cada etapa e como o cliente participa. A progressão pela rolagem está confirmada; textos explicativos, desenho das cenas e adaptação para celular ainda serão definidos. Preservar uma apresentação compreensível também com redução de movimento.

### Interação confirmada

O avanço da sequência será vinculado à rolagem, para que o visitante controle o ritmo. Uma mesma cena evolui pelas quatro etapas, da conversa até a publicação. O usuário escolheu esse comportamento na pergunta 13.

Como proposta de composição para desktop, considerar uma cena que permanece em destaque enquanto se transforma. A fixação temporária da seção, as distâncias de rolagem e a adaptação para celular ainda serão definidas no design. GSAP ScrollTrigger é a ferramenta prevista dentro da stack autorizada.

### Nota interna sobre condições comerciais

O usuário informou que a revisão solicitada pelo cliente é opcional e que, futuramente, terá uma taxa adicional prevista em contrato. Não incluir uma etapa de revisão obrigatória, promessas de revisões incluídas, cobranças ou essas condições contratuais na apresentação pública do site. Esta nota é contexto interno do briefing.

## Content and Evidence

- Confirmado: marca pessoal, serviços oferecidos, foco inicial e canal de contato.
- Projetos confirmados pelo usuário para a primeira versão: Élan Estética, Laura Nayara, Amanda Óculos e Dra. Jane. Publicação e disponibilidade dos sites ainda precisam ser verificadas antes de exibir links externos.
- Fonte local identificada para Dra. Jane: `C:/Users/Gabriel/Documents/VsCode/Freelancer/Dra Saara Jane/PRODUCT.md` e `C:/Users/Gabriel/Documents/VsCode/Freelancer/Dra Saara Jane/src/pages/index.astro`, com a identificação “Biodiagnóstico — Dra. Saara Jane”. A pasta irmã `Dra Jane` não contém `package.json`, `PRODUCT.md` ou `src/pages/index.astro` na inspeção de 15/09/2026. Usar o projeto identificado como ponto de partida para a coleta dos materiais.
- Não há neste briefing depoimentos aprovados, métricas de conversão, prazos comerciais ou garantias. O texto inicial do Sobre mim está aceito e registrado abaixo.
- Nas páginas, explicar o objetivo, as decisões de criação e o que foi construído. Não atribuir resultados comerciais sem evidência.
- Materiais reais de cada projeto devem sustentar as descrições. Não criar resultados ou depoimentos para preencher o layout.
- Ilustração 2D pessoal escolhida para a primeira tela, com traços desenhados próximos da linguagem da S0. A foto fornecida pelo usuário está em [references/gabriel-leal-reference.png](references/gabriel-leal-reference.png). Ela orienta os traços do rosto, o cabelo curto e a roupa preta visíveis na imagem. Pose confirmada: em pé, mãos livres e interação visual com os projetos ao redor. Expressão, desenho final e arquivo da ilustração ainda serão produzidos.
- A foto foi fornecida como material de referência para o avatar e fica na documentação de design. O uso da fotografia original em uma seção pública do site ainda não foi decidido.
- Nome profissional confirmado: **Gabriel Leal**. Idioma inicial: **português brasileiro (pt-BR)**. WhatsApp confirmado pelo usuário: **(89) 99410-2170**, com link base `https://wa.me/5589994102170`. Eventuais links complementares ainda precisam ser definidos.

### Sobre mim — texto inicial aceito

Texto aceito pelo usuário para a versão inicial, com intenção explícita de melhorar a redação posteriormente:

> Sou Gabriel Leal e crio sites para apresentar negócios com clareza e personalidade. Do briefing à publicação, você conversa diretamente comigo.

A versão inicial enfatiza contato direto e acompanhamento do projeto, de acordo com as decisões já registradas. O refinamento da redação fica para depois; não reabrir essa escolha como pendência imediata. Manter a seção clean e breve.

## Out of Scope

### Exclusões confirmadas

- Versão em inglês e seletor de idioma na primeira versão. A tradução fica para a futura atuação em projetos internacionais.
- Som automático.
- Preços publicados no site.
- Etapa obrigatória de revisão, cobrança por revisão ou exposição das condições contratuais de revisão no site.
- Seção dedicada a Serviços na página principal.
- Tratar apenas um dos três públicos como elegível para contratar.
- Excluir lojas virtuais e sistemas da oferta, embora não sejam o destaque inicial.
- Adotar o restante do site da Maria como direção visual por inferência.

### Entrega desta fase

Esta entrega consolida o briefing e preserva a referência fotográfica para o avatar. O próximo artefato de design é um protótipo visual com versões para computador e celular, seguido do desenvolvimento na stack definida. A aplicação ainda não foi implementada nesta fase de documentação. Compra de domínio e publicação não foram executadas. O portfólio existente de desenvolvimento permanece separado deste projeto.

Não há decisão de incluir blog, área administrativa, login, formulários, agendamento ou outras seções além das discutidas. Levantar necessidades antes de acrescentar funcionalidades.

## Encerramento da entrevista e próximos entregáveis

A entrevista de direção foi concluída após 23 perguntas. As decisões da seção inicial são a base do trabalho; não pedir novamente escolhas já respondidas. A ausência de valores exatos de fonte, espaçamento ou duração não bloqueia a produção do protótipo.

| Entregável seguinte | Trabalho a realizar dentro da direção definida |
| --- | --- |
| Avatar 2D | Produzir uma ilustração personalizada a partir da foto, em pé, com mãos livres, e ajustar expressão, gestos e recorte à composição dos projetos. |
| Protótipo visual | Desenhar a página principal no computador e no celular, incluindo entrada, navbar, menu, abertura, projetos, Como trabalho, Sobre mim e contato. |
| Páginas dos projetos | Criar uma composição reutilizável para os quatro trabalhos, selecionar imagens reais e verificar links disponíveis antes de exibi-los. |
| Narrativa animada | Desenhar a transformação entre as quatro etapas do processo, a entrada por sessão e as transições do menu; definir durações e adaptações para celular. |
| Sistema visual | Definir fontes, escala tipográfica, espaçamento e valores neutros da base branca e preta, preservando cor no avatar e nos projetos. |
| Preparação técnica | Avaliar se Three.js acrescenta algo à composição, planejar desempenho, acessibilidade e redução de movimento, usando apenas a stack autorizada. |

O WhatsApp informado é suficiente como contato inicial. Links complementares, uso público da fotografia original e afirmações sobre alcance geográfico não são necessários para fechar esta versão e não devem ser inventados. O texto inicial do Sobre mim segue como aceito, com refinamento posterior.

## Registro técnico da preparação

- Pacote solicitado: [CloudAI-X/threejs-skills](https://github.com/CloudAI-X/threejs-skills).
- Instalado com `npx --yes skills add CloudAI-X/threejs-skills --global --agent codex --skill '*' --yes`.
- Dez skills instaladas e verificadas em `C:/Users/Gabriel/.agents/skills/threejs-*`: animation, fundamentals, geometry, interaction, lighting, loaders, materials, postprocessing, shaders e textures.
- A instalação é de instruções para o agente. Nenhuma dependência Three.js foi adicionada ao projeto nesta fase.
- Convenção informada pelo usuário: não usar “codex” em nomes de branches ou commits.
