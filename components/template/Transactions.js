import NavBox from "../modules/NavBox";
import { shamsiDate } from "../partials/provider/jalali";
import styles from "./transactions.module.css";

function Transactions({ data }) {
  return (
    <>
      <NavBox />
      <div className={styles.container}>
        <table>
          <thead className={styles.thead}>
            <tr>
              <th>تاریخ و ساعت</th>
              <th>مبلغ (تومان)</th>
              <th>نوع تراکنش</th>
              <th>شماره سفارش</th>
            </tr>
          </thead>
          {data?.length > 0 ? (
            <>
              {data.map((i) => (
                <tbody className={styles.tbody} key={i.id}>
                  <tr>
                    <td>{shamsiDate(i?.createdAt)} - 14:24</td>
                    <td>{i?.amount}</td>
                    <td>ثبت نام در تور گردشگری</td>
                    <td>سفارش 12054902</td>
                  </tr>
                </tbody>
              ))}
            </>
          ) : (
            <tr style={{ textAlign: "center", marginTop: "30px" }}>
              <td> هیچ توری وجود ندارد</td>
            </tr>
          )}
        </table>
      </div>
    </>
  );
}

export default Transactions;
