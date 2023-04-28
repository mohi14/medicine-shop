import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import AboutNaveBarHeader from "../SharedPages/AboutNaveBarHeader";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";

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

  const [selectedProduct, setSelectedProduct] = useState("");

  const handleAddtoCart = (product) => {
    dispatch(addToCart(product));
  };

  console.log(selectedProduct, "seafaf");

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
                                onClick={() => setSelectedProduct(product)}
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
                            <li>
                              <a
                                href="#"
                                title="Wishlist"
                                data-bs-toggle="modal"
                                data-bs-target="#liton_wishlist_modal"
                              >
                                <i className="far fa-heart"></i>
                              </a>
                            </li>
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
              <img src={selectedProduct?.imageUrl} alt="" />
              <div className="product-price mt-3">
                <h1 class="modal-title fs-5" id="exampleModalLabel">
                  {selectedProduct?.productName}
                </h1>
                <span>Price: ${selectedProduct?.productPrice}</span>
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
    </>
  );
};

export default Product;
