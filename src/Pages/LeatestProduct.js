import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  addToCart,
  addToWishlist,
  removeFromWishlist,
  showViewProduct,
} from "../features/cart/cartSlice";

const leatestProducts = [
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

const LeatestProduct = () => {
  const dispatch = useDispatch();
  const { wishlist, viewProduct } = useSelector((state) => state.cart);
  //     const [leatestProducts, setLeatestProducts] = useState([]);
  // console.log(leatestProducts)

  //     useEffect(() =>{
  //         fetch("ProductData.json")
  //         .then((res) => res.json())
  //         .then(data => setLeatestProducts(data))
  //     },[])

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
      <div className="ltn__product-area ltn__product-gutter pt-115 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title-area ltn__section-title-2 text-center">
                <h1 className="section-title">Leatest Product</h1>
              </div>
            </div>
          </div>
          <div className="row ltn__tab-product-slider-one-active--- slick-arrow-1">
            {/* <!-- ltn__product-item --> */}
            {leatestProducts.map((leatestProduct) => (
              <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                <div className="ltn__product-item ltn__product-item-3 text-left">
                  <div className="product-img">
                    {/* <NavLink to="/ProductDetails"><img src={leatestProduct.imageUrl}alt="#"/></NavLink > */}

                    <a href={`/ProductDetails/${leatestProduct?.productID}`}>
                      <img src={leatestProduct.imageUrl} alt="#" />
                    </a>
                    <div className="product-badge">
                      <ul>{/* <li className="sale-badge">New</li> */}</ul>
                    </div>
                    <div className="product-hover-action">
                      <ul>
                        <li>
                          <a
                            onClick={() => handleViewProduct(leatestProduct)}
                            type="button"
                            href="#"
                            title="Quick View"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          >
                            <i className="far fa-eye"></i>
                          </a>
                        </li>
                        <li onClick={() => handleAddtoCart(leatestProduct)}>
                          <a
                            href="#"
                            title="Add to Cart"
                            data-bs-toggle="modal"
                            data-bs-target="#add_to_cart_modal"
                          >
                            <i className="fas fa-shopping-cart"></i>
                          </a>
                        </li>
                        {wishlist.includes(leatestProduct) ? (
                          <li
                            onClick={() =>
                              handleRemoveWishListed(leatestProduct?.productID)
                            }
                          >
                            <a href="#" title="Wishlist">
                              <i class="fa-solid fa-heart"></i>
                            </a>
                          </li>
                        ) : (
                          <li onClick={() => handleWishListed(leatestProduct)}>
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
                      <a href={`/ProductDetails/${leatestProduct?.productID}`}>
                        {leatestProduct.productName}
                      </a>
                    </h2>
                    <div className="product-price">
                      <span>${leatestProduct.productPrice}</span>
                      <del>${leatestProduct.productPreviousPrice}</del>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* <!-- PRODUCT AREA END --> */}
    </>
  );
};

export default LeatestProduct;
