import Image from 'next/image'
import styles from '../../styles/WorkCard.module.css'

function WorkCard(props){
    return(
        <div className={styles.card+" px-12 pt-12 mx-6 "} >
            <Image src={props.image} />
            <div className='flex justify-between my-6'>
                <h1 className={styles.title}>{props.title}</h1>
                <button className={styles.button+' py-2 px-8'} href={props.link}>voir plus</button>
            </div>
        </div>
    );
}
export default WorkCard;