import TourDetails from "@/components/template/TourDetails";
import api from "@/config/config";
import { useRouter } from "next/router";
// import { notFound } from "next/navigation";
import React, { useEffect, useState } from "react";

function Index() {
  const router = useRouter();

  const [tourDetail, setTourDetail] = useState();

  useEffect(() => {
    const fetchBasket = async () => {
      try {
        const res = await api.get(`/tour/${router.query.tourId}`);

        setTourDetail(res?.data);
      } catch (err) {
        console.error("Error fetching basket:", err);
      }
    };
    fetchBasket();
  }, []);

  return (
    <div>
      <TourDetails tourDetail={tourDetail} />
    </div>
  );
}

export default Index;

// export async function getStaticPaths() {
//   const res = await api.get("/tour");
//   const json = res.data;
//   const data = json.slice(0, 10);

//   const paths = data.map((i) => ({ params: { tourId: i.id.toString() } }));

//   return {
//     paths,
//     fallback: true,
//   };
// }

// export async function getStaticProps(context) {
//   const { params } = context;

//   const res = await api.get(`/tour/${params.tourId}`);
//   const tourDetail = res.data;

//   return {
//     props: {
//       tourDetail,
//     },
//     revalidate: 360,
//   };
// }
