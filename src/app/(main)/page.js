import { redirect } from "next/navigation";

const default_category = ("01")

const Home = async () => {
  redirect(`/category/${default_category}`)
};

export default Home;