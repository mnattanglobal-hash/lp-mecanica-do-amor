# LP — A Mecânica do Amor (R$197)

Landing page de produção da Escola de Alquimia Ascensional. Stack: **Vite + React + TypeScript + Tailwind CSS**. Componentizada, mobile-first, pronta pra deploy e importável no Lovable.

## Rodar local

```bash
npm install
npm run dev      # abre em http://localhost:5173
```

```bash
npm run build    # gera dist/ (type-check + bundle de produção)
npm run preview  # serve o build
```

## Estrutura

- `src/config.ts` — placeholders centralizados (`CHECKOUT_URL`, `PRICE`, `ORDER_BUMP`). **Todos os botões leem daqui.**
- `src/App.tsx` — monta as 10 seções na ordem.
- `src/components/sections/` — uma seção por arquivo (Hero, Dor, Tese, OQueRecebe, Prova, Depoimentos, Oferta, ParaQuem, Faq, CtaFinal).
- `src/components/ui/` — primitivos (Cta, FlameDivider, Section, Quote, Eyebrow, DurgaPhoto, AvatarPlaceholder).
- `tailwind.config.ts` — tema com os tokens da marca (dourado alquímico sobre escuro).
- `public/img/` — imagens reais (tela do workshop, oráculo, selo de garantia).

## Conteúdo

Texto **verbatim** da copy aprovada (`../landing_mecanica_do_amor.md`). Camada A only, voz da Durga preservada. Não suavizar, não inventar, não nomear o Anki ("o homem da minha vida hoje"). Produto = "workshop completo", nunca "8 aulas/módulos". Preço **R$197 único**.

## Tema (claro + escuro na mesma página)

Tema dirigido por **tokens semânticos em CSS vars** (`src/index.css`): `:root` = modo claro (base, near-white `#FBFCF9` igual ao site da escola); `.tone-dark` = override escuro. Pra deixar uma seção escura, é só `<Section tone="dark">`. Hoje **Prova** (história da Durga) e **CTA final** são escuras; o resto é claro. Faixas alternadas via `<Section band>`.

## Logos

Em `public/img/`: `Alquimia-Logo-Horizontal-Gold.png` (hero, fundo claro) e `Alquimia-Logo-Horizontal-OffWhite.png` (CTA final, fundo escuro). Todas as variantes em `identidade/logos/`.

## VSL

`src/components/ui/VslPlayer.tsx` no topo do Hero (16:9, no lugar da primeira imagem). Sem vídeo, mostra placeholder marcado. Preencher `VIDEO_URL` em `src/config.ts` (embed YouTube/Vimeo ou `.mp4`) que ele vira player. **Componente reutilizável** — a LP do Desapego usa o mesmo.

## Pendências de integração (não bloqueiam o build)

- [ ] **`VIDEO_URL` real** da VSL em `src/config.ts`.
- [ ] **Imagens v2** — regerar pelo `BRIEF_IMAGENS_v2.md`: mockup do workshop (vídeo único, **sem 8 módulos/comunidade** — hoje é placeholder), Oráculo pra fundo claro, pôster da VSL. Salvar em `public/img/`.
- [ ] **Fotos reais da Durga** — placeholders `DurgaPhoto` (Hero saiu p/ VSL; seguem em Prova e CtaFinal). Não usar imagem de IA pra ela.
- [ ] **Fotos das 5 depoentes** — `AvatarPlaceholder` (Sarah, Anna Rachel, Samanta, Bárbara, Maura).
- [ ] **`CHECKOUT_URL` real** (Mecânica R$197) + **order bump +R$37 Desapego** no checkout.
- [ ] Repo GitHub → import no Lovable.
