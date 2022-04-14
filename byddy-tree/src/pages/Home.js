import React from 'react'
import '../styles/Home.css'
import pic1 from '../assets/shutterstock_1692360436 1.png'
import picc2 from '../assets/picc2.png'
import shutter from '../assets/shutterstock_1694685139 1.png'
import Slider from '../components/Slider'
import how1 from '../assets/how-to/how1.png'
import how2 from '../assets/how-to/how2.png'
import how3 from '../assets/how-to/how3.png'
import airbnb from '../assets/logos/backed by phone size/Airbnb.png'
import hubspot from '../assets/logos/backed by phone size/Hubspot.png'
import google from '../assets/logos/backed by phone size/Google.png'
import steps from '../assets/how-to/steps.png'
import logos from '../assets/logos/logos.png'
import heart from '../assets/heart.png'
import iphone1 from '../assets/last-block/iphone1.png'
import iphone2 from '../assets/last-block/iphone2.png'
import Carousel from '../components/Carousel'
import ImageSlider from '../components/ImageSlider';
import { SliderData } from '../components/SliderData';
import Button from '../components/Button'



function Home() {
  return (

     <div className='home'>
       <div className='blue-block'>
           <div className='part-one'>
               <h1>buddytree</h1>  
               
               <button type="button">GET STARTED FOR FREE</button>         
           </div>
           <div className='part-two'>
               <div className='part-two-one'>
                 <h1>A space to have meaningful discussion and make long-lasting friendships</h1>
                 <Button prop="GET STARTED FOR FREE"/>
               </div>
               <div className='pic-parent'>        
                     <img src={picc2} alt="Logo" className='pic-child'/> 
               </div>
                
               
               
           </div>
       </div>
       <div className='how-work'>
           <div className='how-work-one'>
               <h1>How Buddytree works</h1>
               <h3>You'r born into your family, but Buddytree is yours to create. </h3>
           </div>
           <div className='how-work-two'>   
                <div className='how-card'>
                    <img src={how1} alt="Logo" />
                    <h2>Create your free account</h2>
                    <h3>Members show their faces in their profile picture. No creeps, Join your first live hangout for free</h3>
                </div>
                <div className='how-card'>
                    <img src={how2} alt="Logo" />
                    <h2>Join your first live hangout</h2>
                    <h3>Members show their faces in their profile picture. No creeps, Join your first live hangout for free</h3>
                </div>
                <div className='how-card'>
                    <img src={how3} alt="Logo" />
                    <h2>Have great conversations with people</h2>
                    <h3>Members show their faces in their profile picture. No creeps, Join your first live hangout for free</h3>
                </div>
           </div>
           <Button prop="GET STARTED FOR FREE"/>
           <img src={logos} alt="Logo" className='logos' />
           <div className='phone-size-logos'>
            <h1>Backed by</h1>
               <div className='phone-size-images'>
                  <img src={airbnb} alt="Logo" />
                  <img src={hubspot} alt="Logo" />
                  <img src={google} alt="Logo" />
               </div>
           </div>
           
       </div>
       
       <div className='upcoming'>
           <div className='upcoming-one'>
               <img src={shutter} alt="Logo" />
               <div className='the-magic-formula-container'>
                  <h1>The magic formula of Buddytree is </h1>
                  <div className='the-magic-formula'>
                      <img src={heart} alt="Logo" />
                       <h3>Keeping group sizes small,so you don't feel shy to speak</h3>   
                  </div> 
               </div>
           </div>
           
           <div className='upcoming-hangouts'>
               <h1>Upcoming hangouts</h1>
           </div>
           <Slider />
           <div className='slide-container'>
            <div className='slide-left'>
                 <h1>Join our community of Buddytree members from around the world. </h1>
                 <Button prop="GET STARTED FOR FREE"/>
             </div>     
             <ImageSlider slides={SliderData} />
           </div>
           
       </div>
      
       <div className='second-blue-block'>
          <div className='second-blue-block-container'>
           <h1>Humans are social creatures. <br/> What discusiions would you like to have with others?</h1>
           <div className='second-blue-block-two'>
               <h3>Goals</h3>
               <h3>Motivation</h3>
               <h3>Trust</h3>
               <h3>Vulnerability</h3>
               <h3>Wealth</h3>
               <h3>sex</h3>
               <h3>Meaning</h3>
               <h3>Movies</h3>
               <h3>Climate</h3>
               <h3>Childfree</h3>
               <h3>Purpose</h3>
               <h3>Guns</h3>
               <h3>Cancel Culture</h3>
               <h3>Music</h3>
               <h3>Border & nations</h3>
               <h3>Fear</h3>
               <h3>Confidence</h3>
               <h3>Meaning</h3>
               <h3>Purpose</h3>
           </div>
           </div>
           <Button prop="EXPLORE MORE TOPICS"/>
       </div>
       <div className='last-block'>
          <img src={iphone1} alt="Logo" className='logos' />
          <div className='get-started'>
             <h1>Have meaningful discusiions with amazing new friends.</h1>
             <div className='phone-size'>
             <Button prop="EXPLORE MORE TOPICS" />
             </div>
          </div>
          <img src={iphone2} alt="Logo" className='logos' />
       </div>
    </div>
  )
}

export default Home