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
        <p>Sjekk ut våre tjenester</p>
        <div className="card-container">
          <div className="card">
            <h2>Designsystem</h2>
            <p>
              Den visuelle representasjonen av ldx.no / mariusrostad.no /
              mariusrostad.com
            </p>
          </div>
          <div className="card">
            <h2>Ressursoversikt</h2>
            <p>
              Enkelt system for å logge konsulent oppdrag / prosjekter for alle
              ansatte
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
