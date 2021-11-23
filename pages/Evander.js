import styles from '../styles/about.module.css'
import sosmed from '../styles/sosmed.module.css'
import React from "react";
import Link from "next/link";
import Image from "next/image";



const Evander = () => {
    return (

        <> 
      <title>CV | Evander</title>
      <meta name="keywords" content="Head" />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"></link>
     
 
 
     <div className={styles.container}>
        
     <div className={styles.img} >
         <Image src="/WhatsApp Image 2021-11-21 at 16.48.32.jpeg" width="200px" height="250px" alt="Foto" />
         <h3 className={styles.name}>Evander</h3>
         </div>
        <div className={styles.card2}>
            
        <h3>Pengalaman Kerja</h3>
            <li>(Magang) Admin PT. MADEP Februari-April 2017 </li>
            <li>Website Development SMK Prestasi Prima – 2017-2018 Sertifikat</li>
            <li>Sertifikat Kompetensi Jaringan Universitas Amikom Yogyakarta – 2018</li>
            <br/>

        <h3>Seminar</h3>         
        <li>Application of Future For Hardware Technology (Peserta)-2019</li>
        <li>Rapid Application Development with Code Generator For Mobile Application and IoT monitoring (Peserta) 2020</li>
        <br/>

        <h3>Sertifikat</h3>
        <h2>Sertifikat Kompetensi Jaringan Universitas Amikom Yogyakarta – 2018</h2>
        </div>

   
        
        <div className={sosmed.wrapper}>
            <div className ={sosmed.ul}>
            <li className={sosmed.Instagram}>
                 <a href="http://www.instagram.com/evandermanurung/" style={{ textDecoration: 'none' }} ><i className="bi bi-instagram"></i> Instagram</a>
                 </li>
            {/* <li className={sosmed.Facebook}>
                 <a href="#" style={{ textDecoration: 'none' }} ><i className="bi bi-facebook"></i> Facebook</a>
                </li> */}
            <li className={sosmed.Telegram}>
                 <a href="http://t.me/evandermanurung" style={{ textDecoration: 'none' }} ><i className="bi bi-telegram"></i> Telegram</a>
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
 

export default Evander;
