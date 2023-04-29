import { RESSURSOVERSIKT_MOCK } from "../mocks/ressursoversiktmock";

export default function Ressursoversikt() {
  const periods = RESSURSOVERSIKT_MOCK.periods;
  return (
    <main
      style={{
        maxWidth: "1024px",
        margin: "auto",
        padding: "32px",
      }}
    >
      <h1>Ressursoversikt</h1>
      <div>
        <table>
          <thead>
            <tr>
              {periods.map((period, key) => (
                <th key={key}>{period.week}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              {periods.map((period, key) => (
                <td key={key}>
                  {period.entries.map((entry, key) => (
                    <div
                      key={key}
                      style={{
                        border: "1px solid black",
                        borderRadius: "16px",
                        padding: "16px",
                        marginTop: "16px",
                      }}
                    >
                      {entry.user.name}
                      <br />
                      {entry.project?.customer != null
                        ? entry.project.customer + " - "
                        : ""}
                      {entry.project?.name ?? "Ikke i prosjekt"}
                    </div>
                  ))}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}
