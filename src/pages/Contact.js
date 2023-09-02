import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { FaHome } from 'react-icons/fa';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { HiOfficeBuilding } from "react-icons/hi";
import { Button } from 'react-bootstrap';

export default function Contact() {
  return (
    <>
      <div className="bg-secondary bg-opacity-10">
        <div className="spacer">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.9579225356474!2d72.86103147500553!3d21.233517080714897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f2652963ac9%3A0x7d9787a5b5c4275d!2sSilver%20Business%20Point!5e0!3m2!1sen!2sin!4v1693624332770!5m2!1sen!2sin" width="100%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          <div className="contact-detail mt-5">
            <div className="container-fluid">
              <div className="bg-white rounded">
                <div className="p-4">
                  <div className="row">
                    <div className="col-6">
                      <div className="contact-form">
                        <h2>Contact</h2>
                        <FloatingLabel label="Name" className="mb-3">
                          <Form.Control type="text" placeholder="Name" />
                        </FloatingLabel>
                        <FloatingLabel
                          controlId="floatingInput"
                          label="Email address"
                          className="mb-3"
                        >
                          <Form.Control type="email" placeholder="name@example.com" />
                        </FloatingLabel>
                        <FloatingLabel label="Phone number" className="mb-3">
                          <Form.Control type="text" placeholder="Phone number" />
                        </FloatingLabel>
                        <FloatingLabel label="Comment" className='mb-3'>
                          <Form.Control
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: '100px' }}
                          />
                        </FloatingLabel>
                        <span className='btn-1'>Send</span>
                      </div>
                    </div>
                    <div className="col-6 ps-5">
                      <h2 className='mb-3'>Get In Touch With Us</h2>
                      <span className='mb-2 d-flex align-items-center text-secondary'><FaHome className='me-2'/>33 New Montgomery St. Ste 750 San Francisco, CA, USA 94105</span>
                      <span className='mb-2 d-flex align-items-center text-secondary'><BsFillTelephoneFill className='me-2'/>(+91)7-723-4608</span>
                      <span className='mb-2 d-flex align-items-center text-secondary'><MdEmail className='me-2'/>demo@company.com</span>
                      <span className='mb-2 d-flex align-items-center text-secondary'><HiOfficeBuilding className='me-2'/>Monday – Friday 10 AM – 8 PM</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
