import Image from "next/image";
import styles from "./Cards.module.css";
import Link from "next/link";

function Cards({ data }) {
  return (
    <div className={styles.Cardcontainer}>
      {data.map((tour) => (
        <div key={tour.id}>
          <div className={styles.cards}>
            <Image src={tour.image} alt="photo" width={278.4375} height={150} />
            <p className={styles.title}>{tour.title}</p>
            <p className={styles.text}>مهر ماه . 3 روزه - پرواز - هتل 3 س...</p>
            <hr />
            <div className={styles.cardDetail}>
              <Link href={`/tourDetails/${tour.id}`}>
                <button>رزرو</button>
              </Link>
              <p>
                {tour.price} <span>تومان</span>
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cards;
