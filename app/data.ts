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
  "Home": "home", "Skills": "skills", "Languages": "languages",
  "Education": "education", "Contact": "contact",
  "主页": "home", "技能": "skills", "语言": "languages",
  "教育": "education", "联系": "contact",
}

export type Lang = "en" | "zh"

export const content = {
  en: {
    nav: ["Home", "Skills", "Languages", "Education", "Contact"],
    welcome: "Welcome to my portfolio",
    hello: "Hello, I'm",
    role: "Full-stack Developer",
    desc: "Passionate full-stack developer based in Jakarta, Indonesia. Experienced in building scalable web applications with modern technologies.",
    contactBtn: "Contact Me",
    skillsBtn: "My Skills",
    infoCards: [
      { label: "Location", value: "Jakarta, Indonesia" },
      { label: "Nationality", value: "Indonesian" },
      { label: "Languages", value: "ID / EN / ZH" },
      { label: "Status", value: "Open to Work" },
    ],
    skillsTitle: "Tech Stack & Skills",
    skillsSubtitle: "What I Know",
    langTitle: "Languages",
    langSubtitle: "Communication",
    eduTitle: "Education",
    eduSubtitle: "My Background",
    contactTitle: "Contact Me",
    contactSubtitle: "Get In Touch",
    footer: "2026 Marcellino Kurniawan Saputra - Built with Next.js and MUI",
    languages: [
      { lang: "Indonesian", level: "Native", score: 100 },
      { lang: "English", level: "Fluent", score: 85 },
      { lang: "Chinese", level: "Fluent", score: 80 },
    ],
    edu: [
      { school: "Tarumanagara University (UNTAR)", major: "Civil Engineering", location: "Jakarta, Indonesia", chips: [] as string[] },
      { school: "Xi'an Jiaotong University - CCN IFP Centre", major: "International Foundation Programme (IFP) - Engineering Stream, Route A", location: "Xi'an, China", chips: ["Chinese for Academic Purposes", "Mathematics", "Physics"] }
    ],
    contact: [
      { label: "Email", value: "marcellinoks18@gmail.com" },
      { label: "Location", value: "Jakarta, Indonesia" },
      { label: "GitHub", value: "github.com/kingmarcel18" },
    ]
  },
  zh: {
    nav: ["主页", "技能", "语言", "教育", "联系"],
    welcome: "欢迎来到我的作品集",
    hello: "你好，我是",
    role: "全栈开发工程师",
    desc: "热爱技术的全栈开发工程师，现居印度尼西亚雅加达。擅长使用现代技术构建可扩展的网络应用程序。",
    contactBtn: "联系我",
    skillsBtn: "我的技能",
    infoCards: [
      { label: "所在地", value: "雅加达，印度尼西亚" },
      { label: "国籍", value: "印度尼西亚" },
      { label: "语言", value: "印尼语 / 英语 / 中文" },
      { label: "求职状态", value: "求职中" },
    ],
    skillsTitle: "技术栈与技能",
    skillsSubtitle: "我掌握的技术",
    langTitle: "语言能力",
    langSubtitle: "沟通能力",
    eduTitle: "教育背景",
    eduSubtitle: "我的学历",
    contactTitle: "联系我",
    contactSubtitle: "与我取得联系",
    footer: "2026 吴阳亮 - 使用 Next.js 和 MUI 构建",
    languages: [
      { lang: "印度尼西亚语", level: "母语", score: 100 },
      { lang: "英语", level: "流利", score: 85 },
      { lang: "中文", level: "流利", score: 80 },
    ],
    edu: [
      { school: "塔鲁玛纳卡拉大学 (UNTAR)", major: "土木工程", location: "雅加达，印度尼西亚", chips: [] as string[] },
      { school: "西安交通大学 - CCN国际预科中心", major: "国际预科课程 (IFP) - 工科方向 A", location: "中国西安", chips: ["学术汉语", "数学", "物理"] }
    ],
    contact: [
      { label: "电子邮件", value: "marcellinoks18@gmail.com" },
      { label: "所在地", value: "雅加达，印度尼西亚" },
      { label: "GitHub", value: "github.com/kingmarcel18" },
    ]
  }
}

export type Content = typeof content["en"]
