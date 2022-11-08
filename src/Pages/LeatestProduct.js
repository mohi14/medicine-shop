import React, { useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";

const LeatestProduct = () => {
    const [leatestProducts, setLeatestProducts] = useState([]);

   
    useEffect(() =>{
        fetch("ProductData.json")
        .then((res) => res.json())
        .then(data => setLeatestProducts(data))
    },[])
    return (
        <>
        {/* <!-- PRODUCT AREA START (product-item-3) --> */}
    <div class="ltn__product-area ltn__product-gutter pt-115 pb-70">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="section-title-area ltn__section-title-2 text-center">
                        <h1 class="section-title">Leatest Product</h1>
                    </div>
                </div>
            </div>
            <div class="row ltn__tab-product-slider-one-active--- slick-arrow-1">
                {/* <!-- ltn__product-item --> */}
{leatestProducts.map(leatestProduct => (<div class="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div class="ltn__product-item ltn__product-item-3 text-left">
                        <div class="product-img">
                            <NavLink to="/ProductDetails"><img src={leatestProduct.imageUrl}alt="#"/></NavLink >
                            <div class="product-badge">
                                <ul>
                                    {/* <li class="sale-badge">New</li> */}
                                </ul>
                            </div>
                            <div class="product-hover-action">
                                <ul>
                                    <li>
                                        <a href="#" title="Quick View" data-bs-toggle="modal" data-bs-target="#quick_view_modal">
                                            <i class="far fa-eye"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" title="Add to Cart" data-bs-toggle="modal" data-bs-target="#add_to_cart_modal">
                                            <i class="fas fa-shopping-cart"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" title="Wishlist" data-bs-toggle="modal" data-bs-target="#liton_wishlist_modal">
                                            <i class="far fa-heart"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="product-info">
                            <div class="product-ratting">
                                <ul>
                                    <li><a href="#"><i class="fas fa-star"></i></a></li>
                                    <li><a href="#"><i class="fas fa-star"></i></a></li>
                                    <li><a href="#"><i class="fas fa-star"></i></a></li>
                                    <li><a href="#"><i class="fas fa-star-half-alt"></i></a></li>
                                    <li><a href="#"><i class="far fa-star"></i></a></li>
                                </ul>
                            </div>
                            <h2 class="product-title"><a href="product-details.html">{leatestProduct.productName}</a></h2>
                            <div class="product-price">
                                <span>${leatestProduct.productPrice}</span>
                                <del>${leatestProduct.productPreviousPrice}</del>
                            </div>
                        </div>
                    </div>
                </div>))
                
            }
            </div>
        </div>
    </div>
    {/* <!-- PRODUCT AREA END --> */}
        </>
    );
};

export default LeatestProduct;