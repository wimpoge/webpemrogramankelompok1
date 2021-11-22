import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import navbar from '../components/Navbar'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Link from 'next/link'

export default function Home() {
  return (
    <>
    <Head>
      <title>CV | Home</title>
      <meta name="keywords" content="Main" />
    </Head>
      <div className={styles.container}>

        <h1>Pemrograman Web</h1> 
        
        <h2>CV</h2>
       
      </div>
      </>
  )
}
