import Box from "@mui/material/Box"
import { colors } from "../data"

export default function Footer({ text }: { text: string }) {
  return (
    <Box component="footer" sx={{ py: 3, borderTop: `1px solid ${colors.border}`, textAlign: "center" }}>
      <Box sx={{ color: colors.text, fontSize: 12, opacity: 0.6 }}>{text}</Box>
    </Box>
  )
}
