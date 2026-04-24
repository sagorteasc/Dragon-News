import Categories from "@/components/HomePage/Categories";
import Socials from "@/components/HomePage/Socials";

const getCategories = async () => {
  const data = await fetch("https://openapi.programming-hero.com/api/news/categories").then(res => res.json())
  return data.data
}

const Home = async () => {

  const allCategories = await getCategories();

  return (
    <div className="container mx-auto mt-10">
      <div className="grid grid-cols-12 gap-3">
        <div className="col-span-3">
          <Categories allCategories={allCategories} activeBtn={null} />
        </div>

        <div className="col-span-6">
          <h1>news</h1>
        </div>

        <div className="col-span-3">
          <Socials />
        </div>
      </div>
    </div>
  );
};

export default Home;