import Image from 'next/image';
import { Inter } from 'next/font/google';
import  Layout  from '@/components/Layout';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
    return (
        <Layout title='Home'>
            <p className=' text-4xl'>Welcome to Nextjs</p>
        </Layout>
    );
}
