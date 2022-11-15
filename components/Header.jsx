import bg from '../assets/images/header.png';
import styles from '../styles/Header.module.css';

function Header() {
  return (
    <header className='header'>
      <div className=" flex items-center h-full header-bg  " style={{
        //full screen height background image 
      backgroundImage: `url(${bg.src})`,
      width: '100%',
      height: '100vh',
      //no repeat
      backgroundRepeat: 'no-repeat',
      //centered
      backgroundPosition: 'center',
      //cover the whole area
      backgroundSize: 'cover',
    }}
>
      <div className='ml-7 w-full'>
      <h1  className={styles.bienvenue+' text-white'}>Bienvenue au Divo</h1>
              <h2 className={styles.subTitle}>Trouver des restaurants à proximité</h2>
              <form className={styles.recherche +'w-full'} action="">   
                <input className={styles.recherche} type="text" placeholder="Rechercher un restaurant" />
                <input className={styles.rechercheButoon} type="submit" value={'Chercer'} />
              </form>

      </div>
      </div>
    </header>
);
}

export default Header;