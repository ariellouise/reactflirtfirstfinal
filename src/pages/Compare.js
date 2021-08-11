import React, { Component } from "react";

class Compare extends React.Component {
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
                <h1 class="page-title">Compare</h1>
                <ul class="breadcrumb">
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li class="current">
                    <span>Compare</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/*Content wrapper*/}
        <div class="main-content-wrapper">
          <div class="page-content-inner ptb--80 ptb-md--60">
            <div class="container">
              <div class="row">
                <div class="col-12" id="main-content">
                  <div class="table-content table-responsive">
                    <div class="table-content table-responsive">
                      <table class="table compare-table">
                        <tbody>
                          <tr>
                            <th>User Info</th>
                            <td>
                              <div class="remove">
                                <a href="">
                                  <i class="la la-remove"></i>
                                </a>
                              </div>
                              <a href="user-details.html" class="d-block">
                                <div class="image-wrap">
                                  <img
                                    src="assets/img/users/prod-01-70x88.jpg"
                                    alt="User"
                                  />
                                </div>
                                <h4 class="user-name">User</h4>
                              </a>
                              <a href="inbox.html" class="btn btn-size-md">
                                Message Now
                              </a>
                            </td>
                            <td>
                              <div class="remove">
                                <a href="">
                                  <i class="la la-remove"></i>
                                </a>
                              </div>
                              <a href="user-details.html" class="d-block">
                                <div class="image-wrap">
                                  <img
                                    src="assets/img/users/prod-02-70x88.jpg"
                                    alt="User"
                                  />
                                </div>
                                <h4 class="user-name">User</h4>
                              </a>
                              <a href="inbox.html" class="btn btn-size-md">
                                Message Now
                              </a>
                            </td>
                            <td>
                              <div class="remove">
                                <a href="">
                                  <i class="la la-remove"></i>
                                </a>
                              </div>
                              <a href="user-details.html" class="d-block">
                                <div class="image-wrap">
                                  <img
                                    src="assets/img/users/prod-03-70x88.jpg"
                                    alt="User"
                                  />
                                </div>
                                <h4 class="user-name">User</h4>
                              </a>
                              <a href="inbox.html" class="btn btn-size-md">
                                Message Now
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <th>Location</th>
                            <td>
                              <span class="user-price-wrapper">
                                <span class="money">Rome NY</span>
                              </span>
                            </td>
                            <td>
                              <span class="user-price-wrapper">
                                <span class="money">Utica NY</span>
                              </span>
                            </td>
                            <td>
                              <span class="user-price-wrapper">
                                <span class="money">Syracuse NY</span>
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <th>Main Interest:</th>
                            <td>Comedy</td>
                            <td>Nature</td>
                            <td>Comedy</td>
                          </tr>
                          <tr>
                            <th>Description</th>
                            <td class="text-center">
                              Donec accumsan auctor iaculis. Sed suscipit arcu
                              ligula, at egestas…
                            </td>
                            <td class="text-center">
                              Donec accumsan auctor iaculis. Sed suscipit arcu
                              ligula, at egestas…
                            </td>
                            <td class="text-center">
                              Donec accumsan auctor iaculis. Sed suscipit arcu
                              ligula, at egestas…
                            </td>
                          </tr>
                          <tr>
                            <th>Availability</th>
                            <td>Online</td>
                            <td>Not Online</td>
                            <td>Online</td>
                          </tr>
                        </tbody>
                      </table>
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
export default Compare;
