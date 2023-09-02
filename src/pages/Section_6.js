import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Box, Rating } from '@mui/material';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { AiOutlineHeart } from 'react-icons/ai';
import { Link } from 'react-router-dom';

export default function Section_6() {
 let [val, setval] = useState([])

 useEffect(() => {
  axios.get(`http://localhost:4300/product/special_data`)
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
   <section className='section-6'>
    <h2 className='mb-5 pt-5'>Special Products</h2>
     <div className="product-box mb-5 rounded-3">
      <div className="row g-3">
       {
        val.map((item, i) => {
         return (
          <>

           <div className="col-4">
            <div className="bg-white shadow rounded-3 p-3">
             <div className="row">
              <div className="col-6">
               <div className="sec-6-image">
                <img src={item.thumb} />
                <p className='fs-5 text-black'>
                 <AiOutlineHeart />
                </p>
               </div>
               <div className="thumb-item d-flex">
                {
                 item.images.map((image, i) => {
                  return (
                   <>
                    <div class="item">
                     <img src={image} />
                    </div>
                   </>
                  )
                 })
                }
               </div>
              </div>
              <div className="col-6">
               <div className="sec-6-detail">
                <p>{item.brand}</p>
                <h6>{item.title}</h6>
                <div className="rating mb-3">
                 <Box
                  sx={{
                   width: 200,
                   display: 'flex',
                   alignItems: 'center',
                  }}
                 >
                  <Rating
                   className="fs-6"
                   name="text-feedback "
                   value={item.rate}
                   readOnly
                   precision={0.2}
                  />
                 </Box>
                </div>
                <div className="line-prog">
                 <ProgressBar now={item.quantity} label={`${item.quantity}%`} />
                </div>
                <div className="sec-6-price my-3">
                 <span className='h6'>&#8377; {item.price}</span>
                </div>
                <div className="sec-6-view-more">
                 <Link to={`/single_item/${item._id}`}><span className='btn-1'>View Detail</span></Link>
                </div>
               </div>
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
