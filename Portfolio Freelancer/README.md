# Gabriel Leal — portfólio freelance

Portfólio em português para apresentar o trabalho freelance de Gabriel Leal. Implementado com Astro, Tailwind, uma primitiva shadcn/Radix e GSAP.

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
- Projetos com prévias fiéis das versões publicadas e links que abrem cada site em uma nova aba.
- Cena de processo em quatro etapas, controlada pela rolagem.
- Sobre curto e contato direto no WhatsApp.
- Composição responsiva e alternativa sem pinagem para telas baixas ou movimento reduzido.

Os quatro trabalhos são apresentados como demonstrações para prospecção. Não há preços, depoimentos de clientes do Gabriel ou promessas de resultados. Nenhuma mensagem é enviada automaticamente.

## Documentação

- [Briefing aprovado](.design/portfolio-freelancer/DESIGN_BRIEF.md)
- [Notas do protótipo](.design/portfolio-freelancer/PROTOTYPE_NOTES.md)
- [Origem dos assets e prompts](.design/portfolio-freelancer/ASSET_SOURCES.md)
- [Prévias](.design/portfolio-freelancer/previews/)

## Produção

A versão publicada está em [portfolio-freelancer-gules.vercel.app](https://portfolio-freelancer-gules.vercel.app/prototype/). O endereço definitivo pode ser configurado no futuro com a variável `PUBLIC_SITE_URL`.
