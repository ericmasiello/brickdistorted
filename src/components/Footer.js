import React from 'react'

function Footer() {
  return (
    <footer className="footer-two">
      <div className="widget-area py-110 bg-dark">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-md-4 sm-mb-30">
              <div className="footer-widget">
                <div className="footer-logo">
                  <a href="../index.html"><img src="../assets/img/logo-white.png" alt="Logo" /></a>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4 sm-mb-30">
              <div className="footer-widget pr-30">
                <h5 className="text-white">About us</h5>
                <p>The point of using Lorem Ipsum is that it has a normal distribution of letters, as opposed to using nt here, conten</p>
              </div>
            </div>

            <div className="col-12 col-md-4">
              <div className="footer-widget">
                <h5 className="text-white">Contact us</h5>
                <p>Phone : <a href="tel:+98 698 5874 5896">+98 698 5874 5896</a></p>
                <p>Email : <a href="mailto:demo@mail.com">demo@mail.com</a></p>
                <p>Address : Your Location Name, New Canada.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-area py-15 bg-secondary">
        <div className="container">
          <div className="row">
            <div className="col-12 d-md-flex text-center">
              <div className="copyright-text">
                <p>&copy; Copyright <span id="currentYear"></span> RM Template by <a href="https://regaltheme.com" target="_blank">Regaltheme</a></p>
              </div>
              <div className="social-links ml-auto">
                <a href="https://www.facebook.com/" target="_blank">Facebook</a>
                <a href="https://www.twitter.com/" target="_blank">Twitter</a>
                <a href="https://www.instagram.com/" target="_blank">Instagram</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
