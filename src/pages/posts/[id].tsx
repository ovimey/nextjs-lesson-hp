import Layout from '@/components/Layout';
import { getAllPostIds, getPostData } from '@/lib/posts';
import Link from 'next/link';

export default function Post({ post }: any) {
    if (!post) {
        return <div>Loading...</div>;
    }
    return (
        <Layout title={post.title}>
            <p className=' m-4'>
                {'ID : '}
                {post.id}
            </p>
            <p className=' mb-8 text-xl font-bold'>{post.title}</p>
            <p className=' px-10'>{post.body}</p>
            <Link href='/blog-page'>
                <div className=' flex items-center cursor-pointer mt-12'>
                    <svg
                    className=' w-6 h-6 mr-3'
                        fill='none'
                        stroke='currentColor'
                        stroke-width='1.5'
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'
                        aria-hidden='true'
                    >
                        <path
                            stroke-linecap='round'
                            stroke-linejoin='round'
                            d='M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5'
                        ></path>
                    </svg>
                    <span>Back to blog-page</span>
                </div>
            </Link>
        </Layout>
    );
}

export async function getStaticPaths() {
    const paths = await getAllPostIds();
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }: any) {
    const { post: post } = await getPostData(params.id);
    return {
        props: {
            post,
        },
    };
}
