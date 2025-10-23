import React, { use, useEffect, useState } from "react";
import ModalContainer from "../partials/provider/ModalContainer";
import Image from "next/image";
import styles from "./AuthForm.module.css";
import SendOtp from "./SendOtp";
import CheckOtp from "./CheckOtp";
import { useContext } from "react";
import { DialogContext } from "../partials/provider/DialogProdider";
// import { getCookie } from "@/core/utils/cookie";
import Cookies from "js-cookie";
import UserPane from "../atoms/UserPane";
import { getToken } from "@/core/utils/cookie";

function AuthForm() {
  const { setIsOpen, isOpen } = useContext(DialogContext);
  const [step, setStep] = useState(1);
  const [mobile, setMobile] = useState("");
  const [isLogin, setIsLogin] = useState(null);
  const [openpanel, setOpenPanel] = useState(false);

  useEffect(() => {
    const userData = Cookies.get("userData");
    const token = getToken("accessToken");
    if (userData && token) setIsLogin(userData);
  }, [isOpen, isLogin]);

  return (
    <div>
      <div className={styles.loginbtn}>
        {isLogin ? (
          <div className={styles.mobile}>
            <span className={styles.user}>
              <Image
                src="/user-tick.png"
                alt="torino logo"
                width={15}
                height={15}
                color="#28A745"
              />
            </span>
            <p onClick={() => setOpenPanel((prev) => !prev)}>{isLogin}</p>
            <span className={styles.arrowDown}>
              <Image
                src="/arrow-down.png"
                alt="torino logo"
                width={15}
                height={15}
                color="#28A745"
              />
            </span>
            <div>
              {openpanel && (
                <UserPane
                  isLogin={isLogin}
                  setIsLogin={setIsLogin}
                  setOpenPanel={setOpenPanel}
                />
              )}
            </div>
          </div>
        ) : (
          <>
            <button className={styles.btn} onClick={() => setIsOpen(true)}>
              <span className={styles.user}>
                <Image
                  src="/user-tick.png"
                  alt="torino logo"
                  width={15}
                  height={15}
                  color="#28A745"
                />
              </span>
              ورود | ثبت نام
            </button>
            <div className={styles.resLogo} onClick={() => setIsOpen(true)}>
              <Image
                src="/sign in buttom (2).png"
                alt="torino logo"
                width={40}
                height={40}
              />
            </div>
          </>
        )}
      </div>
      {step === 1 && (
        <ModalContainer isOpen={isOpen} setIsOpen={setIsOpen}>
          <SendOtp
            setIsOpen={setIsOpen}
            setStep={setStep}
            mobile={mobile}
            setMobile={setMobile}
          />
        </ModalContainer>
      )}
      {step === 2 && (
        <ModalContainer isOpen={isOpen} setIsOpen={setIsOpen}>
          <CheckOtp
            setStep={setStep}
            mobile={mobile}
            setMobile={setMobile}
            setIsOpen={setIsOpen}
          />
        </ModalContainer>
      )}
    </div>
  );
}

export default AuthForm;
