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
  canonicalUrl: "https://gabrieleditorvideo.vercel.app/",
  contact: {
    whatsapp: "https://wa.me/5561995815904",
    email: "mailto:gabriel8webprogrammer@gmail.com",
    freelas99: "https://www.99freelas.com.br/user/Gabriel-programmer",
    /** Preencha quando tiver o perfil */
    workana: "",
  },
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
  "Outros Projetos",
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
 * @property {string} [client]
 * @property {boolean} [featured]
 * @property {boolean} [placeholder]
 */

/** @type {Project[]} */
const projects = [
  {
    id: 1,
    title: "Apenas Comece",
    category: "Vídeos Motivacionais",
    description: "Reels motivacional com ritmo dinâmico, legendas e trilha.",
    thumbnail: "assets/images/apenas-comece.webp",
    videoType: "youtube",
    videoId: "IJM13g-7gwo",
    orientation: "vertical",
    tools: ["CapCut", "Legendas"],
    featured: true,
  },
  {
    id: 2,
    title: "Como Vender um Infoproduto",
    category: "Reels e Shorts",
    description: "Reels sobre venda de infoproduto, com legendas animadas e cortes precisos.",
    thumbnail: "assets/images/motivacional-corte.webp",
    videoType: "youtube",
    videoId: "y9C8157rPwA",
    orientation: "vertical",
    tools: ["CapCut", "Legendas animadas"],
    featured: true,
  },
  {
    id: 3,
    title: "Comercial Zynov Lab",
    category: "Publicidade e Produtos",
    description: "Publicidade de produto com recursos de IA.",
    thumbnail: "assets/images/comercial-zynov-lab.webp",
    videoType: "youtube",
    videoId: "IoAEBwfWg74",
    orientation: "horizontal",
    tools: ["CapCut", "Inteligência Artificial"],
    featured: true,
  },
  {
    id: 5,
    title: "Continue",
    category: "Vídeos Motivacionais",
    description: "Short motivacional com legendas em destaque e cortes dinâmicos.",
    thumbnail: "assets/images/continue.webp",
    videoType: "youtube",
    videoId: "HJWMi4XrWH8",
    orientation: "vertical",
    tools: ["CapCut", "Legendas"],
    featured: true,
  },
  {
    id: 6,
    title: "3 dicas para freelancers",
    category: "Reels e Shorts",
    description: "Short com dicas práticas para quem trabalha como freelancer.",
    thumbnail: "assets/images/3-dicas-para-freelancers.webp",
    videoType: "youtube",
    videoId: "tsDVTz60cQU",
    orientation: "vertical",
    tools: ["CapCut"],
    featured: true,
  },
  {
    id: 7,
    title: "Auro RP",
    client: "Auro RP",
    category: "Reels e Shorts",
    description: "Divulgação do servidor de roleplay, com destaque de item e chamada para compra.",
    thumbnail: "assets/images/auro-rp.webp",
    videoType: "youtube",
    videoId: "PxbMJmC1YgM",
    orientation: "vertical",
    tools: ["CapCut", "Legendas"],
    featured: true,
  },
  {
    id: 8,
    title: "Banda Racional",
    client: "Banda Racional",
    category: "Publicidade e Produtos",
    description: "Trailer cinematográfico da banda, com tomada aérea e legendas.",
    thumbnail: "assets/images/banda-racional.webp",
    videoType: "youtube",
    videoId: "IU0A0rzc7Qw",
    orientation: "vertical",
    tools: ["CapCut", "Legendas"],
    featured: true,
  },
  {
    id: 9,
    title: "Cabedal corrente strass",
    client: "Analu",
    category: "Publicidade e Produtos",
    description: "Vídeo de produto com close da peça, corrente e strass.",
    thumbnail: "assets/images/analu-cabedal.webp",
    videoType: "youtube",
    videoId: "1QCLCcIjm1c",
    orientation: "vertical",
    tools: ["CapCut"],
    featured: true,
  },
  {
    id: 10,
    title: "Fio de malha",
    client: "Analu",
    category: "Publicidade e Produtos",
    description: "Vídeo de produto do fio de malha, com as cores em legenda.",
    thumbnail: "assets/images/analu-fio-de-malha.webp",
    videoType: "youtube",
    videoId: "kdljoERSFlM",
    orientation: "vertical",
    tools: ["CapCut", "Legendas"],
    featured: true,
  },
  {
    id: 11,
    title: "Encontrar as respostas",
    client: "Mães pelo Reino",
    category: "Vídeos Motivacionais",
    description: "Mensagem sobre não precisar encontrar todas as respostas.",
    thumbnail: "assets/images/maes-respostas.webp",
    videoType: "youtube",
    videoId: "o4uGyQuMuNI",
    orientation: "vertical",
    tools: ["CapCut", "Legendas"],
    featured: true,
  },
  {
    id: 12,
    title: "Um apoio para transformar",
    client: "Mães pelo Reino",
    category: "Vídeos Motivacionais",
    description: "Mensagem sobre apoio e transformação.",
    thumbnail: "assets/images/maes-apoio.webp",
    videoType: "youtube",
    videoId: "QI6_1NuF7To",
    orientation: "vertical",
    tools: ["CapCut", "Legendas"],
    featured: true,
  },
  {
    id: 13,
    title: "Séreum Azul",
    client: "Séreum Azul",
    category: "Publicidade e Produtos",
    description: "Peça de produto com a aplicação do sérum em close.",
    thumbnail: "assets/images/sereum-azul.webp",
    videoType: "youtube",
    videoId: "jkdKOfrKsOY",
    orientation: "vertical",
    tools: ["CapCut"],
    featured: true,
  },
  {
    id: 14,
    title: "Vídeo IA para Instagram",
    category: "Publicidade e Produtos",
    description: "Vídeo feito com IA para Instagram, com marcação de 20.500 seguidores.",
    thumbnail: "assets/images/video-ia-instagram.webp",
    videoType: "youtube",
    videoId: "b9dGmY3VbkI",
    orientation: "vertical",
    tools: ["CapCut", "Inteligência Artificial"],
    featured: true,
  },
];
