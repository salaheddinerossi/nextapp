import Livreur from '../../assets/images/Livreur.png';
import Restaurant from '../../assets/images/Restaurant.png';
import WorkCard from './WorkCard';
import styles from '../../styles/Work.module.css';

function work () {
    return(
        <div className='container mx-auto mb-10' >
            <h1 className={styles.title+' text-center mb-16'}>Work with us</h1>
            <div className='flex justify-center'>
                <WorkCard image={Livreur} title={'Livreur'} link={"/"} />
                <WorkCard image={Restaurant} title={'Restaurant'} link={"/"} />
            </div>
        </div>
    );

}
export default work;