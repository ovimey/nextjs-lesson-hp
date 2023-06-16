import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className=' min-h-screen py-0 px-2 flex flex-col justify-center items-center'>
      <h1>Hello</h1>
    </div>
  );
}
