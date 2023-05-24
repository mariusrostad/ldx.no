import Navigation from "../components/navigation/Navigation"
import "./globals.css"
import "@ldx/ds-css/dist/index.css"

export const metadata = {
  title: "ldx.no",
  description: "Nettside laget av Marius Rostad",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="no">
      <body>
        <Navigation isLoggedIn={true} />
        {children}
      </body>
    </html>
  )
}
