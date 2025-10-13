"use client";

import styles from "./Slilder.module.css";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function ImageSlider() {
  return (
    <div className={styles.sliderContainer}>
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        spaceBetween={0}
        centeredSlides={true}
        loop={true}
        navigation={true}
        pagination={{ clickable: true, type: "fraction" }}
        className={styles.pb10}
      >
        <SwiperSlide>
          <div className={styles.images}>
            <Image
              src="/image_SI3sJmh4_1727080822376_raw.png"
              alt="عکس 1"
              width={400}
              height={300}
              className={styles.img1}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="p-2 rounded-2xl border-2 border-purple-500">
            <Image
              src="/OIP (8).png"
              alt="عکس 2"
              width={400}
              height={300}
              className={styles.img1}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="p-2 rounded-2xl border-2 border-purple-500">
            <Image
              src="/R (1).png"
              alt="عکس 3"
              width={400}
              height={300}
              className={styles.img1}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="p-2 rounded-2xl border-2 border-purple-500">
            <Image
              src="/اربیل-4.png"
              alt="عکس 4"
              width={400}
              height={300}
              className={styles.img1}
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
