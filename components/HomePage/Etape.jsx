
import styles from '../../styles/Etape.module.css'

import Image from 'next/image'
function Etape(props){
    return(
        <div className='w-64 mx-16'>
            <Image className='m-auto' src={props.icon} />
            <h1 className={styles.title+" text-center"}>{props.title}</h1>
            <p className='text-center'>{props.text}</p>
        </div>
    )
}
export default Etape;