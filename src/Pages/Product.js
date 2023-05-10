import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import AboutNaveBarHeader from "../SharedPages/AboutNaveBarHeader";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  addToWishlist,
  removeFromWishlist,
  showViewProduct,
} from "../features/cart/cartSlice";

const products = [
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

const Product = () => {
  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   fetch("ProductData.json")
  //     .then((res) => res.json())
  //     .then((data) => setProducts(data));
  // }, []);

  const dispatch = useDispatch();
  const { wishlist, viewProduct } = useSelector((state) => state.cart);

  const [selectedProduct, setSelectedProduct] = useState("");

  const handleAddtoCart = (product) => {
    // console.log(product, "home");
    dispatch(addToCart(product));
  };

  const handleViewProduct = (product) => {
    dispatch(showViewProduct(product));
  };

  const handleWishListed = (prduct) => {
    dispatch(addToWishlist(prduct));
    dispatch(showViewProduct(prduct));
  };

  const handleRemoveWishListed = (id) => {
    dispatch(removeFromWishlist(id));
  };

  // useEffect(() => {
  //   localStorage.setItem("vicodinCart", JSON.stringify(wishlist));
  // }, [wishlist, viewProduct, products]);

  console.log("jkjf", wishlist);

  return (
    <>
      {/* <!-- PRODUCT AREA START (product-item-3) --> */}
      {/* <AboutNaveBarHeader /> */}
      <div className="ltn__product-area ltn__product-gutter  no-product-ratting pt-85 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title-area ltn__section-title-2 text-center">
                <h1 className="section-title">Featured Products</h1>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3">
              <div className="row">
                <div className="col-lg-12 col-sm-6">
                  <div className="ltn__banner-item">
                    <div className="ltn__banner-img">
                      <NavLink to="/shopgrid">
                        <img
                          src="https://tunatheme.com/tf/html/vicodin-preview/vicodin/img/banner/11.jpg"
                          alt="Banner Image"
                        />
                      </NavLink>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 col-sm-6">
                  <div className="ltn__banner-item">
                    <div className="ltn__banner-img">
                      <NavLink to="/shopgrid">
                        <img
                          src="https://tunatheme.com/tf/html/vicodin-preview/vicodin/img/banner/12.jpg"
                          alt="Banner Image"
                        />
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="row ltn__tab-product-slider-one-active--- slick-arrow-1">
                {/* <!-- ltn__product-item --> */}

                {products.map((product) => (
                  <div className="col-lg-3--- col-md-4 col-sm-6 col-6">
                    <div className="ltn__product-item ltn__product-item-2 text-left">
                      <div className="product-img">
                        <NavLink to={`/ProductDetails/${product?.productID}`}>
                          <img src={product.imageUrl} alt="#" />
                        </NavLink>
                        <div className="product-badge">
                          <ul>{/* <li className="sale-badge">New</li> */}</ul>
                        </div>
                        <div className="product-hover-action">
                          <ul>
                            <li>
                              <a
                                onClick={() => handleViewProduct(product)}
                                type="button"
                                data-bs-target="#exampleModal"
                                href="#"
                                title="Quick View"
                                data-bs-toggle="modal"
                              >
                                <i className="far fa-eye"></i>
                              </a>
                            </li>
                            <li onClick={() => handleAddtoCart(product)}>
                              <a
                                href="#"
                                title="Add to Cart"
                                data-bs-toggle="modal"
                                data-bs-target="#add_to_cart_modal"
                              >
                                <i className="fas fa-shopping-cart"></i>
                              </a>
                            </li>
                            {wishlist.includes(product) ? (
                              <li
                                onClick={() =>
                                  handleRemoveWishListed(product?.productID)
                                }
                              >
                                <a href="#" title="Wishlist">
                                  <i class="fa-solid fa-heart"></i>
                                </a>
                              </li>
                            ) : (
                              <li onClick={() => handleWishListed(product)}>
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
                          <NavLink to={`/ProductDetails/${product.productID}`}>
                            {product.productName}
                          </NavLink>
                        </h2>
                        <div className="product-price">
                          <span>${product.productPrice}</span>
                          <del>${product.productPreviousPrice}</del>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- PRODUCT AREA END --> */}
      <div
        class="modal fade "
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content p-3">
            <div class="modal-header">
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <img src={viewProduct?.imageUrl} alt="" />
              <div className="product-price mt-3">
                <h1 class="modal-title fs-5" id="exampleModalLabel">
                  {viewProduct?.productName}
                </h1>
                <span>Price: ${viewProduct?.productPrice}</span>
              </div>
            </div>
            {/* <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Save changes
              </button>
            </div> */}
          </div>
        </div>
      </div>
      <div class="ltn__modal-area ltn__add-to-cart-modal-area">
        <div class="modal fade" id="liton_wishlist_modal" tabindex="-1">
          <div class="modal-dialog modal-md" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <button
                  type="button"
                  class="close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <div class="ltn__quick-view-modal-inner">
                  <div class="modal-product-item">
                    <div class="row">
                      <div class="col-12">
                        <div class="modal-product-img">
                          <img src={viewProduct?.imageUrl} alt="#" />
                        </div>
                        <div class="modal-product-info">
                          <h5>
                            <a href="product-details.html">
                              {viewProduct?.productName}
                            </a>
                          </h5>
                          <p class="added-cart">
                            <i class="fa fa-check-circle"></i> Successfully
                            added to your Wishlist
                          </p>
                          <div
                            class="btn-wrapper"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          >
                            <Link
                              to="/wishlist"
                              class="theme-btn-1 btn btn-effect-1"
                            >
                              View Wishlist
                            </Link>
                          </div>
                        </div>
                        {/* <!-- additional-info --> */}
                        <div class="additional-info d-none">
                          <p>
                            We want to give you <b>10% discount</b> for your
                            first order, <br /> Use discount code at checkout
                          </p>
                          <div class="payment-method">
                            <img src="img/icons/payment.png" alt="#" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
