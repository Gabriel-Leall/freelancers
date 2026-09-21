# Assets e prompts

## Avatar

- Ferramenta: image_gen integrada ao Codex.
- Referência: foto fornecida pelo usuário, preservada em `references/gabriel-leal-reference.png`.
- Original selecionado: `references/gabriel-avatar-white.png`.
- Arquivo usado pelo site: `public/images/gabriel-avatar.webp` (a partir da raiz do projeto).
- O fundo final é branco. A primeira geração desenhou um padrão xadrez sem transparência real; foi corrigida pela própria ferramenta de edição. Não apresentar o arquivo como PNG transparente.

### Prompt inicial

Use case: stylized-concept. Asset type: production-quality 2D personal avatar cutout for Gabriel Leal's white-and-black creative freelance portfolio website. Input image 1 is a likeness reference only: the person is the user. Preserve his recognizable face proportions, short dark textured hair with close sides, dark eyebrows, natural skin tone and slim proportions. Do not reproduce the mirror-selfie composition. Draw ONE full-body 2D editorial character of this person, standing with both hands empty and free, subtly interacting with imagined website project panels around him. One forearm gently extended outward with open hand, other arm relaxed a little away from the body, natural confident casual posture, mild friendly expression, looking forward. Realistic adult proportions. Plain black crew-neck T-shirt, relaxed black knee-length shorts consistent with the photograph, minimal off-white low-top sneakers. No logos. Refined hand-drawn digital editorial illustration, crisp dark contour lines, restrained flat colors, clean cel-shaded areas, delicate face detail. Not a 3D render, photo, chibi or childish mascot. Full body head to feet, centered, ample margin around free hands. No laptop, phone, headphones, bag, text, website panels, people, watermark or decorative shapes. The original background request was transparent alpha; the tool did not return true alpha.

### Prompt final de edição

Edit this exact avatar image. Preserve the character completely: face identity, facial expression, hair, black T-shirt, shorts, sneakers, open empty hands, pose, proportions, linework and all colors. Replace ONLY the entire gray checkerboard background with perfectly flat solid pure white (#FFFFFF). No checkerboard, no texture, no wrinkles, no noise, no floor line, no shadow, no other changes. Keep the full body and exact framing. Output the clean illustration on white.

## Telas dos projetos

Capturas de navegador das implementações locais em 16/09/2026, convertidas para WebP sem redesenhar os sites:

| Prefixo | Pasta de origem |
| --- | --- |
| elan | `../Elan Estetica` |
| laura | `../Laura Nayara` |
| amanda | `../Amanda Oculos` |
| jane | `../Dra Saara Jane` |

Os arquivos `*-desktop`, `*-mobile` e `*-detail` são imagens para apresentação do trabalho. Fontes e conteúdos internos de cada demonstração permanecem sujeitos às notas do respectivo projeto.

## Fontes

Anton e Manrope, obtidas pelo serviço oficial Google Fonts e servidas localmente. Fontes distribuídas sob SIL Open Font License. Referências e licenças:

- https://github.com/google/fonts/tree/main/ofl/anton
- https://github.com/google/fonts/tree/main/ofl/manrope

## Referências visuais

- S0: https://www.s0animation.com/design — linguagem de apresentação.
- Maria: https://www.mariajoaoabrantes.work/ — entrada e navbar.
- Khanh: https://www.awwwards.com/inspiration/menu-khanh-nguyen-porfolio — animação do menu.

Não foram copiados personagens, logos ou código dos sites de referência.
