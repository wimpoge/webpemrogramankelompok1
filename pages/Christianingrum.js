import styles from '../styles/about.module.css'
import sosmed from '../styles/sosmed.module.css'




const Christianingrum = () => {
    return (
        <>
         
      <title>CV | Christianingrum</title>
      <meta name="keywords" content="Head" />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"></link>
     
    
        
 
     <div className={styles.container}>
       

        <div className={styles.card2}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
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
        </div>
                 
                 
    </div>
    <img src={'../public/24118357.jpg'} alt=""/>erg
  </>
      );
}
 

export default Christianingrum;
