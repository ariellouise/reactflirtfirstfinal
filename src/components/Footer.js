import React, { Component } from "react";

class Footer extends React.Component {
  render() {
    return (
      <div>
        <footer class="footer bg-color" data-bg-color="#f4f8fa">
          <div class="footer-bottom">
            <div class="container-fluid">
              <div class="row border-top ptb--20">
                <div class="col-12 text-center">
                  <p class="copyright-text">
                    Flirt First &copy; 2021 all rights reserved{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>
        {/*Footer End*/}
      </div>
    );
  }
}

export default Footer;
