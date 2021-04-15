import React from "react";
import "./styles.scss";

function SecondFooterComponent() {
  return (
    <div className="col-md-12">
      <div className="row">
        <div className="second-footer-main-div">
          <div className="row">
            <div className="col-md-3">
              <div className="payment-options-left">
                <img src="./images/app-store.svg" className="image-show" />
                <img src="./images/google-play.svg" className="image-show" />
              </div>
            </div>
            <div className="col-md-9">
              <div className="payment-options-right">
                <div>
                  <img src="./images/visa-icon.svg" className="image-show" />
                  <img
                    src="./images/american-express-icon.svg"
                    className="image-show"
                  />
                  <img
                    src="./images/master-card-icon.svg"
                    className="image-show"
                  />
                  <img
                    src="./images/discover-icon.svg"
                    className="image-show"
                  />
                  <img src="./images/ipay-icon.svg" className="image-show" />
                  <img
                    src="./images/google-pay-icon.svg"
                    className="image-show"
                  />
                  <img src="./images/paypal-icon.svg" className="image-show" />
                </div>
                <div className="payment-options-right-text">
                  Payment options will vary by merchant
                </div>
              </div>
            </div>
          </div>

          <div className="row sitemap">
            <img src="./images/footer-sitemap.svg" className="image-sitemap" />

            <div className="sitemap-div">
              <a className="sitemap-one-element" title="App">
                App
              </a>
              <a className="sitemap-one-element" title="About">
                About
              </a>
              <a className="sitemap-one-element" title="Contact">
                Contact
              </a>
              <a className="sitemap-one-element" title="Press">
                Press
              </a>
              <a className="sitemap-one-element" title="Wine News">
                Wine News
              </a>
              <a className="sitemap-one-element" title="Wine Style Awards">
                Wine Style Awards
              </a>
              <a className="sitemap-one-element" title="Merchants">
                Merchants
              </a>
              <a className="sitemap-one-element" title="Sponsorships">
                Sponsorships
              </a>
              <a className="sitemap-one-element" title="Become an Affiliate">
                Become an Affiliate
              </a>
              <a className="sitemap-one-element" title="Jobs">
                Jobs
              </a>
              <a className="sitemap-one-element" title="Terms of Use">
                Terms of Use
              </a>
              <a className="sitemap-one-element" title="Privacy Policy">
                Privacy Policy
              </a>
              <a className="sitemap-one-element" title="Content Policy">
                Content Policy
              </a>
              <a className="sitemap-one-element" title="Terms of Sale">
                Terms of Sale
              </a>
              <a className="sitemap-one-element" title="Sitemap">
                Sitemap
              </a>
            </div>

            <div className="social-media-icons">
              <img src="./images/instagram.svg" className="image-show" />
              <img src="./images/facebook.svg" className="image-show" />
              <img src="./images/twitter.svg" className="image-show" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecondFooterComponent;
