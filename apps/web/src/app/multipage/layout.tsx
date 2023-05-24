export const metadata = {
  title: "Multi page example | LDX.no",
}

interface TestLayoutProps {
  children: React.ReactNode
  analytics: React.ReactNode
  teams: React.ReactNode
}

export default function TestLayout(props: TestLayoutProps) {
  return (
    <main
      style={{
        padding: "0 var(--ldx-ds-spacing-8)",
        maxWidth: "var(--ldx-ds-breakpoint-lg)",
        margin: "auto",
      }}
      aria-label="Hoved-navigasjonen for nettstedet"
    >
      {props.children}
      {props.teams}
      {props.analytics}
    </main>
  )
}
