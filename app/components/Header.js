import styles from "@/app/page.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <nav>
        <ul>
          <li>
            <a href="/city/Tokyo">Tokyo</a>
          </li>
          <li>
            <a href="/city/Bangalore">Bangalore</a>
          </li>
          <li>
            <a href="/city/Athens">Athens</a>
          </li>
          <li>
            <a href="/city/Irvine">Irvine</a>
          </li>
          <li>
            <a href="/">New York City</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
