import MyTours from "@/components/template/MyTours";
import api from "@/config/config";
import React, { useEffect, useState } from "react";

function Index() {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchMytours = async () => {
      try {
        const res = await api.get("/user/tours");

        setData(res.data);
      } catch (err) {
        console.error("Error fetching basket:", err);
      }
    };
    fetchMytours();
  }, []);

  return (
    <div>
      <MyTours data={data} />
    </div>
  );
}

export default Index;

// export async function getServerSideProps() {
//   const res = await api.get("/user/tours");
//   const data = res.data;

//   return {
//     props: {
//       data,
//     },
//   };
// }
