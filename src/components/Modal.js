import React, { Component } from "react";

class Modal extends React.Component {
  render() {
    return (
      <div>
        <div class="global-overlay"></div>
        <a class="scroll-to-top" href="">
          <i class="la la-angle-double-up"></i>
        </a>
        <div
          class="modal fade user-modal"
          id="userModal"
          tabindex="-1"
          role="dialog"
          aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-body">
                <button
                  type="button"
                  class="close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">
                    <i class="la la-remove"></i>
                  </span>
                </button>
                <div class="row">
                  <div class="col-lg-6">
                    <div
                      class="element-carousel slick-vertical-center"
                      data-slick-options='{
                              "slidesToShow": 1,
                              "slidesToScroll": 1,
                              "arrows": true,
                              "prevArrow": {"buttonClass": "slick-btn slick-prev", "iconClass": "la la-angle-double-left" },
                              "nextArrow": {"buttonClass": "slick-btn slick-next", "iconClass": "la la-angle-double-right" }
                          }'
                    />
                    <div class="user-image">
                      <div class="user-image--holder">
                        <a href="user-details.html">
                          <img
                            src="assets/img/products/prod-4.jpg"
                            alt="User Image"
                            class="primary-image"
                          />
                        </a>
                      </div>
                      <span class="user-badge sale">Online Now</span>
                    </div>
                    <div class="user-image">
                      <div class="user-image--holder">
                        <a href="user-details.html">
                          <img
                            src="assets/img/products/prod-4.jpg"
                            alt="User Image"
                            class="primary-image"
                          />
                        </a>
                      </div>
                      <span class="user-badge sale">Online Now!</span>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="modal-box user-summary">
                    <div class="user-navigation text-right mb--20">
                      <a href="#" class="prev">
                        <i class="la la-angle-double-left"></i>
                      </a>
                      <a href="#" class="next">
                        <i class="la la-angle-double-right"></i>
                      </a>
                    </div>
                    <div class="user-rating d-flex mb--20">
                      <div class="star-rating star-three">
                        <span>
                          Rated <strong class="rating">5.00</strong> out of 5
                        </span>
                      </div>
                    </div>
                    <h3 class="user-title mb--20">User Name</h3>
                    <p class="user-short-description mb--25">
                      {" "}
                      I enjoy long walks leading off a pier. I have multiple
                      degrees in languages such as sarcasm, BS, and dog yawns.
                      Sometimes I yell random noises at strangers. One time I
                      hit someone with my car. Ask me about my borrowed Netflix
                      account.{" "}
                    </p>
                    <div class="user-price-wrapper mb--25">
                      <span class="money">Rome NY</span>
                    </div>
                    <form action="#" class="variation-form mb--30">
                      <div class="user-color-variations d-flex align-items-center mb--20">
                        <p class="variation-label">Age: 29</p>
                      </div>
                    </form>
                    <div class="user-action d-flex flex-sm-row flex-column align-items-sm-center align-items-start mb--30">
                      <button
                        type="button"
                        class="btn btn-size-sm btn-shape-square"
                        onclick="window.location.href='user-profile.html'"
                      >
                        Message Now
                      </button>
                    </div>
                    <div class="user-footer-meta">
                      <p>
                        <span>Interests:</span>
                        <a href="shop.html">Nature</a>,
                        <a href="shop.html">Comedy</a>,
                        <a href="shop.html">Fishing</a>,
                        <a href="shop.html">Movies</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
