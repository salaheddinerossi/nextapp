import Image from "next/image";
import Link from "next/link";
import applestore from "../../assets/images/apps/applestore.png";
import playstore from "../../assets/images/apps/playstore.png";
import styles from '../../styles/Footer.module.css'

function Footer(){
    return (
        <div className="bg-stone-900 flex flex-row items-center 	">
            <div className="pl-16 items-center basis-1/2 ">
                <h1 className={styles.title+" my-10"}>Divo logo</h1>
                <div className="flex my-10">
                    <Image className="mr-5" src={applestore} />
                    <Image src={playstore} />
                </div>
            </div>
            <div className={styles.ul1+'  basis-1/4'}>
                <ul>
                    <li><Link href={'/'}>Get help</Link></li>
                    <li><Link href={'/'}>Buy gift cards</Link></li>
                    <li><Link href={'/'}>sign up to dilvery</Link></li>
                    <li><Link href={'/'}>Add your resturant</Link></li>
                </ul>
            </div>
            <div className={styles.ul1+' basis-1/4'}>
                <ul>
                    <li><Link href={'/'}>Get help</Link></li>
                    <li><Link href={'/'}>Buy gift cards</Link></li>
                    <li><Link href={'/'}>sign up to dilvery</Link></li>
                    <li><Link href={'/'}>Add your resturant</Link></li>
                </ul>
            </div>

        </div>
    )
}
export default Footer;