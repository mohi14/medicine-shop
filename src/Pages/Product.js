import React, { useEffect, useState } from 'react';

const Product = () => {
    const [products, setProducts] = useState([]);

   
    useEffect(() =>{
        fetch("ProductData.json")
        .then((res) => res.json())
        .then(data => setProducts(data))
    },[])

    return (
        <>
        {/* <!-- PRODUCT AREA START (product-item-3) --> */}
    <div class="ltn__product-area ltn__product-gutter  no-product-ratting pt-85 pb-70">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="section-title-area ltn__section-title-2 text-center">
                        <h1 class="section-title">Featured Products</h1>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-3">
                    <div class="row">
                        <div class="col-lg-12 col-sm-6">
                            <div class="ltn__banner-item">
                                <div class="ltn__banner-img">
                                    <a href="shop.html"><img src="https://tunatheme.com/tf/html/vicodin-preview/vicodin/img/banner/11.jpg" alt="Banner Image"/></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-12 col-sm-6">
                            <div class="ltn__banner-item">
                                <div class="ltn__banner-img">
                                    <a href="shop.html"><img src="https://tunatheme.com/tf/html/vicodin-preview/vicodin/img/banner/12.jpg" alt="Banner Image"/></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-9">
                    <div class="row ltn__tab-product-slider-one-active--- slick-arrow-1">
                        {/* <!-- ltn__product-item --> */}
                        

    {
    products.map(product  =>( 
    
    <div class="col-lg-3--- col-md-4 col-sm-6 col-6">
    <div class="ltn__product-item ltn__product-item-2 text-left">

        <div class="product-img">
            <a href="product-details.html"><img src={product.imageUrl} alt="#"/></a>
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
            <h2 class="product-title"><a href="product-details.html">{product.productName}</a></h2>
            <div class="product-price">
                <span>${product.productPrice}</span>
                <del>${product.productPreviousPrice}</del>
            </div>
        </div>
    </div>
</div>
))

                                }
                               
                       
    
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- PRODUCT AREA END --> */}
        
        </>
    );
};

export default Product;