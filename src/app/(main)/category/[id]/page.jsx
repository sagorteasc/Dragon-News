import Categories from "@/components/HomePage/Categories";
import News from "@/components/HomePage/News";
import Socials from "@/components/HomePage/Socials";
import { getCategories, getNews } from "@/lib/data";

const NewsCategoryPage = async ({ params }) => {
    const { id } = await params;
    const allCategories = await getCategories();
    const news = await getNews(id);

    return (
        <div className="container mx-auto mt-10">
            <div className="grid grid-cols-12 gap-3">
                <div className="col-span-3">
                    <Categories allCategories={allCategories} activeBtn={id} />
                </div>

                <div className="col-span-6">
                    <h3 className="text-xl font-semibold text-gray-600 mb-2">Dragon News Home</h3>
                    <div className="space-y-3">
                        {
                            news.length === 0 ?
                                <div className="flex justify-center items-center h-62">
                                    <h1 className="text-5xl font-semibold text-purple-500">No News Found</h1>
                                </div>
                                : news.map(n => (
                                    <News key={n._id} n={n} />
                                ))
                        }
                    </div>
                </div>

                <div className="col-span-3">
                    <Socials />
                </div>
            </div>
        </div>
    );
};

export default NewsCategoryPage;