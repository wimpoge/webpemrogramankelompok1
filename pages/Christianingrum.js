import styles from '../styles/about.module.css'
import sosmed from '../styles/sosmed.module.css'
import bg from '../styles/Home.module.css'
import Link from 'next/link'
import Image from 'next/image'


const Christianingrum = () => {
    return (
        <>
         
      <title>CV | Christianingrum</title>
      <meta name="keywords" content="Head" />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"></link>
     
    
        
 
     <div className={styles.container}>
     <div className={bg.bgimg} >
         <Image src="/WhatsApp Image 2021-11-21 at 17.08.14.jpeg" width="200px" height="250px" alt="Foto" />
         <h3 className={styles.name}>Christianingrum</h3>
         </div>
     

        <div className={styles.card2}>
        <h3>Pengalaman Kerja</h3>
            <li>PNS</li>
            

        </div>

        <div className={sosmed.wrapper}>
            <div className ={sosmed.ul}>
            <li className={sosmed.Instagram}>
                 <a href="#" style={{ textDecoration: 'none' }} ><i className="bi bi-instagram"></i> Instagram</a>
                 </li>
            <li className={sosmed.Facebook}>
                 <a href="https://m.facebook.com/story.php?story_fbid=4875070325865728&id=100000884262368" style={{ textDecoration: 'none' }} ><i className="bi bi-facebook"></i> Facebook</a>
                </li>
            <li className={sosmed.Telegram}>
                 <a href="#" style={{ textDecoration: 'none' }} ><i className="bi bi-telegram"></i> Telegram</a>
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
 

export default Christianingrum;
