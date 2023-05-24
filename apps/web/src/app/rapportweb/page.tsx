import dynamic from "next/dynamic"
import "./rapportweb.scss"

export default function RapportwebPage() {
  const RapportwebWrapperDynamic = dynamic(() => import("../../components/rapportweb/RapportwebWrapper"), { ssr: false})
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
        <RapportwebWrapperDynamic />
      </div>
    </main>
  )
}
