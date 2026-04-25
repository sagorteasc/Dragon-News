export const getCategories = async () => {
    const data = await fetch("https://openapi.programming-hero.com/api/news/categories").then(res => res.json())
    return data.data
}

export const getNews = async (category_id) => {
    const data = await fetch(`https://openapi.programming-hero.com/api/news/category/${category_id}`).then(res => res.json())
    console.log(data.data);
    return data.data;
}


export const getNewsDetails = async (news_id) => {
    const data = await fetch(`https://openapi.programming-hero.com/api/news/${news_id}`).then(res => res.json())
    console.log(data.data);
    return data.data[0];
}