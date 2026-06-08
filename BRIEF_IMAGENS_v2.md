# Brief de imagens v2 — LP "A Mecânica do Amor" (tema CLARO)

> Mega prompt pra **regerar as imagens** da landing considerando as mudanças recentes:
> **(1)** a página agora é **CLARA** (fundo near-white `#FBFCF9`), com 2 seções escuras (Prova + CTA final);
> **(2)** o produto é **o workshop completo (vídeo único)** — **NÃO** "8 módulos", **NÃO** "comunidade";
> **(3)** identidade dourada da marca, sóbria, Camada A (sem esoterismo pesado).
>
> Cole cada bloco no seu gerador (GPT-Image / Codex / Midjourney etc.). Prompts em inglês (os geradores respondem melhor), com aspect ratio e fundo especificados. As **fotos reais da Durga** e dos **5 depoimentos** NÃO entram aqui — são fotos reais, não geradas (seguem como placeholder na página até chegarem).

---

## 0. Guia de estilo (vale pra TODAS as imagens)

**Paleta (hex):**
- Ouro: `#B08030` · Ouro claro: `#E0D090` · Ouro profundo: `#8A6420` · Bronze: `#704010`
- Fundo claro da página: `#FBFCF9` (near-white quente) · Faixa: `#F3EEE3`
- Marrom escuro (texto/objetos): `#2A2014` / `#1A130B`

**Mood:** alquimia, templo, iniciação séria, luz quente dourada. Elegante mas com peso. **Ouro pontual**, não dourado em tudo.

**Regras (NÃO violar):**
- **Fundo claro/neutro ou transparente (PNG).** As imagens vão sobre `#FBFCF9` — evitar retângulos escuros pesados que "furam" a página clara. Quando o objeto for escuro (cartas, celular), usar **fundo claro/creme suave ou transparente** ao redor, com sombra leve.
- **Nada de "8 módulos", lista de aulas numeradas, ou aba "Comunidade".** O produto é **um workshop completo (vídeo único)**.
- **Sem texto inventado** dentro da arte (ou só rótulos genéricos legíveis: "A Mecânica do Amor", "workshop"). Sem promessas, sem preço.
- **Sem Camada C** (símbolos alquímicos pesados, "mulher demônia", quartzo, exagrama, kundalini). É topo de funil frio.
- **Sem rosto fake da Durga.** Nenhuma imagem deve simular o rosto dela.
- Sem clip-art esotérico, sem arco-íris/roxo-neon, sem estrelinhas, sem foto de stock sorridente.

**Negative prompt padrão (reaproveitar):**
`text errors, gibberish text, watermark, logo soup, numbered module list, course curriculum list, community tab, social feed, rainbow gradient, neon purple, cheesy new-age clipart, stock smiling couple, dark heavy background, low contrast, deformed hands, extra fingers`

---

## 1. Mockup do workshop (PRIORIDADE — substitui `mockup_area_membros.png`)

**Objetivo:** mostrar que o produto é **um workshop completo em vídeo**, acessível no celular. **Sem módulos, sem comunidade.**

**Aspect ratio:** retrato, ~`9:16` (cabe num slot estreito). **Fundo:** claro/creme `#FBF7EF` ou transparente, com sombra suave sob o celular.

**Prompt (EN):**
```
A modern smartphone, front view, floating on a soft warm cream (#FBF7EF) background with a gentle drop shadow. On the screen: a clean video course player for a single complete workshop titled "A Mecânica do Amor". Show ONE large video player with a gold play button and a progress bar — like a single masterclass video, NOT a list of modules. Minimal elegant UI in dark text on light surface, with a small golden alchemical flame emblem at the top. Warm golden accent color #B08030. Premium, serene, spiritual-but-sober aesthetic. Soft natural lighting. No course curriculum list, no numbered lessons, no community tab, no social feed.
```
**Negative:** padrão acima + `module list, lesson numbers, multiple thumbnails grid`.

---

## 2. Oráculo das Chaves Ascensionais — ⚠️ NÃO GERAR (vai ser FOTO REAL)

O Oráculo agora entra como **foto real do baralho físico** (a Durga está terminando as cartas). **Não gerar imagem de IA pra ele** — a página já tem um placeholder marcado "FOTO REAL DO ORÁCULO (inserir)" no bloco do bônus. Quando a foto chegar, é só plugar.

> Orientação pra foto real: baralho físico das Chaves sobre superfície clara (linho/creme), luz natural quente, dourado pontual, fundo claro pra casar com a página near-white. Sem texto sobre a arte.

---

## 3. Pôster/abertura da VSL (opcional — capa provisória 16:9)

**Objetivo:** capa 16:9 pra cima do player ENQUANTO não há o vídeo real. **Sem rosto fake da Durga.**

**Aspect ratio:** `16:9`. **Fundo:** pode ser quente/templo, mas com espaço central pro botão de play.

**Prompt (EN):**
```
A 16:9 video cover, warm temple/alchemy atmosphere with golden light rays, a single golden flame emblem glowing at the center-left, soft bokeh of candlelight and brass vessels. Empty central space for a play button. Cinematic, sacred, elegant. Gold #B08030 and warm ivory tones. No human face, no portrait, no readable text.
```
**Negative:** padrão + `human face, portrait, woman, person, readable title text`.

---

## 4. Selo de garantia (opcional — variante pra fundo claro)

**Objetivo:** já temos `selo_garantia_incondicional.png` dourado (funciona no claro). Se quiser uma variante mais limpa pro fundo near-white:

**Aspect ratio:** `1:1`. **Fundo:** transparente (PNG).

**Prompt (EN):**
```
A circular guarantee seal badge, gold foil (#B08030) on transparent background, elegant Cinzel-style engraved lettering "GARANTIA 7 DIAS" around the rim, a small alchemical flame in the center, fine laurel/ornamental border. Premium, trustworthy, minimal. Crisp vector-like rendering, transparent PNG.
```
**Negative:** padrão + `dark background, photographic texture, ribbon clutter`.

---

## Resumo — o que gerar agora
- ✅ **Mockup do workshop** (item 1) → seção "O que tem dentro da Mecânica do Amor" (hoje placeholder).
- ✅ **Pôster VSL** (item 3, opcional) → topo da página, sobre o player.
- ✅ **Selo** (item 4, opcional) → seção de Oferta/Garantia.
- ⛔ **Oráculo** → NÃO gerar, é **foto real** (item 2).
- ⛔ **Imagem da oferta (bundle workshop + Oráculo)** → **o cliente faz por fora**, não entra aqui. A página já tem placeholder "IMAGEM DA OFERTA (inserir)".

> Nada de order bump/upsell na arte — o upsell do Desapego é só no checkout.
> Depois de gerar, salvar em `imagens_geradas/` e copiar pra `lp-mecanica-do-amor/public/img/` (mesmos nomes dos arquivos atuais pra trocar sem mexer no código, ou avisar os novos nomes).
