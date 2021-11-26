import styles from '../styles/about.module.css'
import sosmed from '../styles/sosmed.module.css'
import bg from '../styles/Home.module.css'
import Link from 'next/link'
import Image from 'next/image'

const Zukri = () => {
    return (
        <>
         
      <title>CV | Zukri</title>
      <meta name="keywords" content="Head" />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"></link>
    
      
 
     <div className={styles.container}>
     <div className={bg.bgimg} >
         <Image src="/WhatsApp Image 2021-11-21 at 16.46.57.jpeg" width="200px" height="200px" alt="Foto" />
         <h3 className={styles.name}>Muhamad Zukri Syahputra</h3>
         </div>

        <div className={styles.card2}>
        <h3>Pengalaman Kerja</h3>
            <li>(Magang) Haka Aksesoris PC 2017-2018 </li>
            <br/>


        <h3>Sertifikat</h3>
        <h2>Sertifikat Lembaga Latihan Kerja Kejuruan 2017</h2>
        <h2>Sertifikat Kompetensi PT. GemaBangun PRONAPERKASA 2018</h2>
        <h2>Sertifikat FICION ‘ Inovasi di Tengah Pandemi ‘ 2021</h2>
        </div>

        

        <div className={sosmed.wrapper}>
            <div className ={sosmed.ul}>
            <li className={sosmed.Instagram}>
                 <a href="https://www.instagram.com/zukrayy/" style={{ textDecoration: 'none' }} ><i className="bi bi-instagram"></i> Instagram</a>
                 </li>
            <li className={sosmed.Facebook}>
                 <a href="http://t.me/Krayyx" style={{ textDecoration: 'none' }} ><i className="bi bi-facebook"></i> Facebook</a>
                </li>
            <li className={sosmed.Telegram}>
                 <a href="http://t.me/Krayyx" style={{ textDecoration: 'none' }} ><i className="bi bi-telegram"></i> Telegram</a>
                </li>
                <br />   
            <li className={sosmed.Home}>
                 <Link href="/" style={{ textDecoration: 'none' }}><a style={{ textDecoration: 'none' }}><i className="bi bi-house"></i> Halaman Utama</a></Link>
                </li>  
            </div> 
   </div>
                 
                 
    </div>
  </>
      );
}
 

export default Zukri;
