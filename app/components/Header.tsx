import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Button from "@mui/material/Button"
import { colors, type Content, type Lang } from "../data"

type HeaderProps = {
  t: Content
  lang: Lang
  active: string
  onNav: (label: string) => void
  onLang: (lang: Lang) => void
}

export default function Header({ t, lang, active, onNav, onLang }: HeaderProps) {
  return (
    <Box component="nav" id="navbar" sx={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, bgcolor: "rgba(10,10,10,0.85)", backdropFilter: "blur(10px)", borderBottom: `1px solid ${colors.border}` }}>
      <Container maxWidth="lg">
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", py: 2 }}>
          <Box sx={{ color: colors.accent, fontSize: 20, fontWeight: "bold" }}>
            M<span style={{ color: colors.text }}>.</span>
          </Box>
          <Box sx={{ display: "flex", gap: 1, alignItems: "center", flexWrap: "wrap" }}>
            {t.nav.map(item => (
              <Button key={item} onClick={() => onNav(item)} sx={{ color: active === item ? colors.accent : colors.text, fontWeight: active === item ? "bold" : "normal", textTransform: "none", "&:hover": { color: colors.accent } }}>
                {item}
              </Button>
            ))}
            <Box sx={{ ml: 1, display: "flex", border: "1px solid #00b4ff44", borderRadius: 2, overflow: "hidden" }}>
              {(["en", "zh"] as Lang[]).map(code => (
                <Button key={code} onClick={() => onLang(code)} sx={{ px: 1.5, py: 0.5, minWidth: 0, bgcolor: lang === code ? colors.accent : "transparent", color: lang === code ? colors.text : colors.accent, borderRadius: 0, textTransform: "none", fontSize: 12, "&:hover": { bgcolor: lang === code ? colors.accent : "#00b4ff22" } }}>
                  {code.toUpperCase()}
                </Button>
              ))}
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
