import Link from "next/link";
import { RESSURSOVERSIKT_MOCK } from "../../mocks/ressursoversiktmock";

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
      <h1
        style={{
          color: "var(--ldx-ds-green-dark-inverse-text)",
        }}
      >
        Ressursoversikt
      </h1>
      <div>
        <table className="ldxds-table">
          <thead>
            <tr>
              {periods.map((period) => (
                <th key={"heading-" + period.week}>{period.week}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              {periods.map((period) => (
                <td key={"period-" + period.week}>
                  {period.entries.map((entry) => (
                    <Link
                      href={"/test"}
                      key={
                        period.week + " " + entry.project?.name ??
                        "ikke-i-prosjekt" + entry.project?.customer
                      }
                    >
                      <div
                        style={{
                          borderBottom: "1px solid black",
                        }}
                      >
                        {entry.user.name}
                        <br />
                        {entry.project?.customer != null
                          ? entry.project.customer + " - "
                          : ""}
                        {entry.project?.name ?? "Ikke i prosjekt"}
                      </div>
                    </Link>
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
