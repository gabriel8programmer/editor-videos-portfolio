/**
 * Configuração do site + cadastro de projetos.
 *
 * Para adicionar um novo vídeo:
 * 1. Salve a thumbnail em assets/images/ (preferencialmente .webp)
 * 2. Copie o objeto abaixo e preencha os campos
 * 3. Use o ID do YouTube (a parte depois de v= ou youtu.be/)
 * 4. Defina orientation: "vertical" | "horizontal"
 * 5. Se o vídeo ainda não existir, use placeholder: true e videoId: null
 */

const siteConfig = {
  name: "Gabriel",
  brand: "Gabriel.Edit",
  /** Substitua pelo domínio real após publicar (também em index.html, robots.txt e sitemap.xml) */
  canonicalUrl: "https://SEU-DOMINIO.com/",
  contact: {
    /** Ex.: https://wa.me/5511999999999 */
    whatsapp: "",
    /** Ex.: mailto:seuemail@exemplo.com */
    email: "",
    freelas99: "https://www.99freelas.com.br/user/Gabriel-programmer",
    /** Preencha quando tiver o perfil */
    workana: ""
  }
};

/**
 * Categorias disponíveis para filtros.
 * Use exatamente os mesmos nomes no campo `category` dos projetos.
 */
const categories = [
  "Todos",
  "Reels e Shorts",
  "Vídeos Motivacionais",
  "Publicidade e Produtos",
  "Cortes de Podcasts",
  "Conteúdo para YouTube",
  "Outros Projetos"
];

/**
 * @typedef {Object} Project
 * @property {number|string} id
 * @property {string} title
 * @property {string} category
 * @property {string} description
 * @property {string} thumbnail
 * @property {"youtube"|"vimeo"|"file"} videoType
 * @property {string|null} videoId
 * @property {"vertical"|"horizontal"} orientation
 * @property {string[]} tools
 * @property {boolean} [featured]
 * @property {boolean} [placeholder]
 */

/** @type {Project[]} */
const projects = [
  {
    id: 1,
    title: "Apenas Comece",
    category: "Vídeos Motivacionais",
    description:
      "Reels motivacional com ritmo dinâmico, legendas e trilha.",
    thumbnail: "assets/images/apenas-comece.webp",
    videoType: "youtube",
    videoId: "IJM13g-7gwo",
    orientation: "vertical",
    tools: ["CapCut", "Legendas"],
    featured: true
  },
  {
    id: 2,
    title: "Motivacional-corte",
    category: "Reels e Shorts",
    description:
      "Edição com legendas animadas e cortes precisos.",
    thumbnail: "assets/images/motivacional-corte.webp",
    videoType: "youtube",
    videoId: "y9C8157rPwA",
    orientation: "vertical",
    tools: ["CapCut", "Legendas animadas"],
    featured: true
  },
  {
    id: 3,
    title: "Comercial Zynov Lab",
    category: "Publicidade e Produtos",
    description:
      "Publicidade de produto com recursos de IA.",
    thumbnail: "assets/images/comercial-zynov-lab.webp",
    videoType: "youtube",
    videoId: "2p4vzvvpxj8",
    orientation: "horizontal",
    tools: ["CapCut", "Inteligência Artificial"],
    featured: true
  }
];
