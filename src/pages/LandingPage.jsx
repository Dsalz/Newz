/* eslint-disable indent */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment, Component } from "react";
import { object } from "prop-types";

// Components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AppCarousel from "../components/AppCarousel";
import BookingMask from "../components/BookingMask";
import Rating from "../components/Rating";

// Images
import chooseImg from "../images/chooseImg.svg";
import discoverImg from "../images/discoverImg.svg";
import bookImg from "../images/bookImg.svg";
import firstTestimonialPic from "../images/firstTestimonialPic.png";
import secondTestimonialPic from "../images/secondTestimonialPic.png";
import thirdTestimonialPic from "../images/thirdTestimonialPic.png";

// CSS
import "../css/LandingPage.css";

/**
 * @class LandingPage
 */
class LandingPage extends Component {
  state = {};

  /**
   * @method componentDidMount
   * @description The componentDidMount lifecycle
   * @returns {undefined}
   */
  componentDidMount() {
    
  }

  /**
   * @method render
   * @returns {JSX} landing page
   */
  render() {
    return (
      <Fragment>
        <section class="app-card">

        </section>
      </Fragment>
    );
  }
}

LandingPage.propTypes = {
  history: object.isRequired,
  match: object.isRequired
};

export default LandingPage;
