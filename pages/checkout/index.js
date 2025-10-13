import CheckoutPage from "@/components/template/CheckoutPage";
import api from "@/config/config";
import React, { useEffect, useState } from "react";

function Checkout() {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchBasket = async () => {
      try {
        const res = await api.get("/basket");
        if (res?.data?.message === "سبد خرید شما خالی است") return;

        setData(res.data);
      } catch (err) {
        console.error("Error fetching basket:", err);
      }
    };
    fetchBasket();
  }, []);

  return (
    <div>
      <CheckoutPage data={data} />
    </div>
  );
}

export default Checkout;

// export async function getServerSideProps() {
//   const res = await api.get("/basket");
//   const data = res.data;

//   return {
//     props: {
//       data,
//     },
//   };
// }
