import React from 'react'

export default function Section_5() {
 return (
  <>
   <div className="section-5 mb-4">
     <div className="row">
      <div className="col-3">
       <div className="bg-black shadow px-4 text-white pt-5 rounded-3">
        <div className="sec-5-detail">
         <p className='text-white fw-medium sec-5-text'>BIG SCREEN</p>
         <h3>Smart Watch Series 7</h3>
         <p className='text-white'>From &#8377;399 or &#8377;16.62/mo. for 24 mo.*</p>
        </div>
        <div className="sec-5-image pb-5">
         <img src={require('../images/subbanner-01.jpg')} alt="" />
        </div>
       </div>
      </div>
      <div className="col-3">
       <div className="bg-white shadow px-4 pt-5 rounded-3">
        <div className="sec-5-detail mb-5">
         <p className=' fw-medium text-secondary sec-5-text'>STUDIO DISPLAY</p>
         <h3>600 nits of brightness.</h3>
         <p className='fs-6'>27-inch 5K Retina display</p>
        </div>
        <div className="sec-5-image pb-5 mt-5">
         <img src={require('../images/02_110x110.jpg')} alt="" />
        </div>
       </div>
      </div>
      <div className="col-3">
       <div className="bg-white shadow px-4 pt-5 rounded-3">
        <div className="sec-5-detail mb-4">
         <p className=' fw-medium text-secondary sec-5-text'>SMARTPHONES</p>
         <h3>Smartphone 13 pro.</h3>
         <p className='fs-6'>Now in Green. From $999.00 or $41.62/mo.for 24 mo. Footnote*</p>
        </div>
        <div className="sec-5-image">
         <img src={require('../images/sub-03.jpg')} alt="" />
        </div>
       </div>
      </div>
      <div className="col-3">
       <div className="bg-white shadow px-4 pt-5 rounded-3">
        <div className="sec-5-detail mb-5">
         <p className=' fw-medium text-secondary sec-5-text'>HOME SPEAKERS</p>
         <h3>Room-filling sound.</h3>
         <p className='fs-6'>From $699 or $116.58/mo. for 12 mo.*</p>
        </div>
        <div className="sec-5-image pb-5">
         <img src={require('../images/subbanner-04.jpg')} alt="" />
        </div>
       </div>
      </div>
     </div>
    </div>
  </>
 )
}
