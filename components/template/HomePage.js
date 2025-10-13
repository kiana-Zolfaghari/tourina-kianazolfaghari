/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
// import Image from "next/image";
"use client";
import styles from "./HomePage.module.css";
import Cards from "../modules/Cards";
import ImageSlider from "../modules/Slider";
import TourDatePiker from "../atoms/tourDatePiker";
import { useEffect, useState } from "react";
import api from "@/config/config";
import { useRouter } from "next/router";
import DropDown from "../atoms/DropDown";
import DropDown2 from "../atoms/DropDown2";
import { changeToMiladi } from "../partials/provider/jalali";

function HomePage({ data, setData }) {
  const router = useRouter();
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");

  const filterHandeler = async () => {
    const res =
      await api.get(`/tour?destinationId=9&originId=1&startDate=${startDate}&endDate=${endDate}
`);
    setData(res.data);

    const query = {
      originId: "1",
      destinationId: "9",
      startDate: changeToMiladi(startDate),
      endDate: changeToMiladi(endDate),
    };
    router.push({
      pathname: "/home",
      query,
    });
  };

  return (
    <div>
      <div className={styles.imgContainer}>
        <img
          src="Untitled_design__1_ (1).png"
          alt="banner"
          className={styles.banner}
        />
      </div>
      <p className={styles.headText}>
        <span className={styles.span1}>تورینو</span> برگزار کننده بهترین تور های
        داخلی و خارجی
      </p>
      <div className={styles.filterBar}>
        <div>
          <DropDown origin={origin} setOrigin={setOrigin} />
        </div>
        <div>
          <DropDown2
            destination={destination}
            setDestination={setDestination}
          />
        </div>
        <TourDatePiker
          startDate={startDate}
          endDate={endDate}
          setStartDate={setStartDate}
          setEndDate={setEndDate}
        />
        <button onClick={() => filterHandeler()}>جست و جو</button>
      </div>
      <div>
        <p className={styles.alltours}>همه تور ها</p>
        <div>
          {data.length > 0 ? (
            <Cards data={data} />
          ) : (
            <p
              style={{
                fontSize: "20px",
                padding: "30px",
                backgroundColor: "#f9f9f9",
                borderRadius: "10px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              در بازه انتخابی هیج توری یافت نشد!
            </p>
          )}
        </div>
        <div className={styles.greenBack}>
          <img src="Rectangle 3.png" alt="man" className={styles.cover} />
          <img
            src="professional-cartoon-man-talking-phone-icon-illustration_1151483-70336-removebg-preview 1.png"
            alt="man"
            className={styles.man}
          />
          <img src="Frame 33.png" alt="man" className={styles.number} />
          <button>اطلاعات بیشتر</button>
          <p className={styles.telephonBuy}>
            خرید تلفی از <span>تورینو</span>
          </p>
          <p className={styles.where}>به هرکجا که میخواهید!</p>
        </div>
        <section className={styles.textsection}>
          <img src="Polygon 1.png" className={styles.greenCircle} />
          <span className={styles.question}>؟</span>
          <p className={styles.why}>
            چرا <span>تورینو</span> ؟
          </p>
          <p className={styles.textTitle}>تور طبیعت گردی و تاریخی </p>
          <p className={styles.discrition}>
            اگر دوست داشته باشید که یک جاذبه طبیعی را از نزدیک ببینید و در دل
            طبیعت چادر بزنید یا در یک اقامتگاه بوم گردی اتاق بگیرید، باید تورهای
            طبیعت‌گردی را خریداری کنید. اما اگر بخواهید از جاذبه‌های گردشگری و
            آثار تاریخی یک مقصد خاص بازدید کنید، می‌توانید تورهای فرهنگی و
            تاریخی را خریداری کنید.
          </p>
        </section>
        <div>
          <ImageSlider />
        </div>
      </div>
      <div className={styles.offers}>
        <div className={styles.child}>
          <img src="Group 16.png" />
          <p className={styles.title1}>بصرفه ترین قیمت</p>
          <p className={styles.discrition1}>
            بصرفه ترین و ارزان ترین قیمت تور را از ما بخواهید.
          </p>
        </div>
        <div className={styles.child}>
          <img src="Group 17.png" />
          <p className={styles.title2}> پشتیبانی </p>
          <p className={styles.discrition2}>
            پشتیبانی و همراهی 24 ساعته در تمامی مراحل سفر شما.
          </p>
        </div>
        <div className={styles.child}>
          <img src="Group 18.png" />
          <p className={styles.title3}> رضایت کاربران </p>
          <p className={styles.discrition3}>
            رضایت بیش از 10هزار کاربر از تور های ما.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
