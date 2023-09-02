import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Section_9() {
 let [val, setval] = useState([]);
 useEffect(() => {
  axios.get(`http://localhost:4300/news/all_news`)
   .then(function (response) {
    console.log(response.data);
    setval(response.data)
   })
   .catch(function (error) {
    console.log(error);
   })
 }, [])

 return (
  <>
   <section className="section-9 mt-5">
    <h2 className='mb-5 pt-5'>Our Latest News</h2>
    <div className="mb-5 rounded">
     <div className="row">
      {
       val.map((item, i) => {
        return (
         <>
          <div className="col-3">
           <div className="sec-9-product-box rounded-3 shadow bg-white">
            <div className="sec-9-image">
             <img src={item.image} alt="" className='rounded-top-3' />
            </div>
            <div className="px-3 py-4 sec-9-detail">
             <span className='sec-9-date text-capitalize text-secondary'>{item.date}</span>
             <h5 className='sec-9-title my-2'>{item.title}</h5>
             <p className="sec-9-desc text-secondary text-capitalize mb-4">{item.desc}</p>
             <div className="sec-6-view-more mb-3">
              <Link to={`/news/${item._id}`} className='btn-1'>Read More</Link>
             </div>
            </div>
           </div>
          </div>
         </>
        )
       })
      }
     </div>
    </div>
   </section>
  </>
 )
}
