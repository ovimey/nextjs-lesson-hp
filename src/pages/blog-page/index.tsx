import  Layout  from '@/components/Layout';
import Post from '@/components/Post';
import { getAllPostsData } from '@/lib/posts';

const Blog: React.FC<any> = ({posts}) => {
    return (
        <Layout title='Bolg'>
            <ul className=' m-10'>
                {posts && posts.map((post: any) => <Post key={post.id} post={post} />)}
            </ul>
        </Layout>
    )
};

export default Blog;

export async function getStaticProps() {
    const posts = await getAllPostsData();
    return {
        props: {posts},
    }
}
