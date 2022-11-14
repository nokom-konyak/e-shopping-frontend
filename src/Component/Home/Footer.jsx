import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
        <div class="container-fluid">

        <footer class="text-center text-lg-start bg-light text-muted">
            <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                <div class="me-5 d-none d-lg-block">
                    <span>Get connected with us on social networks:</span>
                </div>

                <div>
                    <a href="https://www.facebook.com/" class="me-4 text-reset">
                        <i class="fab fa-facebook-f"></i>
                    </a>
                    <a
                        href="http://www.twitter.com/share?url=http://www.google.com/"
                        class="me-4 text-reset"
                    >
                        <i class="fab fa-twitter"></i>
                    </a>
                    <a href="https://www.google.com/" class="me-4 text-reset">
                        <i class="fab fa-google"></i>
                    </a>
                    <a href="https://www.instagram.com/" class="me-4 text-reset">
                        <i class="fab fa-instagram"></i>
                    </a>
                    <a href="https://www.linkedin.com/" class="me-4 text-reset">
                        <i class="fab fa-linkedin"></i>
                    </a>
                    <a href="https://github.com/" class="me-4 text-reset">
                        <i class="fab fa-github"></i>
                    </a>
                </div>
            </section>

            <section class="">
                <div class="container text-center text-md-start mt-5">
                    <div class="row mt-3">
                        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                            <h6 class="text-uppercase fw-bold mb-4">
                                <i class="fas fa-gem me-3"></i>Ekart Shopping
                            </h6>
                            <p>
                                We use cookies to provide you with a customized user
                                experience. By continuing to browse this site, you consent
                                to the use of cookies. For more details on our cookie
                                practices and options for disabling cookies, please see our
                                cookie policy.
                            </p>
                        </div>

                        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 class="text-uppercase fw-bold mb-4">Products</h6>
                            <p>
                                <a href="#!" class="text-reset">
                                    Electronics
                                </a>
                            </p>
                            <p>
                                <a href="#!" class="text-reset">
                                    Mobiles
                                </a>
                            </p>
                            <p>
                                <a href="#!" class="text-reset">
                                    Mens_Wear
                                </a>
                            </p>
                            <p>
                                <a href="#!" class="text-reset">
                                    Gadegt
                                </a>
                            </p>
                        </div>

                        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 class="text-uppercase fw-bold mb-4">Useful links</h6>
                            <p>
                                <a href="#!" class="text-reset">
                                    Pricing
                                </a>
                            </p>
                            <p>
                                <a href="#!" class="text-reset">
                                    Settings
                                </a>
                            </p>
                            <p>
                                <a href="#!" class="text-reset">
                                    Orders
                                </a>
                            </p>
                            <p>
                                <a href="#!" class="text-reset">
                                    Help
                                </a>
                            </p>
                        </div>

                        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                            <h6 class="text-uppercase fw-bold mb-4">Contact us</h6>
                            <p>
                                <i class="fas fa-home me-3"></i> Address: 32, C Block, Grape
                                Garden, 17th H Main Rd, KHB Colony, 6th Block, Koramangala,
                                Bengaluru, Karnataka 560095
                            </p>
                            <p>
                                <i class="fas fa-envelope me-3"></i>
                                ekart.shopping@gmail.com
                            </p>
                            <p>
                                <i class="fas fa-phone me-3"></i> + 01 234 567 88
                            </p>
                            <p>
                                <i class="fas fa-print me-3"></i> + 01 234 567 89
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <div class="text-center p-4">
                © 2021 Copyright:
                <a class="text-reset fw-bold" href="https://www.tavant.com/">
                    ekart.com
                </a>
            </div>
        </footer>
    </div>
    )
  }
}
