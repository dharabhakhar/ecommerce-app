import { Box, Rating } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { MdDone } from 'react-icons/md';
import { Modal } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import { LiaShippingFastSolid } from "react-icons/lia";
import { DiMaterializecss } from "react-icons/di";
import { AiOutlineHeart } from "react-icons/ai";
import { FaQuestion } from "react-icons/fa";
import Section_4 from './Section_4';

export default function Single_item() {
  const [modalShow, setModalShow] = useState(false);
  let { id } = useParams();
  let [val, setval] = useState(1)
  let [val1, setval1] = useState("")
  useEffect(() => {
    axios.get(`http://localhost:4300/product/single_product/${id}`)
      .then(function (response) {
        console.log(response.data);
        setval1(response.data)
        var title = response.data.title;
        localStorage.setItem('title', title);
        var image = response.data.thumb;
        localStorage.setItem('image', image)
        var price = response.data.price;
        localStorage.setItem('price', price)
      })
      .catch(function (error) {
        console.log(error);
      })
  }, [id])
  if (!val) {
    return (
      <>
        <img src={require('../images/loader.webp')} alt="" />
      </>
    )
  }
  const handleClick = (image) => {
    setval1({ ...val, thumb: image });
  }

  const handleAdd = () => {
    const title = localStorage.getItem('title');
    const image = localStorage.getItem('image');
    const price = localStorage.getItem('price');
    var userId = localStorage.getItem('UserId');
    var token = localStorage.getItem('token');
    axios.post('http://localhost:4300/cart/', {
      userId: userId,
      name: title,
      price: price,
      thumb: image,
      quantity: val
    },
      {
        headers: { "Authorization": `${token}` }
      })
      .then(function (response) {
        console.log(response.data);
        setval(1);
        if (response.data.status === "Success" || response.data.status === "cart updated") {
          setModalShow(true);
        } else {
          setModalShow(false);
        }
      })
      .catch(function (error) {
        console.log(error);
      })

  }
  const handleAdd1 = () => {
    const title = localStorage.getItem('title');
    const image = localStorage.getItem('image');
    const price = localStorage.getItem('price');
    var userId = localStorage.getItem('UserId');
    var token = localStorage.getItem('token');
    axios.post('http://localhost:4300/wish/', {
      userId: userId,
      name: title,
      price: price,
      thumb: image,
      quantity: val
    },
      {
        headers: { "Authorization": `${token}` }
      })
      .then(function (response) {
        console.log(response.data);
        setval(1);
        if (response.data.status === "Success" || response.data.status === "wishlist updated") {
          setModalShow(true);
        } else {
          setModalShow(false);
        }
      })
      .catch(function (error) {
        console.log(error);
      })

  }

  const increase = () => {
    setval(val + 1);
  }
  const decrease = () => {
    if (val === 1) {
      setval(1);
    } else {
      setval(val - 1);
    }
  }
  return (
    <>
      <div className="news-back py-5">
        <div className="container-fluid">
          <div className="bg-white rounded row">
            <div className="col-5">
              <div className="single-page-image">
                <img src={val1.thumb} alt="" />
              </div>
              <div className="d-flex px-5 ms-4">
                {
                  val1 && val1.images.map((item, i) => {
                    return (
                      <>
                        <div className="single-page-thumb">
                          <img src={item} alt="" onClick={() => handleClick(item)} />
                        </div>
                      </>
                    )
                  })
                }
              </div>
            </div>
            <div className="col-7 p-3">
              <h4>{val1.title}</h4>
              <hr />
              <h4>&#8377; {val1.price}</h4>
              <div className="rating mb-3 mt-5">
                <Box
                  sx={{
                    width: 200,
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <Rating
                    className="fs-6"
                    name="text-feedback"
                    value={val1.rate}
                    readOnly
                    precision={0.2}
                  />
                </Box>
              </div>
              <hr />
              <div className="single-brand mb-3">
                <span className='fw-bold fs-6'>Brand :</span>
                <span className='text-secondary fw-medium ms-2'> {val1.brand}</span>
              </div>
              <div className="single-size">
                <span className='fw-bold fs-6'>Size :</span><br />
                <div className="btn btn-secondary px-3 me-3 mt-2">S</div>
                <div className="btn btn-secondary px-3 mt-2">L</div>
              </div>
              <div className="single-quantity sec-6-view-more mt-5 align-items-center d-flex">
                <span className='border px-3 py-1 border-black fs-4 me-1' onClick={() => increase()}>+</span>
                <span className='border px-3 py-1 border-black fs-4 me-1'>{val}</span>
                <span className='border px-3 py-1 border-black fs-4 me-5' onClick={() => decrease()}>-</span>
                <button className='btn-1 me-4' onClick={() => handleAdd()}>Add To Cart</button>
                <button className='btn-1' onClick={() => handleAdd1()}>Add To Wishlist</button>
              </div>
              <hr />
              <Accordion alwaysOpen>
                <Accordion.Item eventKey="0" className='border-bottom'>
                  <Accordion.Header><LiaShippingFastSolid className='me-3' />shipping & returns</Accordion.Header>
                  <Accordion.Body className='text-secondary'>
                    Free shipping and returns available on all orders!<br/>
                    We ship all US domestic orders within<span className='fw-bold'> 5-10 business days!</span>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1" className='border-bottom'>
                  <Accordion.Header><DiMaterializecss  className='me-3'/>Materials</Accordion.Header>
                  <Accordion.Body className='text-secondary'>
                  Running Shoes cushions your stride with soft foam to keep you running in comfort. Lightweight knit material wraps your foot in breathable support, while a minimalist design fits in just about anywhere your day takes you.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2" className='border-bottom'>
                  <Accordion.Header><AiOutlineHeart  className='me-3'/>Care Instructions</Accordion.Header>
                  <Accordion.Body className='text-secondary'>
                  Use a soft damp cloth and a drop of mild soap to remove any haze. Air dry.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3" className='border-bottom'>
                  <Accordion.Header><FaQuestion  className='me-3'/>FAQ`S</Accordion.Header>
                  <Accordion.Body>
                  <h4>The Standard Lorem Ipsum Passage</h4>
                  <p className='small text-secondary'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi accumsan turpis posuere cursus ultricies. Ut nunc justo, faucibus eget elit quis, vehicula rhoncus nulla. Phasellus convallis sem nec facilisis commodo. Fusce ut molestie turpis. Suspendisse aliquet sed massa in vulputate. Quisque gravida suscipit tincidunt.</p>
                  <h4>At Vero Eos Et Accusamus Et Iusto Odio Dignissimos</h4>
                  <p className='small text-secondary'>Mauris elementum scelerisque elit non egestas. Cras lacus nibh, pretium quis bibendum nec, dapibus a metus. Morbi eros lectus, aliquam eu aliquam id, fringilla nec eros. Praesent suscipit commodo diam, non viverra turpis dapibus malesuada. Duis cursus metus eu sem eleifend, id rhoncus odio porttitor.</p>
                  <h4>Certain Circumstances And Owing To The Claims Of Duty Or The Obligations</h4>
                  <p className='small text-secondary'>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes.</p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
        <h2 className='mt-5 mb-3'>Description</h2>
        <div className="bg-white m-0 rounded">
          <div className="p-4 text-secondary">
            <span>"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."</span>
          </div>
        </div>
        <h2 className='mt-5 mb-3'>You May Also Like</h2>
        <Section_4/>
        </div>
      </div>
      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className='model-box'
      >
        <Modal.Body>
          <span className='text-danger h4'><MdDone className='d-inline-block me-4' />Added successfully</span>
        </Modal.Body>
      </Modal>
    </>
  )
}
