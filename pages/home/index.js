import HomePage from "@/components/template/HomePage";
import api from "@/config/config";

import { useEffect, useState } from "react";

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const get = async () => {
      const res = await api.get("/tour");
      setData(res.data);
    };
    get();
  }, []);

  return (
    <>
      <HomePage data={data} setData={setData} />;
    </>
  );
}

export default Home;

// export async function getStaticProps() {
//   const res = await api.get("/tour");
//   const data = res?.data || null;
//   return {
//     props: {
//       data,
//     },
//     revalidate: 600,
//   };
// }
