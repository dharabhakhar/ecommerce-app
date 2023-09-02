import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { AiOutlineDoubleLeft } from "react-icons/ai";

export default function News() {
 let { id } = useParams();
 let [val, setval] = useState([]);
 useEffect(() => {
  axios.get(`http://localhost:4300/news/single_news/${id}`)
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
   <div className="news-back">
    <div className="container-1">
     <div className="py-5">
      <div className="row">
       <div className="col-6">
        <h3 className='fw-bold h2 mb-4'>{val.title}</h3>
        <p className='fs-5 text-secondary'>{val.desc}</p>
        <span className='text-secondary'>{val.date}</span>
        <div className="vr mx-2"></div>
        <span className='text-secondary text-uppercase'>{val.name}</span>
        <div className="back-to-blog">
         <Link to={'/blog'} className='text-secondary fs-5 fw-bold mt-5'><AiOutlineDoubleLeft className='d-inline-block'/> Back to Blog</Link>
        </div>
       </div>
       <div className="col-6">
        <img src={val.image} alt="" className='rounded-3' />
       </div>
      </div>
     </div>
    </div>
   </div>
  </>
 )
}
