import axios from 'axios'
import React, { useEffect, useState } from 'react'

function ProductAxios() {

    const [user, setuser] = useState([])

    useEffect(() => {
        data()
    }, [])

    const data = async () => {
        const res = await axios.get("https://dummyjson.com/products")
        console.log(res.data);
        setuser(res.data.products)
    }

    return (
        <div>
            <div className="container">
                <div className="row">
                    {
                        user && user.map((data, index) => {
                            console.log(data);
                            return (
                                <div className="col-md-4 mb-4">
                                    <style>
                                        {`
      .product-card {
        border-radius: 20px;
        overflow: hidden;
        background: linear-gradient(145deg, #ffffff, #f8f9fa);
        transition: all 0.4s ease;
        box-shadow: 0 10px 30px rgba(0,0,0,0.08);
        position: relative;
      }

      .product-card:hover {
        transform: translateY(-12px) scale(1.02);
        box-shadow: 0 25px 60px rgba(0,0,0,0.2);
      }

      .img-wrapper {
        height: 220px;
        overflow: hidden;
        position: relative;
      }

      .img-wrapper img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: 0.5s ease;
      }

      .product-card:hover img {
        transform: scale(1.15);
      }

      /* Overlay gradient */
      .img-wrapper::after {
        content: "";
        position: absolute;
        inset: 0;
        background: linear-gradient(to top, rgba(0,0,0,0.4), transparent);
      }

      /* Rating badge */
      .rating-badge {
        position: absolute;
        top: 12px;
        left: 12px;
        background: rgba(255,255,255,0.9);
        backdrop-filter: blur(6px);
        padding: 6px 12px;
        border-radius: 20px;
        font-size: 0.8rem;
        font-weight: 600;
      }

      /* Title */
      .card-title {
        font-size: 1.1rem;
        letter-spacing: 0.3px;
      }

      /* Stock pill */
      .stock-pill {
        background: linear-gradient(135deg, #e3f2fd, #ffffff);
        padding: 6px 14px;
        border-radius: 20px;
        font-size: 0.75rem;
        font-weight: 600;
        display: inline-block;
      }

      /* Buttons */
      .details-btn {
        border-radius: 25px;
        transition: all 0.3s ease;
        border: 1px solid #dee2e6;
      }

      .details-btn:hover {
        background: #f1f3f5;
        transform: scale(1.05);
      }

      .buy-btn {
        border-radius: 25px;
        background: linear-gradient(135deg, #000, #343a40);
        color: #fff;
        transition: all 0.3s ease;
      }

      .buy-btn:hover {
        transform: scale(1.08);
        box-shadow: 0 10px 25px rgba(0,0,0,0.3);
      }
    `}
                                    </style>

                                    <div className="card product-card h-100 border-0">

                                        <div className="img-wrapper">
                                            <img src={data.thumbnail} alt={data.title} />
                                            <div className="rating-badge">⭐ {data.rating}</div>
                                        </div>

                                        <div className="card-body d-flex flex-column">

                                            <h5 className="card-title fw-bold mb-1">
                                                {data.title}
                                            </h5>

                                            <p className="text-muted small mb-2">
                                                {data.description.slice(0, 70)}...
                                            </p>

                                            <div className="mb-3">
                                                <span className="stock-pill">
                                                    {data.stock > 0 ? "✅ In Stock" : "❌ Out of Stock"}
                                                </span>
                                            </div>

                                            <div className="mt-auto d-flex gap-2">
                                                <button className="btn details-btn w-50">
                                                    View
                                                </button>

                                                <button className="btn buy-btn w-50">
                                                    Buy Now
                                                </button>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            )

                        })
                    }
                </div>
            </div>
        </div>

    )
}

export default ProductAxios