import React, { Component } from "react";

class Userprofile extends React.Component {
  render() {
    return (
      <div>
        {/*Breadcrumb*/}
        <section
          class="page-title-area bg-image ptb--80"
          data-bg-image="assets/img/bg/page_title_bg.jpg"
        >
          <div class="container">
            <div class="row">
              <div class="col-12 text-center">
                <h1 class="page-title">User Details</h1>
                <ul class="breadcrumb">
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li class="current">
                    <span>User Details</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/*Main content*/}
      </div>
    );
  }
}
export default Userprofile;

{
  /*<div class="main-content-wrapper">
        <div class="page-content-inner pt--80 pt-md--60">
          <div class="container">
            <div class="row no-gutters mb--77 mb-md--57">
              <div class="col-lg-7 user-main-image">
                <div class="user-image">
                  <div class="user-gallery vertical-slide-nav">
                    <div class="user-gallery__large-image mb-sm--30">
                      <div class="user-gallery__wrapper">
                        <div
                          class="element-carousel main-slider image-popup"
                          data-slick-options='{
                                                "slidesToShow": 1,
                                                "slidesToScroll": 1,
                                                "infinite": true,
                                                "arrows": false, 
                                                "asNavFor": ".nav-slider"
                                            }'
                        >
                          <figure class="user-gallery__image zoom">
                            <img
                              src="assets/img/products/prod-08-700x778.png"
                              alt="user"
                            />
                            <span class="user-badge sale">Online Now!</span>
                            <div class="user-gallery__actions">
                              <button class="action-btn btn-zoom-popup">
                                <i class="la la-eye"></i>
                              </button>
                              <a
                                href="https://www.youtube.com/p1noRCUvsrM"
                                class="action-btn video-popup"
                                ><i class="la la-play"></i
                              ></a>
                            </div>
                          </figure>
                          <figure class="user-gallery__image zoom">
                            <img
                              src="assets/img/products/prod-09-700x778.png"
                              alt="user"
                            />
                            <span class="user-badge sale">Online Now!</span>
                            <div class="user-gallery__actions">
                              <button class="action-btn btn-zoom-popup">
                                <i class="la la-eye"></i>
                              </button>
                              <a
                                href="https://www.youtube.com/watch?v=Rp19QD2XIGM"
                                class="action-btn video-popup"
                                ><i class="la la-play"></i
                              ></a>
                            </div>
                          </figure>
                          <figure class="user-gallery__image zoom">
                            <img
                              src="assets/img/products/prod-10-700x778.png"
                              alt="user"
                            />
                            <span class="user-badge sale">Online Now!</span>
                            <div class="user-gallery__actions">
                              <button class="action-btn btn-zoom-popup">
                                <i class="la la-eye"></i>
                              </button>
                              <a
                                href="https://www.youtube.com/watch?v=Rp19QD2XIGM"
                                class="action-btn video-popup"
                                ><i class="la la-play"></i
                              ></a>
                            </div>
                          </figure>
                          <figure class="user-gallery__image zoom">
                            <img
                              src="assets/img/products/prod-04-700x778.png"
                              alt="user"
                            />
                            <span class="user-badge sale">Online Now!</span>
                            <div class="user-gallery__actions">
                              <button class="action-btn btn-zoom-popup">
                                <i class="la la-eye"></i>
                              </button>
                              <a
                                href="https://www.youtube.com/watch?v=Rp19QD2XIGM"
                                class="action-btn video-popup"
                                ><i class="la la-play"></i
                              ></a>
                            </div>
                          </figure>
                        </div>
                      </div>
                    </div>
                    <div class="user-gallery__nav-image">
                      <div
                        class="
                          element-carousel
                          nav-slider
                          user-slide-nav
                          slick-center-bottom
                        "
                        data-slick-options='{
                                            "spaceBetween": 10,
                                            "slidesToShow": 3,
                                            "slidesToScroll": 1,
                                            "vertical": true,
                                            "swipe": true,
                                            "verticalSwiping": true,
                                            "infinite": true,
                                            "focusOnSelect": true,
                                            "asNavFor": ".main-slider",
                                            "arrows": true, 
                                            "prevArrow": {"buttonClass": "slick-btn slick-prev", "iconClass": "la la-angle-up" },
                                            "nextArrow": {"buttonClass": "slick-btn slick-next", "iconClass": "la la-angle-down" }
                                        }'
                        data-slick-responsive='[
                                            {
                                                "breakpoint":1200, 
                                                "settings": {
                                                    "slidesToShow": 2
                                                } 
                                            },
                                            {
                                                "breakpoint":992, 
                                                "settings": {
                                                    "slidesToShow": 3
                                                } 
                                            },
                                            {
                                                "breakpoint":767, 
                                                "settings": {
                                                    "slidesToShow": 4,
                                                    "vertical": false
                                                } 
                                            },
                                            {
                                                "breakpoint":575, 
                                                "settings": {
                                                    "slidesToShow": 3,
                                                    "vertical": false
                                                } 
                                            },
                                            {
                                                "breakpoint":480, 
                                                "settings": {
                                                    "slidesToShow": 2,
                                                    "vertical": false
                                                } 
                                            }
                                        ]'
                      >
                        <figure class="user-gallery__nav-image--single">
                          <img
                            src="assets/img/products/prod-08-170x195.png"
                            alt="users"
                          />
                        </figure>
                        <figure class="user-gallery__nav-image--single">
                          <img
                            src="assets/img/products/prod-09-170x195.png"
                            alt="users"
                          />
                        </figure>
                        <figure class="user-gallery__nav-image--single">
                          <img
                            src="assets/img/products/prod-10-170x195.png"
                            alt="users"
                          />
                        </figure>
                        <figure class="user-gallery__nav-image--single">
                          <img
                            src="assets/img/products/prod-04-170x195.jpg"
                            alt="users"
                          />
                        </figure>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="
                  col-xl-4
                  offset-xl-1
                  col-lg-5
                  user-main-details
                  mt-md--50
                "
              >
                <div class="user-summary pl-lg--30 pl-md--0">
                  <div class="user-navigation text-right mb--20">
                    <a href="#" class="prev"
                      ><i class="la la-angle-double-left"></i
                    ></a>
                    <a href="#" class="next"
                      ><i class="la la-angle-double-right"></i
                    ></a>
                  </div>
                  <div class="user-rating d-flex mb--20">
                    <div class="star-rating star-four">
                      <span
                        >Rated <strong class="rating">5.00</strong> out of
                        5</span
                      >
                    </div>
                  </div>
                  <h3 class="user-title mb--20">User Name</h3>
                  <p class="user-short-description mb--20">
                    Donec accumsan auctor iaculis. Sed suscipit arcu ligula, at
                    egestas magna molestie a. Proin ac ex maximus, ultrices
                    justo eget, sodales orci. Aliquam egestas libero ac turpis
                    pharetra, in vehicula lacus scelerisque. Vestibulum ut sem
                    laoreet, feugiat tellus at, hendrerit arcu.
                  </p>
                  <div class="user-price-wrapper mb--25">
                    <span class="money">Rome NY</span>
                  </div>
                  <form action="#" class="variation-form mb--20">
                    <div
                      class="
                        user-color-variations
                        d-flex
                        align-items-center
                        mb--20
                      "
                    >
                      <p class="variation-label">Age: 29</p>
                     
                      
                    <div class="
                      user-action
                      d-flex
                      flex-sm-row
                      align-items-sm-center
                      flex-column
                      align-items-start
                      mb--30
                    "
                  >
                    
                    <button
                      type="button"
                      class="btn btn-size-sm btn-shape-square"
                      onclick="window.location.href='cart.html'"
                    >
                      Message Now!
                    </button>
                  </div>
                </div>
              </div>
              </div>
            </div>
            <div class="row justify-content-center mb--77 mb-md--57">
              <div class="col-12">
                <div class="tab-style-2">
                  <div
                    class="nav nav-tabs mb--35 mb-sm--25"
                    id="user-tab"
                    role="tablist"
                  >
                    <a
                      class="nav-link active"
                      id="nav-description-tab"
                      data-toggle="tab"
                      href="#nav-description"
                      role="tab"
                      aria-selected="true"
                    >
                      <span>Description</span>
                    </a>

                    <a
                      class="nav-link"
                      id="nav-reviews-tab"
                      data-toggle="tab"
                      href="#nav-reviews"
                      role="tab"
                      aria-selected="true"
                    >
                      <span>Reviews(1)</span>
                    </a>
                  </div>
                  <div class="tab-content" id="user-tabContent">
                    <div
                      class="tab-pane fade show active"
                      id="nav-description"
                      role="tabpanel"
                      aria-labelledby="nav-description-tab"
                    >
                      <div class="user-description">
                        <p>
                          Lorem ipsum dolor sit amet, consec do eiusmod
                          tincididunt ut labore et dolore magna aliqua. Ut enim
                          ad minim veniaLo ipsum dolor sit amet, consectetur
                          adipisicing elit, sed do eiusmod tempor incididunt ut
                          labore et dolore magna aliqua. Ut enim ad minim
                          veniam, quis nostrud exercitation ullamco laboris nisi
                          ut aliquip ex ea commodo consequat. Duis aute irure
                          dolor in reprehenderit in voluptate velit esse cillum
                          dolore eu fugiat nulla paExcepteur sint occaecat
                          cupidatat non proident, sunt in culpa qui officia
                          deserunt mollit anim id est laborum. iatis unde omnis
                          iste natus error sit voluptatem accusantium
                        </p>

                        <p>
                          Lorem ipsum dolor sit amet, consec do eiusmod
                          tincididunt ut labore et dolore magna aliqua. Ut enim
                          ad minim veniaLo ipsum dolor sit amet, consectetur
                          adipisicing elit, sed do eiusmod tempor incididunt ut
                          labore et dolore magna aliqua. Ut enim ad minim
                          veniam, quis nostrud exercitation ullamco.
                        </p>

                        <h5 class="user-description__heading">
                          Characteristics :
                        </h5>
                        <ul>
                          <li>
                            <i class="la la-arrow-right"></i
                            ><span
                              >Rsit amet, consectetur adipisicing elit, sed do
                              eiusmod tempor inc.</span
                            >
                          </li>
                          <li>
                            <i class="la la-arrow-right"></i
                            ><span
                              >sunt in culpa qui officia deserunt mollit anim id
                              est laborum.
                            </span>
                          </li>
                          <li>
                            <i class="la la-arrow-right"></i
                            ><span
                              >Lorem ipsum dolor sit amet, consec do eiusmod
                              tincididu.
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div
                      class="tab-pane fade"
                      id="nav-info"
                      role="tabpanel"
                      aria-labelledby="nav-info-tab"
                    >
                      <div class="table-content table-responsive">
                        <table class="table shop_attributes">
                          <tbody>
                            <tr>
                              <th>Weight</th>
                              <td>57 kg</td>
                            </tr>
                            <tr>
                              <th>Dimensions</th>
                              <td>160 × 152 × 110 cm</td>
                            </tr>
                            <tr>
                              <th>Color</th>
                              <td>
                                <a href="shop.html">Black</a>,
                                <a href="shop.html">Gray</a>,
                                <a href="shop.html">Red</a>,
                                <a href="shop.html">Violet</a>,
                                <a href="shop.html">Yellow</a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div
                      class="tab-pane fade"
                      id="nav-reviews"
                      role="tabpanel"
                      aria-labelledby="nav-reviews-tab"
                    >
                      <div class="user-reviews">
                        <h3 class="review__title">1 review for Black Blazer</h3>
                        <ul class="review__list">
                          <li class="review__item">
                            <div class="review__container">
                              <img
                                src="assets/img/others/comment-1.jpg"
                                alt="Review Avatar"
                                class="review__avatar"
                              />
                              <div class="review__text">
                                <div
                                  class="
                                    d-flex
                                    flex-sm-row flex-column
                                    justify-content-between
                                  "
                                >
                                  <div class="review__meta">
                                    <strong class="review__author"
                                      >John Snow
                                    </strong>
                                    <span class="review__dash">-</span>
                                    <span class="review__published-date"
                                      >November 20, 2018</span
                                    >
                                  </div>
                                  <div class="user-rating">
                                    <div class="star-rating star-five">
                                      <span
                                        >Rated
                                        <strong class="rating">5.00</strong> out
                                        of 5</span
                                      >
                                    </div>
                                  </div>
                                </div>
                                <p class="review__description">
                                  Aliquam egestas libero ac turpis pharetra, in
                                  vehicula lacus scelerisque. Vestibulum ut sem
                                  laoreet, feugiat tellus at, hendrerit arcu.
                                </p>
                              </div>
                            </div>
                          </li>
                        </ul>
                        <div class="review-form-wrapper">
                          <div class="row">
                            <div class="col-lg-8">
                              <span class="reply-title">Add a review</span>
                              <form action="#" class="form pr--30">
                                <div class="form-notes mb--20">
                                  <p>
                                    Your email address will not be published.
                                    Required fields are marked
                                    <span class="required">*</span>
                                  </p>
                                </div>
                                <div class="form__group mb--10 pb--1">
                                  <label class="form__label d-block"
                                    >Your Ratings</label
                                  >
                                  <div class="rating">
                                    <span><i class="la la-star"></i></span>
                                    <span><i class="la la-star"></i></span>
                                    <span><i class="la la-star"></i></span>
                                    <span><i class="la la-star"></i></span>
                                    <span><i class="la la-star"></i></span>
                                  </div>
                                </div>
                                <div class="form__group mb--10">
                                  <label class="form__label d-block" for="email"
                                    >Your Review<span class="required"
                                      >*</span
                                    ></label
                                  >
                                  <textarea
                                    name="review"
                                    id="review"
                                    class="form__input form__input--textarea"
                                  ></textarea>
                                </div>
                                <div class="form__group mb--20">
                                  <label class="form__label d-block" for="name"
                                    >Name<span class="required">*</span></label
                                  >
                                  <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    class="form__input"
                                  />
                                </div>
                                <div class="form__group mb--20">
                                  <label class="form__label d-block" for="email"
                                    >Email<span class="required">*</span></label
                                  >
                                  <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    class="form__input"
                                  />
                                </div>
                                <div class="form__group">
                                  <div class="form-row">
                                    <div class="col-12">
                                      <input
                                        type="submit"
                                        value="Submit Now"
                                        class="btn btn-size-md"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row mb--75 mb-md--55">
              <div class="col-12">
                <div
                  class="element-carousel slick-vertical-center"
                  data-slick-options='{
                                "spaceBetween": 30,
                                "slidesToShow": 4,
                                "slidesToScroll": 1,
                                "arrows": true,
                                "prevArrow": {"buttonClass": "slick-btn slick-prev", "iconClass": "la la-angle-double-left" },
                                "nextArrow": {"buttonClass": "slick-btn slick-next", "iconClass": "la la-angle-double-right" }
                            }'
                  data-slick-responsive='[
                                {"breakpoint":1199, "settings": {
                                    "slidesToShow": 3
                                }},
                                {"breakpoint":991, "settings": {
                                    "slidesToShow": 2
                                }},
                                {"breakpoint":575, "settings": {
                                    "slidesToShow": 1
                                }}
                            ]'
                >
                 
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
                          </div>*/
}
