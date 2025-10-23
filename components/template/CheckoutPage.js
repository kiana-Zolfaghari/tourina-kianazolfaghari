import Image from "next/image";
import styles from "./Checkout.module.css";
import { useEffect, useState } from "react";
import { changeToMiladi, shamsiDate } from "../partials/provider/jalali";
import DatePickers from "../atoms/DatePicker";
import api from "@/config/config";
import { useRouter } from "next/router";
import toast from "react-hot-toast";

function CheckoutPage({ data }) {
  const [birthday, setBirthday] = useState("");
  const miladiDate = changeToMiladi(birthday);
  const [name, setName] = useState("");
  const [idCode, setIdCode] = useState();
  const [gender, setGender] = useState("");

  const { push } = useRouter();

  const buyTourhandeler = async () => {
    if (name == "" || gender == "" || idCode == "" || birthday == "") {
      toast.error("مشخصات فردی خود را تکمیل کنید!");
      return;
    }

    try {
      const res = await api.post("/order", {
        nationalCode: idCode,
        fullName: name,
        gender: gender === "مرد" ? "mail" : "female",
        birthDate: changeToMiladi(birthday),
      });

      toast.success(res.data.message);
      push("/mytours");
    } catch (err) {
      toast.error("مشکلی پیش آمده!");
    }
  };

  return (
    <div style={{ maxWidth: "1200px", margin: "auto" }}>
      <div className={styles.container}>
        <section className={styles.sec1}>
          <Image src="/user-tick.png" alt="icon" width={24} height={24} />
          <p className={styles.title1}>مشخصات مسافر</p>
          <div className={styles.inputs}>
            <input
              type="text"
              placeholder="نام و نام خانوادگی"
              className={styles.input}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="number"
              placeholder="کدملی"
              className={styles.input}
              value={idCode}
              onChange={(e) => setIdCode(e.target.value)}
            />
            <div>
              <DatePickers birthday={birthday} setBirthday={setBirthday} />
            </div>
            <select
              title="جنسیت"
              onChange={(e) => {
                setGender(e.target.value);
              }}
              value={gender}
            >
              <option value="female">زن</option>
              <option value="male">مرد</option>
            </select>
          </div>
        </section>
        <section className={styles.sec2}>
          <div className={styles.head}>
            <p className={styles.title2}> {data?.title} </p>
            <p className={styles.due}>5 روز و 4 شب</p>
          </div>
          <div className={styles.finalprice}>
            <p className={styles.title}>قیمت نهایی</p>
            <p className={styles.price}>
              {data?.price} <span>تومان</span>
            </p>
          </div>
          <button onClick={buyTourhandeler}>ثبت و خرید نهایی</button>
        </section>
      </div>
    </div>
  );
}

export default CheckoutPage;
