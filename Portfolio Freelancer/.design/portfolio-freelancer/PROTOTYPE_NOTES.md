# Protótipo visual — Gabriel Leal

Data: 16/09/2026.
Status: primeira composição interativa para revisão visual.
Rota: `/prototype/`.

## Direção aplicada

Uma direção única, baseada na entrevista encerrada: base branca e preta, tipografia grande, avatar pessoal e telas dos quatro projetos. O pedido já aprovava essa direção; não foram criadas três alternativas conflitantes nem um seletor de estilos.

- **Composição:** assinatura tipográfica em Anton, corpo em Manrope, ilustração central, projetos em perspectiva e linhas finas ao redor da cena.
- **Avatar:** ilustração editorial 2D a partir da foto fornecida, em pé, roupa preta e mãos livres. Criado com a ferramenta integrada de geração de imagens.
- **Projetos:** Élan, Laura, Amanda e Dra. Jane, em painéis grandes com tela de desktop e celular. Cada trabalho abre seu estudo próprio.
- **Menu:** fundo preto, links grandes numerados, abertura de cima para baixo e entrada escalonada dos itens. A navbar se reduz a uma cápsula durante a rolagem.
- **Processo:** conversa ilustrada, documento de proposta, protótipo de página e tela publicada. O scroll avança e retrocede a mesma cena.
- **Sobre:** uma assinatura gráfica e o texto curto aceito no briefing.
- **Contato:** chamada grande e links para o WhatsApp confirmado.

## Movimento

- Entrada de aproximadamente 1,35 s, uma vez por sessão de aba.
- Menu abre em 0,65 s e fecha em 0,42 s; teclado e Escape disponíveis.
- Hero e telas entram em sequência. Parallax aplicado somente em telas maiores.
- Processo fixa a cena enquanto o scroll percorre as quatro etapas. Telas com menos de 720 px de altura recebem o processo em leitura contínua.
- A preferência de movimento reduzido remove introdução, pinagem e transições e apresenta os quatro textos. Sem áudio, rolagem artificial contínua ou loop visual obrigatório.

## Implementação

Astro estático, Tailwind 4 e GSAP. Primitiva Button no padrão shadcn, com Radix Slot, renderizada sem hidratação React desnecessária. Fontes locais. Imagens dos projetos convertidas para WebP. Three.js não foi necessário para a composição 2D; as dez skills já estão disponíveis em `C:/Users/Gabriel/.agents/skills/threejs-*`.

Foto de referência e PNG mestre mantidos em `.design`; a página utiliza somente a versão WebP do avatar. O PNG gerado tem fundo branco, não canal alfa. A integração usa composição sobre o fundo branco do site.

## Escopo comercial

Os projetos são apresentados pelo trabalho visual e técnico, sem atribuir contratos, métricas ou resultados comerciais. Preços e condições de revisão permanecem fora do site.

Os endereços públicos das quatro demonstrações ainda precisam ser informados ou confirmados antes de habilitar o botão externo de visita. Não há links externos fictícios ou dependência dos servidores dos outros projetos.

## Validação

O build estático gera a home, a rota do protótipo, as quatro páginas de projeto e as imagens Open Graph. Inspeção no navegador inclui desktop, tablet, celular, navbar, menu, navegação interna e as quatro cenas do processo. As capturas de tela ficam em `previews/`.

A alternativa para movimento reduzido foi revisada no código; a preferência do sistema não foi alterada durante esta execução. Esta versão não representa auditoria completa de acessibilidade nem validação de produção.

## Próxima revisão de design

Avaliar a semelhança e o estilo do avatar, o peso da tipografia, a escala dos projetos e o ritmo do processo. Os arquivos do protótipo ficam disponíveis para refinamento; nenhuma publicação foi feita.

### Medidas verificadas

- Home: 1440 × 1000, 390 × 844 e 360 × 740; sem overflow horizontal nas medições finais.
- Estudo de Élan: desktop e celular, com assets próprios e composição responsiva.
- Processo: quatro etapas verificadas por rolagem na composição móvel.
- Build final: concluído com seis páginas estáticas e sem erro.

