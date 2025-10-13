"use client";
import { useState } from "react";
import styles from "./checkOtp.module.css";
import { InputOtp } from "primereact/inputotp";
import api from "@/config/config";
import { setToken } from "@/core/utils/cookie";

function CheckOtp({ setStep, mobile, setIsOpen, userData, setUserData }) {
  const [code, setCode] = useState("");

  const login = async () => {
    try {
      const data = {
        mobile: mobile,
        code: code,
      };

      const res = await api.post("/auth/check-otp", data);

      if (res) {
        setToken(res.data);
        setIsOpen(false);
        setUserData(res.data.user.mobile);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.form}>
      <h2>کد تایید را وارد کنید.</h2>
      <span onClick={() => setStep(1)} className={styles.ex}>
        مرحله قبل
      </span>
      <label>کد تایید به شماره {mobile} ارسال شد</label>
      <InputOtp value={code} onChange={(e) => setCode(e.value)} length={6} />
      <button onClick={login}> ورود به تورینو </button>
    </div>
  );
}

export default CheckOtp;
