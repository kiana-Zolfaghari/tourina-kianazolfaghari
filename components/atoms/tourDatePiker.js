import { useState, useMemo } from "react";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import DateObject from "react-date-object";
import styles from "./tourDatePiker.module.css";

function TourDatePiker({ startDate, endDate, setStartDate, setEndDate }) {
  const [range, setRange] = useState([null, null]);

  const handleChange = (value) => {
    setRange(value);
    setStartDate(value[0] || null);
    setEndDate(value[1] || null);
  };

  // استفاده از useMemo برای جلوگیری از رندرهای اضافی
  const min = useMemo(
    () =>
      startDate
        ? new DateObject({ date: startDate, calendar: persian })
        : undefined,
    [startDate]
  );

  const max = useMemo(
    () =>
      endDate
        ? new DateObject({ date: endDate, calendar: persian })
        : undefined,
    [endDate]
  );

  return (
    <div className={styles.container}>
      <DatePicker
        value={range}
        onChange={handleChange}
        range
        calendar={persian}
        locale={persian_fa}
        calendarPosition="bottom-right"
        inputClass="border rounded w-full h-[50px] text-center cursor-pointer"
        className={styles.calender}
        placeholder=" تاریخ"
        minDate={min}
        maxDate={max}
      />
    </div>
  );
}

export default TourDatePiker;
