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
        <div className={styles.flex}>
          <Image
            src="/profile-2user.png"
            alt="icon"
            width={20}
            height={20}
            className={styles.img3}
          />
          <div
            onClick={() => setValue("profile")}
            className={value === "profile" ? styles.active : null}
          >
            <Link href="/profile">پروفایل</Link>
          </div>
        </div>

        <div className={styles.flex}>
          <Image
            src="/sun-fog.png"
            alt="icon"
            width={20}
            height={20}
            className={styles.img1}
          />
          <div
            onClick={() => setValue("mytours")}
            className={value === "mytours" ? styles.active : null}
          >
            <Link href="/mytours">تور های من</Link>
          </div>
        </div>

        <div className={styles.flex}>
          <Image
            src="/convert-card.png"
            alt="icon"
            width={20}
            height={20}
            className={styles.img2}
          />
          <div
            onClick={() => setValue("transactions")}
            className={value === "transactions" ? styles.active : null}
          >
            <Link href="/transactions">تراکنش ها</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBox;
