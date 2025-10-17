import HomePage from "@/components/template/HomePage";
import api from "@/config/config";

import { useEffect, useState } from "react";

function Home({ tours }) {
  const [data, setData] = useState(tours);

  // useEffect(() => {
  //   const get = async () => {
  //     const res = await api.get("/tour");
  //     setData(res.data);
  //   };
  //   get();
  // }, []);

  return (
    <>
      <HomePage data={data} setData={setData} />;
    </>
  );
}

export default Home;

export async function getStaticProps() {
  const res = await fetch("http://localhost:6500/tour");
  const tours = await res.json();
  return {
    props: {
      tours,
    },
    revalidate: 600,
  };
}
