import { Box, Rating } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Row } from 'react-bootstrap'
import { AiOutlineHeart } from 'react-icons/ai'
import { Link } from 'react-router-dom'

export default function Shop() {
 let [val, setval] = useState([])
useEffect(() => {
    axios.get(`http://localhost:4300/product/all_product`)
        .then(function (response) {
            console.log(response.data);
            setval(response.data.data)
            localStorage.setItem('npage', response.data.totalpage);
        })
        .catch(function (error) {
            console.log(error);
        })
}, [])
const npage = localStorage.getItem('npage');
const numbers = [];
for (let number = 1; number <= npage; number++) {
  numbers.push(
    <>
      {number}
    </>
  );
}
const changePage = (n) => {
 localStorage.setItem("page", n.props.children);
 var page = localStorage.getItem("page");
 axios.get(`http://localhost:4300/product/all_product/?page_no=${page}`)
   .then(function (response) {
    console.log(response)
     setval(response.data.data);
     // localStorage.setItem('npage', response.data.totalpage);
   })
   .catch(function (error) {
     console.log(error);
   })
}
  return (
    <>
    <div className="section-4 my-5 container-fluid">
     <div className="product-box mb-5">
      <Row className='row-cols-5 g-3'>
      {
        val.map((item, i) => {
         return (
          <>
          <Link to={`/single_item/${item._id}`}>
           <div className="col product-box-1 me-3 p-3">
            <div className="image">
             <img src={item.images[1]} />
             <p className='fs-5 text-black'>
              <AiOutlineHeart />
             </p>
            </div>
            <div className="brand text-capitalize">
             <p>{item.brand}</p>
            </div>
            <div className="title mb-3 text-dark">
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
          </>
         )
        })
       }
        <nav className='ms-auto'>
              <ul className={`pagination page`}>
                {
                  numbers.map((n, i) => (
                    <li className={`page-item`} aria-current="page">
                      <Link className='page-link' onClick={() => changePage(n)}>{n}</Link>
                    </li>
                  ))
                }
              </ul>
            </nav>
      </Row>
     </div>
     </div>
    </>
  )
}
