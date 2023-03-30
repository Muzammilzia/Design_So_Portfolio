import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { HomeBanner } from '@/components/home/banner';
import { HomeMain } from '@/components/home/main';
import { Testimonials } from '@/components/home/testimonials';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <HomeBanner/>
      <HomeMain/> 
      <Testimonials/>
    </>
  )
}
