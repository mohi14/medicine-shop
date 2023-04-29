import React from "react";
import { useSelector } from "react-redux";

const Wishlist = () => {
  const { wishlist } = useSelector((state) => state.cart);
  console.log(wishlist, "jjkl");
  return (
    <>
      <div class="ltn__utilize-overlay"></div>

      {/* <!-- BREADCRUMB AREA START --> */}
      <div
        class="ltn__breadcrumb-area text-left bg-overlay-white-30 bg-image "
        data-bs-bg="img/bg/14.jpg"
      >
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="ltn__breadcrumb-inner">
                <h1 class="page-title">Wishlist</h1>
                <div class="ltn__breadcrumb-list">
                  <ul>
                    <li>
                      <a href="index.html">
                        <span class="ltn__secondary-color">
                          <i class="fas fa-home"></i>
                        </span>{" "}
                        Home
                      </a>
                    </li>
                    <li>Wishlist</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- BREADCRUMB AREA END --> */}

      {/* <!-- WISHLIST AREA START --> */}
      <div class="liton__wishlist-area mb-105">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="shoping-cart-inner">
                <div class="shoping-cart-table table-responsive">
                  <table class="table">
                    {/* <!-- <thead>
                                <th class="cart-product-remove">X</th>
                                <th class="cart-product-image">Image</th>
                                <th class="cart-product-info">Title</th>
                                <th class="cart-product-price">Price</th>
                                <th class="cart-product-quantity">Quantity</th>
                                <th class="cart-product-subtotal">Subtotal</th>
                            </thead> --> */}
                    <tbody>
                      <tr>
                        <td class="cart-product-remove">x</td>
                        <td class="cart-product-image">
                          <a href="product-details.html">
                            <img src="img/product/1.png" alt="#" />
                          </a>
                        </td>
                        <td class="cart-product-info">
                          <h4>
                            <a href="product-details.html">
                              Digital Stethoscope
                            </a>
                          </h4>
                        </td>
                        <td class="cart-product-price">$85.00</td>
                        <td class="cart-product-stock">In Stock</td>
                        <td class="cart-product-add-cart">
                          <a
                            class="submit-button-1"
                            href="#"
                            title="Add to Cart"
                            data-bs-toggle="modal"
                            data-bs-target="#add_to_cart_modal"
                          >
                            Add to Cart
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td class="cart-product-remove">x</td>
                        <td class="cart-product-image">
                          <a href="product-details.html">
                            <img src="img/product/2.png" alt="#" />
                          </a>
                        </td>
                        <td class="cart-product-info">
                          <h4>
                            <a href="product-details.html">Thermometer Gun</a>
                          </h4>
                        </td>
                        <td class="cart-product-price">$89.00</td>
                        <td class="cart-product-stock">In Stock</td>
                        <td class="cart-product-add-cart">
                          <a
                            class="submit-button-1"
                            href="#"
                            title="Add to Cart"
                            data-bs-toggle="modal"
                            data-bs-target="#add_to_cart_modal"
                          >
                            Add to Cart
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td class="cart-product-remove">x</td>
                        <td class="cart-product-image">
                          <a href="product-details.html">
                            <img src="img/product/4.png" alt="#" />
                          </a>
                        </td>
                        <td class="cart-product-info">
                          <h4>
                            <a href="product-details.html">Tail Light Lens</a>
                          </h4>
                        </td>
                        <td class="cart-product-price">$149.00</td>
                        <td class="cart-product-stock">In Stock</td>
                        <td class="cart-product-add-cart">
                          <a
                            class="submit-button-1"
                            href="#"
                            title="Add to Cart"
                            data-bs-toggle="modal"
                            data-bs-target="#add_to_cart_modal"
                          >
                            Add to Cart
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- WISHLIST AREA START --> */}

      {/* <!-- CALL TO ACTION START (call-to-action-6) --> */}
      {/* <div
        class="ltn__call-to-action-area call-to-action-6 before-bg-bottom"
        data-bs-bg="img/1.jpg--"
      >
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="call-to-action-inner call-to-action-inner-6 ltn__secondary-bg position-relative text-center---">
                <div class="coll-to-info text-color-white">
                  <h1>
                    Buy medical disposable face mask <br /> to protect your
                    loved ones
                  </h1>
                </div>
                <div class="btn-wrapper">
                  <a class="btn btn-effect-3 btn-white" href="shop.html">
                    Explore Products <i class="icon-next"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* <!-- CALL TO ACTION END -->    */}
    </>
  );
};

export default Wishlist;
