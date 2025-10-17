import Image from "next/image";
import styles from "./UserPanel.module.css";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

function UserPane({ isLogin, setIsLogin, setOpenPanel }) {
  const { push } = useRouter();

  const logoutHandeler = () => {
    localStorage.clear();
    Cookies.remove("userData", { path: "/" });
    setIsLogin(null);
    push("/home");
  };

  const goToProfile = () => {
    push("/profile");
    setOpenPanel(false);
  };

  return (
    <div className={styles.container}>
      <div>
        <Image
          src="/user-tick.png"
          alt="torino logo"
          width={15}
          height={15}
          color="#28A745"
        />
        {isLogin}
      </div>
      <div onClick={goToProfile}>
        <Image
          src="/profile.png"
          alt="torino logo"
          width={15}
          height={15}
          color="#28A745"
        />
        اطلاعات حساب کاربری
      </div>
      <div className={styles.logOut} onClick={logoutHandeler}>
        <Image
          src="/logout.png"
          alt="torino logo"
          width={15}
          height={15}
          color="#28A745"
        />
        خروج از حساب کاربری
      </div>
    </div>
    // <div className={styles.boxout}>
    //   <ul className={styles.box}>
    //     <li className={styles.user}>
    //       <Image
    //         src="/user-tick.png"
    //         alt="torino logo"
    //         width={15}
    //         height={15}
    //         color="#28A745"
    //       />
    //       {isLogin}
    //     </li>
    //     <hr />
    //     <li className={styles.data}>
    //       <Image
    //         src="/profile.png"
    //         alt="torino logo"
    //         width={15}
    //         height={15}
    //         color="#28A745"
    //       />
    //       اطلاعات حساب کاربری
    //     </li>
    //     <hr />
    //     <li className={styles.logOut}>
    //       <Image
    //         src="/logout.png"
    //         alt="torino logo"
    //         width={15}
    //         height={15}
    //         color="#28A745"
    //       />
    //       خروج از حساب کاربری
    //     </li>
    //   </ul>
    // </div>
  );
}

export default UserPane;
