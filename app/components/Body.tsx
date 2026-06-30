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
import LaunchIcon from "@mui/icons-material/Launch"
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
      <Box component="header" id="hero" sx={{ minHeight: "100vh", display: "flex", alignItems: "center", background: "radial-gradient(ellipse at 20% 50%, #0d1b3e 0%, #0a0a0a 60%)", pt: 8 }}>
        <Container maxWidth="lg">
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 6, alignItems: "center" }}>
            <Box sx={{ flex: "1 1 400px" }}>
              <Box sx={{ color: colors.accent, mb: 1, letterSpacing: 3, textTransform: "uppercase", fontSize: 13 }}>{t.welcome}</Box>
              <Box component="h1" sx={{ m: 0, mb: 1, lineHeight: 1.2, color: colors.text, fontSize: { xs: 36, md: 48 }, fontWeight: "bold" }}>
                {t.hello}{" "}
                <Box component="span" sx={{ background: "linear-gradient(90deg, #00b4ff, #0066ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  {lang === "en" ? "Marcellino" : "吴阳亮"}
                </Box>
              </Box>
              <Box component="p" sx={{ color: colors.text, m: 0, mb: 1, fontSize: 24 }}>{lang === "en" ? "吴阳亮" : "Marcellino Kurniawan Saputra"}</Box>
              <Box sx={{ color: colors.text, mb: 3, fontSize: 20 }}>{t.role}</Box>
              <Box sx={{ color: colors.text, mb: 4, maxWidth: 500, lineHeight: 1.8 }}>{t.desc}</Box>
              <Box sx={{ display: "flex", gap: 2 }}>
                <Button variant="contained" onClick={() => onNav(t.nav[3])} sx={{ bgcolor: colors.accent, "&:hover": { bgcolor: colors.accentDark }, borderRadius: 2, px: 3 }}>{t.projectsBtn}</Button>
                <Button variant="outlined" onClick={() => onNav(t.nav[5])} sx={{ borderColor: colors.accent, color: colors.accent, "&:hover": { borderColor: colors.accentDark, color: colors.accentDark }, borderRadius: 2, px: 3 }}>{t.contactBtn}</Button>
              </Box>
            </Box>
            <Box sx={{ flex: "1 1 300px", display: "flex", justifyContent: "center" }}>
              <Box sx={{ width: 280, height: 280, borderRadius: "50%", background: "linear-gradient(135deg, #00b4ff22, #0066ff44)", border: "2px solid #00b4ff44", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", "&::before": { content: '""', position: "absolute", inset: -8, borderRadius: "50%", border: "1px solid #00b4ff22" } }}>
                <Avatar src="/profile.jpg" sx={{ width: 240, height: 240, "& img": { objectPosition: "center 10%", objectFit: "cover" } }} />
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      <Box component="section" id="about" sx={{ py: 10, bgcolor: colors.bgAlt }}>
        <Container maxWidth="lg">
          <SectionHeading subtitle={t.aboutSubtitle} title={t.aboutTitle} />
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 6, alignItems: "center", justifyContent: "center" }}>
            <Box sx={{ flex: "0 0 auto", display: "flex", justifyContent: "center" }}>
              <Avatar src="/profile.jpg" variant="rounded" sx={{ width: 220, height: 260, borderRadius: 3, border: `1px solid ${colors.border}`, "& img": { objectPosition: "center 15%" } }} />
            </Box>
            <Box sx={{ flex: "1 1 380px" }}>
              <Box component="p" sx={{ color: colors.text, m: 0, mb: 3, lineHeight: 1.8, opacity: 0.9 }}>{t.aboutText}</Box>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, mb: 3 }}>
                {t.infoCards.map((info, i) => (
                  <Box key={i} sx={{ flex: "1 1 140px" }}>
                    <Card sx={cardSx}>
                      <CardContent>
                        <Box sx={{ color: colors.text, textTransform: "uppercase", letterSpacing: 1, fontSize: 11, mb: 0.5, opacity: 0.7 }}>{info.label}</Box>
                        <Box sx={{ color: colors.text, fontWeight: "bold", fontSize: 14 }}>{info.value}</Box>
                      </CardContent>
                    </Card>
                  </Box>
                ))}
              </Box>
              <Box sx={{ color: colors.accent, textTransform: "uppercase", letterSpacing: 2, fontSize: 12, mb: 1.5 }}>{t.langLabel}</Box>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
                {t.languages.map((item, i) => (
                  <Box key={i}>
                    <Box sx={{ display: "flex", justifyContent: "space-between", mb: 0.5 }}>
                      <Box sx={{ color: colors.text, fontSize: 13 }}>{item.lang}</Box>
                      <Box sx={{ color: colors.accent, fontSize: 12 }}>{item.level} · {item.score}%</Box>
                    </Box>
                    <Box sx={{ width: "100%", bgcolor: colors.border, borderRadius: 2, height: 6 }}>
                      <Box sx={{ width: `${item.score}%`, bgcolor: colors.accent, height: 6, borderRadius: 2 }} />
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      <Box component="section" id="skills" sx={{ py: 10, bgcolor: colors.bg }}>
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

      <Box component="section" id="projects" sx={{ py: 10, bgcolor: colors.bgAlt }}>
        <Container maxWidth="lg">
          <SectionHeading subtitle={t.projectsSubtitle} title={t.projectsTitle} />
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 3 }}>
            {t.projects.map((project, i) => (
              <Box key={i} sx={{ flex: "1 1 300px" }}>
                <Card sx={{ ...cardSx, height: "100%", display: "flex", flexDirection: "column", "&:hover": { borderColor: "#00b4ff44", transform: "translateY(-4px)" }, transition: "all 0.2s" }}>
                  <Box sx={{ height: 160, display: "flex", alignItems: "center", justifyContent: "center", background: "linear-gradient(135deg, #00b4ff22, #0066ff44)", borderBottom: `1px solid ${colors.border}` }}>
                    <Box sx={{ color: colors.text, fontSize: 48, fontWeight: "bold", opacity: 0.4 }}>{project.title.charAt(0)}</Box>
                  </Box>
                  <CardContent sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
                    <Box component="h3" sx={{ color: colors.text, fontWeight: "bold", fontSize: 18, m: 0, mb: 1 }}>{project.title}</Box>
                    <Box sx={{ color: colors.text, fontSize: 14, opacity: 0.8, lineHeight: 1.7, mb: 2, flex: 1 }}>{project.desc}</Box>
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 2 }}>
                      {project.tags.map(tag => (
                        <Chip key={tag} label={tag} size="small" sx={{ bgcolor: colors.navy, color: colors.accent, border: "1px solid #00b4ff33", fontSize: 11 }} />
                      ))}
                    </Box>
                    <Box component="a" href={project.link} sx={{ display: "inline-flex", alignItems: "center", gap: 0.5, color: colors.accent, textDecoration: "none", fontSize: 14, fontWeight: "bold", "&:hover": { color: colors.accentDark } }}>
                      {t.projectsBtn} <LaunchIcon sx={{ fontSize: 16 }} />
                    </Box>
                  </CardContent>
                </Card>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      <Box component="section" id="experience" sx={{ py: 10, bgcolor: colors.bg }}>
        <Container maxWidth="lg">
          <SectionHeading subtitle={t.expSubtitle} title={t.expTitle} />
          <Box component="ul" sx={{ listStyle: "none", m: 0, mx: "auto", p: 0, maxWidth: 700, position: "relative", pl: 4, "&::before": { content: '""', position: "absolute", left: 7, top: 4, bottom: 4, width: 2, bgcolor: colors.border } }}>
            {t.timeline.map((item, i) => (
              <Box component="li" key={i} sx={{ position: "relative", pb: i === t.timeline.length - 1 ? 0 : 4 }}>
                <Box sx={{ position: "absolute", left: -32, top: 4, width: 16, height: 16, borderRadius: "50%", bgcolor: colors.accent, border: `3px solid ${colors.bg}`, boxShadow: `0 0 0 2px ${colors.accent}` }} />
                {item.period && <Box sx={{ color: colors.accent, fontSize: 12, mb: 0.5, letterSpacing: 1 }}>{item.period}</Box>}
                <Box sx={{ color: colors.text, fontWeight: "bold", fontSize: 17, mb: 0.3 }}>{item.title}</Box>
                <Box sx={{ color: colors.accent, fontSize: 14, mb: 0.3 }}>{item.org}</Box>
                <Box sx={{ color: colors.text, fontSize: 12, opacity: 0.6, mb: item.desc ? 1 : 0 }}>{item.location}</Box>
                {item.desc && <Box sx={{ color: colors.text, fontSize: 14, opacity: 0.8, lineHeight: 1.7 }}>{item.desc}</Box>}
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      <Box component="section" id="contact" sx={{ py: 10, bgcolor: colors.bgAlt }}>
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
