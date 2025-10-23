import Link from "next/link";
import React from "react";
import styles from "./SideBarMeni.module.css";

function SideBarMenue({ setOpen }) {
  return (
    <div className={styles.container}>
      <ul>
        <li className={styles.home}>صفحه اصلی</li>
        <li onClick={() => setOpen((prev) => !prev)}>
          <Link href="/home#allTours">خدمات گردشگری </Link>
        </li>
        <li onClick={() => setOpen((prev) => !prev)}>
          <Link href="/home#aboutUs">درباره ما</Link>
        </li>
        <li onClick={() => setOpen((prev) => !prev)}>
          <Link href="/home#buywithphon"> تماس با ما </Link>
        </li>
      </ul>
    </div>
  );
}

export default SideBarMenue;
