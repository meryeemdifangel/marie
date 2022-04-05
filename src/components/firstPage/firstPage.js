import './firstPage.css';
import girl from "../../assets/girl.jpg"
import Cursor from '../cursor/Cursor';
function FirstPage() {
  
  return (
    <div className='firstPageContainer'>
    
        <div className='firstPageContainerHero'>
<div className='textContainer' >
<div className='firstPageTitle' data-aos="fade-down">TASKS SIMPLIFIED</div>
<div className='firstPageText' >
    do you have any questions concerning our offerings, feel free to get in touch with us ? 
</div>
</div>
<div className='imgContainer'>
<img src={girl} className="styleImage" alt="" />
<div className='rectangleStyle' >CONTACT US</div>
</div>

        </div>
    </div>
  );
}

export default FirstPage;
