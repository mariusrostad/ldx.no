import Link from "next/link";
import cl from "clsx";

export default function Navigation() {
  return (
    <nav
      className={cl("ldx-ds-nav")}
      aria-label="Hoved-navigasjonen for nettstedet"
    >
      <div className="ldx-ds-nav-inner">
        <Link
          href={"/"}
          style={{
            padding: "16px",
          }}
        >
          Marius Rostad.no
        </Link>
        <ul>
          <li>
            <Link href={"/"}>Hjem</Link>
          </li>
          <li>
            <Link href={"/ds"}>DesignSystem</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
