# Gabriel.Edit — Portfólio de Editor de Vídeos

Site estático (HTML, CSS e JavaScript Vanilla) para apresentar trabalhos de edição de vídeo. Pronto para publicar na Vercel.

## Estrutura

```text
.
├── index.html
├── css/
│   ├── style.css
│   ├── components.css
│   └── responsive.css
├── js/
│   ├── main.js
│   ├── projects.js      ← cadastro de projetos e contato
│   └── video-player.js
├── assets/images/
├── favicon.svg
├── robots.txt
├── sitemap.xml
└── vercel.json
```

## Como rodar localmente

Qualquer servidor estático serve. Exemplos:

```bash
npx serve .
# ou
python3 -m http.server 5500
```

Abra `http://localhost:5500` no navegador.

## Como adicionar um novo vídeo

1. Salve a thumbnail em `assets/images/` (preferência: WebP).
2. Abra `js/projects.js`.
3. Adicione um objeto no array `projects`:

```javascript
{
  id: 4,
  title: "Título do projeto",
  category: "Reels e Shorts", // deve existir em `categories`
  description: "Descrição curta.",
  thumbnail: "assets/images/meu-video.webp",
  videoType: "youtube",
  videoId: "ID_DO_YOUTUBE", // parte após v= ou youtu.be/
  orientation: "vertical", // ou "horizontal"
  tools: ["CapCut", "Legendas"],
  featured: true,
  placeholder: false
}
```

4. Se o vídeo ainda não estiver no YouTube, use `videoId: null` e `placeholder: true`.

O grid e os filtros são gerados automaticamente a partir desse arquivo. Não é necessário editar o HTML.

### Categorias disponíveis

- Reels e Shorts
- Vídeos Motivacionais
- Publicidade e Produtos
- Cortes de Podcasts
- Conteúdo para YouTube
- Outros Projetos

Para criar uma categoria nova, inclua o nome em `categories` e use o mesmo texto em `category`.

## Configurar contato e domínio

Em `js/projects.js`, objeto `siteConfig.contact`:

| Campo       | Exemplo                                      |
|-------------|----------------------------------------------|
| `whatsapp`  | `https://wa.me/5511999999999`                |
| `email`     | `mailto:seuemail@exemplo.com`                |
| `freelas99` | já preenchido                                |
| `workana`   | URL do perfil quando disponível              |

Após publicar, substitua `https://SEU-DOMINIO.com/` em:

- `index.html` (canonical, Open Graph, Twitter, JSON-LD)
- `robots.txt`
- `sitemap.xml`
- `siteConfig.canonicalUrl` em `js/projects.js`

## Publicar na Vercel

1. Importe o repositório na Vercel.
2. Framework Preset: **Other** (site estático).
3. Build Command: deixe vazio.
4. Output Directory: `.` (raiz).

O arquivo `vercel.json` já inclui headers básicos de cache e segurança.

## Placeholders iniciais

Os três projetos de exemplo estão marcados como **Placeholder** até você enviar os links do YouTube:

1. Apenas Comece
2. Motivacional-corte
3. Comercial Zynov Lab

## Foto de perfil

A foto usada na seção Sobre está em `assets/images/perfil.webp` (gerada a partir de `perfil.png`).
