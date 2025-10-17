import api from "@/config/config";
import styles from "./sendOtp.module.css";
import { useState } from "react";
import toast from "react-hot-toast";

function SendOtp({ setStep, setIsOpen, mobile, setMobile }) {
  const sendeOtp = async () => {
    try {
      const data = {
        mobile,
      };
      const res = await api.post("/auth/send-otp", data);
      toast.success("کد اعتبارسنجی ارسال شد.");
      toast(res.data.code);
      setStep(2);
    } catch (err) {
      toast.error("مشکلی پیش آمده");
    }
  };

  return (
    <div className={styles.form}>
      <h2>ورود به تورینو</h2>
      <span onClick={() => setIsOpen(false)} className={styles.ex}>
        X
      </span>
      <label>شماره موبایل خود را وارد کنید</label>
      <input
        placeholder="0912***4253"
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
      />
      <button onClick={sendeOtp}>ارسال کد تایید </button>
    </div>
  );
}

export default SendOtp;
