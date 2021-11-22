import Link from 'next/dist/client/link'
import styles from '../styles/Home.module.css'
import { useEffect } from 'react';
import router, { useRouter } from 'next/router'
import * as React from "react";


function App() {
    const [counter, setCounter] = React.useState(3);
    
    React.useEffect(() => {
      const timer =
        counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
        setTimeout(() => {
            router.push('/')
        }, 3000);
       
        
      return () => clearInterval(timer);
    }, [counter]);

    
    return ( 
        <div className="not-found">
            <div className={styles.container}>
            <h1>Halaman Tidak Dapat Ditemukan</h1>
            <p>Kembali ke <Link href="/">Halaman utama </Link>dalam { counter } detik </p>
        </div>
        </div>
     );
}
export default App;