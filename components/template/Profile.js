import Image from "next/image";
import styles from "./Profile.module.css";
import NavBox from "../modules/NavBox";
import { useState } from "react";
import { changeToMiladi, shamsiDate } from "../partials/provider/jalali";
import DatePickers from "../atoms/DatePicker";
import api from "@/config/config";
import toast from "react-hot-toast";

function Profile({ profiledData, getPrifileData }) {
  const [isEdit, setIsEdit] = useState(false);
  const [personDataEdit, setPersonData] = useState(false);
  const [editAccount, setEditAccout] = useState(false);
  const [emai, setEmail] = useState("");
  const [fullname, setFullname] = useState("");
  const [nationalCode, setNationalCode] = useState();
  const [gender, setGender] = useState("");
  const [birthday, setBirthday] = useState("");
  const [shabaCode, setShabaCode] = useState("");
  const [debitCardCode, setDebitCardCode] = useState("");
  const [accountIdentifier, setAccountIdentifier] = useState("");

  const editProfile = () => {
    const data = {
      mobile: profiledData.mobile,
      email: emai,
      firstName: fullname,
      lastName: "Doe",
      gender: gender == "مرد" ? "male" : "female",
      birthDate: changeToMiladi(birthday),
      nationalCode: nationalCode,
      payment: {
        shaba_code: shabaCode,
        debitCard_code: debitCardCode,
        accountIdentifier: accountIdentifier,
      },
    };
    const res = api
      .put("/user/profile", data)
      .then((res) => toast.success(res.data.message))
      .catch((err) => toast.error("مشکلی پیش آمده"));
  };

  return (
    <div style={{ maxWidth: "1200px", margin: "auto" }}>
      <NavBox />
      <section className={styles.section1}>
        {isEdit && (
          <div>
            <input
              type="email"
              placeholder="آدرس ایمیل"
              value={emai}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              onClick={() => {
                setIsEdit((isEdit) => !isEdit);
                editProfile();
                getPrifileData();
              }}
            >
              تایید
            </button>
          </div>
        )}
        <p className={styles.title1}>اطلاعات حساب کاربری</p>
        <p className={styles.mobil}>
          شماره موبایل: <span>{profiledData?.mobile}</span>
        </p>
        <p className={styles.email}>
          ایمیل :<span>{profiledData?.email ? profiledData?.email : "--"}</span>
        </p>
        {!isEdit && (
          <>
            <Image src="/edit-2.png" alt="icon" width={16} height={16} />
            <span
              className={styles.add}
              onClick={() => {
                setIsEdit((isEdit) => !isEdit);
                setEmail(profiledData?.email);
              }}
            >
              افزودن
            </span>
          </>
        )}
      </section>

      <section className={styles.section2}>
        <p className={styles.title2}> اطلاعات شخصی</p>
        {!personDataEdit ? (
          <>
            <div className={styles.grid1}>
              <div className={styles.child}>
                <p className={styles.name}>
                  نام و نام خانوادگی :
                  <span>
                    {profiledData?.firstName ? profiledData?.firstName : "--"}
                  </span>
                </p>
              </div>
              <div className={styles.child}>
                <p className={styles.id}>
                  کدملی :
                  <span>
                    {profiledData?.nationalCode
                      ? profiledData?.nationalCode
                      : "--"}
                  </span>
                </p>
              </div>
              <div className={styles.child}>
                <p className={styles.gender}>
                  جنسیت :
                  <span>{profiledData?.gender == "male" ? "مرد" : "زن"}</span>
                </p>
              </div>
              <div className={styles.child}>
                <p className={styles.birthday}>
                  تاریخ تولد :
                  <span>
                    {shamsiDate(profiledData?.birthDate)
                      ? shamsiDate(profiledData?.birthDate)
                      : "--"}
                  </span>
                </p>
              </div>
            </div>
            <Image src="/edit-2.png" alt="icon" width={16} height={16} />
            <span
              className={styles.span}
              onClick={() => {
                setBirthday(shamsiDate(profiledData?.birthDate));
                setPersonData((personDataEdit) => !personDataEdit);
                setFullname(profiledData?.firstName);
                setNationalCode(profiledData?.nationalCode);
                setGender(profiledData?.gender === "male" ? "مرد" : "زن");
              }}
            >
              ویرایش اطلاعات
            </span>
          </>
        ) : (
          <>
            <div className={styles.inputs}>
              <input
                type="text"
                placeholder="نام و نام خانوادگی"
                onChange={(e) => setFullname(e.target.value)}
                value={fullname}
              />
              <input
                type="number"
                placeholder="کدملی"
                onChange={(e) => setNationalCode(e.target.value)}
                value={nationalCode}
              />
              <DatePickers birthday={birthday} />
              <select
                title="جنسیت"
                onChange={(e) => setGender(e.target.value)}
                value={gender}
              >
                <option value="female">زن</option>
                <option value="male">مرد</option>
              </select>
            </div>
            <div>
              <button
                className={styles.acceptbtns}
                onClick={() => {
                  setPersonData((personDataEdit) => !personDataEdit);
                  editProfile();
                  getPrifileData();
                }}
              >
                تایید
              </button>
              <button
                className={styles.cancelBtn}
                onClick={() =>
                  setPersonData((personDataEdit) => !personDataEdit)
                }
              >
                انصراف
              </button>
            </div>
          </>
        )}
      </section>

      <section className={styles.section3}>
        <p className={styles.title3}>اطلاعات حساب بانکی</p>
        {!editAccount ? (
          <>
            <div className={styles.grid2}>
              <div className={styles.child2}>
                <p className={styles.sheba}>
                  شماره شبا:
                  <span>
                    {profiledData?.payment?.shaba_code
                      ? profiledData?.payment?.shaba_code
                      : "--"}
                  </span>
                </p>
              </div>
              <div className={styles.child2}>
                <p className={styles.hesab}>
                  شماره حساب :
                  <span>
                    {profiledData?.payment?.debitCard_code
                      ? profiledData?.payment?.debitCard_code
                      : "--"}
                  </span>
                </p>
              </div>
              <div className={styles.child2}>
                <p className={styles.kart}>
                  شماره کارت :
                  <span>
                    {profiledData?.payment?.accountIdentifier
                      ? profiledData?.payment?.accountIdentifier
                      : "--"}
                  </span>
                </p>
              </div>
            </div>
            <Image src="/edit-2.png" alt="icon" width={16} height={16} />
            <span
              className={styles.span}
              onClick={() => {
                setEditAccout((editAccount) => !editAccount);
                setShabaCode(profiledData?.payment?.shaba_code);
                setDebitCardCode(profiledData?.payment?.debitCard_code);
                setAccountIdentifier(profiledData?.payment?.accountIdentifier);
              }}
            >
              ویرایش اطلاعات
            </span>
          </>
        ) : (
          <>
            <div className={styles.inputs}>
              <input
                type="text"
                placeholder="شماره شبا"
                onChange={(e) => setShabaCode(e.target.value)}
                value={shabaCode}
              />
              <input
                type="number"
                placeholder="شماره حساب "
                onChange={(e) => setDebitCardCode(e.target.value)}
                value={debitCardCode}
              />
              <input
                type="number"
                placeholder="شماره کارت "
                onChange={(e) => setAccountIdentifier(e.target.value)}
                value={accountIdentifier}
              />
            </div>
            <div>
              <button
                className={styles.acceptbtns}
                onClick={() => {
                  setEditAccout((editAccount) => !editAccount);
                  editProfile();
                  getPrifileData();
                }}
              >
                تایید
              </button>
              <button
                className={styles.cancelBtn}
                onClick={() => setEditAccout((editAccount) => !editAccount)}
              >
                انصراف
              </button>
            </div>
          </>
        )}
      </section>
    </div>
  );
}

export default Profile;
