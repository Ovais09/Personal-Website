
import Link from 'next/link'
import { useRouter } from 'next/router'


export default function NavBar() {

    const router = useRouter()
    const { pathname } = router;

    return (
        <>
            <style jsx>{`
                nav {
                    display: inline-block;
                    background-color: #FFFFFF;
                    width: 100%;
                    height: 50px;
                    border: 2px solid black;
                    position: fixed;
                    top: 0;
                    z-index: 1;                    
                }
                a {
                    color: black;
                    display: inline;
                    padding: 15px;
                    float: left;
                    text-decoration: none;
                }
                a:hover {
                    text-decoration: underline;
                }
                body {
                    color: red;
                }    
                img {
                    display: inline-block;
                    margin: 10px;
                }
                ul img {
                    float: right;
                }
                a.active {
                    color: red;
                  }

                
            `}</style>
            <nav>
                <ul>
                    <Link href='/' legacyBehavior><a className={pathname === '/' ? 'active' : ''}>ABOUT</a></Link>
                    <Link href='/education' legacyBehavior><a className={pathname === '/education' ? 'active' : ''}>EDUCATION</a></Link>
                    <Link href='/experience' legacyBehavior><a className={pathname === '/experience' ? 'active' : ''}>EXPERIENCE</a></Link>
                    <Link href='/projects' legacyBehavior><a className={pathname === '/projects' ? 'active' : ''}>PROJECTS</a></Link>
                    <Link href='/contact' legacyBehavior><a className={pathname === '/contact' ? 'active' : ''}>CONTACT</a></Link>
                    <Link href='https://www.linkedin.com/in/ovais-azeem-562829197/'> <img src='linkedin.png' alt='linkedin' height = '25' width='25' /> </Link>
                    <Link href='https://github.com/Ovais09'><img src = 'github-sign.png' height='25' width='25' alt = 'github'/></Link>
                </ul>
            </nav>
        </>
    )
}
