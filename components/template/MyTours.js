import Image from "next/image";
import styles from "./MyTours.module.css";
import NavBox from "../modules/NavBox";
import { changeDateWithDay } from "../partials/provider/jalali";

function MyTours({ data }) {
  return (
    <>
      <NavBox />
      {data?.length > 0 ? (
        <div className={styles.container}>
          {data.map((tour) => (
            <div className={styles.section} key={tour.id}>
              <div className={styles.grid}>
                <div className={styles.child} id={styles.title}>
                  <Image
                    src="/sun-fog (1).png"
                    alt="icon"
                    width={24}
                    height={24}
                  />
                  <span>{tour?.title}</span>
                </div>
                <div className={styles.child} id={styles.travelbuy}>
                  <Image
                    src="/airplane.png"
                    alt="icon"
                    width={24}
                    height={24}
                  />
                  <span>سفر با{tour?.fleetVehicle}</span>
                </div>
                <div className={styles.child} id={styles.originDatet}>
                  <p>
                    {tour?.origin?.name} به {tour?.destination?.name} :
                    <span>{changeDateWithDay(tour?.startDate)} </span>
                  </p>
                </div>
                <div className={styles.child} id={styles.destinationDatet}>
                  <p>
                    تاریخ برگشت:
                    <span> {changeDateWithDay(tour?.startDate)}</span>
                  </p>
                </div>
              </div>

              <div className={styles.footer}>
                <p className={styles.tounumber}>
                  شماره تور :<span>102095404</span>
                </p>
                <p className={styles.cash}>
                  مبلغ پرداخت شده: <span>{tour?.price} تومان</span>
                </p>
              </div>
              <p className={styles.status}>به اتمام رسیده</p>
            </div>
          ))}
        </div>
      ) : (
        <p style={{ textAlign: "center", marginTop: "30px" }}>
          هیچ توری وجود ندارد
        </p>
      )}
    </>
  );
}

export default MyTours;
