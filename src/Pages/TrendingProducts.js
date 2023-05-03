import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import {
  addToCart,
  addToWishlist,
  removeFromWishlist,
  showViewProduct,
} from "../features/cart/cartSlice";

const trendingProducts = [
  {
    productID: 1,
    productName: "Antiseptic Spray",
    productPrice: 32.0,
    productPreviousPrice: 46.0,
    imageUrl:
      "https://tunatheme.com/tf/html/vicodin-preview/vicodin/img/product/1.png",
  },

  {
    productID: 2,
    productName: "Digital Stethoscope",
    productPrice: 25.0,
    productPreviousPrice: 35.0,
    imageUrl:
      "https://tunatheme.com/tf/html/vicodin-preview/vicodin/img/product/2.png",
  },

  {
    productID: 3,
    productName: "Cosmetic Containers",
    productPrice: 75.0,
    productPreviousPrice: 92.0,
    imageUrl:
      "https://tunatheme.com/tf/html/vicodin-preview/vicodin/img/product/3.png",
  },

  {
    productID: 4,
    productName: "Cosmetic Containers",
    productPrice: 78.0,
    productPreviousPrice: 85.0,
    imageUrl:
      "https://tunatheme.com/tf/html/vicodin-preview/vicodin/img/product/4.png",
  },

  {
    productID: 5,
    productName: "Blue Hand Gloves",
    productPrice: 150.0,
    productPreviousPrice: 180.0,
    imageUrl:
      "https://tunatheme.com/tf/html/vicodin-preview/vicodin/img/product/5.png",
  },

  {
    productID: 6,
    productName: "Thermometer Gun",
    productPrice: 150.0,
    productPreviousPrice: 180.0,
    imageUrl:
      "https://tunatheme.com/tf/html/vicodin-preview/vicodin/img/product/6.png",
  },
];
const TrendingProducts = () => {
  const dispatch = useDispatch();
  const { wishlist, viewProduct } = useSelector((state) => state.cart);
  // const [trendingProducts, settrendingProducts] = useState([]);

  // useEffect(() => {
  //   fetch("ProductData.json")
  //     .then((res) => res.json())
  //     .then((data) => settrendingProducts(data));
  // }, []);

  const handleViewProduct = (product) => {
    dispatch(showViewProduct(product));
  };

  const handleAddtoCart = (product) => {
    // console.log(product, "home");
    dispatch(addToCart(product));
  };

  const handleRemoveWishListed = (id) => {
    dispatch(removeFromWishlist(id));
  };
  const handleWishListed = (prduct) => {
    dispatch(addToWishlist(prduct));
    dispatch(showViewProduct(prduct));
  };

  return (
    <>
      {/* <!-- PRODUCT AREA START (product-item-3) --> */}
      <div className="ltn__product-area ltn__product-gutter  no-product-ratting pt-115 pb-70---">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title-area ltn__section-title-2 text-center">
                <h1 className="section-title">Trending Products</h1>
              </div>
            </div>
          </div>
          <div className="row ltn__tab-product-slider-one-active--- slick-arrow-1">
            {/* <!-- ltn__product-item --> */}
            {trendingProducts.map((trendingProduct) => (
              <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                <div className="ltn__product-item ltn__product-item-3 text-center">
                  <div className="product-img">
                    <NavLink
                      to={`/ProductDetails/${trendingProduct?.productID}`}
                    >
                      <img src={trendingProduct.imageUrl} alt="#" />
                    </NavLink>
                    <div className="product-badge">
                      <ul>{/* <li className="sale-badge">New</li> */}</ul>
                    </div>
                    <div className="product-hover-action">
                      <ul>
                        <li>
                          <a
                            onClick={() => handleViewProduct(trendingProduct)}
                            type="button"
                            href="#"
                            title="Quick View"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          >
                            <i className="far fa-eye"></i>
                          </a>
                        </li>
                        <li onClick={() => handleAddtoCart(trendingProduct)}>
                          <a
                            href="#"
                            title="Add to Cart"
                            data-bs-toggle="modal"
                            data-bs-target="#add_to_cart_modal"
                          >
                            <i className="fas fa-shopping-cart"></i>
                          </a>
                        </li>
                        {wishlist.includes(trendingProduct) ? (
                          <li
                            onClick={() =>
                              handleRemoveWishListed(trendingProduct?.productID)
                            }
                          >
                            <a href="#" title="Wishlist">
                              <i class="fa-solid fa-heart"></i>
                            </a>
                          </li>
                        ) : (
                          <li onClick={() => handleWishListed(trendingProduct)}>
                            <a
                              href="#"
                              title="Wishlist"
                              data-bs-toggle="modal"
                              data-bs-target="#liton_wishlist_modal"
                            >
                              <i className="far fa-heart"></i>
                            </a>
                          </li>
                        )}
                      </ul>
                    </div>
                  </div>
                  <div className="product-info">
                    <div className="product-ratting">
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fas fa-star"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fas fa-star"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fas fa-star"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fas fa-star-half-alt"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="far fa-star"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <h2 className="product-title">
                      <NavLink
                        to={`/ProductDetails/${trendingProduct?.productID}`}
                      >
                        {trendingProduct.productName}
                      </NavLink>
                    </h2>
                    <div className="product-price">
                      <span>${trendingProduct.productPrice}</span>
                      <del>${trendingProduct.productPreviousPrice}</del>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* <!-- PRODUCT AREA END --> */}

      {/* <!-- BANNER AREA START --> */}
      <div className="ltn__banner-area mt-120---">
        <div className="container">
          <div className="row ltn__custom-gutter--- justify-content-center">
            <div className="col-lg-4 col-sm-6">
              <div className="ltn__banner-item">
                <div className="ltn__banner-img">
                  <Link to="/products">
                    <img
                      src="https://tunatheme.com/tf/html/vicodin-preview/vicodin/img/banner/23.jpg"
                      alt="Banner Image"
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="ltn__banner-item">
                <div className="ltn__banner-img">
                  <Link to="/products">
                    <img
                      src="https://tunatheme.com/tf/html/vicodin-preview/vicodin/img/banner/22.jpg"
                      alt="Banner Image"
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="ltn__banner-item">
                <div className="ltn__banner-img">
                  <Link to="/products">
                    <img
                      src="https://tunatheme.com/tf/html/vicodin-preview/vicodin/img/banner/21.jpg"
                      alt="Banner Image"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- BANNER AREA END --> */}
    </>
  );
};

export default TrendingProducts;
