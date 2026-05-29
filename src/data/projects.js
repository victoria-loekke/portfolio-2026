export const projects = [
  {
    slug: "aaben",
    date: "February 2026",
    duration: "3 weeks",
    client: "ÅBEN brewery",
    title: "ÅBEN label maker",
    case: "Coded label generator",

    programs: [
      "p5.js",
      "Three.js",
      "HTML, CSS & JavaScript",
      "Adobe Photoshop",
    ],

    link: "https://aaben-label-maker.netlify.app/",

    description:
      "A coded label generator for Danish craft brewery ÅBEN, letting users design unique beer labels through sliders and options, previewed live on a 3D can. The project combines generative graphics, interactive UI systems and motion-based presentation to create hundreds of unique label variations while maintaining a coherent visual identity.",

    image: "/images/aaben/square.jpg",

    content: [
      {
        type: "video",
        src: "/videos/aaben/v1.mp4",
      },

      {
        type: "text",
        text: "The project was built as a coded label generator for ÅBEN brewery, allowing users to create unique beer labels through live interaction. The system combines generative graphics, motion and customisable layouts while maintaining the recognisable ÅBEN aesthetic.",
      },

      {
        type: "image",
        src: "/images/aaben/1.jpg",
      },

      {
        type: "image",
        src: "/images/aaben/2.jpg",
      },

      {
        type: "text",
        text: "The visual system was designed to support a large amount of variation. Users can manipulate colours, shapes, textures and compositions while previewing the output directly on a 3D can model built with Three.js.",
      },

      {
        type: "video",
        src: "/videos/aaben/v2.mp4",
      },

      {
        type: "image",
        src: "/images/aaben/3.jpg",
      },

      {
        type: "image",
        src: "/images/aaben/4.jpg",
      },
    ],

    gallery: [
      "/images/aaben/1.jpg",
      "/images/aaben/2.jpg",
      "/images/aaben/3.jpg",
      "/images/aaben/4.jpg",
      "/images/aaben/5.jpg",
      "/images/aaben/6.jpg",
      "/images/aaben/7.jpg",
      "/images/aaben/8.jpg",
      "/images/aaben/9.jpg",
    ],

    process: [
      {
        image: "/images/aaben/p1.jpg",
        text: "Initial visual research references around texture, nightlife, movement and distorted reflections to shape the visual atmosphere.",
      },

      {
        image: "/images/aaben/p2.jpg",
        text: "Researching ÅBEN’s existing labels and visual language to understand recurring patterns and consistency.",
      },

      {
        image: "/images/aaben/p3.jpg",
        text: "Exploring variation systems and how different outputs could still feel visually connected.",
      },

      {
        image: "/images/aaben/p4.jpg",
        text: "Developing colour systems and interaction logic for the final generator.",
      },
    ],
  },

  {
    slug: "snowqueen",

    date: "March 2026",
    duration: "1 week",

    client: "DMJX - School project",

    case: "Interactive storytelling installation",
     title: "Interactive Story",

    programs: [
      "TouchDesigner",
      "MadMapper",
      "Adobe Photoshop",
    ],
    link:null,

    description:
      "An interactive installation inspired by H.C. Andersen’s The Snow Queen, translating the emotional atmosphere of the fairytale into projection mapping, motion-triggered visuals and immersive spatial design.",

    image: "/images/snowqueen/sq_front_square.jpg",

    content: [
      {
        type: "video",
        src: "/videos/snowqueen/v1.mp4",
      },

      {
        type: "text",
        text: "The installation reinterprets The Snow Queen through emotions rather than narrative. Instead of retelling the fairytale directly, the project transforms coldness, isolation and emotional paralysis into an immersive sensory space.",
      },

      {
        type: "image",
        src: "/images/snowqueen/1.jpg",
      },

      {
        type: "video",
        src: "/videos/snowqueen/v2.mp4",
      },

      {
        type: "image",
        src: "/images/snowqueen/2.jpg",
      },

      {
        type: "text",
        text: "Projection mapping and motion-triggered interaction were used to surround the visitor with fragmented visuals inspired by frozen mirrors, dream states and emotional chaos.",
      },

      {
        type: "video",
        src: "/videos/snowqueen/v3.mp4",
      },

      {
        type: "image",
        src: "/images/snowqueen/3.jpg",
      },
    ],

    gallery: [
      "/images/snowqueen/1.jpg",
      "/images/snowqueen/2.jpg",
      "/images/snowqueen/3.jpg",
      "/images/snowqueen/4.jpg",
      "/images/snowqueen/5.jpg",
      "/images/snowqueen/6.jpg",
    ],

    process: [
      {
        image: "/images/snowqueen/p1.jpg",
        text: "Breaking down The Snow Queen into emotions, symbols and sensory elements.",
      },

      {
        image: "/images/snowqueen/p2.jpg",
        text: "Collecting references around ice, translucency and dreamlike environments.",
      },

      {
        image: "/images/snowqueen/p3.jpg",
        text: "Testing reflective materials and projection surfaces for the installation.",
      },

      {
        image: "/images/snowqueen/p4.jpg",
        text: "Building the physical installation and projection mapped mirror.",
      },
    ],
  },

  {
  slug: "acleanspirit",

  date: "March 2023",
  duration: "1 month",

  client: "A Clean Spirit",

  case: "Label design",

  programs: [
    "Adobe Illustrator",
  ],

  link: null,

  description:
    "A label design for A Clean Spirit's Ron Sostenible Triple Cask — a sustainable Danish rum brand transporting premium rum across the Atlantic by sail rather than freight shipping. The project focused on combining premium spirits aesthetics with sustainability and detailed storytelling.",

  image: "/images/acs/acs_front_square.jpg",

  content: [
    {
      type: "image",
      src: "/images/acs/9.jpg",
    },

    {
      type: "text",
      text: "The label was created for Ron Sostenible Triple Cask, an 8-year-old rum aged across Bourbon, Pedro Ximénez and Oloroso casks. The design needed to communicate both craftsmanship and sustainability while fitting naturally into the premium spirits market.",
    },

    {
      type: "image",
      src: "/images/acs/10.jpg",
    },

    {
      type: "text",
      text: "The visual identity balances classic rum packaging with modern typography and carefully structured information hierarchy. Special attention was given to texture, typography and production details to make the label feel tactile and refined.",
    },

    {
      type: "image",
      src: "/images/acs/11.jpg",
    },
  ],

  gallery: [
    "/images/acs/9.jpg",
    "/images/acs/10.jpg",
    "/images/acs/11.jpg",
  ],
},
  {
    slug: "hellokitty",

    date: "October 2025",
    duration: "2 weeks",

    client: "Hello Kitty (School Project)",

    case: "Trained mascot AI geneator",
        title: "Hello Kitty Magazine",

    programs: [
      "HTML, CSS & JavaScript",
      "Flux LoRA",
      "Nano Banana",
    ],

    link: "https://hellokittymagazine.netlify.app/",

    description:
      "A fictional editorial universe reimagining Hello Kitty as a high-fashion icon through AI image generation, coded storytelling and digital magazine design.",

    image: "/images/hk/hk.jpg",

    content: [
      {
        type: "video",
        src: "/videos/hk/v1.mp4",
      },

      {
        type: "text",
        text: "The project explored how AI-generated imagery could be used as a creative world-building tool. By training a custom Hello Kitty LoRA model, the mascot was transformed into a surreal editorial fashion character.",
      },

      {
        type: "image",
        src: "/images/hk/1.jpg",
      },

      {
        type: "image",
        src: "/images/hk/2.jpg",
      },

      {
        type: "text",
        text: "The generated images were integrated into a fully coded fictional magazine featuring editorials, articles, fashion spreads and interactive sections.",
      },

      {
        type: "image",
        src: "/images/hk/3.jpg",
      },

      {
        type: "image",
        src: "/images/hk/4.jpg",
      },
    ],

    gallery: [
      "/images/hk/1.jpg",
      "/images/hk/2.jpg",
      "/images/hk/3.jpg",
      "/images/hk/4.jpg",
      "/images/hk/5.jpg",
      "/images/hk/6.jpg",
    ],
  },
{
  slug: "rss",

  date: "January 2025",
  duration: "3 weeks",

  client: "Ready Set Spaghetti (Fictional)",

  case: "Visual identity",

  programs: [
    "HTML, CSS & JavaScript",
    "Adobe Illustrator",
  ],

  link: null,

  description:
    "A visual identity for Ready Set Spaghetti, a fictional fast food restaurant inspired by retro Italian-American diners, mascot culture and nostalgic fast food branding.",

  image: "/images/rss/square2.jpeg",

  content: [
    {
      type: "image",
      src: "/images/rss/1.jpg",
    },

    {
      type: "text",
      text: "Ready Set Spaghetti was developed as a fictional fast food universe inspired by retro American diners and Italian-American visual culture.",
    },

    {
      type: "image",
      src: "/images/rss/2.jpg",
    },

    {
      type: "image",
      src: "/images/rss/3.jpg",
    },

    {
      type: "text",
      text: "The project explored typography, mascot design and nostalgic branding systems across packaging, menus and kiosk interfaces.",
    },

    {
      type: "image",
      src: "/images/rss/4.jpg",
    },
  ],

  gallery: [
    "/images/rss/1.jpg",
    "/images/rss/2.jpg",
    "/images/rss/3.jpg",
    "/images/rss/4.jpg",
    "/images/rss/5.jpg",
    "/images/rss/6.jpg",
  ],

  process: [
    {
      image: "/images/rss/p1.jpg",
      text: "Researching existing fast food branding and mascot systems.",
    },

    {
      image: "/images/rss/p2.jpg",
      text: "Collecting references from retro diners and Italian-American food culture.",
    },

    {
      image: "/images/rss/p3.jpg",
      text: "Developing typography and graphic systems for the identity.",
    },
  ],
},
{
  slug: "hotelfrihavnen",

  date: "February 2025",
  duration: "6 months",

  client: "Hotel Frihavnen",

  case: "Visual identity & website development",

  title: "Hotel Frihavnen",

  programs: [
    "WordPress - Elementor",
    "HTML, CSS & JavaScript",
    "Adobe Illustrator",
    "Figma",
  ],

  link: "https://www.hotelfrihavnen.dk/",

  description:
    "A full visual identity and website for Hotel Frihavnen, a boutique hotel located in Copenhagen’s Nordhavn district. The project was built around the industrial harbour history of the area, combining historical references with a calm and contemporary digital experience.",

  image: "/images/hf/hf.jpg",

  content: [
    {
      type: "video",
      src: "/videos/hf/v1.mp4",
    },

    {
      type: "text",
      text: "Hotel Frihavnen is located in Nordhavn, Copenhagen — an area historically connected to the old free port known as 'Frihavnen'. The visual identity was developed directly from this local history and the physical atmosphere of the hotel itself.",
    },

    {
      type: "image",
      src: "/images/hf/1.jpg",
    },

    {
      type: "image",
      src: "/images/hf/2.jpg",
    },

    {
      type: "text",
      text: "The logo was redrawn from historical harbour signage found in the area, creating a direct visual connection between the hotel and Nordhavn’s industrial past. The colour palette was based on materials and tones found throughout the hotel interior.",
    },

    {
      type: "image",
      src: "/images/hf/3.jpg",
    },

    {
      type: "image",
      src: "/images/hf/4.jpg",
    },

    {
      type: "text",
      text: "Alongside the identity system, I independently designed and developed the hotel’s website in WordPress, including bilingual support, booking integration and responsive layouts for both Danish and international visitors.",
    },

    {
      type: "image",
      src: "/images/hf/5.jpg",
    },
  ],

  gallery: [
    "/images/hf/1.jpg",
    "/images/hf/2.jpg",
    "/images/hf/3.jpg",
    "/images/hf/4.jpg",
    "/images/hf/5.jpg",
    "/images/hf/6.jpg",
  ],
},
  {
    slug: "torsk",

    date: "June 2025",
    duration: "3 weeks",

    client: "Videnskab.dk",

    case: "Interactive educational game",

    programs: [
      "HTML, CSS & JavaScript",
      "Adobe Illustrator",
    ],

    link: "https://torskenseventyr.netlify.app/",

    description:
      "An interactive educational website guiding children through the life of the Atlantic cod and the environmental threats facing Danish waters through games, storytelling and playful interaction.",

    image: "/images/torsk/square.png",

    content: [
      {
        type: "video",
        src: "/videos/torsk/1.mp4",
      },

      {
        type: "text",
        text: "The project was developed as an interactive learning universe inspired by Videnskab.dk’s communication style. Instead of static information, children explore the site through movement, hidden interactions and mini games.",
      },

      {
        type: "image",
        src: "/images/torsk/1.jpg",
      },

      {
        type: "image",
        src: "/images/torsk/2.jpg",
      },

      {
        type: "text",
        text: "Users follow the story of Torkel, a newly hatched cod navigating the ocean while learning about ecosystems, fishing methods and climate-related challenges.",
      },

      {
        type: "image",
        src: "/images/torsk/3.jpg",
      },
    ],

    gallery: [
      "/images/torsk/1.jpg",
      "/images/torsk/2.jpg",
      "/images/torsk/3.jpg",
    ],
  },
  {
  slug: "shecanplay",

  date: "November 2025",
  duration: "3 weeks",

  client: "SheCanPlay",

  case: "Visual identity & interactive web experience",
  title:"SheCanPlay",

  programs: [
    "HTML, CSS & JavaScript",
    "Figma",
  ],

  link: "https://shecanplay-dots.netlify.app/",

  description:
    "A visual identity and interactive web experience for SheCanPlay — a Danish music community supporting young women and gender minorities pursuing professional careers in music. The project combines playful digital branding, coded tools and community-focused storytelling.",

  image: "/images/scp/square.jpg",

  content: [
    {
      type: "video",
      src: "/videos/scp/1.mp4",
    },

    {
      type: "text",
      text: "The concept behind the project was 'Introducing' — the idea that SheCanPlay introduces its members to the music industry, to opportunities and to each other. This idea shaped both the visual identity and the interactive digital tools.",
    },

    {
      type: "image",
      src: "/images/scp/13.jpg",
    },

    {
      type: "image",
      src: "/images/scp/14.jpg",
    },

    {
      type: "text",
      text: "The identity system was built around dots as a core graphic element, inspired by rhythm, sound and community structures. Hand-drawn doodles and bold pink tones were used to create a playful and energetic visual universe.",
    },

    {
      type: "video",
      src: "/videos/scp/2.mp4",
    },

    {
      type: "image",
      src: "/images/scp/15.jpg",
    },

    {
      type: "text",
      text: "As part of the coded experience, we developed a dot generator allowing users to upload images or videos and transform them into animated dotted visuals with customisable controls for size, density and colour.",
    },

    {
      type: "video",
      src: "/videos/scp/3.mp4",
    },

    {
      type: "image",
      src: "/images/scp/16.jpg",
    },

    {
      type: "text",
      text: "I also developed a live music visualiser reacting to audio input in real time. Bass frequencies controlled movement and scale, while midrange and treble affected the visual density and colour system.",
    },

    {
      type: "image",
      src: "/images/scp/1.jpg",
    },

    {
      type: "image",
      src: "/images/scp/2.jpg",
    },
  ],

  gallery: [
    "/images/scp/13.jpg",
    "/images/scp/14.jpg",
    "/images/scp/15.jpg",
    "/images/scp/16.jpg",
    "/images/scp/1.jpg",
    "/images/scp/2.jpg",
  ],

  process: [
    {
      image: "/images/scp/p1.jpg",
      text: "Mapping SheCanPlay’s visual touchpoints across events, social media and community platforms.",
    },

    {
      image: "/images/scp/p2.jpg",
      text: "Researching music communities and organisations to identify visual positioning and tone.",
    },

    {
      image: "/images/scp/p3.jpg",
      text: "Developing concepts around movement, rhythm, community and accessibility.",
    },

    {
      image: "/images/scp/p4.jpg",
      text: "Collecting references from music culture, experimental typography and digital aesthetics.",
    },

    {
      image: "/images/scp/p5.jpg",
      text: "Exploring hand-drawn graphic elements and playful visual systems.",
    },

    {
      image: "/images/scp/p6.jpg",
      text: "Testing colour systems, layouts and responsive web interactions.",
    },

    {
      image: "/images/scp/p7.jpg",
      text: "Designing wireframes and interactive experiences for the final platform.",
    },

    {
      image: "/images/scp/p8.jpg",
      text: "Applying the identity across social content, motion and coded tools.",
    },
  ],
},
  
];