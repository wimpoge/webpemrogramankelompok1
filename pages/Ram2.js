import styles from '../styles/about.module.css'
import sosmed from '../styles/sosmed.module.css'
import bg from '../styles/Home.module.css'
import Link from 'next/link'
import Image from 'next/image'

const Ram2 = () => {
    return (
        <>
         
      <title>CV | Rizki Ramadhan</title>
      <meta name="keywords" content="Head" />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"></link>
    

     <div className={styles.container}>
     <div className={bg.bgimg} >
         <Image src="/WhatsApp Image 2021-11-21 at 16.46.46.jpeg" width="200px" height="235px" alt="Foto" />
         <h3 className={styles.name}>Muhamad Rizki Ramadhan</h3>
         </div>

        <div className={styles.card2}>
        <h3>Pengalaman Kerja</h3>
            <li>(Magang) Bristol Asia Technology Maret-May 2017 </li>
            <br/>

            <h3>Sertifikat</h3>
                <a href="/WhatsApp Image 2021-11-23 at 20.10.11.jpeg"><h2>Online Course “Cisco Superlab Nixtrain” - 2020</h2></a>
                <h2>Mikrotik Certified Network Associate (MTCNA) - 2017</h2>
                    
        </div>
        <div className={sosmed.wrapper}>
            <div className ={sosmed.ul}>
            <li className={sosmed.Instagram}>
                 <a href="http://www.instagram.com/rizki_ramram" style={{ textDecoration: 'none' }} ><i className="bi bi-instagram"></i> Instagram</a>
                 </li>
            <li className={sosmed.Facebook}>
                 <a href="http://www.facebook.com/Rizki123456987" style={{ textDecoration: 'none' }} ><i className="bi bi-facebook"></i> Facebook</a>
                </li>
            <li className={sosmed.Telegram}>
                 <a href="http://t.me/rizkiramram" style={{ textDecoration: 'none' }} ><i className="bi bi-telegram"></i> Telegram</a>
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
 

export default Ram2;
