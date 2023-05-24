export const metadata = {
  title: "Designsystemet til ldx.no",
  description:
    "Et design system er et sett med komponenter og visuellet stiler som leverer den visuelle profilen til nettstedet.",
}

export default function DesignSystem() {
  return (
    <main
      style={{
        padding: "0 var(--ldx-ds-spacing-8)",
        maxWidth: "var(--ldx-ds-breakpoint-lg)",
        margin: "auto",
      }}
    >
      <h1 className="primary-color">H1 med en fin og tekst</h1>
      <h2 className="primary-color">H2 med en fin og tekst</h2>
      <h3 className="primary-color">H3 med en fin og tekst</h3>
      <h4 className="primary-color">H4 med en fin og tekst</h4>
      <h5 className="primary-color">H5 med en fin og tekst</h5>
      <h6 className="primary-color">H6 med en fin og tekst</h6>
      <a href="/designsystem">Link html tag</a>
      <p>Paragraph tekst</p>
      <b>Bold tekst</b>
    </main>
  )
}
