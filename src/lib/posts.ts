const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

export async function getAllPostsData() {
    const res = await fetch(apiUrl).then((res) => res.json());
    return res;
}

export async function getAllPostIds() {
    const res = await fetch(apiUrl).then((res) => res.json());
    return res.map((post: any) => {
        return {
            params: {
                id: String(post.id),
            },
        };
    });
}

export async function getPostData(id: any) {
    const post = await fetch(`${apiUrl}/${id}/`).then((res) => res.json());
    return {
        post,
    };
};