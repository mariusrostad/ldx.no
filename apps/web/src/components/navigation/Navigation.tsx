import Link from "next/link"
import cl from "clsx"

export interface NavigationProps {
  isLoggedIn: boolean
}

export default function Navigation(props: NavigationProps) {
  const { isLoggedIn } = props
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
          LDX.no
        </Link>
        <ul>
          {isLoggedIn ? (
            <>
              <li>
                <Link href={"/"}>Hjem</Link>
              </li>
              <li>
                <Link href={"/designsystem"}>DesignSystem</Link>
              </li>
              <li>
                <Link href={"/ressursoversikt"}>Ressursoversikt</Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link href={"/login"}>Login</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}
