import styles from '../styles/about.module.css'
import sosmed from '../styles/sosmed.module.css'
import Image from 'next/image'
import Link from 'next/link'


const Rafli = () => {
    return (
        <>
       
      <title>CV | Muhamad Rafli</title>
      <meta name="keywords" content="Head" />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"></link>
     
      
 
     <div className={styles.container}>
     <div className={styles.img} >
         <img src="/24118357.jpg" width="200px" height="250px" />
         <h3 className={styles.name}>Muhamad Rafli</h3>
         </div>

        <div className={styles.card2}>
        <h3>Pengalaman Kerja</h3>
            <li>(Magang) PT. Sewiwi Indonesia </li>
            <li>Programmer Laboratorium Psikologi – 2019 - Sekarang</li>

            
            <br/>

        <h3>Sertifikat</h3>
        <a target="_blank" href="https://drive.google.com/file/d/1pSe88yEavA7pTJUhGYOrw_xfIf3cKTRN/view?usp=sharing"><h2>Mikrotik Certified Network Associate (MTCNA) - 2018</h2></a>
        <a target="_blank" href="/21_MUHAMAD RAFLI.jpg"><h2>Programmer Lab. Psikologi Dasar – 2020 & 2021</h2></a>
        <a target="_blank" href="https://drive.google.com/file/d/1OJkX_uSeGw7uF_pkNL0VObxYWJDuoPK8/view?usp=sharing"><h2>Online Course “Web Development” - 2021</h2></a>
        <a target="_blank" href="https://drive.google.com/file/d/1szJHUmjtKpMxx50hR0eqbijp0iVoMvXa/view?usp=sharing"><h2>Belajar Dasar Pemrograman Web - Dicoding</h2></a>
        
        </div>
        <div className={sosmed.wrapper}>
            <button className={sosmed.Instagram}>
                 <a target="_blank" href="https://www.instagram.com/pli.__/" style={{ textDecoration: 'none' }}><i className="bi bi-instagram"></i> Instagram</a>
                 </button>
            <button className={sosmed.Facebook}>
                 <a target="_blank" href="https://www.facebook.com/profile.php?id=100007243809678" style={{ textDecoration: 'none' }}><i className="bi bi-facebook"></i> Facebook</a>
                </button>
            <button className={sosmed.Telegram}>
                 <a target="_blank" href="https://t.me/DollFaceKillah" style={{ textDecoration: 'none' }}><i className="bi bi-telegram"></i> Telegram</a>
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
 

export default Rafli;
