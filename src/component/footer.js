import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter, BsYoutube } from 'react-icons/bs';
import img1 from "../images/download (6).svg";

export default function Footer() {
  return (
    <>
      <footer className='footer-top'>
        <div className="container">
          <div className="row">
            <div className="col-5">
              <div className="d-flex gap-30 align-items-center">
                <img src={require('../images/newsletter-icon.png')} />
                <h3 className='mb-0 text-white'>Sign Up For Newsletter</h3>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group border-0">
                <input type="text" className='form-control ps-4' placeholder='Your Email' aria-label='Your Email' aria-describedby="search" />
                <span className='input-group-text p-2 px-4 text-uppercase email-btn' id='search'> Subscribe</span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <footer className='footer-top'>
        <div className="container-1">
          <div className="row">
            <div className="col-4">
              <h5 className='text-white mb-4'>Contact Us</h5>
              <div className='footer-links d-flex flex-column'>
                <span className='text-white'>Demo Store <br /> No. 1259 Freedom, New York, 11111 <br /> United States</span><br />
                <span className='text-white'>+91-987654321</span><br />
                <Link className='text-white py-2'>demo@exampledemo.com</Link>
                <div className="social-icons d-flex align-items-center gap-2 mt-4">
                  <a href="" className='text-white bg-secondary p-3 rounded-circle bg-opacity-50'>
                    <BsLinkedin/>
                  </a>
                  <a href=""  className='text-white bg-secondary p-3 rounded-circle bg-opacity-50'>
                    <BsInstagram/>
                  </a>
                  <a href=""  className='text-white bg-secondary p-3 rounded-circle bg-opacity-50'>
                    <BsTwitter/>
                  </a>
                  <a href=""  className='text-white bg-secondary p-3 rounded-circle bg-opacity-50'>
                    <BsFacebook/>
                  </a>
                  <a href=""  className='text-white bg-secondary p-3 rounded-circle bg-opacity-50'>
                    <BsYoutube/>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h5 className='text-white mb-4'>Information</h5>
              <div className='footer-links d-flex flex-column'>
                <Link className='text-white py-2'>Privacy Policy</Link>
                <Link className='text-white py-2'>Refund Policy</Link>
                <Link className='text-white py-2'>Shipping Policy</Link>
                <Link className='text-white py-2'>Terms of Service</Link>
                <Link className='text-white py-2'>Blogs</Link>
              </div>
            </div>
            <div className="col-3">
              <h5 className='text-white mb-4'>Account</h5>
              <div className='footer-links d-flex flex-column'>
                <Link className='text-white py-2'>Search</Link>
                <Link className='text-white py-2'>About Us</Link>
                <Link className='text-white py-2'>Faq</Link>
                <Link className='text-white py-2'>Contact</Link>
                <Link className='text-white py-2'>Size Chart</Link>
              </div>
            </div>
            <div className="col-2">
              <h5 className='text-white mb-3'>Quick Links</h5>
              <div className='footer-links d-flex flex-column'>
                <Link className='text-white py-2'>Accessories</Link>
                <Link className='text-white py-2'>Laptops</Link>
                <Link className='text-white py-2'>Headphones</Link>
                <Link className='text-white py-2'>Smart Watches</Link>
                <Link className='text-white py-2'>Tablets</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <footer className='py-4'>
        <div className="container-1">
          <div className="row">
            <div className="col-12">
              <div className="text-center mb-0 text-white">
                &copy; {new Date().getFullYear()}, Powered By Developer`s Corner
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
