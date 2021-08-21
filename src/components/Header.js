import React, { Component } from "react";
// import Cart from "./Cart";

class Header extends React.Component {
  render() {
    return (
      <div>
        <header class="header">
          <div class="header__inner fixed-sticky">
            <div class="header__main">
              <div class="container-fluid">
                <div class="row">
                  <div class="col-12">
                    <div class="header__main-inner">
                      <div class="header__main-left">
                        <div class="logo">
                          <a href="index.html" class="logo--normal">
                            <img src="assets/img/logo/2.png" alt="Logo" />
                          </a>
                        </div>
                      </div>
                      <div class="header__main-center">
                        <nav class="main-navigation text-center d-none d-lg-block">
                          <ul class="mainmenu">
                            <li class="mainmenu__item">
                              <a href="index.html" class="mainmenu__link">
                                <span class="mm-text">Home</span>
                              </a>
                            </li>
                            <li class="mainmenu__item menu-item-has-children">
                              <a href="match.html" class="mainmenu__link">
                                <span class="mm-text">Flirt</span>
                              </a>
                              <ul class="sub-menu">
                                <li>
                                  <a href="match.html">
                                    <span class="mm-text">Match</span>
                                  </a>
                                </li>
                                <li>
                                  <a href="compare.html">
                                    <span class="mm-text">Compare</span>
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li class="mainmenu__item menu-item-has-children">
                              <a
                                href="inbox.html"
                                class="mainmenu__link"
                                id="inboxInNav"
                              >
                                <span class="mm-text">Inbox</span>
                              </a>
                            </li>
                            <li class="mainmenu__item menu-item-has-children">
                              <a href="my-account.html" class="mainmenu__link">
                                <span class="mm-text">Settings</span>
                              </a>
                              <ul class="sub-menu">
                                <li>
                                  <a href="my-account.html">
                                    <span class="mm-text">My Account</span>
                                  </a>
                                </li>
                                <li>
                                  <a href="my-profile.html">
                                    <span class="mm-text">My Profile</span>
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li class="mainmenu__item">
                              <a href="/Login" class="mainmenu__link">
                                <span class="mm-text">Log In</span>
                              </a>
                            </li>
                          </ul>
                        </nav>
                      </div>
                      <div class="header__main-right">
                        <div class="header-toolbar-wrap">
                          <div class="header-toolbar">
                            <div class="header-toolbar__item header-toolbar--search-btn">
                              <a
                                href="#searchForm"
                                class="header-toolbar__btn toolbar-btn"
                              >
                                <searchForm />
                                <i class="la la-search"></i>
                              </a>
                            </div>
                            <div class="header-toolbar__item header-toolbar--minicart-btn">
                              <a
                                href="#miniCart"
                                class="header-toolbar__btn toolbar-btn"
                              >
                                {/* <Cart /> */}
                                <i class="la la-heart-o"></i>
                                <span>FF</span>
                              </a>
                            </div>
                            <div class="header-toolbar__item d-block d-lg-none">
                              <a
                                href="#offcanvasMenu"
                                class="header-toolbar__btn toolbar-btn menu-btn"
                              >
                                <div class="hamburger-icon">
                                  <span></span>
                                  <span></span>
                                  <span></span>
                                  <span></span>
                                  <span></span>
                                  <span></span>
                                </div>
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
        </header>
      </div>
    );
  }
}
export default Header;
