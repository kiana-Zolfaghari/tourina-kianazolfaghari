import TourDetails from "@/components/template/TourDetails";

function Index({ tourDetail }) {
  return (
    <div>
      <TourDetails tourDetail={tourDetail} />
    </div>
  );
}

export default Index;

export async function getStaticPaths() {
  const res = await fetch("http://localhost:6500/tour");
  const json = await res.json();

  const data = json?.slice(0, 3);

  const paths = data?.map((i) => ({ params: { tourId: i.id.toString() } }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { params } = context;

  const res = await fetch(`http://localhost:6500/tour/${params.tourId}`);
  const tourDetail = await res.json();

  return {
    props: {
      tourDetail,
    },
    revalidate: 360,
  };
}
