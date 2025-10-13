import Link from "next/link";
import styles from "./NavBox.module.css";
import { useState } from "react";
import Image from "next/image";

function NavBox() {
  const [value, setValue] = useState("");
  console.log(value);

  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <ul>
          <Image src="/profile-2user.png" alt="icon" width={20} height={20} />
          <li
            onClick={() => setValue("profile")}
            className={value === "profile" ? styles.active : null}
          >
            <Link href="/profile">پروفایل</Link>
          </li>
          <hr />
          <Image src="/sun-fog.png" alt="icon" width={20} height={20} />
          <li
            onClick={() => setValue("mytours")}
            className={value === "mytours" ? styles.active : null}
          >
            <Link href="/mytours">تور های من</Link>
          </li>
          <hr />
          <Image src="/convert-card.png" alt="icon" width={20} height={20} />
          <li
            onClick={() => setValue("transactions")}
            className={value === "transactions" ? styles.active : null}
          >
            <Link href="/transactions">تراکنش ها</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBox;
