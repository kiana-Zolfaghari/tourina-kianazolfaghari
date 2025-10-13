import React, { useState } from "react";
import ModalContainer from "../partials/provider/ModalContainer";
import Image from "next/image";
import styles from "./AuthForm.module.css";
import SendOtp from "./SendOtp";
import CheckOtp from "./CheckOtp";

function AuthForm() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const [mobile, setMobile] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  const [userData, setUserData] = useState("");

  const checkLogin = () => {
    const token = localStorage.getItem("accessToken");
    console.log(token);
    if (token) {
      setIsLogin(true);
    }
  };

  console.log(userData);

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
            <p>{userData}</p>
          </div>
        ) : (
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
            userData={userData}
            setUserData={setUserData}
          />
        </ModalContainer>
      )}
    </div>
  );
}

export default AuthForm;
