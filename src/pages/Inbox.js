import React, { Component } from "react";

class Inbox extends React.Component {
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
                <h1 class="page-title">Inbox</h1>
                <ul class="breadcrumb">
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li class="current">
                    <span>Inbox</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/*Main Content*/}
        <div class="main-content-wrapper">
          <div class="page-content-inner ptb--80 ptb-md--60">
            <div class="container">
              <div class="row">
                <div class="col-12">
                  <div class="table-content table-responsive">
                    <table class="table table-style-2 inbox-table text-center">
                      <thead>
                        <tr>
                          <th>&nbsp;</th>
                          <th>&nbsp;</th>
                          <th class="text-left">User</th>
                          <th>Online Status</th>
                          <th>Location</th>
                          <th>&nbsp;</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td class="user-remove text-left">
                            <a href="">
                              <i class="la la-remove"></i>
                            </a>
                          </td>
                          <td class="user-thumbnail text-left">
                            <img
                              src="assets/img/products/prod-02-70x88.jpg"
                              alt="User Thumbnail"
                            />
                          </td>
                          <td class="user-name text-left wide-column">
                            <h3>
                              <a href="user-details.html">Zak Bagans</a>
                            </h3>
                          </td>
                          <td class="user-stock">Not Online</td>
                          <td class="user-price">
                            <span class="user-price-wrapper">
                              <span class="money">Ithaca NY</span>
                            </span>
                          </td>
                          <td class="user-action-btn">
                            <a href="chat.html" class="btn btn-size-md">
                              Message Now
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td class="user-remove text-left">
                            <a href="">
                              <i class="la la-remove"></i>
                            </a>
                          </td>
                          <td class="user-thumbnail text-left">
                            <img
                              src="assets/img/products/prod-01-70x88.jpg"
                              alt="User Thumbnail"
                            />
                          </td>
                          <td class="user-name text-left wide-column">
                            <h3>
                              <a href="user-details.html">Person McPerson</a>
                            </h3>
                          </td>
                          <td class="user-stock">Online Now</td>
                          <td class="user-price">
                            <span class="user-price-wrapper">
                              <span class="money">Rome NY</span>
                            </span>
                          </td>
                          <td class="user-action-btn">
                            <a href="chat.html" class="btn btn-size-md">
                              Message Now
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td class="user-remove text-left">
                            <a href="">
                              <i class="la la-remove"></i>
                            </a>
                          </td>
                          <td class="user-thumbnail text-left">
                            <img
                              src="assets/img/products/prod-02-70x88.jpg"
                              alt="User thumbnail"
                            />
                          </td>
                          <td class="user-name text-left wide-column">
                            <h3>
                              <a href="user-details.html">Swim Shady</a>
                            </h3>
                          </td>
                          <td class="user-stock">Not Online</td>
                          <td class="user-price">
                            <span class="user-price-wrapper">
                              <span class="money">Oswego NY</span>
                            </span>
                          </td>
                          <td class="user-action-btn">
                            <a href="chat.html" class="btn btn-size-md">
                              Message Now
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
      </div>
    );
  }
}
export default Inbox;
