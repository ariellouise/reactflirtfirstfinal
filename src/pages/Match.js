import React, { Component } from "react";

class Match extends React.Component {
  render() {
    return (
      <div>
        <div class="main-content-wrapper">
          <div class="shop-page-wrapper shop-fullwidth ptb--80">
            <div class="container">
              <div class="row mb--50">
                <div class="col-12">
                  <div class="shop-toolbar">
                    <div class="row align-items-center">
                      <div class="col-md-5 mb-sm--30 mb-xs--10">
                        <div class="shop-toolbar__left">
                          <div class="user-ordering">
                            <select class="user-ordering__select nice-select">
                              <option value="0">Default Sorting</option>
                              <option value="1">Distance Closest</option>
                              <option value="2">Distance Farthest</option>
                              <option value="3">Interests In Common</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-7">
                        <div
                          class="
                          shop-toolbar__right
                          d-flex
                          justify-content-md-end justify-content-start
                          flex-sm-row flex-column
                        "
                        >
                          <p class="user-pages">Showing Result 08 Among 72</p>
                          <div class="user-view-mode ml--50 ml-xs--0">
                            <a class="active" href="#" data-target="grid">
                              <img src="assets/img/icons/grid.png" alt="Grid" />
                            </a>
                            <a href="#" data-target="list">
                              <img src="assets/img/icons/list.png" alt="Grid" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="container-fluid shop-users">
              <div class="row">
                <div class="col-xl-3 col-md-4 col-sm-6 mb--50">
                  <div class="ft-user">
                    <div class="user-inner">
                      <div class="user-image">
                        <figure class="user-image--holder">
                          <img
                            src="assets/img/products/prod-01.jpg"
                            alt="Users"
                          />
                        </figure>
                        <a href="user-details.html" class="user-overlay"></a>
                        <div class="user-action">
                          <a
                            data-toggle="modal"
                            data-target="#userModal"
                            class="action-btn"
                          >
                            <i class="la la-eye"></i>
                          </a>
                          <a href="inbox.html" class="action-btn">
                            <i class="la la-heart-o"></i>
                          </a>
                          <a href="inbox.html" class="action-btn">
                            <i class="la la-repeat"></i>
                          </a>
                        </div>
                      </div>
                      <div class="user-info">
                        <h3 class="user-title">
                          <a href="user-details.html">User Name</a>
                        </h3>
                        <div class="user-info-bottom">
                          <div class="user-price-wrapper">
                            <span class="money">Syracuse NY</span>
                          </div>
                          <a
                            href="user-profile.html"
                            class="add-to-cart pr--15"
                          >
                            <i class="la la-plus"></i>
                            <span>See Profile!</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="ft-user-list">
                    <div class="user-inner">
                      <figure class="user-image">
                        <a href="user-details.html">
                          <img
                            src="assets/img/products/prod-01.jpg"
                            alt="Users"
                          />
                        </a>
                        <div class="user-thumbnail-action">
                          <a
                            data-toggle="modal"
                            data-target="#userModal"
                            class="action-btn quick-view"
                          >
                            <i class="la la-eye"></i>
                          </a>
                        </div>
                      </figure>
                      <div class="user-info">
                        <h3 class="user-title mb--25">
                          <a href="user-details.html">Long Cartigen</a>
                        </h3>
                        <div class="ft-user-action-list mb--20">
                          <div class="user-size mb--25">
                            <div class="user-size-swatch">
                              <span class="user-size-swatch-btn variation-btn">
                                XL
                              </span>
                              <span class="user-size-swatch-btn variation-btn">
                                L
                              </span>
                              <span class="user-size-swatch-btn variation-btn">
                                M
                              </span>
                              <span class="user-size-swatch-btn variation-btn">
                                S
                              </span>
                            </div>
                          </div>
                          <div class="user-color">
                            <div class="user-color-swatch">
                              <span class="user-color-swatch-btn variation-btn abbey">
                                Abbey
                              </span>
                              <span class="user-color-swatch-btn variation-btn blue">
                                Blue
                              </span>
                              <span class="user-color-swatch-btn variation-btn copper">
                                Copper
                              </span>
                              <span
                                class="
                                user-color-swatch-btn
                                variation-btn
                                old-rose
                              "
                              >
                                Old Rose
                              </span>
                            </div>
                          </div>
                        </div>
                        <div class="user-price-wrapper mb--15 mb-sm--10">
                          <span class="money">$80</span>
                          <span class="money-separator">-</span>
                          <span class="money">$200</span>
                        </div>
                        <p class="user-short-description mb--20">
                          Donec accumsan auctor iaculis. Sed suscipit arcu
                          ligula, at egestas magna molestie a. Proin ac ex
                          maximus, ultrices justo eget, sodales orci. Aliquam
                          egestas libero ac turpis pharetra
                        </p>
                        <div class="ft-user-action-list d-flex align-items-center">
                          <a href="cart.html" class="btn btn-size-md">
                            Add To Cart
                          </a>
                          <a href="wishlist.html" class="ml--20 action-btn">
                            <i class="la la-heart-o"></i>
                          </a>
                          <a href="wishlist.html" class="ml--20 action-btn">
                            <i class="la la-repeat"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-3 col-md-4 col-sm-6 mb--50">
                  <div class="ft-user">
                    <div class="user-inner">
                      <div class="user-image">
                        <figure class="user-image--holder">
                          <img
                            src="assets/img/products/prod-02.jpg"
                            alt="User"
                          />
                        </figure>
                        <a href="user-details.html" class="user-overlay"></a>
                        <div class="user-action">
                          <a
                            data-toggle="modal"
                            data-target="#userModal"
                            class="action-btn"
                          >
                            <i class="la la-eye"></i>
                          </a>
                          <a href="wishlist.html" class="action-btn">
                            <i class="la la-heart-o"></i>
                          </a>
                          <a href="wishlist.html" class="action-btn">
                            <i class="la la-repeat"></i>
                          </a>
                        </div>
                      </div>
                      <div class="user-info">
                        <div class="user-category">
                          <a href="user-details.html">Chair</a>
                        </div>
                        <h3 class="user-title">
                          <a href="user-details.html">
                            Golden Easy Spot Chair.
                          </a>
                        </h3>
                        <div class="user-info-bottom">
                          <div class="user-price-wrapper">
                            <span class="money">$150</span>
                          </div>
                          <a href="cart.html" class="add-to-cart pr--15">
                            <i class="la la-plus"></i>
                            <span>Add To Cart</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="ft-user-list">
                    <div class="user-inner">
                      <figure class="user-image">
                        <a href="user-details.html">
                          <img
                            src="assets/img/products/prod-02.jpg"
                            alt="Users"
                          />
                        </a>
                        <div class="user-thumbnail-action">
                          <a
                            data-toggle="modal"
                            data-target="#userModal"
                            class="action-btn quick-view"
                          >
                            <i class="la la-eye"></i>
                          </a>
                        </div>
                      </figure>
                      <div class="user-info">
                        <h3 class="user-title mb--25">
                          <a href="user-details.html">Long Cartigen</a>
                        </h3>
                        <div class="ft-user-action-list mb--20">
                          <div class="user-size mb--25">
                            <div class="user-size-swatch">
                              <span class="user-size-swatch-btn variation-btn">
                                XL
                              </span>
                              <span class="user-size-swatch-btn variation-btn">
                                L
                              </span>
                              <span class="user-size-swatch-btn variation-btn">
                                M
                              </span>
                              <span class="user-size-swatch-btn variation-btn">
                                S
                              </span>
                            </div>
                          </div>
                          <div class="user-color">
                            <div class="user-color-swatch">
                              <span class="user-color-swatch-btn variation-btn abbey">
                                Abbey
                              </span>
                              <span class="user-color-swatch-btn variation-btn blue">
                                Blue
                              </span>
                              <span class="user-color-swatch-btn variation-btn copper">
                                Copper
                              </span>
                              <span
                                class="
                                user-color-swatch-btn
                                variation-btn
                                old-rose
                              "
                              >
                                Old Rose
                              </span>
                            </div>
                          </div>
                        </div>
                        <div class="user-price-wrapper mb--15 mb-sm--10">
                          <span class="money">$80</span>
                          <span class="money-separator">-</span>
                          <span class="money">$200</span>
                        </div>
                        <p class="user-short-description mb--20">
                          Donec accumsan auctor iaculis. Sed suscipit arcu
                          ligula, at egestas magna molestie a. Proin ac ex
                          maximus, ultrices justo eget, sodales orci. Aliquam
                          egestas libero ac turpis pharetra
                        </p>
                        <div class="ft-user-action-list d-flex align-items-center">
                          <a href="cart.html" class="btn btn-size-md">
                            Add To Cart
                          </a>
                          <a href="wishlist.html" class="ml--20 action-btn">
                            <i class="la la-heart-o"></i>
                          </a>
                          <a href="wishlist.html" class="ml--20 action-btn">
                            <i class="la la-repeat"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-3 col-md-4 col-sm-6 mb--50">
                  <div class="ft-user">
                    <div class="user-inner">
                      <div class="user-image">
                        <figure class="user-image--holder">
                          <img
                            src="assets/img/products/prod-03.jpg"
                            alt="User"
                          />
                        </figure>
                        <a href="user-details.html" class="user-overlay"></a>
                        <div class="user-action">
                          <a
                            data-toggle="modal"
                            data-target="#userModal"
                            class="action-btn"
                          >
                            <i class="la la-eye"></i>
                          </a>
                          <a href="wishlist.html" class="action-btn">
                            <i class="la la-heart-o"></i>
                          </a>
                          <a href="wishlist.html" class="action-btn">
                            <i class="la la-repeat"></i>
                          </a>
                        </div>
                      </div>
                      <div class="user-info">
                        <div class="user-category">
                          <a href="user-details.html">Chair</a>
                        </div>
                        <h3 class="user-title">
                          <a href="user-details.html">
                            Golden Easy Spot Chair.
                          </a>
                        </h3>
                        <div class="user-info-bottom">
                          <div class="user-price-wrapper">
                            <span class="money">$150</span>
                          </div>
                          <a href="cart.html" class="add-to-cart pr--15">
                            <i class="la la-plus"></i>
                            <span>Add To Cart</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="ft-user-list">
                    <div class="user-inner">
                      <figure class="user-image">
                        <a href="user-details.html">
                          <img
                            src="assets/img/products/prod-03.jpg"
                            alt="Users"
                          />
                        </a>
                        <div class="user-thumbnail-action">
                          <a
                            data-toggle="modal"
                            data-target="#userModal"
                            class="action-btn quick-view"
                          >
                            <i class="la la-eye"></i>
                          </a>
                        </div>
                      </figure>
                      <div class="user-info">
                        <h3 class="user-title mb--25">
                          <a href="user-details.html">Long Cartigen</a>
                        </h3>
                        <div class="ft-user-action-list mb--20">
                          <div class="user-size mb--25">
                            <div class="user-size-swatch">
                              <span class="user-size-swatch-btn variation-btn">
                                XL
                              </span>
                              <span class="user-size-swatch-btn variation-btn">
                                L
                              </span>
                              <span class="user-size-swatch-btn variation-btn">
                                M
                              </span>
                              <span class="user-size-swatch-btn variation-btn">
                                S
                              </span>
                            </div>
                          </div>
                          <div class="user-color">
                            <div class="user-color-swatch">
                              <span class="user-color-swatch-btn variation-btn abbey">
                                Abbey
                              </span>
                              <span class="user-color-swatch-btn variation-btn blue">
                                Blue
                              </span>
                              <span class="user-color-swatch-btn variation-btn copper">
                                Copper
                              </span>
                              <span
                                class="
                                user-color-swatch-btn
                                variation-btn
                                old-rose
                              "
                              >
                                Old Rose
                              </span>
                            </div>
                          </div>
                        </div>
                        <div class="user-price-wrapper mb--15 mb-sm--10">
                          <span class="money">$80</span>
                          <span class="money-separator">-</span>
                          <span class="money">$200</span>
                        </div>
                        <p class="user-short-description mb--20">
                          Donec accumsan auctor iaculis. Sed suscipit arcu
                          ligula, at egestas magna molestie a. Proin ac ex
                          maximus, ultrices justo eget, sodales orci. Aliquam
                          egestas libero ac turpis pharetra
                        </p>
                        <div class="ft-user-action-list d-flex align-items-center">
                          <a href="cart.html" class="btn btn-size-md">
                            Add To Cart
                          </a>
                          <a href="wishlist.html" class="ml--20 action-btn">
                            <i class="la la-heart-o"></i>
                          </a>
                          <a href="wishlist.html" class="ml--20 action-btn">
                            <i class="la la-repeat"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-3 col-md-4 col-sm-6 mb--50">
                  <div class="ft-user">
                    <div class="user-inner">
                      <div class="user-image">
                        <figure class="user-image--holder">
                          <img
                            src="assets/img/products/prod-08.png"
                            alt="User"
                          />
                        </figure>
                        <a href="user-details.html" class="user-overlay"></a>
                        <div class="user-action">
                          <a
                            data-toggle="modal"
                            data-target="#userModal"
                            class="action-btn"
                          >
                            <i class="la la-eye"></i>
                          </a>
                          <a href="wishlist.html" class="action-btn">
                            <i class="la la-heart-o"></i>
                          </a>
                          <a href="wishlist.html" class="action-btn">
                            <i class="la la-repeat"></i>
                          </a>
                        </div>
                      </div>
                      <div class="user-info">
                        <div class="user-category">
                          <a href="user-details.html">Chair</a>
                        </div>
                        <h3 class="user-title">
                          <a href="user-details.html">
                            Golden Easy Spot Chair.
                          </a>
                        </h3>
                        <div class="user-info-bottom">
                          <div class="user-price-wrapper">
                            <span class="money">$150</span>
                          </div>
                          <a href="cart.html" class="add-to-cart pr--15">
                            <i class="la la-plus"></i>
                            <span>Add To Cart</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="ft-user-list">
                    <div class="user-inner">
                      <figure class="user-image">
                        <a href="user-details.html">
                          <img
                            src="assets/img/products/prod-08.png"
                            alt="Users"
                          />
                        </a>
                        <div class="user-thumbnail-action">
                          <a
                            data-toggle="modal"
                            data-target="#userModal"
                            class="action-btn quick-view"
                          >
                            <i class="la la-eye"></i>
                          </a>
                        </div>
                      </figure>
                      <div class="user-info">
                        <h3 class="user-title mb--25">
                          <a href="user-details.html">Long Cartigen</a>
                        </h3>
                        <div class="ft-user-action-list mb--20">
                          <div class="user-size mb--25">
                            <div class="user-size-swatch">
                              <span class="user-size-swatch-btn variation-btn">
                                XL
                              </span>
                              <span class="user-size-swatch-btn variation-btn">
                                L
                              </span>
                              <span class="user-size-swatch-btn variation-btn">
                                M
                              </span>
                              <span class="user-size-swatch-btn variation-btn">
                                S
                              </span>
                            </div>
                          </div>
                          <div class="user-color">
                            <div class="user-color-swatch">
                              <span class="user-color-swatch-btn variation-btn abbey">
                                Abbey
                              </span>
                              <span class="user-color-swatch-btn variation-btn blue">
                                Blue
                              </span>
                              <span class="user-color-swatch-btn variation-btn copper">
                                Copper
                              </span>
                              <span
                                class="
                                user-color-swatch-btn
                                variation-btn
                                old-rose
                              "
                              >
                                Old Rose
                              </span>
                            </div>
                          </div>
                        </div>
                        <div class="user-price-wrapper mb--15 mb-sm--10">
                          <span class="money">$80</span>
                          <span class="money-separator">-</span>
                          <span class="money">$200</span>
                        </div>
                        <p class="user-short-description mb--20">
                          Donec accumsan auctor iaculis. Sed suscipit arcu
                          ligula, at egestas magna molestie a. Proin ac ex
                          maximus, ultrices justo eget, sodales orci. Aliquam
                          egestas libero ac turpis pharetra
                        </p>
                        <div class="ft-user-action-list d-flex align-items-center">
                          <a href="cart.html" class="btn btn-size-md">
                            Add To Cart
                          </a>
                          <a href="wishlist.html" class="ml--20 action-btn">
                            <i class="la la-heart-o"></i>
                          </a>
                          <a href="wishlist.html" class="ml--20 action-btn">
                            <i class="la la-repeat"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-3 col-md-4 col-sm-6 mb--50">
                  <div class="ft-user">
                    <div class="user-inner">
                      <div class="user-image">
                        <figure class="user-image--holder">
                          <img
                            src="assets/img/products/prod-09.png"
                            alt="User"
                          />
                        </figure>
                        <a href="user-details.html" class="user-overlay"></a>
                        <div class="user-action">
                          <a
                            data-toggle="modal"
                            data-target="#userModal"
                            class="action-btn"
                          >
                            <i class="la la-eye"></i>
                          </a>
                          <a href="wishlist.html" class="action-btn">
                            <i class="la la-heart-o"></i>
                          </a>
                          <a href="wishlist.html" class="action-btn">
                            <i class="la la-repeat"></i>
                          </a>
                        </div>
                      </div>
                      <div class="user-info">
                        <div class="user-category">
                          <a href="user-details.html">Chair</a>
                        </div>
                        <h3 class="user-title">
                          <a href="user-details.html">
                            Golden Easy Spot Chair.
                          </a>
                        </h3>
                        <div class="user-info-bottom">
                          <div class="user-price-wrapper">
                            <span class="money">$150</span>
                          </div>
                          <a href="cart.html" class="add-to-cart pr--15">
                            <i class="la la-plus"></i>
                            <span>Add To Cart</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="ft-user-list">
                    <div class="user-inner">
                      <figure class="user-image">
                        <a href="user-details.html">
                          <img
                            src="assets/img/products/prod-09.png"
                            alt="Users"
                          />
                        </a>
                        <div class="user-thumbnail-action">
                          <a
                            data-toggle="modal"
                            data-target="#userModal"
                            class="action-btn quick-view"
                          >
                            <i class="la la-eye"></i>
                          </a>
                        </div>
                      </figure>
                      <div class="user-info">
                        <h3 class="user-title mb--25">
                          <a href="user-details.html">Long Cartigen</a>
                        </h3>
                        <div class="ft-user-action-list mb--20">
                          <div class="user-size mb--25">
                            <div class="user-size-swatch">
                              <span class="user-size-swatch-btn variation-btn">
                                XL
                              </span>
                              <span class="user-size-swatch-btn variation-btn">
                                L
                              </span>
                              <span class="user-size-swatch-btn variation-btn">
                                M
                              </span>
                              <span class="user-size-swatch-btn variation-btn">
                                S
                              </span>
                            </div>
                          </div>
                          <div class="user-color">
                            <div class="user-color-swatch">
                              <span class="user-color-swatch-btn variation-btn abbey">
                                Abbey
                              </span>
                              <span class="user-color-swatch-btn variation-btn blue">
                                Blue
                              </span>
                              <span class="user-color-swatch-btn variation-btn copper">
                                Copper
                              </span>
                              <span
                                class="
                                user-color-swatch-btn
                                variation-btn
                                old-rose
                              "
                              >
                                Old Rose
                              </span>
                            </div>
                          </div>
                        </div>
                        <div class="user-price-wrapper mb--15 mb-sm--10">
                          <span class="money">$80</span>
                          <span class="money-separator">-</span>
                          <span class="money">$200</span>
                        </div>
                        <p class="user-short-description mb--20">
                          Donec accumsan auctor iaculis. Sed suscipit arcu
                          ligula, at egestas magna molestie a. Proin ac ex
                          maximus, ultrices justo eget, sodales orci. Aliquam
                          egestas libero ac turpis pharetra
                        </p>
                        <div class="ft-user-action-list d-flex align-items-center">
                          <a href="cart.html" class="btn btn-size-md">
                            Add To Cart
                          </a>
                          <a href="wishlist.html" class="ml--20 action-btn">
                            <i class="la la-heart-o"></i>
                          </a>
                          <a href="wishlist.html" class="ml--20 action-btn">
                            <i class="la la-repeat"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-3 col-md-4 col-sm-6 mb--50">
                  <div class="ft-user">
                    <div class="user-inner">
                      <div class="user-image">
                        <figure class="user-image--holder">
                          <img
                            src="assets/img/products/prod-10.png"
                            alt="User"
                          />
                        </figure>
                        <a href="user-details.html" class="user-overlay"></a>
                        <div class="user-action">
                          <a
                            data-toggle="modal"
                            data-target="#userModal"
                            class="action-btn"
                          >
                            <i class="la la-eye"></i>
                          </a>
                          <a href="wishlist.html" class="action-btn">
                            <i class="la la-heart-o"></i>
                          </a>
                          <a href="wishlist.html" class="action-btn">
                            <i class="la la-repeat"></i>
                          </a>
                        </div>
                      </div>
                      <div class="user-info">
                        <div class="user-category">
                          <a href="user-details.html">Chair</a>
                        </div>
                        <h3 class="user-title">
                          <a href="user-details.html">
                            Golden Easy Spot Chair.
                          </a>
                        </h3>
                        <div class="user-info-bottom">
                          <div class="user-price-wrapper">
                            <span class="money">$150</span>
                          </div>
                          <a href="cart.html" class="add-to-cart pr--15">
                            <i class="la la-plus"></i>
                            <span>Add To Cart</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="ft-user-list">
                    <div class="user-inner">
                      <figure class="user-image">
                        <a href="user-details.html">
                          <img
                            src="assets/img/products/prod-10.png"
                            alt="Users"
                          />
                        </a>
                        <div class="user-thumbnail-action">
                          <a
                            data-toggle="modal"
                            data-target="#userModal"
                            class="action-btn quick-view"
                          >
                            <i class="la la-eye"></i>
                          </a>
                        </div>
                      </figure>
                      <div class="user-info">
                        <h3 class="user-title mb--25">
                          <a href="user-details.html">Long Cartigen</a>
                        </h3>
                        <div class="ft-user-action-list mb--20">
                          <div class="user-size mb--25">
                            <div class="user-size-swatch">
                              <span class="user-size-swatch-btn variation-btn">
                                XL
                              </span>
                              <span class="user-size-swatch-btn variation-btn">
                                L
                              </span>
                              <span class="user-size-swatch-btn variation-btn">
                                M
                              </span>
                              <span class="user-size-swatch-btn variation-btn">
                                S
                              </span>
                            </div>
                          </div>
                          <div class="user-color">
                            <div class="user-color-swatch">
                              <span class="user-color-swatch-btn variation-btn abbey">
                                Abbey
                              </span>
                              <span class="user-color-swatch-btn variation-btn blue">
                                Blue
                              </span>
                              <span class="user-color-swatch-btn variation-btn copper">
                                Copper
                              </span>
                              <span
                                class="
                                user-color-swatch-btn
                                variation-btn
                                old-rose
                              "
                              >
                                Old Rose
                              </span>
                            </div>
                          </div>
                        </div>
                        <div class="user-price-wrapper mb--15 mb-sm--10">
                          <span class="money">$80</span>
                          <span class="money-separator">-</span>
                          <span class="money">$200</span>
                        </div>
                        <p class="user-short-description mb--20">
                          Donec accumsan auctor iaculis. Sed suscipit arcu
                          ligula, at egestas magna molestie a. Proin ac ex
                          maximus, ultrices justo eget, sodales orci. Aliquam
                          egestas libero ac turpis pharetra
                        </p>
                        <div class="ft-user-action-list d-flex align-items-center">
                          <a href="cart.html" class="btn btn-size-md">
                            Add To Cart
                          </a>
                          <a href="wishlist.html" class="ml--20 action-btn">
                            <i class="la la-heart-o"></i>
                          </a>
                          <a href="wishlist.html" class="ml--20 action-btn">
                            <i class="la la-repeat"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-3 col-md-4 col-sm-6 mb--50">
                  <div class="ft-user">
                    <div class="user-inner">
                      <div class="user-image">
                        <figure class="user-image--holder">
                          <img
                            src="assets/img/products/prod-06.png"
                            alt="User"
                          />
                        </figure>
                        <a href="user-details.html" class="user-overlay"></a>
                        <div class="user-action">
                          <a
                            data-toggle="modal"
                            data-target="#userModal"
                            class="action-btn"
                          >
                            <i class="la la-eye"></i>
                          </a>
                          <a href="wishlist.html" class="action-btn">
                            <i class="la la-heart-o"></i>
                          </a>
                          <a href="wishlist.html" class="action-btn">
                            <i class="la la-repeat"></i>
                          </a>
                        </div>
                      </div>
                      <div class="user-info">
                        <div class="user-category">
                          <a href="user-details.html">Chair</a>
                        </div>
                        <h3 class="user-title">
                          <a href="user-details.html">
                            Golden Easy Spot Chair.
                          </a>
                        </h3>
                        <div class="user-info-bottom">
                          <div class="user-price-wrapper">
                            <span class="money">$150</span>
                          </div>
                          <a href="cart.html" class="add-to-cart pr--15">
                            <i class="la la-plus"></i>
                            <span>Add To Cart</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="ft-user-list">
                    <div class="user-inner">
                      <figure class="user-image">
                        <a href="user-details.html">
                          <img
                            src="assets/img/products/prod-06.png"
                            alt="Users"
                          />
                        </a>
                        <div class="user-thumbnail-action">
                          <a
                            data-toggle="modal"
                            data-target="#userModal"
                            class="action-btn quick-view"
                          >
                            <i class="la la-eye"></i>
                          </a>
                        </div>
                      </figure>
                      <div class="user-info">
                        <h3 class="user-title mb--25">
                          <a href="user-details.html">Long Cartigen</a>
                        </h3>
                        <div class="ft-user-action-list mb--20">
                          <div class="user-size mb--25">
                            <div class="user-size-swatch">
                              <span class="user-size-swatch-btn variation-btn">
                                XL
                              </span>
                              <span class="user-size-swatch-btn variation-btn">
                                L
                              </span>
                              <span class="user-size-swatch-btn variation-btn">
                                M
                              </span>
                              <span class="user-size-swatch-btn variation-btn">
                                S
                              </span>
                            </div>
                          </div>
                          <div class="user-color">
                            <div class="user-color-swatch">
                              <span class="user-color-swatch-btn variation-btn abbey">
                                Abbey
                              </span>
                              <span class="user-color-swatch-btn variation-btn blue">
                                Blue
                              </span>
                              <span class="user-color-swatch-btn variation-btn copper">
                                Copper
                              </span>
                              <span
                                class="
                                user-color-swatch-btn
                                variation-btn
                                old-rose
                              "
                              >
                                Old Rose
                              </span>
                            </div>
                          </div>
                        </div>
                        <div class="user-price-wrapper mb--15 mb-sm--10">
                          <span class="money">$80</span>
                          <span class="money-separator">-</span>
                          <span class="money">$200</span>
                        </div>
                        <p class="user-short-description mb--20">
                          Donec accumsan auctor iaculis. Sed suscipit arcu
                          ligula, at egestas magna molestie a. Proin ac ex
                          maximus, ultrices justo eget, sodales orci. Aliquam
                          egestas libero ac turpis pharetra
                        </p>
                        <div class="ft-user-action-list d-flex align-items-center">
                          <a href="cart.html" class="btn btn-size-md">
                            Add To Cart
                          </a>
                          <a href="wishlist.html" class="ml--20 action-btn">
                            <i class="la la-heart-o"></i>
                          </a>
                          <a href="wishlist.html" class="ml--20 action-btn">
                            <i class="la la-repeat"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-3 col-md-4 col-sm-6 mb--50">
                  <div class="ft-user">
                    <div class="user-inner">
                      <div class="user-image">
                        <figure class="user-image--holder">
                          <img
                            src="assets/img/products/prod-04.png"
                            alt="User"
                          />
                        </figure>
                        <a href="user-details.html" class="user-overlay"></a>
                        <div class="user-action">
                          <a
                            data-toggle="modal"
                            data-target="#userModal"
                            class="action-btn"
                          >
                            <i class="la la-eye"></i>
                          </a>
                          <a href="wishlist.html" class="action-btn">
                            <i class="la la-heart-o"></i>
                          </a>
                          <a href="wishlist.html" class="action-btn">
                            <i class="la la-repeat"></i>
                          </a>
                        </div>
                      </div>
                      <div class="user-info">
                        <div class="user-category">
                          <a href="user-details.html">Chair</a>
                        </div>
                        <h3 class="user-title">
                          <a href="user-details.html">
                            Golden Easy Spot Chair.
                          </a>
                        </h3>
                        <div class="user-info-bottom">
                          <div class="user-price-wrapper">
                            <span class="money">$150</span>
                          </div>
                          <a href="cart.html" class="add-to-cart pr--15">
                            <i class="la la-plus"></i>
                            <span>Add To Cart</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="ft-user-list">
                    <div class="user-inner">
                      <figure class="user-image">
                        <a href="user-details.html">
                          <img
                            src="assets/img/products/prod-04.png"
                            alt="Users"
                          />
                        </a>
                        <div class="user-thumbnail-action">
                          <a
                            data-toggle="modal"
                            data-target="#userModal"
                            class="action-btn quick-view"
                          >
                            <i class="la la-eye"></i>
                          </a>
                        </div>
                      </figure>
                      <div class="user-info">
                        <h3 class="user-title mb--25">
                          <a href="user-details.html">Long Cartigen</a>
                        </h3>
                        <div class="ft-user-action-list mb--20">
                          <div class="user-size mb--25">
                            <div class="user-size-swatch">
                              <span class="user-size-swatch-btn variation-btn">
                                XL
                              </span>
                              <span class="user-size-swatch-btn variation-btn">
                                L
                              </span>
                              <span class="user-size-swatch-btn variation-btn">
                                M
                              </span>
                              <span class="user-size-swatch-btn variation-btn">
                                S
                              </span>
                            </div>
                          </div>
                          <div class="user-color">
                            <div class="user-color-swatch">
                              <span class="user-color-swatch-btn variation-btn abbey">
                                Abbey
                              </span>
                              <span class="user-color-swatch-btn variation-btn blue">
                                Blue
                              </span>
                              <span class="user-color-swatch-btn variation-btn copper">
                                Copper
                              </span>
                              <span
                                class="
                                user-color-swatch-btn
                                variation-btn
                                old-rose
                              "
                              >
                                Old Rose
                              </span>
                            </div>
                          </div>
                        </div>
                        <div class="user-price-wrapper mb--15 mb-sm--10">
                          <span class="money">$80</span>
                          <span class="money-separator">-</span>
                          <span class="money">$200</span>
                        </div>
                        <p class="user-short-description mb--20">
                          Donec accumsan auctor iaculis. Sed suscipit arcu
                          ligula, at egestas magna molestie a. Proin ac ex
                          maximus, ultrices justo eget, sodales orci. Aliquam
                          egestas libero ac turpis pharetra
                        </p>
                        <div class="ft-user-action-list d-flex align-items-center">
                          <a href="cart.html" class="btn btn-size-md">
                            Add To Cart
                          </a>
                          <a href="wishlist.html" class="ml--20 action-btn">
                            <i class="la la-heart-o"></i>
                          </a>
                          <a href="wishlist.html" class="ml--20 action-btn">
                            <i class="la la-repeat"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-12">
                  <nav class="pagination-wrap mt--35 mt-md--25">
                    <ul class="pagination">
                      <li>
                        <span class="page-number current">1</span>
                      </li>
                      <li>
                        <a href="#" class="page-number">
                          2
                        </a>
                      </li>
                      <li>
                        <span class="dot"></span>
                      </li>
                      <li>
                        <span class="dot"></span>
                      </li>
                      <li>
                        <span class="dot"></span>
                      </li>
                      <li>
                        <a href="#" class="page-number">
                          16
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer class="footer bg-color" data-bg-color="#f4f8fa">
          <div class="footer-bottom">
            <div class="container-fluid">
              <div class="row border-top ptb--20">
                <div class="col-12 text-center">
                  <p class="copyright-text">
                    Flirt First &copy; 2021 all rights reserved
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>

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
                        alt="users"
                      />
                    </div>
                    <div class="mini-cart__user-content">
                      <a class="mini-cart__user-title" href="user-details.html">
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
                      <a class="mini-cart__user-title" href="user-details.html">
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
                      <a class="mini-cart__user-title" href="user-details.html">
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

        <div class="searchform__popup" id="searchForm">
          <a href="#" class="btn-close">
            <i class="la la-remove"></i>
          </a>
          <div class="searchform__body">
            <p>Start typing and press Enter to search</p>
            <form class="searchform">
              <input
                type="text"
                name="popup-search"
                id="popup-search"
                class="searchform__input"
                placeholder="Search Users..."
              />
              <button type="submit" class="searchform__submit">
                <i class="la la-search"></i>
              </button>
            </form>
          </div>
        </div>

        <div class="global-overlay"></div>

        <a class="scroll-to-top" href="">
          <i class="la la-angle-double-up"></i>
        </a>
      </div>
    );
  }
}
export default Match;
