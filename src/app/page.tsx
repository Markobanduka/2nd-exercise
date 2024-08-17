import Search from "@/components/Search";
import FetchProducts from "@/FetchProducts";

const Home = () => {
  return (
    <div className="min-h-screen">
      <div className="flex">
        <h1 className="text-3xl font-bold mb-6 text-red-500 flex-1">
          Our Trending Products
        </h1>
        <Search />
      </div>
      <FetchProducts />
    </div>
  );
};

export default Home;
