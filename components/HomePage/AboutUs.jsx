import bgAssociation from '../../assets/images/bgAssociation.png';
import styles from '../../styles/AboutUs.module.css';
function AboutUs() {

  return (
    <div className='my-20 p-20' style={{
      //full screen height background image 
    backgroundImage: `url(${bgAssociation.src})`,
    width: '100%',
    //no repeat
    backgroundRepeat: 'no-repeat',
    //centered
    backgroundPosition: 'center',
    //cover the whole area
    backgroundSize: 'cover',
    //fixed in place
    backgroundAttachment: 'fixed',
  }}>
      <div className={styles.bg +' text-center p-8 m-20'}>
        <h1 className={styles.title+' '}>About Us</h1>
        <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id lectus eget augue euismod scelerisque. Fusce mattis interdum pharetra. Donec rutrum, lectus at scelerisque interdum, tortor mi dignissim nibh, ac varius odio nulla eu enim</p>
      </div>
    </div>
  );
}
export default AboutUs;