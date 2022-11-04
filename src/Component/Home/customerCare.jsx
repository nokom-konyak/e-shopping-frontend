import React, { Component } from "react";
import em from "../../Images/email.png";
import fax from "../../Images/Fax.png";
import of from "../../Images/mainOffice.png";
import ph from "../../Images/phone.png";
import ReactDOM from 'react-dom/client';
import Home from "./home";
import AboutUs from "./AboutUs";
import { Button } from "@mui/material";
import Ecartnews from "./ecartnews";

export default class CustomerCare extends Component {


  home = () => {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<Home />)
  }

  aboutUs = () => {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<AboutUs />)
  }
  news = () => {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<Ecartnews />)
  }

  CustomerCare=()=>{
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<CustomerCare/>)
  }

  render() {
    return (
      <div class="container-fluid">
        <nav class="navbar navbar-expand-lg navbar-black bg-black">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 horizontal1">

              &nbsp;&nbsp;&nbsp;
              <li><span class="fas fa-shipping-fast bg-white"></span><Button onClick={this.home}><strong><b class="text-white">EKart Shopping</b></strong></Button></li>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <li >
                <button onClick={this.aboutUs} class="btn btn-light">About Us</button>
              </li>
              &nbsp;&nbsp;&nbsp;
              <li >
                <button onClick={this.news} class="btn btn-light">News</button>
              </li>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <li >
                <button onClick={this.CustomerCare} class="btn btn-light">FAQs</button>
              </li>
            </ul>
          </div>
        </nav>
        <br />
        <br />

        <h1 class="p-3 mb-2 bg-secondary text-white">
          Ekart Help Center | 24x7 Customer Care Support
        </h1>
        <br />
        <div class="shadow-lg p-3 mb-5 bg-white rounded">
          <p class="font-italic text-justify">
            {" "}
            The Ekart HelpCentre page lists out various types of issues that you
            may have encountered so that there can be quick resolution and you
            can go back to shopping online. For example, you can get more
            information regarding order tracking, delivery date changes, help
            with returns (and refunds), and much more. The EKART Help Centre
            also lists out more information that you may need regarding EKART
            Plus, payment, shopping, and more. The page has various filters
            listed out on the left-hand side so that you can get your queries
            solved quickly, efficiently, and without a hassle. You can get the
            EKART Help Centre number or even access EKART Help Centre support if
            you need professional help regarding various topics. The support
            executive will ensure speedy assistance so that your shopping
            experience is positive and enjoyable. You can even inform your loved
            ones of the support page so that they can properly get their
            grievances addressed as well. Once you have all your queries
            addressed, you can pull out your shopping list and shop for all your
            essentials in one place. You can shop during festive sales to get
            your hands on some unbelievable deals online. This information is
            updated on 02-Nov-22
          </p>
        </div>

        <div class="border border-warning  border border-1 container-fluid">
          <h1 class="p-3 mb-2 bg-info text-white">If You Have Any Query ? Contact Us</h1>


          <div class="shadow-lg p-3 mb-5 bg-white rounded row">
            <div className="card innerbox col-md" style={{ width: '18rem' }}>
              <img
                class="card-img-top"
                src={em}
                alt="Card cap"

              />
              <div className="card-body">
                <p class="card-text">
                  EmailId : &nbsp;ekart.shopping@gmail.com
                </p>
              </div>
            </div>
            &nbsp;
            &nbsp;

            <div className="card innerbox col-md" style={{ width: '18rem' }}>
              <img
                class="card-img-top"
                src={fax}
                alt="Card cap"

              />
              <div class="card-body">
                <p class="card-text">
                  FaxNo: 24563830884
                </p>
              </div>
            </div>

            &nbsp;
            &nbsp;

            <div className="card innerbox col-md" style={{ width: '18rem' }}>
              <img
                class="card-img-top"
                src={of}
                alt="Card cap"

              />
              <div class="card-body">
                <p class="card-text">
                  Address:32, C Block, Grape Garden, 17th H Main Rd, KHB Colony,<br />
                  6th Block, Koramangala, Bengaluru, Karnataka 560095
                </p>
              </div>
            </div>
            &nbsp;
            &nbsp;


            <div className="card innerbox col-md" style={{ width: '18rem' }}>
              <img
                class="card-img-top"
                src={ph}
                alt="Card cap"

              />
              <div class="card-body">
                <p class="card-text">
                  PhoneNo: +91 9828461693
                </p>
              </div>
            </div>
          </div>
        </div>
        &nbsp;
        &nbsp;

        <h1>FAQs</h1>
        <ol>
          <li>
            What happens when I update my email address (or mobile number)?
          </li>
          <b>Ans:</b> Your login email id (or mobile number) changes, likewise.
          You'll receive all your account related communication on your updated
          email address (or mobile number).
          <li>
            When will my Flipkart account be updated with the new email address
            (or mobile number)?
          </li>
          <b>Ans:</b> It happens as soon as you confirm the verification code
          sent to your email (or mobile) and save the changes.
          <li>
            What happens to my existing Flipkart account when I update my email
            address (or mobile number)?
          </li>
          <b>Ans:</b> Updating your email address (or mobile number) doesn't
          invalidate your account. Your account remains fully functional. You'll
          continue seeing your Order history, saved information and personal
          details.
          <li>
            Does my Seller account get affected when I update my email address?
          </li>
          <b>Ans:</b> Flipkart has a 'single sign-on' policy. Any changes will
          reflect in your Seller account also.
          <hr />
        </ol>
        <div class="p-3 mb-2 bg-dark text-white">
          <p>
            <h1 class="text-success">
              <b>
                <em> Centre Payment</em>
              </b>
            </h1>
            <h3>How can I pay for my order?</h3>
            <br />
            <h7>
              You can choose to pay for an order using any of the below methods:
            </h7>
            <ol>
              <li>
                <b>Cash on Delivery</b>
              </li>
              <li>
                <b>Net Banking</b>
              </li>
              <li>
                <b>Gift Card</b>
              </li>
              <li>
                <b>PhonePe Wallet</b>
              </li>
              <li>
                <b>
                  Visa, MasterCard, Maestro and American Express Credit or Debit
                  cards issued in India and 21 other countries
                </b>
              </li>
            </ol>
            <p class="text-secondary">
              To know more about payments, click here:
              http://www.Ekart.com/s/help/payments
            </p>
          </p>
        </div>
        <br />
        <hr />
        <div class="p-3 mb-2 bg-dark text-white">
          <h1 class="text-success">
            {" "}
            <b>
              <em>How do returns work?</em>
            </b>
          </h1>
          <h3>
            <b>
              You can raise a request to return your items with these simple
              steps:
            </b>
          </h3>{" "}
          <br />
          <ol>
            <li>
              <b> Log into your Ekart account</b>{" "}
            </li>
            <li>
              <b> Go to My Orders </b>
            </li>
            <li>
              {" "}
              <b>
                Click on 'Return' against the item you wish to return or
                exchange
              </b>{" "}
            </li>
            <li>
              <b>
                {" "}
                Fill in the details and raise a return request Once you raise a
                request,{" "}
              </b>
            </li>
          </ol>
          <p class="text-secondary">
            you'll get an email and SMS confirming that your request is being
            processed. Based on the item, your request may be automatically
            approved or you may be contacted for more details. If the request is
            approved, the item will be picked up after which you will get a
            replacement or refund. You can also track the status of your return
            request instantly from the 'My Orders' section of your Ekart
            account.
          </p>
        </div>
        <div>
          <p>
            <h1 class="p-3 mb-2 bg-info text-white"><b>PRIVACY POLICY</b></h1>
            <p class="text-secondary">
            We value the trust you place in us and recognize the
            importance of secure transactions and information privacy. This
            Privacy Policy describes how Flipkart Internet Private Limited and
            its affiliates (collectively “Flipkart, we, our, us”) collect, use,
            share or otherwise process your personal information through
            Flipkart website www.flipkart.com, its mobile application, and
            m-site (hereinafter referred to as the “Platform”). While you may be
            able to browse certain sections of the Platform without registering
            with us, however, please note we do not offer any product or service
            under this Platform outside India. Your personal information will
            primarily be stored and processed in India and may have data
            protection laws that are different from those that apply in the
            country in which you are located. By visiting this Platform,
            providing your information or availing out product/service, you
            expressly agree to be bound by the terms and conditions of this
            Privacy Policy, the Terms of Use and the applicable service/product
            terms and conditions, and agree to be governed by the laws of India
            including but not limited to the laws applicable to data protection
            and privacy. If you do not agree please do not use or access our
            Platform.</p>
          </p>

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
                ecart.com
              </a>
            </div>
          </footer>
        </div>
        </div>
        );
  }
}
