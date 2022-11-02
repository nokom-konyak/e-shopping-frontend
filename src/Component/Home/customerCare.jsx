import React, { Component } from "react";
import em from "../../Images/email.png";
import fax from "../../Images/Fax.png";
import of from "../../Images/mainOffice.png";
import ph from "../../Images/phone.png";
import CustomerMenu from "../Customer/CustomerMenu";
import ReactDOM from 'react-dom/client';
import Home from "./home";

export default class CustomerCare extends Component {


home=()=>{
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<Home/>)
}

render()
{
    return(
        <div class="container-fluid">
            <button onClick={this.home} class="btn btn-primary" style={{backgroundColor:"black"}}>Home</button>
        <br />
        <br />
        <br />

        <h1 class="text-light bg-dark">
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
          

          <div class="shadow-lg p-3 mb-5 bg-white rounded box1">
            <div className="card innerbox"  style={{ width: '18rem' }}>
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

          

          
            <div className="card innerbox"  style={{ width: '18rem' }}>
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
     
            <div className="card  "  style={{ width: '18rem' }}>
              <img
                class="card-img-top"
                src={of}
                alt="Card cap"
              
              />
              <div class="card-body">
                <p class="card-text">
                Address:32, C Block, Grape Garden, 17th H Main Rd, KHB Colony,<br/>
                 6th Block, Koramangala, Bengaluru, Karnataka 560095
                </p>
              </div>
            </div>
            &nbsp;
            &nbsp;

         
            <div className="card innerbox1"  style={{ width: '18rem' }}>
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
    );
  }
}
