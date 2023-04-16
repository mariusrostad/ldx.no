import Navigation from "./components/navigation/Navigation";
import "./globals.css";
import "@ldx/ds-css/dist/index.css";

export const metadata = {
  title: "Marius Rostad.no",
  description: "Personlig nettside til Marius Rostad",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="no">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
