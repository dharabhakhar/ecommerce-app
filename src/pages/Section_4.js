import React, { useEffect, useState }  from 'react'
import axios from 'axios';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Box, Rating } from '@mui/material';
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from 'react-router-dom';

export default function Section_4() {
    let [load, setload] = useState(false);
    const [error, setError] = useState(null);
    let [val, setval] = useState([]);
 const options = {
  loop: true,
  nav: true,
  autoplay: false,
  autoplayHoverPause: false,
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
          items: 6,
      },
  },
};

useEffect(() => {
    axios.get(`http://localhost:4300/product/all_product`)
        .then(function (response) {
            console.log(response.data);
            setval(response.data.data)
            setload(true);
        })
        .catch(function (error) {
            console.error("Error fetching data:", error);
            setload(true); 
            setError(error);
        })
}, [])

if (!load) {
    return <p>Loading...</p>;
  }

  if (!Array.isArray(val)) {
    return <p>Data is not available.</p>;
  }

if(load === true){
 return (
  <>
   <section className='section-4'>
    
     <div className="product-box mb-5">
      <OwlCarousel className='owl-theme' {...options}>
       {
        val.map((item, i) => {
         return (
          <>
          <Link to={`/single_item/${item._id}`}>
           <div className="product-box-1 me-3 p-3">
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
      </OwlCarousel>
     </div>
   </section>
  </>
 )
}
}