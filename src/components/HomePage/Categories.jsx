import Link from "next/link";

const Categories = async ({ allCategories, activeBtn }) => {
    return (
        <div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">All Category</h3>
            <ul
                className="text-center flex flex-col gap-2 py-2"
            >
                {
                    allCategories.news_category.map(category => (
                        <li
                            key={category.category_id}
                            className=
                            {`font-semibold text-xl py-2 
                                ${activeBtn === category.category_id ?
                                    "text-white bg-purple-500"
                                    : "text-gray-500"}`
                            }
                        >
                            <Link href={`/category/${category.category_id}`} className="block">{category.category_name}</Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default Categories;