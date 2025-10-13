import dayjs from "dayjs";
import jalaliday from "jalaliday";

const chageDate = (date) => {
  dayjs.extend(jalaliday);

  const miladiDate = date;

  const shamsiDate = dayjs(miladiDate)
    .calendar("jalali")
    .locale("fa")
    .format("D MMMM YYYY");

  return shamsiDate;
};

const changeDateWithDay = (miladiDate) => {
  dayjs.extend(jalaliday);

  const date = miladiDate;

  const persianDate = dayjs(date)
    .calendar("jalali")
    .locale("fa")
    .format("dddd D MMMM YYYY");

  return persianDate;
};

const shamsiDate = (miladi) => {
  dayjs.extend(jalaliday);
  const date = dayjs(miladi)
    .calendar("jalali")
    .locale("fa")
    .format("YYYY/MM/DD");

  return date;
};

const changeToMiladi = (date) => {
  dayjs.extend(jalaliday);
  const shamsiDate = date;
  const miladi = dayjs(shamsiDate, { jalali: true })
    .calendar("gregory")
    .format("YYYY-MM-DD");
  return miladi;
};

export { chageDate, shamsiDate, changeToMiladi, changeDateWithDay };
