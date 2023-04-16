import Link from "next/link";
import styles from "./Navigation.module.css";

export default function Navigation() {
  return (
    <nav className={styles.nav}>
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
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/"}>About</Link>
        </li>
      </ul>
    </nav>
  );
}
