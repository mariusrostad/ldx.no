import Link from "next/link"

export default function Home() {
  return (
    <main>
      <div
        style={{
          maxWidth: "1024px",
          margin: "auto",
          padding: "32px",
        }}
      >
        <h1 className="primary-color">Velkommen til ldx.no</h1>
        <p>
          <b>Sjekk ut våre tjenester</b>
        </p>
        <div className="card-container">
          <Link href={"/designsystem"} className="card-link">
            <div className="card">
              <h2>Designsystem</h2>
              <p>Den visuelle representasjonen av ldx.no</p>
            </div>
          </Link>
          <Link href={"/ressursoversikt"} className="card-link">
            <div className="card">
              <h2>Ressursoversikt</h2>
              <p>
                Enkelt system for å logge konsulent oppdrag / prosjekter for
                alle ansatte
              </p>
            </div>
          </Link>
        </div>
      </div>
    </main>
  )
}
