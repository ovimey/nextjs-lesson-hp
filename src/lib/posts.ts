const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

export async function getAllPostsData() {
    const res = await fetch(apiUrl).then((res) => res.json());
    return res;
}
