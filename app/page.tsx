"use client"

import { useState } from "react"
import Box from "@mui/material/Box"
import Header from "./components/Header"
import Body from "./components/Body"
import Footer from "./components/Footer"
import { colors, content, sectionMap, type Lang } from "./data"

export default function Portfolio() {
  const [active, setActive] = useState("Home")
  const [lang, setLang] = useState<Lang>("en")
  const t = content[lang]

  function goTo(label: string) {
    setActive(label)
    document.getElementById(sectionMap[label])?.scrollIntoView({ behavior: "smooth" })
  }

  function switchLang(next: Lang) {
    setLang(next)
    setActive(next === "en" ? "Home" : "主页")
  }

  return (
    <Box sx={{ bgcolor: colors.bg, minHeight: "100vh", color: colors.text }}>
      <Header t={t} lang={lang} active={active} onNav={goTo} onLang={switchLang} />
      <Body t={t} lang={lang} onNav={goTo} />
      <Footer text={t.footer} />
    </Box>
  )
}
