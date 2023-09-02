import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default function Section_8() {
 const options = {
  loop: true,
  nav: false,
  autoplay: true,
  autoplayHoverPause: false,
  autoplayTimeout: 2000,
  mouseDrag: false,
  center: false,
  dots: false,
  margin: 10,
  responsive: {
   0: {
    items: 3,
   },
   768: {
    items: 4,
   },
   1200: {
    items: 7,
   },
  },
 };
 return (
  <>
   <section className="section-8 ps-4">
    <OwlCarousel className='owl-theme' {...options}>
     <div className="sec-8-image">
      <img src={require('../images/brand-01.webp')} alt="" />
     </div>
     <div className="sec-8-image">
      <img src={require('../images/brand-02.webp')} alt="" />
     </div>
     <div className="sec-8-image">
      <img src={require('../images/brand-03.webp')} alt="" />
     </div>
     <div className="sec-8-image">
      <img src={require('../images/brand-04.avif')} alt="" />
     </div>
     <div className="sec-8-image">
      <img src={require('../images/brand-05.avif')} alt="" />
     </div>
     <div className="sec-8-image">
      <img src={require('../images/brand-06.webp')} alt="" />
     </div>
     <div className="sec-8-image">
      <img src={require('../images/brand-07.avif')} alt="" />
     </div>
     <div className="sec-8-image">
      <img src={require('../images/brand-08.avif')} alt="" />
     </div>
     <div className="sec-8-image">
      <img src={require('../images/brand-09.webp')} alt="" />
     </div>
    </OwlCarousel>
   </section>
  </>
 )
}
