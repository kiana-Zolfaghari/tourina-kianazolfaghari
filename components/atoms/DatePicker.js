import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

import styles from "./DatePickers.module.css";

function DatePickers({ birthday, setBirthday }) {
  return (
    <div className={styles.container}>
      <DatePicker
        value={birthday}
        onChange={setBirthday}
        calendar={persian}
        locale={persian_fa}
        calendarPosition="bottom-right"
        inputClass="border rounded w-full h-[50px] text-center cursor-pointer"
        className={styles.calender}
        placeholder="تاریخ تولد"
      />
      {/* <p>تاریخ انتخابی: {birthday?.format?.("YYYY/MM/DD")}</p> */}
    </div>
  );
}

export default DatePickers;
