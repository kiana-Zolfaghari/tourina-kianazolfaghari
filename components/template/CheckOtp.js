"use client";
import { useState } from "react";
import styles from "./checkOtp.module.css";
import { InputOtp } from "primereact/inputotp";
import api from "@/config/config";
import { setCookie, setToken } from "@/core/utils/cookie";
import toast from "react-hot-toast";
import { useContext } from "react";
import { DialogContext } from "../partials/provider/DialogProdider";

function CheckOtp({ setStep, mobile }) {
  const { setIsOpen, isOpen } = useContext(DialogContext);
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
        setCookie(res.data.user.mobile);
        setIsOpen(false);
      }
    } catch (err) {
      toast.error("کد وارد شده فاقد اعتبار است!");
    }
  };

  return (
    <div className={styles.form}>
      <h2>کد تایید را وارد کنید.</h2>
      <span onClick={() => setStep(1)} className={styles.ex}>
        مرحله قبل
      </span>
      <label>کد تایید به شماره {mobile} ارسال شد</label>
      <InputOtp
        value={code}
        onChange={(e) => setCode(e.value)}
        length={6}
        style={{ direction: "ltr", justifyContent: "flex-start" }}
      />
      <button onClick={login}> ورود به تورینو </button>
    </div>
  );
}

export default CheckOtp;
