import Link from "next/dist/client/link";


const Navbar = () => {
    return ( 
        <nav>
            <Link href="/Christianingrum"><a>Christianingrum</a></Link>
            <Link href="/Evander"><a>Evander</a></Link>
            <Link href="/Rafli"><a>Muhamad Rafli</a></Link>
            <Link href="/Ram2"><a>Muhamad Rizki Ramadhan</a></Link>
            <Link href="/Zukri"><a>Muhamad Zukri Syahputra</a></Link>
           
        </nav>
     );
}
 
export default Navbar;
