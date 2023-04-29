import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { editCartQuantity, removeFromCart } from "../features/cart/cartSlice";

const Cart = () => {
  const { products } = useSelector((state) => state.cart);
  // console.log("products", products);
  const dispatch = useDispatch();

  const handleCartItems = (id, i, status) => {
    if (i.cartQuantity === 1 && status === "decrease") {
      dispatch(removeFromCart(id));
    } else {
      if (status === "increase") {
        dispatch(editCartQuantity({ id, status }));
      } else if (status === "decrease") {
        dispatch(editCartQuantity({ id, status }));
      }
    }
  };

  const handeRemove = (id) => {
    dispatch(removeFromCart(id));
  };
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
                <h1 class="page-title">Cart</h1>
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
                    <li>Cart</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- BREADCRUMB AREA END -->

<!-- SHOPING CART AREA START --> */}
      <div class="liton__shoping-cart-area mb-120">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="shoping-cart-inner">
                <div class="shoping-cart-table table-responsive">
                  <table class="table">
                    {/* <!-- <thead>
                                <th class="cart-product-remove">Remove</th>
                                <th class="cart-product-image">Image</th>
                                <th class="cart-product-info">Product</th>
                                <th class="cart-product-price">Price</th>
                                <th class="cart-product-quantity">Quantity</th>
                                <th class="cart-product-subtotal">Subtotal</th>
                            </thead> --> */}
                    <tbody>
                      {products?.map((i) => (
                        <tr>
                          <td
                            class="cart-product-remove"
                            onClick={() => handeRemove(i?.productID)}
                          >
                            x
                          </td>
                          <td class="cart-product-image">
                            <a href="product-details.html">
                              <img src={i?.imageUrl} alt="#" />
                            </a>
                          </td>
                          <td class="cart-product-info">
                            <h4>
                              <a href="product-details.html">
                                {i?.productName}
                              </a>
                            </h4>
                          </td>
                          <td class="cart-product-price">
                            ${i?.productPrice.toFixed(2)}
                          </td>
                          <td class="cart-product-quantity">
                            <div class="cart-plus-minus">
                              <button
                                style={{ background: "unset" }}
                                onClick={() =>
                                  handleCartItems(i?.productID, i, "decrease")
                                }
                              >
                                -
                              </button>
                              <input
                                type="text"
                                value={i?.cartQuantity}
                                name="qtybutton"
                                class="cart-plus-minus-box"
                              />
                              <button
                                style={{ background: "unset" }}
                                onClick={() =>
                                  handleCartItems(i?.productID, i, "increase")
                                }
                              >
                                +
                              </button>
                            </div>
                          </td>
                          <td class="cart-product-subtotal">
                            ${(i?.productPrice * i?.cartQuantity).toFixed(2)}
                          </td>
                        </tr>
                      ))}

                      <tr class="cart-coupon-row">
                        <td colspan="6">
                          <div class="cart-coupon">
                            <input
                              type="text"
                              name="cart-coupon"
                              placeholder="Coupon code"
                            />
                            <button
                              type="submit"
                              class="btn theme-btn-2 btn-effect-2"
                            >
                              Apply Coupon
                            </button>
                          </div>
                        </td>
                        <td>
                          <button
                            type="submit"
                            class="btn theme-btn-2 btn-effect-2-- disabled"
                          >
                            Update Cart
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div class="shoping-cart-total mt-50">
                  <h4>Cart Totals</h4>
                  <table class="table">
                    <tbody>
                      <tr>
                        <td>Cart Subtotal</td>
                        <td>$618.00</td>
                      </tr>
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
                          <strong>$633.00</strong>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div class="btn-wrapper text-right">
                    <a
                      href="checkout.html"
                      class="theme-btn-1 btn btn-effect-1"
                    >
                      Proceed to checkout
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- SHOPING CART AREA END -->

<!-- CALL TO ACTION START (call-to-action-6) --> */}
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

export default Cart;
