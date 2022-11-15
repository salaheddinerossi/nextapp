import Image from "next/image";
import menu from '../../assets/svg/menu.svg'
import Styles from '../../styles/layout/NavBar.module.css'
function NavBar (){
    return(
        <div className={Styles.navbar}>
            <Image src={menu} alt="menu" />
        </div>
    )
}
export default NavBar;
