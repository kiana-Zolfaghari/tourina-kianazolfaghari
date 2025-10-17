import Image from "next/image";
import styles from "./TourDetail.module.css";
import Link from "next/link";
import { chageDate } from "../partials/provider/jalali";
import api from "@/config/config";
import { useRouter } from "next/router";
import toast from "react-hot-toast";
import { getToken } from "@/core/utils/cookie";
import { useContext } from "react";
import { DialogContext } from "../partials/provider/DialogProdider";

function TourDetails({ tourDetail }) {
  const { setIsOpen, isOpen } = useContext(DialogContext);
  const startDate = chageDate(tourDetail?.startDate);
  const endDate = chageDate(tourDetail?.endDate);
  const { push } = useRouter();

  const addTobasket = (id) => {
    const token = getToken("accessToken");
    if (!token) {
      toast.error("!برای خرید و رزرو تور وارد پنل کاربری خود شوید");
      setIsOpen(true);
      return;
    }

    api
      .put(`/basket/${id}`)
      .then((res) => {
        toast.success(res.data.message);
        push("/checkout");
      })
      .catch((err) => toast.error("مشکلی پیش آمده"));
  };

  return (
    <>
      <div className={styles.box}>
        <Image
          src={tourDetail?.image}
          alt="image"
          width={397}
          height={365}
          className={styles.image}
        />
        <p className={styles.boxtitle}> {tourDetail?.title} </p>
        <p className={styles.duedate}>5 روز و 4 شب</p>
        <section className={styles.section1}>
          <div className={styles.plans}>
            <Image
              src="/user-tick.png"
              alt="icon"
              width={24}
              height={24}
              className={styles.img1}
            />
            <span>تورلیدر از مبدا</span>
          </div>
          <div className={styles.plans}>
            <Image
              src="/map.png"
              alt="icon"
              width={24}
              height={24}
              className={styles.img2}
            />
            <span>برنامه سفر</span>
          </div>
          <div className={styles.plans}>
            <Image
              src="/medal-star.png"
              alt="icon"
              width={24}
              height={24}
              className={styles.img3}
            />
            <span>تضمین کیفیت</span>
          </div>
        </section>
        <p className={styles.prices}>
          {tourDetail?.price}
          <span>تومان</span>
        </p>

        <button
          className={styles.btn}
          onClick={() => addTobasket(tourDetail.id)}
        >
          رزرو و خرید
        </button>
        <section className={styles.section2}>
          <div className={styles.informations} id={styles.part1}>
            <div>
              <Image src="/routing-2.png" alt="icon" width={20} height={20} />
              <span className={styles.tit}>مبدا</span>
            </div>
            <p className={styles.p}>{tourDetail?.origin?.name}</p>
          </div>
          <Image
            src="/Line 13.png"
            alt="icon"
            width={2}
            height={64}
            className={styles.line}
          />
          <div className={styles.informations} id={styles.part2}>
            <div>
              <Image
                src="/calendar (1).png"
                alt="icon"
                width={20}
                height={20}
              />
              <span className={styles.tit}>تاریخ رفت</span>
            </div>
            <p className={styles.p}> {startDate} </p>
          </div>
          <Image
            src="/Line 13.png"
            alt="icon"
            width={2}
            height={64}
            className={styles.line}
          />
          <div className={styles.informations} id={styles.part3}>
            <div>
              <Image
                src="/calendar (1).png"
                alt="icon"
                width={20}
                height={20}
              />
              <span className={styles.tit}>تاریخ برگشت</span>
            </div>
            <p className={styles.p}> {endDate} </p>
          </div>
          <Image
            src="/Line 13.png"
            alt="icon"
            width={2}
            height={64}
            className={styles.line}
          />
          <div className={styles.informations}>
            <div>
              <Image src="/bus (2).png" alt="icon" width={20} height={20} />
              <span className={styles.tit}>حمل و نقل</span>
            </div>
            <p className={styles.p}>{tourDetail?.fleetVehicle}</p>
          </div>
          <Image
            src="/Line 13.png"
            alt="icon"
            width={2}
            height={64}
            className={styles.line}
          />
          <div className={styles.informations}>
            <div>
              <Image
                src="/profile-2user.png"
                alt="icon"
                width={20}
                height={20}
              />
              <span className={styles.tit}>ظرفیت</span>
            </div>
            <p className={styles.p}>حداکثر {tourDetail?.availableSeats} نفر</p>
          </div>
          <Image
            src="/Line 13.png"
            alt="icon"
            width={2}
            height={64}
            className={styles.line}
          />
          <div className={styles.informations}>
            <div>
              <Image src="/security.png" alt="icon" width={20} height={20} />
              <span className={styles.tit}>بیمه</span>
            </div>
            <p className={styles.p}>بیمه {tourDetail?.capacity} هزار دیناری</p>
          </div>
        </section>
      </div>
    </>
  );
}

export default TourDetails;
