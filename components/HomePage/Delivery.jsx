import styles from '../../styles/Delivery.module.css'
import Etape from './Etape'
import svg1 from '../../assets/svg/eating.svg'
import svg2 from '../../assets/svg/food.svg'
import svg3 from '../../assets/svg/ion.svg'
function Delivery () {
    return(
        <div className={styles.bg+' w-full py-20 my-40 '}>  
            <div className='container mx-auto '>
                <h1 className={styles.title+" text-center"}>How Delivery Works</h1>
                    <div className='flex mt-16 justify-center	'>
                        <Etape  icon={svg1} title={"Pick Your food"} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas "}  />
                        <Etape icon={svg2} title={"We Deliver the Bag"} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas"}  />
                        <Etape icon={svg3} title={"We Deliver the Bag"} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas "}  />
                    </div>
            </div>
        </div>
    )
}

export default Delivery;