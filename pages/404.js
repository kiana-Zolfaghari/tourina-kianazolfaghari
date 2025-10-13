import Image from "next/image";
import Link from "next/link";
import styles from "../styles/pagenotfound.module.css";

function PageNotFound() {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <p>صفحه مورد نظر یافت نشد!</p>
        <Link href="/">بازگشت به صفحه اصلی</Link>
      </div>
      <div className={styles.image}>
        <Image src="/Error TV.png" alt="404 logo" width={555} height={555} />
      </div>
    </div>
  );
}

export default PageNotFound;
