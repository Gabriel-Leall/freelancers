# Auditoria de desempenho

## Evidência inicial verificada

- JavaScript externo na home: 45.4 KB gzip de GSAP e ScrollTrigger.
- As páginas internas carregavam o mesmo bundle animado da home.
- CSS compartilhado: 8.4 KB gzip.
- Fontes TTF: 148.4 KB gzip no total.
- Quatro imagens de projeto no hero: 339.9 KB, além do avatar de 66.7 KB.

## Julgamento Jev

Após as alterações, o `jev-1.13.0` classificou o risco remanescente como moderado (0,89/3, com probabilidade 0,87 no nível 1). A evidência foi considerada forte para conclusões sobre payload, mas insuficiente para afirmar Core Web Vitals de campo. Entre os próximos ganhos, recomprimir o avatar recebeu probabilidade 0,60 e converter as fontes para WOFF2 recebeu 0,40.

Resposta completa: `jev-final-audit.json`.

## Alterações aplicadas

- As páginas internas usam um script leve de navegação baseado em Web Animations; o bundle GSAP/ScrollTrigger fica restrito à home animada.
- O hero usa thumbnails de 640 × 400 em vez das capturas de 1440 × 900.
- O avatar foi recomprimido sem mudar suas dimensões.
- Imagens fora da primeira composição continuam com carregamento preguiçoso.
- As animações permanecem limitadas a `transform` e `opacity`, com alternativa para `prefers-reduced-motion`.

## Entrega após a otimização

- Home: 45.0 KB gzip de JavaScript externo.
- Páginas internas: nenhum JavaScript externo; apenas a navegação inline.
- Hero inicial: cerca de 66 KB gzip somando avatar recomprimido e as duas primeiras thumbnails.
- CSS: 8.5 KB gzip.

## Próximo ganho possível

Converter Anton e Manrope de TTF para WOFF2 reduz a transferência de fontes. A troca deve preservar métricas tipográficas e será mais segura quando o domínio e a etapa de publicação forem definidos.
