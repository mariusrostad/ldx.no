import Link from "next/link";
import "./Navigation.modules.css";

export default function Navigation() {
  return (
    <nav>
      <Link href={"/"}>Marius Rostad.no</Link>
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
