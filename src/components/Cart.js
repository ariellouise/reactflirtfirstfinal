import React, { Component } from "react";

class Cart extends React.Component {
  render() {
    return (
      <div>
        <aside class="mini-cart" id="miniCart">
          <div class="mini-cart-wrapper">
            <div class="mini-cart__close">
              <a href="#" class="btn-close">
                <i class="la la-remove"></i>
              </a>
            </div>
            <div class="mini-cart-inner">
              <h3 class="mini-cart__heading mb--45">Shopping Cart</h3>
              <div class="mini-cart__content">
                <ul class="mini-cart__list">
                  <li class="mini-cart__user">
                    <a href="#" class="mini-cart__user-remove">
                      <i class="la la-remove"></i>
                    </a>
                    <div class="mini-cart__user-image">
                      <img
                        src="assets/img/products/prod-01-100x100.jpg"
                        alt="user"
                      />
                    </div>
                    <div class="mini-cart__user-content">
                      <a class="mini-cart__user-title" href="user-profile.html">
                        Golden Easy Spot Chair.
                      </a>
                      <span class="mini-cart__user-quantity">1 x $49.00</span>
                    </div>
                  </li>
                  <li class="mini-cart__user">
                    <a href="#" class="mini-cart__user-remove">
                      <i class="la la-remove"></i>
                    </a>
                    <div class="mini-cart__user-image">
                      <img
                        src="assets/img/products/prod-02-100x100.jpg"
                        alt="users"
                      />
                    </div>
                    <div class="mini-cart__user-content">
                      <a class="mini-cart__user-title" href="user-profile.html">
                        Golden Easy Spot Chair.
                      </a>
                      <span class="mini-cart__user-quantity">1 x $49.00</span>
                    </div>
                  </li>
                  <li class="mini-cart__user">
                    <a href="#" class="mini-cart__user-remove">
                      <i class="la la-remove"></i>
                    </a>
                    <div class="mini-cart__user-image">
                      <img
                        src="assets/img/products/prod-03-100x100.jpg"
                        alt="users"
                      />
                    </div>
                    <div class="mini-cart__user-content">
                      <a class="mini-cart__user-title" href="user-profile.html">
                        Golden Easy Spot Chair.
                      </a>
                      <span class="mini-cart__user-quantity">1 x $49.00</span>
                    </div>
                  </li>
                </ul>
                <div class="mini-cart__total">
                  <span>Subtotal</span>
                  <span class="ammount">$98.00</span>
                </div>
                <div class="mini-cart__buttons">
                  <a
                    href="cart.html"
                    class="btn btn-fullwidth btn-bg-primary mb--20"
                  >
                    View Cart
                  </a>
                  <a
                    href="checkout.html"
                    class="btn btn-fullwidth btn-bg-primary"
                  >
                    Checkout
                  </a>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    );
  }
}
export default Cart;
