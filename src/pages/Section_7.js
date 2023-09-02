import { Box, Rating } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { AiOutlineHeart } from 'react-icons/ai';
import { Link } from 'react-router-dom';

export default function Section_7() {
 let [val, setval] = useState([]);
 useEffect(() => {
  axios.get(`http://localhost:4300/product/popular_data`)
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
   <section className="section-7">
    <h2 className='mb-5 pt-5'>Our Popular Products</h2>
    <div className="product-box mb-5 rounded-3">
     <div className="row g-3">
      <div className="col-2">
       <div className="sec-7-product-box bg-white rounded-3">
        {
         val.map((item, i) => {
          return (
           <>
            <div className="d-flex align-items-center">
             <div className="sec-7-image rounded-3">
              <img src={item.thumb} alt="" className='rounded-3' />
             </div>
             <div className="sec-7-head">
              <h6>{item.category1}</h6>
             </div>
            </div>
           </>
          )
         })
        }
       </div>
      </div>
      <div className="col-2">
       <img src={require('../images/cat-product-banner.jpg')} className='rounded-3' alt="" />
      </div>
      {
       val.map((item, i) => {
        return (
         <>
          <div className="col-2">
            <Link to={`/single_item/${item._id}`}>
           <div className="product-box-1 sec-7-product-box p-3">
            <div className="image position-relative">
             <img src={item.images[1]} />
             <p className='fs-5 text-grey position-absolute'>
              <AiOutlineHeart />
             </p>
            </div>
            <div className="brand text-capitalize">
             <p>{item.brand}</p>
            </div>
            <div className="title mb-3">
             <h6>{item.title}</h6>
            </div>
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
            <div className="price">
             <p className='fw-bold'>&#8377; {item.price}</p>
            </div>
           </div>
           </Link>
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
