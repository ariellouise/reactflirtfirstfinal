import React, { Component } from "react";

class Home extends React.Component {
  render() {
    return (
      <div>
        <div class="ft-preloader active">
          <div class="ft-preloader-inner h-100 d-flex align-items-center justify-content-center">
            <div class="ft-child ft-bounce1"></div>
            <div class="ft-child ft-bounce2"></div>
            <div class="ft-child ft-bounce3"></div>
          </div>
        </div>

        {/*End of Header*/}
        <section class="homepage-slider mb--75 mb-md--55">
          <div class="container-fluid">
            <div class="row">
              <div class="col-12">
                <div
                  class="element-carousel slick-right-bottom"
                  data-slick-options='{
                                "slidesToShow": 1, 
                                "arrows": true,
                                "prevArrow": {"buttonClass": "slick-btn slick-prev", "iconClass": "la la-arrow-left" },
                                "nextArrow": {"buttonClass": "slick-btn slick-next", "iconClass": "la la-arrow-right" }
                            }'
                  data-slick-responsive='[{"breakpoint": 768, "settings": {"arrows": false}}]'
                >
                  <div class="item">
                    <div
                      class="single-slide d-flex align-items-center bg-color"
                      data-bg-color="#dbf3f2"
                    >
                      <div class="row align-items-center no-gutters w-100">
                        <div class="col-xl-7 col-md-6 mb-sm--50">
                          <figure
                            data-animation="fadeInUp"
                            data-duration=".3s"
                            data-delay=".3s"
                            class="plr--15"
                          >
                            <img
                              src="assets/img/slider/slider-1.jpg"
                              alt="Slider O1"
                              class="mx-auto"
                            />
                          </figure>
                        </div>
                        <div class="col-md-6 col-lg-5 offset-lg-1 offset-xl-0">
                          <div class="slider-content">
                            <div class="slider-content__text mb--40 mb-md--30">
                              <p
                                class="mb--15"
                                data-animation="fadeInUp"
                                data-duration=".3s"
                                data-delay=".3s"
                              >
                                #flirtfirstfeatured
                              </p>
                              <p
                                class="mb--20"
                                data-animation="fadeInUp"
                                data-duration=".3s"
                                data-delay=".3s"
                              >
                                Share Interests. Get Inspired.
                              </p>
                              <h1
                                class="heading__primary lh-pt7"
                                data-animation="fadeInUp"
                                data-duration=".3s"
                                data-delay=".3s"
                              >
                                Fall In Love.
                              </h1>
                            </div>
                            <div class="slider-content__btn">
                              <a
                                href="match.html"
                                class="btn btn-outline btn-brw-2"
                                data-animation="fadeInUp"
                                data-duration=".3s"
                                data-delay=".6s"
                              >
                                Flirt Now!
                              </a>
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
        </section>
        {/*End of main slider*/}
        <section class="new-user-area mb--75 mb-md--55">
          <div class="container">
            <div class="row mb--35 mb-md--23">
              <div class="col-12 text-center">
                <h2>Flirt With These New Users!</h2>
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <div
                  class="element-carousel"
                  data-slick-options='{
                                "spaceBetween": 30,
                                "slidesToShow": 3
                            }'
                  data-slick-responsive='[
                                {"breakpoint": 768, "settings": {"slidesToShow": 2}},
                                {"breakpoint": 480, "settings": {"slidesToShow": 1}}
                            ]'
                >
                  <div class="item">
                    <div class="ft-user">
                      <div class="user-inner">
                        <div class="user-image">
                          <figure class="user-image--holder">
                            <img
                              src="assets/img/products/prod-1.jpg"
                              alt="User"
                            />
                          </figure>
                          <a href="user-profile.html" class="user-overlay"></a>
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
                        <div class="user-info plr--20">
                          <h3 class="user-title">
                            <a href="user-profile.html">User</a>
                          </h3>
                          <div class="user-info-bottom">
                            <div class="user-price-wrapper">
                              <span class="money">Syracuse NY</span>
                            </div>
                            <a href="compare.html" class="add-to-cart">
                              <i class="la la-plus"></i>
                              <span>Add To Compare</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="item">
                    <div class="ft-user">
                      <div class="user-inner">
                        <div class="user-image">
                          <figure class="user-image--holder">
                            <img
                              src="assets/img/products/prod-3.jpg"
                              alt="User"
                            />
                          </figure>
                          <a href="user-profile.html" class="user-overlay"></a>
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
                        <div class="user-info plr--20">
                          <h3 class="user-title">
                            <a href="user-profile.html">User</a>
                          </h3>
                          <div class="user-info-bottom">
                            <div class="user-price-wrapper">
                              <span class="money">Utica NY</span>
                            </div>
                            <a href="compare.html" class="add-to-cart">
                              <i class="la la-plus"></i>
                              <span>Add To Compare</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="item">
                    <div class="ft-user">
                      <div class="user-inner">
                        <div class="user-image">
                          <figure class="user-image--holder">
                            <img
                              src="assets/img/products/prod-4.jpg"
                              alt="User"
                            />
                          </figure>
                          <a href="user-profile.html" class="user-overlay"></a>
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
                        <div class="user-info plr--20">
                          <h3 class="user-title">
                            <a href="user-profile.html">User</a>
                          </h3>
                          <div class="user-info-bottom">
                            <div class="user-price-wrapper">
                              <span class="money">Rome NY</span>
                            </div>
                            <a href="compare.html" class="add-to-cart">
                              <i class="la la-plus"></i>
                              <span>Add To Compare</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*New User End*/}
        <section class="feature-user-area mb--75 mb-md--55">
          <div class="container">
            <div class="row">
              <div class="col-12">
                <div class="feature-user bg-color" data-bg-color="#d7fbf9">
                  <div
                    class="feature-user__inner bg-color"
                    data-bg-color="#e9fefd"
                  >
                    <div class="feature-user__info">
                      <p class="hastag">#flirtfirstvideo</p>
                      <h2 class="feature-user__title">
                        <a href="user-profile.html">Video Chat And Connect.</a>
                      </h2>
                      <a href="inbox.html" class="feature-user__btn">
                        Message Them Now
                      </a>
                    </div>
                    <figure class="feature-user__image mb-sm--30">
                      <a href="user-profile.html">
                        <img
                          src="assets/img/products/videochat.jpg"
                          alt="Feature User"
                        />
                      </a>
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*Feature Area End*/}
        <section class="user-tab-area mb--30 mb-md--10">
          <div class="container">
            <div class="row mb--28 mb-md--18 mb-sm--33">
              <div class="col-md-3 text-md-left text-center">
                <h2>All Interests</h2>
              </div>
              <div class="col-md-9">
                <div class="tab-style-1">
                  <div
                    class="nav nav-tabs justify-content-md-end justify-content-center"
                    id="user-tab"
                    role="tablist"
                  >
                    <a
                      class="nav-item nav-link active"
                      id="new-all-tab"
                      data-toggle="tab"
                      href="#new-all"
                      role="tab"
                      aria-controls="new-all"
                      aria-selected="true"
                    >
                      <span class="nav-text">All</span>
                    </a>
                    <a
                      class="nav-item nav-link"
                      id="new-movies-tab"
                      data-toggle="tab"
                      href="#new-movies"
                      role="tab"
                      aria-controls="new-movies"
                      aria-selected="false"
                    >
                      <span class="nav-text">#Movies</span>
                    </a>
                    <a
                      class="nav-item nav-link"
                      id="new-nature-tab"
                      data-toggle="tab"
                      href="#new-nature"
                      role="tab"
                      aria-controls="new-nature"
                      aria-selected="false"
                    >
                      <span class="nav-text">#Nature</span>
                    </a>
                    <a
                      class="nav-item nav-link"
                      id="new-comedy-tab"
                      data-toggle="tab"
                      href="#new-comedy"
                      role="tab"
                      aria-controls="new-comedy"
                      aria-selected="false"
                    >
                      <span class="nav-text">#Comedy</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <div class="tab-content" id="user-tab-content">
                  <div
                    class="tab-pane fade show active"
                    id="new-all"
                    role="tabpanel"
                    aria-labelledby="new-all-tab"
                  >
                    <div class="row">
                      <div class="col-lg-3 col-sm-6 mb--45">
                        <div class="ft-user HTfadeInUp">
                          <div class="user-inner">
                            <div class="user-image">
                              <figure class="user-image--holder">
                                <img
                                  src="assets/img/products/prod-1.jpg"
                                  alt="User"
                                />
                              </figure>
                              <a
                                href="user-profile.html"
                                class="user-overlay"
                              ></a>
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
                              <div class="user-category"></div>
                              <h3 class="user-title">
                                <a href="user-profile.html">User</a>
                              </h3>
                              <div class="user-info-bottom">
                                <div class="user-price-wrapper">
                                  <span class="money">Endicott, NY</span>
                                </div>
                                <a
                                  href="compare.html"
                                  class="add-to-cart pr--15"
                                >
                                  <i class="la la-plus"></i>
                                  <span>Add To Compare</span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-3 col-sm-6 mb--45">
                        <div class="ft-user HTfadeInUp">
                          <div class="user-inner">
                            <div class="user-image">
                              <figure class="user-image--holder">
                                <img
                                  src="assets/img/products/prod-4.jpg"
                                  alt="User"
                                />
                              </figure>
                              <a
                                href="user-profile.html"
                                class="user-overlay"
                              ></a>
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
                              <div class="user-category"></div>
                              <h3 class="user-title">
                                <a href="user-profile.html">User</a>
                              </h3>
                              <div class="user-info-bottom">
                                <div class="user-price-wrapper">
                                  <span class="money">Chittenango NY</span>
                                </div>
                                <a
                                  href="compare.html"
                                  class="add-to-cart pr--15"
                                >
                                  <i class="la la-plus"></i>
                                  <span>Add To Compare</span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-3 col-sm-6 mb--45">
                        <div class="ft-user HTfadeInUp">
                          <div class="user-inner">
                            <div class="user-image">
                              <figure class="user-image--holder">
                                <img
                                  src="assets/img/products/prod-2.jpg"
                                  alt="User"
                                />
                              </figure>
                              <a
                                href="user-profile.html"
                                class="user-overlay"
                              ></a>
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
                              <div class="user-category"></div>

                              <h3 class="user-title">
                                <a href="user-profile.html">User</a>
                              </h3>
                              <div class="user-info-bottom">
                                <div class="user-price-wrapper">
                                  <span class="money">Chittenango NY</span>
                                </div>
                                <a
                                  href="compare.html"
                                  class="add-to-cart pr--15"
                                >
                                  <i class="la la-plus"></i>
                                  <span>Add To Compare</span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-3 col-sm-6 mb--45">
                        <div class="ft-user HTfadeInUp">
                          <div class="user-inner">
                            <div class="user-image">
                              <figure class="user-image--holder">
                                <img
                                  src="assets/img/products/prod-3.jpg"
                                  alt="User"
                                />
                              </figure>
                              <a
                                href="user-profile.html"
                                class="user-overlay"
                              ></a>
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
                              <div class="user-category"></div>
                              <h3 class="user-title">
                                <a href="user-profile.html">User</a>
                              </h3>
                              <div class="user-info-bottom">
                                <div class="user-price-wrapper">
                                  <span class="money">Utica NY</span>
                                </div>
                                <a
                                  href="compare.html"
                                  class="add-to-cart pr--15"
                                >
                                  <i class="la la-plus"></i>
                                  <span>Add To Compare</span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="new-movies"
                    role="tabpanel"
                    aria-labelledby="new-movies-tab"
                  >
                    <div class="row">
                      <div class="col-lg-3 col-sm-6 mb--45">
                        <div class="ft-user HTfadeInUp">
                          <div class="user-inner">
                            <div class="user-image">
                              <figure class="user-image--holder">
                                <img
                                  src="assets/img/products/prod-05-270x300.jpg"
                                  alt="User"
                                />
                              </figure>
                              <a
                                href="user-profile.html"
                                class="user-overlay"
                              ></a>
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
                              <div class="user-category"></div>
                              <h3 class="user-title">
                                <a href="user-profile.html">User</a>
                              </h3>
                              <div class="user-info-bottom">
                                <div class="user-price-wrapper">
                                  <span class="money">Oneida NY</span>
                                </div>
                                <a
                                  href="compare.html"
                                  class="add-to-cart pr--15"
                                >
                                  <i class="la la-plus"></i>
                                  <span>Add To Compare</span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-3 col-sm-6 mb--45">
                        <div class="ft-user HTfadeInUp">
                          <div class="user-inner">
                            <div class="user-image">
                              <figure class="user-image--holder">
                                <img
                                  src="assets/img/products/prod-01-270x300.jpg"
                                  alt="User"
                                />
                              </figure>
                              <a
                                href="user-profile.html"
                                class="user-overlay"
                              ></a>
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
                              <div class="user-category"></div>
                              <h3 class="user-title">
                                <a href="user-profile.html">User</a>
                              </h3>
                              <div class="user-info-bottom">
                                <div class="user-price-wrapper">
                                  <span class="money">Rome NY</span>
                                </div>
                                <a
                                  href="compare.html"
                                  class="add-to-cart pr--15"
                                >
                                  <i class="la la-plus"></i>
                                  <span>Add To Compare</span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-3 col-sm-6 mb--45">
                        <div class="ft-user HTfadeInUp">
                          <div class="user-inner">
                            <div class="user-image">
                              <figure class="user-image--holder">
                                <img
                                  src="assets/img/products/prod-04-270x300.jpg"
                                  alt="User"
                                />
                              </figure>
                              <a
                                href="user-profile.html"
                                class="user-overlay"
                              ></a>
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
                              <div class="user-category"></div>
                              <h3 class="user-title">
                                <a href="user-profile.html">User</a>
                              </h3>
                              <div class="user-info-bottom">
                                <div class="user-price-wrapper">
                                  <span class="money">Rome NY</span>
                                </div>
                                <a
                                  href="compare.html"
                                  class="add-to-cart pr--15"
                                >
                                  <i class="la la-plus"></i>
                                  <span>Add To Compare</span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-3 col-sm-6 mb--45">
                        <div class="ft-user HTfadeInUp">
                          <div class="user-inner">
                            <div class="user-image">
                              <figure class="user-image--holder">
                                <img
                                  src="assets/img/products/prod-06-270x300.jpg"
                                  alt="User"
                                />
                              </figure>
                              <a
                                href="user-profile.html"
                                class="user-overlay"
                              ></a>
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
                              <div class="user-category"></div>
                              <h3 class="user-title">
                                <a href="user-profile.html">User</a>
                              </h3>
                              <div class="user-info-bottom">
                                <div class="user-price-wrapper">
                                  <span class="money">Syracuse NY</span>
                                </div>
                                <a
                                  href="compare.html"
                                  class="add-to-cart pr--15"
                                >
                                  <i class="la la-plus"></i>
                                  <span>Add To Compare</span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="new-nature"
                    role="tabpanel"
                    aria-labelledby="new-nature-tab"
                  >
                    <div class="row">
                      <div class="col-lg-3 col-sm-6 mb--45">
                        <div class="ft-user HTfadeInUp">
                          <div class="user-inner">
                            <div class="user-image">
                              <figure class="user-image--holder">
                                <img
                                  src="assets/img/products/prod-02-270x300.jpg"
                                  alt="User"
                                />
                              </figure>
                              <a
                                href="user-profile.html"
                                class="user-overlay"
                              ></a>
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
                              <div class="user-category"></div>
                              <h3 class="user-title">
                                <a href="user-profile.html">User</a>
                              </h3>
                              <div class="user-info-bottom">
                                <div class="user-price-wrapper">
                                  <span class="money">Rome NY</span>
                                </div>
                                <a
                                  href="compare.html"
                                  class="add-to-cart pr--15"
                                >
                                  <i class="la la-plus"></i>
                                  <span>Add To Compare</span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-3 col-sm-6 mb--45">
                        <div class="ft-user HTfadeInUp">
                          <div class="user-inner">
                            <div class="user-image">
                              <figure class="user-image--holder">
                                <img
                                  src="assets/img/products/prod-1.jpg"
                                  alt="User"
                                />
                              </figure>
                              <a
                                href="user-profile.html"
                                class="user-overlay"
                              ></a>
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
                              <div class="user-category"></div>
                              <h3 class="user-title">
                                <a href="user-profile.html">User</a>
                              </h3>
                              <div class="user-info-bottom">
                                <div class="user-price-wrapper">
                                  <span class="money">Manlius NY</span>
                                </div>
                                <a
                                  href="compare.html"
                                  class="add-to-cart pr--15"
                                >
                                  <i class="la la-plus"></i>
                                  <span>Add To Compare</span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-3 col-sm-6 mb--45">
                        <div class="ft-user HTfadeInUp">
                          <div class="user-inner">
                            <div class="user-image">
                              <figure class="user-image--holder">
                                <img
                                  src="assets/img/products/prod-05-270x300.jpg"
                                  alt="User"
                                />
                              </figure>
                              <a
                                href="user-profile.html"
                                class="user-overlay"
                              ></a>
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
                              <div class="user-category"></div>
                              <h3 class="user-title">
                                <a href="user-profile.html">User</a>
                              </h3>
                              <div class="user-info-bottom">
                                <div class="user-price-wrapper">
                                  <span class="money">Canton NY</span>
                                </div>
                                <a
                                  href="compare.html"
                                  class="add-to-cart pr--15"
                                >
                                  <i class="la la-plus"></i>
                                  <span>Add To Compare</span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-3 col-sm-6 mb--45">
                        <div class="ft-user HTfadeInUp">
                          <div class="user-inner">
                            <div class="user-image">
                              <figure class="user-image--holder">
                                <img
                                  src="assets/img/products/prod-03-270x300.jpg"
                                  alt="User"
                                />
                              </figure>
                              <a
                                href="user-profile.html"
                                class="user-overlay"
                              ></a>
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
                              <div class="user-category"></div>
                              <h3 class="user-title">
                                <a href="user-profile.html">User</a>
                              </h3>
                              <div class="user-info-bottom">
                                <div class="user-price-wrapper">
                                  <span class="money">Potsdam NY</span>
                                </div>
                                <a
                                  href="compare.html"
                                  class="add-to-cart pr--15"
                                >
                                  <i class="la la-plus"></i>
                                  <span>Add To Compare</span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="new-table"
                    role="tabpanel"
                    aria-labelledby="new-table-tab"
                  >
                    <div class="row">
                      <div class="col-lg-3 col-sm-6 mb--45">
                        <div class="ft-user HTfadeInUp">
                          <div class="user-inner">
                            <div class="user-image">
                              <figure class="user-image--holder">
                                <img
                                  src="assets/img/products/prod-1.jpg"
                                  alt="User"
                                />
                              </figure>
                              <a
                                href="user-profile.html"
                                class="user-overlay"
                              ></a>
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
                              <div class="user-category"></div>
                              <h3 class="user-title">
                                <a href="user-profile.html">User</a>
                              </h3>
                              <div class="user-info-bottom">
                                <div class="user-price-wrapper">
                                  <span class="money">Buffalo NY</span>
                                </div>
                                <a
                                  href="compare.html"
                                  class="add-to-cart pr--15"
                                >
                                  <i class="la la-plus"></i>
                                  <span>Add To Compare</span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-3 col-sm-6 mb--45">
                        <div class="ft-user HTfadeInUp">
                          <div class="user-inner">
                            <div class="user-image">
                              <figure class="user-image--holder">
                                <img
                                  src="assets/img/products/prod-1.jpg"
                                  alt="User"
                                />
                              </figure>
                              <a
                                href="user-profile.html"
                                class="user-overlay"
                              ></a>
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
                              <div class="user-category"></div>
                              <h3 class="user-title">
                                <a href="user-profile.html">User</a>
                              </h3>
                              <div class="user-info-bottom">
                                <div class="user-price-wrapper">
                                  <span class="money">Albany NY</span>
                                </div>
                                <a
                                  href="compare.html"
                                  class="add-to-cart pr--15"
                                >
                                  <i class="la la-plus"></i>
                                  <span>Add To Compare</span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-3 col-sm-6 mb--45">
                        <div class="ft-user HTfadeInUp">
                          <div class="user-inner">
                            <div class="user-image">
                              <figure class="user-image--holder">
                                <img
                                  src="assets/img/products/prod-1.jpg"
                                  alt="User"
                                />
                              </figure>
                              <a
                                href="user-profile.html"
                                class="user-overlay"
                              ></a>
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
                              <div class="user-category"></div>
                              <h3 class="user-title">
                                <a href="user-profile.html">User</a>
                              </h3>
                              <div class="user-info-bottom">
                                <div class="user-price-wrapper">
                                  <span class="money">Floyd NY</span>
                                </div>
                                <a
                                  href="compare.html"
                                  class="add-to-cart pr--15"
                                >
                                  <i class="la la-plus"></i>
                                  <span>Add To Compare</span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-3 col-sm-6 mb--45">
                        <div class="ft-user HTfadeInUp">
                          <div class="user-inner">
                            <div class="user-image">
                              <figure class="user-image--holder">
                                <img
                                  src="assets/img/products/prod-1.jpg"
                                  alt="User"
                                />
                              </figure>
                              <a
                                href="user-profile.html"
                                class="user-overlay"
                              ></a>
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
                              <div class="user-category"></div>
                              <h3 class="user-title">
                                <a href="user-profile.html">User</a>
                              </h3>
                              <div class="user-info-bottom">
                                <div class="user-price-wrapper">
                                  <span class="money">Verona NY</span>
                                </div>
                                <a
                                  href="compare.html"
                                  class="add-to-cart pr--15"
                                >
                                  <i class="la la-plus"></i>
                                  <span>Add To Compare</span>
                                </a>
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
        </section>
      </div>
    );
  }
}
export default Home;
