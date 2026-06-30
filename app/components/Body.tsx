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
import { colors, skills, type Content, type Lang } from "../data"

type BodyProps = {
  t: Content
  lang: Lang
  onNav: (label: string) => void
}

function SectionHeading({ subtitle, title }: { subtitle: string; title: string }) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mb: 6 }}>
      <Box sx={{ color: colors.accent, letterSpacing: 3, textTransform: "uppercase", fontSize: 12 }}>{subtitle}</Box>
      <Box component="h2" sx={{ color: colors.text, fontWeight: "bold", fontSize: 32, m: 0, mt: 1 }}>{title}</Box>
      <Box sx={{ width: 60, height: 3, bgcolor: colors.accent, mt: 2, borderRadius: 2 }} />
    </Box>
  )
}

const cardSx = {
  bgcolor: colors.card,
  border: `1px solid ${colors.border}`,
  borderRadius: 2,
  "&:hover": { borderColor: "#00b4ff44" },
  transition: "border 0.2s",
}

export default function Body({ t, lang, onNav }: BodyProps) {
  return (
    <>
      <Box id="home" sx={{ minHeight: "100vh", display: "flex", alignItems: "center", background: "radial-gradient(ellipse at 20% 50%, #0d1b3e 0%, #0a0a0a 60%)", pt: 8 }}>
        <Container maxWidth="lg">
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 6, alignItems: "center" }}>
            <Box sx={{ flex: "1 1 400px" }}>
              <Box sx={{ color: colors.accent, mb: 1, letterSpacing: 3, textTransform: "uppercase", fontSize: 13 }}>{t.welcome}</Box>
              <Box sx={{ mb: 1, lineHeight: 1.2, color: colors.text, fontSize: { xs: 36, md: 48 }, fontWeight: "bold" }}>{t.hello}</Box>
              <Box component="h1" sx={{ m: 0, mb: 1, background: "linear-gradient(90deg, #00b4ff, #0066ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", lineHeight: 1.2, fontSize: { xs: 36, md: 48 }, fontWeight: "bold" }}>
                {lang === "en" ? "Marcellino" : "吴阳亮"}
              </Box>
              <Box component="p" sx={{ color: colors.text, m: 0, mb: 1, fontSize: 24 }}>{lang === "en" ? "吴阳亮" : "Marcellino Kurniawan Saputra"}</Box>
              <Box sx={{ color: colors.text, mb: 3, fontSize: 20 }}>{t.role}</Box>
              <Box sx={{ color: colors.text, mb: 4, maxWidth: 500, lineHeight: 1.8 }}>{t.desc}</Box>
              <Box sx={{ display: "flex", gap: 2 }}>
                <Button variant="contained" onClick={() => onNav(lang === "en" ? "Contact" : "联系")} sx={{ bgcolor: colors.accent, "&:hover": { bgcolor: colors.accentDark }, borderRadius: 2, px: 3 }}>{t.contactBtn}</Button>
                <Button variant="outlined" onClick={() => onNav(lang === "en" ? "Skills" : "技能")} sx={{ borderColor: colors.accent, color: colors.accent, "&:hover": { borderColor: colors.accentDark, color: colors.accentDark }, borderRadius: 2, px: 3 }}>{t.skillsBtn}</Button>
              </Box>
            </Box>
            <Box sx={{ flex: "1 1 300px", display: "flex", justifyContent: "center" }}>
              <Box sx={{ width: 280, height: 280, borderRadius: "50%", background: "linear-gradient(135deg, #00b4ff22, #0066ff44)", border: "2px solid #00b4ff44", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", "&::before": { content: '""', position: "absolute", inset: -8, borderRadius: "50%", border: "1px solid #00b4ff22" } }}>
                <Avatar src="/profile.jpg" sx={{ width: 240, height: 240, "& img": { objectPosition: "center 10%", objectFit: "cover" } }} />
              </Box>
            </Box>
          </Box>

          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, mt: 6 }}>
            {t.infoCards.map((info, i) => (
              <Box key={i} sx={{ flex: "1 1 150px" }}>
                <Card sx={{ ...cardSx, "&:hover": { borderColor: "#00b4ff44", transform: "translateY(-2px)" }, transition: "all 0.2s" }}>
                  <CardContent>
                    <Box sx={{ color: colors.text, textTransform: "uppercase", letterSpacing: 1, fontSize: 11, mb: 0.5, opacity: 0.7 }}>{info.label}</Box>
                    <Box sx={{ color: colors.text, fontWeight: "bold", fontSize: 14 }}>{info.value}</Box>
                  </CardContent>
                </Card>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      <Box id="skills" sx={{ py: 10, bgcolor: colors.bgAlt }}>
        <Container maxWidth="lg">
          <SectionHeading subtitle={t.skillsSubtitle} title={t.skillsTitle} />
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 3 }}>
            {Object.entries(skills).map(([category, items]) => (
              <Box key={category} sx={{ flex: "1 1 400px" }}>
                <Card sx={{ ...cardSx, height: "100%" }}>
                  <CardContent>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
                      <CodeIcon sx={{ color: colors.accent, fontSize: 18 }} />
                      <Box sx={{ color: colors.accent, fontWeight: "bold", fontSize: 14 }}>{category}</Box>
                    </Box>
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                      {items.map(skill => (
                        <Chip key={skill} label={skill} size="small" sx={{ bgcolor: colors.navy, color: colors.text, border: "1px solid #00b4ff33", "&:hover": { bgcolor: "#00b4ff22" } }} />
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      <Box id="languages" sx={{ py: 10, bgcolor: colors.bg }}>
        <Container maxWidth="lg">
          <SectionHeading subtitle={t.langSubtitle} title={t.langTitle} />
          <Box sx={{ display: "flex", flexDirection: "column", gap: 3, maxWidth: 600, mx: "auto" }}>
            {t.languages.map((item, i) => (
              <Card key={i} sx={cardSx}>
                <CardContent>
                  <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 1 }}>
                    <Box sx={{ color: colors.text, fontWeight: "bold", fontSize: 16 }}>{item.lang}</Box>
                    <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                      <Chip label={item.level} size="small" sx={{ bgcolor: colors.navy, color: colors.accent, border: "1px solid #00b4ff33", fontSize: 11 }} />
                      <Box sx={{ color: colors.text, fontSize: 14, fontWeight: "bold" }}>{item.score}%</Box>
                    </Box>
                  </Box>
                  <Box sx={{ width: "100%", bgcolor: colors.border, borderRadius: 2, height: 6 }}>
                    <Box sx={{ width: `${item.score}%`, bgcolor: colors.accent, height: 6, borderRadius: 2 }} />
                  </Box>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Container>
      </Box>

      <Box id="education" sx={{ py: 10, bgcolor: colors.bgAlt }}>
        <Container maxWidth="lg">
          <SectionHeading subtitle={t.eduSubtitle} title={t.eduTitle} />
          <Box sx={{ display: "flex", flexDirection: "column", gap: 3, maxWidth: 700, mx: "auto" }}>
            {t.edu.map((item, i) => (
              <Card key={i} sx={cardSx}>
                <CardContent>
                  <Box sx={{ display: "flex", gap: 2, alignItems: "flex-start" }}>
                    <Box sx={{ width: 44, height: 44, borderRadius: 2, bgcolor: colors.navy, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <SchoolIcon sx={{ color: colors.accent }} />
                    </Box>
                    <Box>
                      <Box sx={{ color: colors.text, fontWeight: "bold", fontSize: 16, mb: 0.5 }}>{item.school}</Box>
                      <Box sx={{ color: colors.accent, fontSize: 14, mb: 0.5 }}>{item.major}</Box>
                      <Box sx={{ color: colors.text, fontSize: 12, opacity: 0.7, mb: item.chips.length > 0 ? 1 : 0 }}>{item.location}</Box>
                      {item.chips.length > 0 && (
                        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                          {item.chips.map((chip, j) => (
                            <Chip key={j} label={chip} size="small" sx={{ bgcolor: colors.navy, color: colors.text, border: "1px solid #00b4ff33", fontSize: 11 }} />
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

      <Box id="contact" sx={{ py: 10, bgcolor: colors.bg }}>
        <Container maxWidth="lg">
          <SectionHeading subtitle={t.contactSubtitle} title={t.contactTitle} />
          <Box sx={{ display: "flex", flexDirection: "column", gap: 3, maxWidth: 500, mx: "auto" }}>
            {t.contact.map((item, i) => (
              <Card key={i} sx={{ ...cardSx, "&:hover": { borderColor: "#00b4ff44", transform: "translateX(4px)" }, transition: "all 0.2s" }}>
                <CardContent>
                  <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                    <Box sx={{ width: 44, height: 44, borderRadius: 2, bgcolor: colors.navy, display: "flex", alignItems: "center", justifyContent: "center" }}>
                      {i === 0 && <EmailIcon sx={{ color: colors.accent }} />}
                      {i === 1 && <LocationOnIcon sx={{ color: colors.accent }} />}
                      {i === 2 && <GitHubIcon sx={{ color: colors.accent }} />}
                    </Box>
                    <Box>
                      <Box sx={{ color: colors.text, textTransform: "uppercase", letterSpacing: 1, fontSize: 11, opacity: 0.7, mb: 0.3 }}>{item.label}</Box>
                      <Box sx={{ color: colors.text, fontWeight: "bold", fontSize: 14 }}>{item.value}</Box>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Container>
      </Box>
    </>
  )
}
