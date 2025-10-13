import Transactions from "@/components/template/Transactions";
import api from "@/config/config";
import React, { useEffect, useState } from "react";

function Index() {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchBasket = async () => {
      try {
        const res = await api.get("/user/transactions");
        if (res.data.message === "سبد خرید شما خالی است") return;

        setData(res.data);
      } catch (err) {
        console.error("Error fetching basket:", err);
      }
    };
    fetchBasket();
  }, []);

  return (
    <div>
      <Transactions data={data} />
    </div>
  );
}

export default Index;

// export async function getServerSideProps() {
//   const res = await api.get("/user/transactions");
//   const data = res.data;

//   return {
//     props: {
//       data,
//     },
//   };
// }
