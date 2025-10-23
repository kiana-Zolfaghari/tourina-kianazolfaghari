import Image from "next/image";
import Link from "next/link";
import styles from "./Layout.module.css";

import AuthForm from "../template/AuthForm";
import SideBarMenue from "../partials/provider/SideBarMenue";
import { useState } from "react";

function Layout({ children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Image
          onClick={() => setOpen((prev) => !prev)}
          className={styles.hamburger}
          src="/Group 46 (2).png"
          alt="torino logo"
          width={26}
          height={26}
        />
        <Link href="/home">
          <Image
            className={styles.image}
            src="/TorinoLogo.png"
            alt="torino logo"
            width={146}
            height={44}
          />
        </Link>
        <div className={styles.navbar}>
          <ul>
            <li className={styles.home}>صفحه اصلی</li>
            <li>
              <Link href="/home#allTours">خدمات گردشگری</Link>
            </li>
            <li>
              <Link href="/home#aboutUs">درباره ما</Link>
            </li>
            <li>
              <Link href="/home#buywithphon">تماس با ما</Link>
            </li>
          </ul>
        </div>
        {open && <SideBarMenue setOpen={setOpen} />}
        <AuthForm />
      </header>
      <hr className={styles.hr} />
      {children}
      <footer>
        <hr />
        <div className={styles.footer}>
          <div className={styles.list1}>
            <h4 className={styles.ul1}>تورینو</h4>
            <ul>
              <li>درباره ما</li>
              <li>تماس با ما</li>
              <li>چرا تورینو</li>
              <li>بیمه مسافرتی</li>
            </ul>
          </div>
          <div className={styles.list2}>
            <h4 className={styles.ul2}>خدمات مشتریان</h4>
            <ul>
              <li>پشتیبانی آنلاین </li>
              <li>راهنمای خرید </li>
              <li> راهنمای استرداد</li>
              <li> پرسش و پاسخ</li>
            </ul>
          </div>
          <div className={styles.footerLogo}>
            <Image
              src="/TorinoLogo.png"
              alt="torino logo"
              width={146}
              height={44}
            />
          </div>
        </div>
        <div className={styles.phone}>
          <p className={styles.p1}>
            تلفن پشتیبانی: <span>021-8574</span>
          </p>
        </div>
        <div className={styles.footerImage}>
          <Image
            src="/Combined-Shape.png"
            alt="torino logo"
            width={78}
            height={74}
          />
          <Image
            src="/passenger-rights-48368f81 1.png"
            alt="torino logo"
            width={71}
            height={74}
          />
          <Image
            src="/ecunion-35c3c933.png"
            alt="torino logo"
            width={68}
            height={74}
          />
          <Image
            src="/samandehi-6e2b448a.png"
            alt="torino logo"
            width={67}
            height={74}
          />
          <Image
            src="/aira-682b7c43.png"
            alt="torino logo"
            width={68}
            height={74}
          />
        </div>
        <hr className={styles.hr2} />
        <div className={styles.p}>
          <p>کلیه حقوق این وب سایت متعلق به تورینو میباشد.&copy; </p>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
