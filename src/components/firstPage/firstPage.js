import './firstPage.css';
import girl from "../../assets/girl.jpg"
import circleGrid from "../../assets/circleGrid.png"

import Cursor from '../cursor/Cursor';
import { useEffect } from 'react';
import { TimelineMax , Expo } from 'gsap';
function FirstPage() {

  useEffect(()=>{
   
  

     

  }
  
  ,[])
  
  return (
    <div className='firstPageContainer'>
 
    
        <div className='firstPageContainerHero'>
<div className='textContainer' >
  <div>
    <img src={circleGrid} className="circleGrid" />
  </div>
<div className='firstPageTitle' >TASKS SIMPLIFIED</div>
<div className='firstPageText' >
    do you have any questions concerning our offerings, feel free to get in touch with us ? 
</div>
</div>
<div className='imgContainer'>
<img src={girl} className="styleImage" alt="" />

<div className='rectangleStyle' >
  <div className='ff__gilroy__e'>
  CONTACT US

  </div>
  </div>
</div>

        </div>
    </div>
  );
}

export default FirstPage;
