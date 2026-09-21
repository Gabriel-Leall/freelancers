# Gabriel Leal — protótipo do portfólio freelance

Protótipo visual navegável, em português, criado a partir do briefing aprovado. Implementado com Astro, Tailwind, uma primitiva shadcn/Radix e GSAP. Não é uma publicação em produção.

## Abrir

Depois de instalar as dependências com `bun install`, execute:

```powershell
bun run dev --background --host 127.0.0.1 --port 4340
```

Abra http://127.0.0.1:4340/prototype/.

```powershell
bun run astro dev status
bun run astro dev logs
bun run astro dev stop
bun run build
```

## O que está demonstrado

- Avatar 2D personalizado, nome e quatro projetos na abertura.
- Entrada breve por sessão, navegação que se compacta e menu em tela cheia.
- Projetos com páginas próprias, imagens de desktop e celular, contexto e decisões.
- Cena de processo em quatro etapas, controlada pela rolagem.
- Sobre curto e contato direto no WhatsApp.
- Composição responsiva e alternativa sem pinagem para telas baixas ou movimento reduzido.

Os quatro trabalhos são apresentados como demonstrações para prospecção. Não há preços, depoimentos de clientes do Gabriel ou promessas de resultados. Nenhuma mensagem é enviada automaticamente.

## Documentação

- [Briefing aprovado](.design/portfolio-freelancer/DESIGN_BRIEF.md)
- [Notas do protótipo](.design/portfolio-freelancer/PROTOTYPE_NOTES.md)
- [Origem dos assets e prompts](.design/portfolio-freelancer/ASSET_SOURCES.md)
- [Prévias](.design/portfolio-freelancer/previews/)

## Limite da versão

O objetivo desta versão é revisar composição, avatar, conteúdo e movimento. As URLs públicas definitivas das demonstrações não foram encontradas nos projetos consultados; os estudos estão completos dentro do protótipo, e o botão externo de visitar cada site deve ser conectado quando esses endereços estiverem confirmados. O protótipo usa `noindex` e não configura domínio, analytics ou hospedagem.
