import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { Link, NavLink } from 'react-router-dom';
import { BsSearch } from "react-icons/bs";
import img1 from "../images/download.svg"
import img2 from "../images/download (1).svg"
import img3 from "../images/download (2).svg"
import img5 from "../images/download (5).svg"
import { Dropdown } from 'react-bootstrap';
import Cart from '../pages/Cart';
import axios from 'axios';

export default function Header() {
    let [search, setsearch] = useState('');
    let [data, setdata] = useState(['hgjhk', 'gigojh']);

    useEffect(() => {
        axios.get(`http://localhost:4300/product/search/${search}`)
            .then(function (response) {
                console.log(response.data);
                setdata(response.data.data);
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [search])
    return (
        <>
            <header className='header-top py-1'>
                <div className="container-1">
                    <div className="row">
                        <div className="col-6">
                            <p className='text-white mb-0'>Free Shipping over $100 & Free Returns</p>
                        </div>
                        <div className="col-6">
                            <p className='text-end text-white mb-0'>
                                Hotline:
                                <a className='text-white mob' href="tel:+91 1234567890">+91 1234567890</a>
                            </p>
                        </div>
                    </div>
                </div>
            </header>
            <header className='header-upper py-3'>
                <div className="container-1">
                    <div className="row align-items-center">
                        <div className="col-2">
                            <h2>
                                <Link to={'/'} className='text-white text-decoration-none'>
                                    Dev Corner
                                </Link>
                            </h2>
                        </div>
                        <div className="col-4 header-search me-5 position-relative">
                            <div className="input-group border-0">
                                <input type="text" className='form-control ps-3' placeholder='Search Product Here ...' value={search} onChange={(e) => setsearch(e.target.value)} aria-label='Search Product Here ...' aria-describedby="search" />
                                <span className='input-group-text p-2' id='search'><BsSearch className='fs-6' /></span>
                            </div>
                            {search ? (
                                <div className="bg-white rounded position-absolute search p-3">
                                    <div className="row">

                                        {
                                            data?.map((item) => {
                                                return (
                                                    <>
                                                        <div className="col-6">
                                                            <div className="row">
                                                                <div className="col-3 p-0">
                                                                    <div className="search-image">
                                                                        <img src={item.thumb} alt="" width={'100%'} />
                                                                    </div>
                                                                </div>
                                                                <div className="search-detail col-8">
                                                                    <p className='m-0'>{item.title}</p>
                                                                    <p>&#8377;{item.price}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            ) : null}
                        </div>
                        <div className="col-4 last-item pe-0">
                            <div className="d-flex align-items-center justify-content-between upper-link">
                                <div>
                                    <Link className='d-flex align-items-center gap-10 text-white txt1'>
                                        <img src={img1} alt="" />
                                        <p className='mb-0'>Compare <br /> Products</p>
                                    </Link>
                                </div>
                                <div>
                                    <Link className='d-flex align-items-center gap-10 text-white txt1' to={'/wish'}>
                                        <img src={img2} alt="" />
                                        <p className='mb-0'>Favorite <br /> WishList</p>
                                    </Link>
                                </div>
                                <div>
                                    <Link className='d-flex align-items-center gap-10 text-white txt1' to={'/login'}>
                                        <img src={img3} alt="" />
                                        <p className='mb-0'>Login <br />My Account</p>
                                    </Link>
                                </div>
                                <div>
                                    <Cart placement={'end'} name={'end'} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </header>
            <header className='header-bottom py-1'>
                <div className="container-1">
                    <div className="row">
                        <div className="col-12">
                            <div className="menu-bottom d-flex align-items-center gap-30">
                                <div>
                                    <Dropdown className='txt'>
                                        <Dropdown.Toggle variant="transparent" className='txt d-flex gap-15 align-items-center px-0' id="dropdown-basic">
                                            <img src={img5} />
                                            <span className='text-white d-inline-block'>Shop Categories</span>
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu className='drop-menu'>
                                            <Dropdown.Item className='drop-item'>
                                                <Link to={'/'} className='text-white link d-block'>Home</Link>
                                            </Dropdown.Item>
                                            <Dropdown.Item className='drop-item'>
                                                <Link to={'/shop'} className='text-white link d-block'>Our Store</Link>
                                            </Dropdown.Item>
                                            <Dropdown.Item className='drop-item'>
                                                <Link to={'/blog'} className='text-white link d-block'>Blogs</Link>
                                            </Dropdown.Item>
                                            <Dropdown.Item className='drop-item'>
                                                <Link to={'/contact'} className='text-white link d-block'>Contact</Link>
                                            </Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                                <div className='vr text-white'></div>
                                <div className='menu-links'>
                                    <div className="d-flex align-items-center gap-15">
                                        <NavLink className='text-white txt' to={'/'}>Home</NavLink>
                                        <NavLink className='text-white txt' to={'/shop'}>Our Store</NavLink>
                                        <NavLink className='text-white txt' to={'/blog'}>Blogs</NavLink>
                                        <NavLink className='text-white txt' to={'/contact'}>Contact</NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
