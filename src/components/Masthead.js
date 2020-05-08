import React from 'react';
import classNames from 'classnames';

function Masthead(props) {
  const { className, ...rest } = props;
  const classes = classNames('position-fixed w-100', className);
  return (
    <header id="active-sticky" className={classes} {...rest}>
      <div className="container">
        <nav className="navbar navbar-dark z-index-2">
          <div className="social-icons social-light d-none d-sm-block">
            <a href="https://www.facebook.com/" target="_blank">
              <i className="ti-facebook" />
            </a>
            <a href="https://www.twitter.com/" target="_blank">
              <i className="ti-twitter" />
            </a>
            <a href="https://www.instagram.com/" target="_blank">
              <i className="ti-instagram" />
            </a>
            <a href="https://www.linkedin.com/" target="_blank">
              <i className="ti-linkedin" />
            </a>
          </div>
          <a className="navbar-brand" href="../index.html">
            <img src="../assets/img/logo-white.png" alt="Logo" />
          </a>
          <span
            className="menu-toggler"
            data-toggle="modal"
            data-target="#navigation"
          >
            <i className="ti-menu" />
          </span>
        </nav>
      </div>

      <div
        className="modal fade navWrap"
        id="navigation"
        role="dialog"
        aria-labelledby="navigation"
        aria-hidden="true"
      >
        <div className="modal-dialog bg-dark h-100" role="document">
          <div className="modal-content px-20 bg-dark h-100">
            <div className="modal-header">
              <i className="ti-close" data-dismiss="modal"></i>
            </div>
            <nav id="accordianMenu" className="primary-menu my-auto">
              <ul>
                <li>
                  <a href="FIXME">
                    <i className="ti-home"></i> Home
                  </a>
                  <ul>
                    <li>
                      <a href="../index.html">Home 01</a>
                    </li>
                    <li>
                      <a href="../index-2.html">Home 02</a>
                    </li>
                    <li>
                      <a href="../index-3.html">Home 03</a>
                    </li>
                    <li>
                      <a href="../index-4.html">Home 04</a>
                    </li>
                    <li>
                      <a href="../index-5.html">Home 05</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="FIXME">
                    <i className="ti-view-grid"></i> Portfolio
                  </a>
                  <ul>
                    <li>
                      <a href="FIXME">Creative</a>
                      <ul>
                        <li>
                          <a href="creative-1.html">Creative 01</a>
                        </li>
                        <li>
                          <a href="creative-2.html">Creative 02</a>
                        </li>
                        <li>
                          <a href="creative-3.html">Creative 03</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="FIXME">Grid</a>
                      <ul>
                        <li>
                          <a href="grid-2.html">02 Column</a>
                        </li>
                        <li>
                          <a href="grid-2.html">03 Column</a>
                        </li>
                        <li>
                          <a href="grid-4.html">04 Column</a>
                        </li>
                        <li>
                          <a href="grid-full.html">Full Wide</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="FIXME">Details</a>
                      <ul>
                        <li>
                          <a href="details.html">Details 01</a>
                        </li>
                        <li>
                          <a href="details-2.html">Details 02</a>
                        </li>
                        <li>
                          <a href="details-3.html">Details 03</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="FIXME">
                    <i className="ti-files"></i> Pages
                  </a>
                  <ul>
                    <li>
                      <a href="../about-me.html">About Me</a>
                    </li>
                    <li>
                      <a href="../about-us.html">About Us</a>
                    </li>
                    <li>
                      <a href="../team.html">Our Team</a>
                    </li>
                    <li>
                      <a href="../services.html">Services</a>
                    </li>
                    <li>
                      <a href="../pricing.html">Pricing</a>
                    </li>
                    <li>
                      <a href="../error-404.html">404 Error</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="FIXME">
                    <i className="ti-layout-list-thumb-alt"></i> Blog
                  </a>
                  <ul>
                    <li>
                      <a href="../blog.html">Blog 01</a>
                    </li>
                    <li>
                      <a href="../blog-2.html">Blog 02</a>
                    </li>
                    <li>
                      <a href="../blog-3.html">Blog 03</a>
                    </li>
                    <li>
                      <a href="../blog-4.html">Blog 04</a>
                    </li>
                    <li>
                      <a href="../blog-details.html">Blog Details</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="../contact.html">
                    <i className="ti-email"></i> Contact
                  </a>
                </li>
              </ul>
            </nav>
            <div className="nav-footer mb-50">
              <h5 className="text-white text-uppercase">Address</h5>
              <p>
                Apartment 4, North St, Florida <br /> Estern Hall NY, 1203.
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Masthead;
