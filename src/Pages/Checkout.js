import React from "react";
import { useSelector } from "react-redux";

const Checkout = () => {
  const { products } = useSelector((state) => state.cart);
  console.log(products, "fjlksdjfkl");

  const orderTotal = products.reduce(
    (total, item) => total + item.productPrice * item.cartQuantity,
    0
  );

  return (
    <>
      <div
        id="ltn__utilize-cart-menu"
        class="ltn__utilize ltn__utilize-cart-menu"
      >
        <div class="ltn__utilize-menu-inner ltn__scrollbar">
          <div class="ltn__utilize-menu-head">
            <span class="ltn__utilize-menu-title">Cart</span>
            <button class="ltn__utilize-close">×</button>
          </div>
          <div class="mini-cart-product-area ltn__scrollbar">
            <div class="mini-cart-item clearfix">
              <div class="mini-cart-img">
                <a href="#">
                  <img src="img/product/1.png" alt="Image" />
                </a>
                <span class="mini-cart-item-delete">
                  <i class="icon-cancel"></i>
                </span>
              </div>
              <div class="mini-cart-info">
                <h6>
                  <a href="#">Antiseptic Spray</a>
                </h6>
                <span class="mini-cart-quantity">1 x $65.00</span>
              </div>
            </div>
            <div class="mini-cart-item clearfix">
              <div class="mini-cart-img">
                <a href="#">
                  <img src="img/product/2.png" alt="Image" />
                </a>
                <span class="mini-cart-item-delete">
                  <i class="icon-cancel"></i>
                </span>
              </div>
              <div class="mini-cart-info">
                <h6>
                  <a href="#">Digital Stethoscope</a>
                </h6>
                <span class="mini-cart-quantity">1 x $85.00</span>
              </div>
            </div>
            <div class="mini-cart-item clearfix">
              <div class="mini-cart-img">
                <a href="#">
                  <img src="img/product/3.png" alt="Image" />
                </a>
                <span class="mini-cart-item-delete">
                  <i class="icon-cancel"></i>
                </span>
              </div>
              <div class="mini-cart-info">
                <h6>
                  <a href="#">Cosmetic Containers</a>
                </h6>
                <span class="mini-cart-quantity">1 x $92.00</span>
              </div>
            </div>
            <div class="mini-cart-item clearfix">
              <div class="mini-cart-img">
                <a href="#">
                  <img src="img/product/4.png" alt="Image" />
                </a>
                <span class="mini-cart-item-delete">
                  <i class="icon-cancel"></i>
                </span>
              </div>
              <div class="mini-cart-info">
                <h6>
                  <a href="#">Thermometer Gun</a>
                </h6>
                <span class="mini-cart-quantity">1 x $68.00</span>
              </div>
            </div>
          </div>
          <div class="mini-cart-footer">
            <div class="mini-cart-sub-total">
              <h5>
                Subtotal: <span>$310.00</span>
              </h5>
            </div>
            <div class="btn-wrapper">
              <a href="cart.html" class="theme-btn-1 btn btn-effect-1">
                View Cart
              </a>
              <a href="cart.html" class="theme-btn-2 btn btn-effect-2">
                Checkout
              </a>
            </div>
            <p>Free Shipping on All Orders Over $100!</p>
          </div>
        </div>
      </div>

      {/* <!-- Utilize Mobile Menu Start --> */}
      <div
        id="ltn__utilize-mobile-menu"
        class="ltn__utilize ltn__utilize-mobile-menu"
      >
        <div class="ltn__utilize-menu-inner ltn__scrollbar">
          <div class="ltn__utilize-menu-head">
            <div class="site-logo">
              <a href="index.html">
                <img src="img/logo.png" alt="Logo" />
              </a>
            </div>
            <button class="ltn__utilize-close">×</button>
          </div>
          <div class="ltn__utilize-menu-search-form">
            <form action="#">
              <input type="text" placeholder="Search..." />
              <button>
                <i class="fas fa-search"></i>
              </button>
            </form>
          </div>
          <div class="ltn__utilize-menu">
            <ul>
              <li>
                <a href="#">Home</a>
                <ul class="sub-menu">
                  <li>
                    <a href="index.html">Home Style 01</a>
                  </li>
                  <li>
                    <a href="index-2.html">Home Style 02</a>
                  </li>
                  <li>
                    <a href="index-3.html">Home Style 03</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">About</a>
                <ul class="sub-menu">
                  <li>
                    <a href="about.html">About</a>
                  </li>
                  <li>
                    <a href="service.html">Services</a>
                  </li>
                  <li>
                    <a href="service-details.html">Service Details</a>
                  </li>
                  <li>
                    <a href="portfolio.html">Portfolio</a>
                  </li>
                  <li>
                    <a href="portfolio-2.html">Portfolio - 02</a>
                  </li>
                  <li>
                    <a href="portfolio-details.html">Portfolio Details</a>
                  </li>
                  <li>
                    <a href="team.html">Team</a>
                  </li>
                  <li>
                    <a href="team-details.html">Team Details</a>
                  </li>
                  <li>
                    <a href="faq.html">FAQ</a>
                  </li>
                  <li>
                    <a href="locations.html">Google Map Locations</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">Shop</a>
                <ul class="sub-menu">
                  <li>
                    <a href="shop.html">Shop</a>
                  </li>
                  <li>
                    <a href="shop-grid.html">Shop Grid</a>
                  </li>
                  <li>
                    <a href="shop-left-sidebar.html">Shop Left sidebar</a>
                  </li>
                  <li>
                    <a href="shop-right-sidebar.html">Shop right sidebar</a>
                  </li>
                  <li>
                    <a href="product-details.html">Shop details </a>
                  </li>
                  <li>
                    <a href="cart.html">Cart</a>
                  </li>
                  <li>
                    <a href="wishlist.html">Wishlist</a>
                  </li>
                  <li>
                    <a href="checkout.html">Checkout</a>
                  </li>
                  <li>
                    <a href="order-tracking.html">Order Tracking</a>
                  </li>
                  <li>
                    <a href="account.html">My Account</a>
                  </li>
                  <li>
                    <a href="login.html">Sign in</a>
                  </li>
                  <li>
                    <a href="register.html">Register</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">News</a>
                <ul class="sub-menu">
                  <li>
                    <a href="blog.html">News</a>
                  </li>
                  <li>
                    <a href="blog-grid.html">News Grid</a>
                  </li>
                  <li>
                    <a href="blog-left-sidebar.html">News Left sidebar</a>
                  </li>
                  <li>
                    <a href="blog-right-sidebar.html">News Right sidebar</a>
                  </li>
                  <li>
                    <a href="blog-details.html">News details</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">Pages</a>
                <ul class="sub-menu">
                  <li>
                    <a href="about.html">About</a>
                  </li>
                  <li>
                    <a href="service.html">Services</a>
                  </li>
                  <li>
                    <a href="service-details.html">Service Details</a>
                  </li>
                  <li>
                    <a href="portfolio.html">Portfolio</a>
                  </li>
                  <li>
                    <a href="portfolio-2.html">Portfolio - 02</a>
                  </li>
                  <li>
                    <a href="portfolio-details.html">Portfolio Details</a>
                  </li>
                  <li>
                    <a href="team.html">Team</a>
                  </li>
                  <li>
                    <a href="team-details.html">Team Details</a>
                  </li>
                  <li>
                    <a href="faq.html">FAQ</a>
                  </li>
                  <li>
                    <a href="history.html">History</a>
                  </li>
                  <li>
                    <a href="add-listing.html">Add Listing</a>
                  </li>
                  <li>
                    <a href="locations.html">Google Map Locations</a>
                  </li>
                  <li>
                    <a href="404.html">404</a>
                  </li>
                  <li>
                    <a href="contact.html">Contact</a>
                  </li>
                  <li>
                    <a href="coming-soon.html">Coming Soon</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="contact.html">Contact</a>
              </li>
            </ul>
          </div>
          <div class="ltn__utilize-buttons ltn__utilize-buttons-2">
            <ul>
              <li>
                <a href="account.html" title="My Account">
                  <span class="utilize-btn-icon">
                    <i class="far fa-user"></i>
                  </span>
                  My Account
                </a>
              </li>
              <li>
                <a href="wishlist.html" title="Wishlist">
                  <span class="utilize-btn-icon">
                    <i class="far fa-heart"></i>
                    <sup>3</sup>
                  </span>
                  Wishlist
                </a>
              </li>
              <li>
                <a href="cart.html" title="Shoping Cart">
                  <span class="utilize-btn-icon">
                    <i class="fas fa-shopping-cart"></i>
                    <sup>5</sup>
                  </span>
                  Shoping Cart
                </a>
              </li>
            </ul>
          </div>
          <div class="ltn__social-media-2">
            <ul>
              <li>
                <a href="#" title="Facebook">
                  <i class="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="#" title="Twitter">
                  <i class="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#" title="Linkedin">
                  <i class="fab fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="#" title="Instagram">
                  <i class="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* <!-- Utilize Mobile Menu End --> */}

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
                <h1 class="page-title">Checkout</h1>
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
                    <li>Checkout</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- BREADCRUMB AREA END --> */}

      {/* <!-- WISHLIST AREA START --> */}
      <div class="ltn__checkout-area mb-105">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="ltn__checkout-inner">
                <div class="ltn__checkout-single-content ltn__returning-customer-wrap">
                  <h5>
                    Returning customer?{" "}
                    <a
                      class="ltn__secondary-color"
                      href="#ltn__returning-customer-login"
                      data-bs-toggle="collapse"
                    >
                      Click here to login
                    </a>
                  </h5>
                  <div
                    id="ltn__returning-customer-login"
                    class="collapse ltn__checkout-single-content-info"
                  >
                    <div class="ltn_coupon-code-form ltn__form-box">
                      <p>Please login your accont.</p>
                      <form action="#">
                        <div class="row">
                          <div class="col-md-6">
                            <div class="input-item input-item-name ltn__custom-icon">
                              <input
                                type="text"
                                name="ltn__name"
                                placeholder="Enter your name"
                              />
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="input-item input-item-email ltn__custom-icon">
                              <input
                                type="email"
                                name="ltn__email"
                                placeholder="Enter email address"
                              />
                            </div>
                          </div>
                        </div>
                        <button class="btn theme-btn-1 btn-effect-1 text-uppercase">
                          Login
                        </button>
                        <label class="input-info-save mb-0">
                          <input type="checkbox" name="agree" /> Remember me
                        </label>
                        <p class="mt-30">
                          <a href="register.html">Lost your password?</a>
                        </p>
                      </form>
                    </div>
                  </div>
                </div>
                <div class="ltn__checkout-single-content ltn__coupon-code-wrap">
                  <h5>
                    Have a coupon?{" "}
                    <a
                      class="ltn__secondary-color"
                      href="#ltn__coupon-code"
                      data-bs-toggle="collapse"
                    >
                      Click here to enter your code
                    </a>
                  </h5>
                  <div
                    id="ltn__coupon-code"
                    class="collapse ltn__checkout-single-content-info"
                  >
                    <div class="ltn__coupon-code-form">
                      <p>If you have a coupon code, please apply it below.</p>
                      <form action="#">
                        <input
                          type="text"
                          name="coupon-code"
                          placeholder="Coupon code"
                        />
                        <button class="btn theme-btn-2 btn-effect-2 text-uppercase">
                          Apply Coupon
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
                <div class="ltn__checkout-single-content mt-50">
                  <h4 class="title-2">Billing Details</h4>
                  <div class="ltn__checkout-single-content-info">
                    <form action="#">
                      <h6>Personal Information</h6>
                      <div class="row">
                        <div class="col-md-6">
                          <div class="input-item input-item-name ltn__custom-icon">
                            <input
                              type="text"
                              name="ltn__name"
                              placeholder="First name"
                            />
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="input-item input-item-name ltn__custom-icon">
                            <input
                              type="text"
                              name="ltn__lastname"
                              placeholder="Last name"
                            />
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="input-item input-item-email ltn__custom-icon">
                            <input
                              type="email"
                              name="ltn__email"
                              placeholder="email address"
                            />
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="input-item input-item-phone ltn__custom-icon">
                            <input
                              type="text"
                              name="ltn__phone"
                              placeholder="phone number"
                            />
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="input-item input-item-website ltn__custom-icon">
                            <input
                              type="text"
                              name="ltn__company"
                              placeholder="Company name (optional)"
                            />
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="input-item input-item-website ltn__custom-icon">
                            <input
                              type="text"
                              name="ltn__phone"
                              placeholder="Company address (optional)"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-lg-4 col-md-6">
                          <h6>Country</h6>
                          <div class="input-item">
                            <select class="nice-select">
                              <option>Select Country</option>
                              <option>Australia</option>
                              <option>Canada</option>
                              <option>China</option>
                              <option>Morocco</option>
                              <option>Saudi Arabia</option>
                              <option>United Kingdom (UK)</option>
                              <option>United States (US)</option>
                            </select>
                          </div>
                        </div>
                        <div class="col-lg-12 col-md-12">
                          <h6>Address</h6>
                          <div class="row">
                            <div class="col-md-6">
                              <div class="input-item">
                                <input
                                  type="text"
                                  placeholder="House number and street name"
                                />
                              </div>
                            </div>
                            <div class="col-md-6">
                              <div class="input-item">
                                <input
                                  type="text"
                                  placeholder="Apartment, suite, unit etc. (optional)"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                          <h6>Town / City</h6>
                          <div class="input-item">
                            <input type="text" placeholder="City" />
                          </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                          <h6>State </h6>
                          <div class="input-item">
                            <input type="text" placeholder="State" />
                          </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                          <h6>Zip</h6>
                          <div class="input-item">
                            <input type="text" placeholder="Zip" />
                          </div>
                        </div>
                      </div>
                      <p>
                        <label class="input-info-save mb-0">
                          <input type="checkbox" name="agree" /> Create an
                          account?
                        </label>
                      </p>
                      <h6>Order Notes (optional)</h6>
                      <div class="input-item input-item-textarea ltn__custom-icon">
                        <textarea
                          name="ltn__message"
                          placeholder="Notes about your order, e.g. special notes for delivery."
                        ></textarea>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="ltn__checkout-payment-method mt-50">
                <h4 class="title-2">Payment Method</h4>
                <div id="checkout_accordion_1">
                  {/* <!-- card --> */}
                  <div class="card">
                    <h5
                      class="collapsed ltn__card-title"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-item-2-1"
                      aria-expanded="false"
                    >
                      Check payments
                    </h5>
                    <div
                      id="faq-item-2-1"
                      class="collapse"
                      data-bs-parent="#checkout_accordion_1"
                    >
                      <div class="card-body">
                        <p>
                          Please send a check to Store Name, Store Street, Store
                          Town, Store State / County, Store Postcode.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* <!-- card --> */}
                  <div class="card">
                    <h5
                      class="ltn__card-title"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-item-2-2"
                      aria-expanded="true"
                    >
                      Cash on delivery
                    </h5>
                    <div
                      id="faq-item-2-2"
                      class="collapse show"
                      data-bs-parent="#checkout_accordion_1"
                    >
                      <div class="card-body">
                        <p>Pay with cash upon delivery.</p>
                      </div>
                    </div>
                  </div>

                  <div class="card">
                    <h5
                      class="collapsed ltn__card-title"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-item-2-3"
                      aria-expanded="false"
                    >
                      PayPal <img src="img/icons/payment-3.png" alt="#" />
                    </h5>
                    <div
                      id="faq-item-2-3"
                      class="collapse"
                      data-bs-parent="#checkout_accordion_1"
                    >
                      <div class="card-body">
                        <p>
                          Pay via PayPal; you can pay with your credit card if
                          you don’t have a PayPal account.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="ltn__payment-note mt-30 mb-30">
                  <p>
                    Your personal data will be used to process your order,
                    support your experience throughout this website, and for
                    other purposes described in our privacy policy.
                  </p>
                </div>
                <button
                  class="btn theme-btn-1 btn-effect-1 text-uppercase"
                  type="submit"
                >
                  Place order
                </button>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="shoping-cart-total mt-50">
                <h4 class="title-2">Cart Totals</h4>
                <table class="table">
                  {products.length > 0 ? (
                    <tbody>
                      {products?.map((i) => (
                        <tr>
                          <td>
                            {i?.productName}{" "}
                            <strong>× {i?.cartQuantity}</strong>
                          </td>
                          <td>
                            ${(i?.cartQuantity * i?.productPrice).toFixed(2)}
                          </td>
                        </tr>
                      ))}

                      <tr>
                        <td>Shipping and Handing</td>
                        <td>$15.00</td>
                      </tr>
                      <tr>
                        <td>Vat</td>
                        <td>$00.00</td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Order Total</strong>
                        </td>
                        <td>
                          <strong>${(orderTotal + 15).toFixed(2)}</strong>
                        </td>
                      </tr>
                    </tbody>
                  ) : (
                    "No Items to the Cart"
                  )}
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- WISHLIST AREA START --> */}

      {/* <!-- CALL TO ACTION START (call-to-action-6) --> */}
      <div
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
                    Explore Products <i class="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- CALL TO ACTION END --> */}
    </>
  );
};

export default Checkout;
