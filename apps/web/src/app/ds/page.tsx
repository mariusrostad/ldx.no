export const metadata = {
  title: "Designsystem ldx.no",
  description: "Designsystem nettside for ldx.no",
};

export default function DesignSystem() {
  return (
    <main
      style={{
        padding: "0 var(--ldx-ds-spacing-8)",
        maxWidth: "var(--ldx-ds-breakpoint-lg)",
        margin: "auto",
      }}
    >
      <h1 className="primary-color">H1 velkommen til MariusRostad.no</h1>
      <h2 className="primary-color">H2 velkommen til MariusRostad.no</h2>
      <h3 className="primary-color">H3 velkommen til MariusRostad.no</h3>
      <h4 className="primary-color">H4 velkommen til MariusRostad.no</h4>
      <h5 className="primary-color">H5 velkommen til MariusRostad.no</h5>
      <h6 className="primary-color">H6 velkommen til MariusRostad.no</h6>
      <a href="/ds">Anchor tag</a>
      <p>Paragraph</p>
    </main>
  );
}
