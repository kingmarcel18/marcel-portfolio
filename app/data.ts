export const colors = {
  bg: "#0a0a0a",
  bgAlt: "#0d0d0d",
  card: "#111",
  border: "#1a1a2e",
  accent: "#00b4ff",
  accentDark: "#0066ff",
  navy: "#0d1b3e",
  text: "#ffffff",
}

export const skills = {
  "Coding Languages": ["JavaScript", "TypeScript", "Python", "C++", "CSS", "SCSS"],
  "Frameworks": ["Next.js", "React.js", "Vite", "Node.js"],
  "Libraries": ["Tailwind CSS", "Material UI", "Redux", "Tanstack Query", "Next Auth"],
  "Databases": ["MongoDB", "PostgreSQL", "MySQL", "Supabase", "Firebase", "Prisma ORM"],
  "Tools": ["Git", "GitHub", "REST API", "Postman", "Figma", "AutoCAD"],
}

export const sectionMap: Record<string, string> = {
  "Home": "hero", "About": "about", "Skills": "skills",
  "Projects": "projects", "Experience": "experience", "Contact": "contact",
  "主页": "hero", "关于": "about", "技能": "skills",
  "项目": "projects", "经历": "experience", "联系": "contact",
}

export type Lang = "en" | "zh"

export const content = {
  en: {
    nav: ["Home", "About", "Skills", "Projects", "Experience", "Contact"],
    welcome: "Welcome to my portfolio",
    hello: "Hello, I'm",
    role: "Full-stack Developer",
    desc: "Passionate full-stack developer based in Jakarta, Indonesia. Experienced in building scalable web applications with modern technologies.",
    projectsBtn: "View Projects",
    contactBtn: "Contact Me",
    aboutTitle: "About Me",
    aboutSubtitle: "Who I Am",
    aboutText: "Passionate full-stack developer based in Jakarta, Indonesia. I enjoy turning ideas into scalable, well-crafted web applications using modern technologies. With a background in engineering and a multilingual upbringing, I bring both technical depth and clear communication to every project.",
    infoCards: [
      { label: "Location", value: "Jakarta, Indonesia" },
      { label: "Nationality", value: "Indonesian" },
      { label: "Languages", value: "ID / EN / ZH" },
      { label: "Status", value: "Open to Work" },
    ],
    langLabel: "Languages",
    skillsTitle: "Tech Stack & Skills",
    skillsSubtitle: "What I Know",
    projectsTitle: "Projects",
    projectsSubtitle: "What I've Built",
    expTitle: "Experience",
    expSubtitle: "My Journey",
    contactTitle: "Contact Me",
    contactSubtitle: "Get In Touch",
    footer: "2026 Marcellino Kurniawan Saputra - Built with Next.js and MUI",
    languages: [
      { lang: "Indonesian", level: "Native", score: 100 },
      { lang: "English", level: "Fluent", score: 85 },
      { lang: "Chinese", level: "Fluent", score: 80 },
    ],
    projects: [
      { title: "Project One", desc: "A short description of this project and the technologies used. Replace with your own.", tags: ["Next.js", "TypeScript"], link: "#" },
      { title: "Project Two", desc: "A short description of this project and the technologies used. Replace with your own.", tags: ["React", "Material UI"], link: "#" },
      { title: "Project Three", desc: "A short description of this project and the technologies used. Replace with your own.", tags: ["Node.js", "MongoDB"], link: "#" },
    ],
    timeline: [
      { title: "Full-stack Developer", org: "Personal & Freelance Projects", location: "Jakarta, Indonesia", period: "2024 — Present", desc: "Building scalable web applications with Next.js, React, and TypeScript." },
      { title: "Civil Engineering", org: "Tarumanagara University (UNTAR)", location: "Jakarta, Indonesia", period: "", desc: "Undergraduate studies." },
      { title: "International Foundation Programme (IFP)", org: "Xi'an Jiaotong University - CCN IFP Centre", location: "Xi'an, China", period: "", desc: "Engineering Stream, Route A — Chinese for Academic Purposes, Mathematics, Physics." },
    ],
    contact: [
      { label: "Email", value: "marcellinoks18@gmail.com" },
      { label: "Location", value: "Jakarta, Indonesia" },
      { label: "GitHub", value: "github.com/kingmarcel18" },
    ]
  },
  zh: {
    nav: ["主页", "关于", "技能", "项目", "经历", "联系"],
    welcome: "欢迎来到我的作品集",
    hello: "你好，我是",
    role: "全栈开发工程师",
    desc: "热爱技术的全栈开发工程师，现居印度尼西亚雅加达。擅长使用现代技术构建可扩展的网络应用程序。",
    projectsBtn: "查看项目",
    contactBtn: "联系我",
    aboutTitle: "关于我",
    aboutSubtitle: "我是谁",
    aboutText: "热爱技术的全栈开发工程师，现居印度尼西亚雅加达。我喜欢使用现代技术将创意转化为可扩展、精心打造的网络应用。凭借工程背景和多语言的成长环境，我在每个项目中都能兼顾技术深度与清晰沟通。",
    infoCards: [
      { label: "所在地", value: "雅加达，印度尼西亚" },
      { label: "国籍", value: "印度尼西亚" },
      { label: "语言", value: "印尼语 / 英语 / 中文" },
      { label: "求职状态", value: "求职中" },
    ],
    langLabel: "语言能力",
    skillsTitle: "技术栈与技能",
    skillsSubtitle: "我掌握的技术",
    projectsTitle: "项目",
    projectsSubtitle: "我的作品",
    expTitle: "经历",
    expSubtitle: "我的历程",
    contactTitle: "联系我",
    contactSubtitle: "与我取得联系",
    footer: "2026 吴阳亮 - 使用 Next.js 和 MUI 构建",
    languages: [
      { lang: "印度尼西亚语", level: "母语", score: 100 },
      { lang: "英语", level: "流利", score: 85 },
      { lang: "中文", level: "流利", score: 80 },
    ],
    projects: [
      { title: "项目一", desc: "该项目的简短描述以及所用技术。请替换为你自己的内容。", tags: ["Next.js", "TypeScript"], link: "#" },
      { title: "项目二", desc: "该项目的简短描述以及所用技术。请替换为你自己的内容。", tags: ["React", "Material UI"], link: "#" },
      { title: "项目三", desc: "该项目的简短描述以及所用技术。请替换为你自己的内容。", tags: ["Node.js", "MongoDB"], link: "#" },
    ],
    timeline: [
      { title: "全栈开发工程师", org: "个人与自由职业项目", location: "雅加达，印度尼西亚", period: "2024 — 至今", desc: "使用 Next.js、React 和 TypeScript 构建可扩展的网络应用。" },
      { title: "土木工程", org: "塔鲁玛纳卡拉大学 (UNTAR)", location: "雅加达，印度尼西亚", period: "", desc: "本科学习。" },
      { title: "国际预科课程 (IFP)", org: "西安交通大学 - CCN国际预科中心", location: "中国西安", period: "", desc: "工科方向 A — 学术汉语、数学、物理。" },
    ],
    contact: [
      { label: "电子邮件", value: "marcellinoks18@gmail.com" },
      { label: "所在地", value: "雅加达，印度尼西亚" },
      { label: "GitHub", value: "github.com/kingmarcel18" },
    ]
  }
}

export type Content = typeof content["en"]
