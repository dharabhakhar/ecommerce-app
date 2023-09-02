import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Category() {
    let [val, setval] = useState([]);
    const [error, setError] = useState(null);
    useEffect(() => {
        axios.get(`http://localhost:4300/product/all_product`)
            .then(function (response) {
                console.log(response.data);
                setval(response.data.data)
            })
            .catch(function (error) {
                console.error("Error fetching data:", error);
                setError(error); // Set error state
            })
    }, [])

    return (
        <>
            <section className='section-3 mb-5'>
                <div className="container-1 py-5">
                    {error ? (
                        <div>Error: Unable to fetch data.</div>
                    ) : (
                        <div className="row row-cols-5">
                            {Array.isArray(val) ? (
                                val.map((item, i) => {
                                    return (
                                        <>
                                            <div className="col border" key={i}>
                                                <div className="row align-items-center">
                                                    <div className="col-5 me-3 ms-2">
                                                        <h6>{item.category1}</h6>
                                                    </div>
                                                    <div className="col-6">
                                                        <img src={item.images[0]} alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })
                            ) : (
                                <div>Data is not in the expected format</div>
                            )
                            }
                        </div>
                    )}
                </div>
            </section>
        </>
    );
}
