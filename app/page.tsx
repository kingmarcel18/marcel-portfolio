"use client"

import { useState } from "react"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Chip from "@mui/material/Chip"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Button from "@mui/material/Button"
import Avatar from "@mui/material/Avatar"
import GitHubIcon from "@mui/icons-material/GitHub"
import EmailIcon from "@mui/icons-material/Email"
import LocationOnIcon from "@mui/icons-material/LocationOn"
import CodeIcon from "@mui/icons-material/Code"
import SchoolIcon from "@mui/icons-material/School"

const skills = {
  "Coding Languages": ["JavaScript", "TypeScript", "Python", "C++", "CSS", "SCSS"],
  "Frameworks": ["Next.js", "React.js", "Vite", "Node.js"],
  "Libraries": ["Tailwind CSS", "Material UI", "Redux", "Tanstack Query", "Next Auth"],
  "Databases": ["MongoDB", "PostgreSQL", "MySQL", "Supabase", "Firebase", "Prisma ORM"],
  "Tools": ["Git", "GitHub", "REST API", "Postman", "Figma", "AutoCAD"],
}

const content = {
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

export default function Portfolio() {
  const [active, setActive] = useState("Home")
  const [lang, setLang] = useState<"en" | "zh">("en")
  const t = content[lang]

  function scrollTo(label: string) {
    setActive(label)
    const map: Record<string, string> = {
      "Home": "home", "Skills": "skills", "Languages": "languages",
      "Education": "education", "Contact": "contact",
      "主页": "home", "技能": "skills", "语言": "languages",
      "教育": "education", "联系": "contact"
    }
    document.getElementById(map[label])?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <Box sx={{ bgcolor: "#0a0a0a", minHeight: "100vh", color: "white" }}>

      {/* Navbar */}
      <Box sx={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, bgcolor: "rgba(10,10,10,0.85)", backdropFilter: "blur(10px)", borderBottom: "1px solid #1a1a2e" }}>
        <Container maxWidth="lg">
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", py: 2 }}>
            <Box sx={{ color: "#00b4ff", fontSize: 20, fontWeight: "bold" }}>
              M<span style={{ color: "white" }}>.</span>
            </Box>
            <Box sx={{ display: "flex", gap: 1, alignItems: "center", flexWrap: "wrap" }}>
              {t.nav.map(item => (
                <Button key={item} onClick={() => scrollTo(item)} sx={{ color: active === item ? "#00b4ff" : "#ffffff", fontWeight: active === item ? "bold" : "normal", textTransform: "none", "&:hover": { color: "#00b4ff" } }}>
                  {item}
                </Button>
              ))}
              <Box sx={{ ml: 1, display: "flex", border: "1px solid #00b4ff44", borderRadius: 2, overflow: "hidden" }}>
                <Button onClick={() => { setLang("en"); setActive("Home") }} sx={{ px: 1.5, py: 0.5, minWidth: 0, bgcolor: lang === "en" ? "#00b4ff" : "transparent", color: lang === "en" ? "white" : "#00b4ff", borderRadius: 0, textTransform: "none", fontSize: 12, "&:hover": { bgcolor: lang === "en" ? "#00b4ff" : "#00b4ff22" } }}>
                  EN
                </Button>
                <Button onClick={() => { setLang("zh"); setActive("主页") }} sx={{ px: 1.5, py: 0.5, minWidth: 0, bgcolor: lang === "zh" ? "#00b4ff" : "transparent", color: lang === "zh" ? "white" : "#00b4ff", borderRadius: 0, textTransform: "none", fontSize: 12, "&:hover": { bgcolor: lang === "zh" ? "#00b4ff" : "#00b4ff22" } }}>
                  ZH
                </Button>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Hero */}
      <Box id="home" sx={{ minHeight: "100vh", display: "flex", alignItems: "center", background: "radial-gradient(ellipse at 20% 50%, #0d1b3e 0%, #0a0a0a 60%)", pt: 8 }}>
        <Container maxWidth="lg">
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 6, alignItems: "center" }}>
            <Box sx={{ flex: "1 1 400px" }}>
              <Box sx={{ color: "#00b4ff", mb: 1, letterSpacing: 3, textTransform: "uppercase", fontSize: 13 }}>{t.welcome}</Box>
              <Box sx={{ mb: 1, lineHeight: 1.2, color: "#ffffff", fontSize: { xs: 36, md: 48 }, fontWeight: "bold" }}>{t.hello}</Box>
              <Box sx={{ mb: 1, background: "linear-gradient(90deg, #00b4ff, #0066ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", lineHeight: 1.2, fontSize: { xs: 36, md: 48 }, fontWeight: "bold" }}>
                {lang === "en" ? "Marcellino" : "吴阳亮"}
              </Box>
              <Box sx={{ color: "#ffffff", mb: 1, fontSize: 24 }}>{lang === "en" ? "吴阳亮" : "Marcellino Kurniawan Saputra"}</Box>
              <Box sx={{ color: "#ffffff", mb: 3, fontSize: 20 }}>{t.role}</Box>
              <Box sx={{ color: "#ffffff", mb: 4, maxWidth: 500, lineHeight: 1.8 }}>{t.desc}</Box>
              <Box sx={{ display: "flex", gap: 2 }}>
                <Button variant="contained" onClick={() => scrollTo(lang === "en" ? "Contact" : "联系")} sx={{ bgcolor: "#00b4ff", "&:hover": { bgcolor: "#0066ff" }, borderRadius: 2, px: 3 }}>{t.contactBtn}</Button>
                <Button variant="outlined" onClick={() => scrollTo(lang === "en" ? "Skills" : "技能")} sx={{ borderColor: "#00b4ff", color: "#00b4ff", "&:hover": { borderColor: "#0066ff", color: "#0066ff" }, borderRadius: 2, px: 3 }}>{t.skillsBtn}</Button>
              </Box>
            </Box>
            <Box sx={{ flex: "1 1 300px", display: "flex", justifyContent: "center" }}>
              <Box sx={{ width: 280, height: 280, borderRadius: "50%", background: "linear-gradient(135deg, #00b4ff22, #0066ff44)", border: "2px solid #00b4ff44", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", "&::before": { content: '""', position: "absolute", inset: -8, borderRadius: "50%", border: "1px solid #00b4ff22" } }}>
                <Avatar src="/profile.jpg" sx={{ width: 240, height: 240, "& img": { objectPosition: "center 10%", objectFit: "cover" } }} />
              </Box>
            </Box>
          </Box>

          {/* Info Cards */}
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, mt: 6 }}>
            {t.infoCards.map((info, i) => (
              <Box key={i} sx={{ flex: "1 1 150px" }}>
                <Card sx={{ bgcolor: "#111", border: "1px solid #1a1a2e", borderRadius: 2, "&:hover": { borderColor: "#00b4ff44", transform: "translateY(-2px)" }, transition: "all 0.2s" }}>
                  <CardContent>
                    <Box sx={{ color: "#ffffff", textTransform: "uppercase", letterSpacing: 1, fontSize: 11, mb: 0.5, opacity: 0.7 }}>{info.label}</Box>
                    <Box sx={{ color: "#ffffff", fontWeight: "bold", fontSize: 14 }}>{info.value}</Box>
                  </CardContent>
                </Card>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Skills */}
      <Box id="skills" sx={{ py: 10, bgcolor: "#0d0d0d" }}>
        <Container maxWidth="lg">
          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mb: 6 }}>
            <Box sx={{ color: "#00b4ff", letterSpacing: 3, textTransform: "uppercase", fontSize: 12 }}>{t.skillsSubtitle}</Box>
            <Box sx={{ color: "#ffffff", fontWeight: "bold", fontSize: 32, mt: 1 }}>{t.skillsTitle}</Box>
            <Box sx={{ width: 60, height: 3, bgcolor: "#00b4ff", mt: 2, borderRadius: 2 }} />
          </Box>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 3 }}>
            {Object.entries(skills).map(([category, items]) => (
              <Box key={category} sx={{ flex: "1 1 400px" }}>
                <Card sx={{ bgcolor: "#111", border: "1px solid #1a1a2e", borderRadius: 2, height: "100%", "&:hover": { borderColor: "#00b4ff44" }, transition: "border 0.2s" }}>
                  <CardContent>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
                      <CodeIcon sx={{ color: "#00b4ff", fontSize: 18 }} />
                      <Box sx={{ color: "#00b4ff", fontWeight: "bold", fontSize: 14 }}>{category}</Box>
                    </Box>
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                      {items.map(skill => (
                        <Chip key={skill} label={skill} size="small" sx={{ bgcolor: "#0d1b3e", color: "white", border: "1px solid #00b4ff33", "&:hover": { bgcolor: "#00b4ff22" } }} />
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Languages */}
      <Box id="languages" sx={{ py: 10, bgcolor: "#0a0a0a" }}>
        <Container maxWidth="lg">
          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mb: 6 }}>
            <Box sx={{ color: "#00b4ff", letterSpacing: 3, textTransform: "uppercase", fontSize: 12 }}>{t.langSubtitle}</Box>
            <Box sx={{ color: "#ffffff", fontWeight: "bold", fontSize: 32, mt: 1 }}>{t.langTitle}</Box>
            <Box sx={{ width: 60, height: 3, bgcolor: "#00b4ff", mt: 2, borderRadius: 2 }} />
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 3, maxWidth: 600, mx: "auto" }}>
            {t.languages.map((item, i) => (
              <Card key={i} sx={{ bgcolor: "#111", border: "1px solid #1a1a2e", borderRadius: 2, "&:hover": { borderColor: "#00b4ff44" }, transition: "border 0.2s" }}>
                <CardContent>
                  <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 1 }}>
                    <Box sx={{ color: "#ffffff", fontWeight: "bold", fontSize: 16 }}>{item.lang}</Box>
                    <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                      <Chip label={item.level} size="small" sx={{ bgcolor: "#0d1b3e", color: "#00b4ff", border: "1px solid #00b4ff33", fontSize: 11 }} />
                      <Box sx={{ color: "#ffffff", fontSize: 14, fontWeight: "bold" }}>{item.score}%</Box>
                    </Box>
                  </Box>
                  <Box sx={{ width: "100%", bgcolor: "#1a1a2e", borderRadius: 2, height: 6 }}>
                    <Box sx={{ width: `${item.score}%`, bgcolor: "#00b4ff", height: 6, borderRadius: 2 }} />
                  </Box>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Education */}
      <Box id="education" sx={{ py: 10, bgcolor: "#0d0d0d" }}>
        <Container maxWidth="lg">
          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mb: 6 }}>
            <Box sx={{ color: "#00b4ff", letterSpacing: 3, textTransform: "uppercase", fontSize: 12 }}>{t.eduSubtitle}</Box>
            <Box sx={{ color: "#ffffff", fontWeight: "bold", fontSize: 32, mt: 1 }}>{t.eduTitle}</Box>
            <Box sx={{ width: 60, height: 3, bgcolor: "#00b4ff", mt: 2, borderRadius: 2 }} />
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 3, maxWidth: 700, mx: "auto" }}>
            {t.edu.map((item, i) => (
              <Card key={i} sx={{ bgcolor: "#111", border: "1px solid #1a1a2e", borderRadius: 2, "&:hover": { borderColor: "#00b4ff44" }, transition: "border 0.2s" }}>
                <CardContent>
                  <Box sx={{ display: "flex", gap: 2, alignItems: "flex-start" }}>
                    <Box sx={{ width: 44, height: 44, borderRadius: 2, bgcolor: "#0d1b3e", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <SchoolIcon sx={{ color: "#00b4ff" }} />
                    </Box>
                    <Box>
                      <Box sx={{ color: "#ffffff", fontWeight: "bold", fontSize: 16, mb: 0.5 }}>{item.school}</Box>
                      <Box sx={{ color: "#00b4ff", fontSize: 14, mb: 0.5 }}>{item.major}</Box>
                      <Box sx={{ color: "#ffffff", fontSize: 12, opacity: 0.7, mb: item.chips.length > 0 ? 1 : 0 }}>{item.location}</Box>
                      {item.chips.length > 0 && (
                        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                          {item.chips.map((chip, j) => (
                            <Chip key={j} label={chip} size="small" sx={{ bgcolor: "#0d1b3e", color: "white", border: "1px solid #00b4ff33", fontSize: 11 }} />
                          ))}
                        </Box>
                      )}
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Contact */}
      <Box id="contact" sx={{ py: 10, bgcolor: "#0a0a0a" }}>
        <Container maxWidth="lg">
          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mb: 6 }}>
            <Box sx={{ color: "#00b4ff", letterSpacing: 3, textTransform: "uppercase", fontSize: 12 }}>{t.contactSubtitle}</Box>
            <Box sx={{ color: "#ffffff", fontWeight: "bold", fontSize: 32, mt: 1 }}>{t.contactTitle}</Box>
            <Box sx={{ width: 60, height: 3, bgcolor: "#00b4ff", mt: 2, borderRadius: 2 }} />
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 3, maxWidth: 500, mx: "auto" }}>
            {t.contact.map((item, i) => (
              <Card key={i} sx={{ bgcolor: "#111", border: "1px solid #1a1a2e", borderRadius: 2, "&:hover": { borderColor: "#00b4ff44", transform: "translateX(4px)" }, transition: "all 0.2s" }}>
                <CardContent>
                  <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                    <Box sx={{ width: 44, height: 44, borderRadius: 2, bgcolor: "#0d1b3e", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      {i === 0 && <EmailIcon sx={{ color: "#00b4ff" }} />}
                      {i === 1 && <LocationOnIcon sx={{ color: "#00b4ff" }} />}
                      {i === 2 && <GitHubIcon sx={{ color: "#00b4ff" }} />}
                    </Box>
                    <Box>
                      <Box sx={{ color: "#ffffff", textTransform: "uppercase", letterSpacing: 1, fontSize: 11, opacity: 0.7, mb: 0.3 }}>{item.label}</Box>
                      <Box sx={{ color: "#ffffff", fontWeight: "bold", fontSize: 14 }}>{item.value}</Box>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Footer */}
      <Box sx={{ py: 3, borderTop: "1px solid #1a1a2e", textAlign: "center" }}>
        <Box sx={{ color: "#ffffff", fontSize: 12, opacity: 0.6 }}>{t.footer}</Box>
      </Box>

    </Box>
  )
}