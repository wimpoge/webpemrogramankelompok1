import styles from '../styles/about.module.css'
import sosmed from '../styles/sosmed.module.css'
import React from "react";



const Evander = () => {
    return (

        <> 
      <title>CV | Evander</title>
      <meta name="keywords" content="Head" />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"></link>
     
 
 
     <div className={styles.container}>
        
     <div className={styles.img} >
         <img src="/WhatsApp Image 2021-11-21 at 16.48.32.jpeg" width="200px" height="250px" />
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
        <button className={sosmed.Instagram}>
                 <a href="#" style={{ textDecoration: 'none' }}><i className="bi bi-instagram"></i> Instagram</a>
                 </button>
            <button className={sosmed.Facebook}>
                 <a href="#" style={{ textDecoration: 'none' }}><i className="bi bi-facebook"></i> Facebook</a>
                </button>
            <button className={sosmed.Twitter}>
                 <a href="#" style={{ textDecoration: 'none' }}><i className="bi bi-twitter"></i> Twitter</a>
                </button>
                <br/>
                <button className={sosmed.Home}>
                 <a href="/" style={{ textDecoration: 'none' }}><i className="bi bi-house"></i> Halaman Utama</a>
                </button>  
                </div>
    </div>
  </>
      );
}
 

export default Evander;
