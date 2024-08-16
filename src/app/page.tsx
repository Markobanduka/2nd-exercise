import FetchProducts from "@/FetchProducts";

const Home = async () => {
  return (
    <div className="min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-red-500">
        Our Trending Products
      </h1>
      <FetchProducts />
    </div>
  );
};

export default Home;
