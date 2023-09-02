import React from 'react';
import Category from './category';
import Section_4 from './Section_4';
import Section_5 from './Section_5';
import Section_6 from './Section_6';
import Section_7 from './Section_7';
import Section_8 from './Section_8';
import Section_9 from './Section_9';

var data = [
  { head: "Free Shipping", description: "From all orders over $100", photo: require("../images/service-01x.png") },
  { head: "Daily Surprise Offers", description: "Save up to 25% off", photo: require('../images/service-02.png') },
  { head: "Support 24/7", description: "Shop with an expert", photo: require('../images/service-03.png') },
  { head: "Affordable Prices", description: "Get Factory direct price", photo: require('../images/service-04.webp') },
  { head: "Secure Payments", description: "100% Protected Payments", photo: require('../images/service-05.png') }
]

export default function ServiceBlock() {
  return (
    <>
      <div className="section-2">
        <div className="container-1 pb-5">
          <div className="row py-5">
            {
              data.map((val) => {
                return (
                  <div className="col service-icon d-flex align-items-center">
                    <img src={val.photo} className='mb-3'/>
                    <div className='ms-3 '>
                      <h6>{val.head}</h6>
                      <p>{val.description}</p>
                    </div>
                  </div>
                )
              })
            }
          </div>
          <Category/>
          <h2 className='mb-5 pt-5'>Featured Collection</h2>
          <Section_4/>
          <Section_5/>
          <Section_6/>
          <Section_7/>
          <Section_8/>
          <Section_9/>
        </div>
      </div>
    </>
  )
}

