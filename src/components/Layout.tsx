import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
    children: any;
    title?: string | undefined;
};

const Layout: React.FC<Props> = ({
    children,
    title = 'HP by Nextjs',
}) => {
    return (
        <div className=' flex justify-center items-center flex-col min-h-screen text-gray-600 text-sm font-mono '>
            <Head>
                <title>{title}</title>
            </Head>
            <header>
                <nav className=' bg-gray-800 w-screen'>
                    <div className=' flex items-center pl-8 h-14'>
                        <div className=' flex space-x-4'>
                            <Link
                                href='/'
                                className=' text-gray-300 hover:bg-gray-700 px-3 py-2 rounded'
                            >
                                Home
                            </Link>
                            <Link
                                href='/blog-page'
                                className=' text-gray-300 hover:bg-gray-700 px-3 py-2 rounded'
                            >
                                Blog
                            </Link>
                            <Link
                                href='/contact-page'
                                className=' text-gray-300 hover:bg-gray-700 px-3 py-2 rounded'
                            >
                                Contact
                            </Link>
                        </div>
                    </div>
                </nav>
            </header>
            <main className=' flex flex-1 justify-center items-center flex-col w-screen'>
                {children}
            </main>
            <footer className=' w-full h-12 flex justify-center items-center border-t'>
                <a className=' flex items-center' href='#'>
                    Powered by&nbsp;
                    <Image
                        src='/vercel.svg'
                        alt='Vercel Logo'
                        width={72}
                        height={16}
                    />
                </a>
            </footer>
        </div>
    );
};

export default Layout;