import RapportwebWrapper from "@/components/rapportweb/RapportwebWrapper"
import "./rapportweb.scss"

export default function RapportwebPage() {
  // https://ogckart-sn1.atlas.vegvesen.no/norstoy_1_0/wfs?service=wfs&request=GetCapabilities
  return (
    <main className="rapportweb-page">
      <div
        style={{
          maxWidth: "1024px",
          margin: "auto",
          padding: "32px",
        }}
      >
        <h1 className="primary-color">SVV | Rapportweb</h1>
      </div>
      <div className="rapportweb">
        <RapportwebWrapper />
      </div>
    </main>
  )
}
