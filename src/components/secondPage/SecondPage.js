import './SecondPage.css';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import GTranslateIcon from '@material-ui/icons/GTranslate';
import { Checkbox } from '@material-ui/core';
import Aos from 'aos'
import "aos/dist/aos.css" 
import { useEffect } from 'react';
function SecondPage() {
  useEffect(()=>{
Aos.init({duration:1000})
  },[])
  return (
    <div className='secondPageContainer'>
      <div className='secondPageContainerHero'>
        <div className='secondPageContainerHeroLeft'>
          <div className='meryem' >
          <div className='secondPageContainerHeroLeftHight'>
            <div className='topTitle' data-aos="fade-down-right">send us a request to</div>
            <div className='topText' data-aos="fade-up-left">create your dream project</div>
          </div>
          <div className='secondPageContainerHeroLeftMiddle'>
            <div>
              <div className='emailStyle'>
                Emails
              </div>
              <div>
                <div>info@laquest.net</div>
                <div>info@laquest.net</div>
                <div>info@laquest.net</div>

              </div>
            </div>
            <div>
              <div className='emailStyle'>
                Phones
              </div>
              <div>
                <div>+1(718)521-2958 (United States)</div>
                <div>+1(718)521-2958 (India)</div>
                <div>+1(718)521-2958 (Philippine)</div>

              </div>
            </div>

          </div>
          </div>
         
          <div className='secondPageContainerHeroLeftBottom'>
            <div className='one' data-aos="fade-up">
<EventAvailableIcon style={{ fontSize: 40 }} />
<div className='icone'>Book a consultation</div>
            </div>
            <div className='two' data-aos="fade-down">
<SupervisedUserCircleIcon style={{ fontSize: 40 }}/>
<div className='icone'>SUPPORT</div>
</div>
<div className='three' data-aos="fade-up">
<GTranslateIcon  style={{ fontSize: 40 }} />
<div className='icone'>GOOGLE SUPPORT</div>
</div>     
          </div>
        </div>
        <div className='secondPageContainerHeroRight' data-aos="fade-right">
<div className="above" >

<input className='i' placeholder='First Name*' />
<input className='i'  placeholder='Last Name*' />


<input className='i' placeholder='First Name*' />
<input className='i' placeholder='Last Name*' />

  <div  >
  <label>How did you find us ?*</label>
<select>
<option style={{color:'gray' }} >Choose one</option>
<option>two</option>
<option>three</option>
<option>four</option>
</select>
<div style={{marginTop:"10px" , color:"rgb(72, 71, 71)"  }} >Message*</div>
  </div>
   
 


</div>
<div className="bottom" >
<div className='bottomContainer'>
<input className='inputs' placeholder='write your message here' />
<div className='rights' >By submitting this form you understand and agree that LaQuest may contact you regarding your
interest in our services, partners, and products as well as receiving electronic communications from us
and our partners including news, events, updates, and promotional offers. You may withdraw your
consent and unsubscribe from such marketing communication at any time. You also acknowledge and
accept LaQuest’s <span>Privacy Policy</span>, including its use of cookies.
</div>
<div className='agree'> 
  <Checkbox style={{ fontSize: 20 ,color: '#4db8ff' }} />
  I agree to receive other communications from LaQuest.

</div>
<div className='submit'>
<div className='absoluteSubmit'>Submit</div>
</div>
</div>

</div>
        </div>
      </div>

    </div>
  );
}

export default SecondPage;
