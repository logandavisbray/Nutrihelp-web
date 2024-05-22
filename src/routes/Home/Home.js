import './Home.css';

import React, { useContext, useEffect, useState } from 'react';

import CreateAccountPopUp from './CreateAccountPopUp';
import { Link } from 'react-router-dom';
import LoginPopUp from './LoginPopUp';
import { UserContext } from "../../context/user.context";

const Home = () => {

    const { currentUser } = useContext(UserContext)
    const isLoggedIn = Boolean(currentUser);

    const [createPopUp, setCreatePopup] = useState(false);
    const [loginPopUp, setLoginPopup] = useState(false);

    const [showHeader, setShowHeader] = useState(true);
    const [prevScrollPos, setPrevScrollPos] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;

            if (currentScrollPos > prevScrollPos) {
                // Scrolling down
                setShowHeader(false);
            } else {
                // Scrolling up
                setShowHeader(true);
            }

            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {

            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos]);

    return (
        <>
            {!isLoggedIn && (
                <header id="header" className={`fixed-top ${showHeader ? 'header-visible' : 'header-hidden'}`}>
                    <div className="container d-flex align-items-center justify-content-between">
                        <a href="index.html" className="logo">
                            <img src="" alt="" />
                        </a>
                        <nav id="navbar" className="navbar">
                            <ul>
                                <li>
                                    <a className="nav-link scrollto active" href="index.html">
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a className="nav-link scrollto" href="#about">
                                        About
                                    </a>
                                </li>
                                <li>
                                    <a className="nav-link scrollto" href="#services">
                                        Services
                                    </a>
                                </li>
                                <li>
                                    <a className="nav-link scrollto" href="#contact">
                                        Contact
                                    </a>
                                </li>

                                <li>
                                    <Link onClick={() => setLoginPopup(true) & setCreatePopup(false)} className="nav-link scrollto">
                                        Sign In
                                    </Link>
                                </li>

                                <li>
                                    <Link onClick={() => setCreatePopup(true) & setLoginPopup(false)} className="nav-link scrollto">
                                        Create Account
                                    </Link>
                                </li>

                            </ul>
                        </nav>
                    </div>
                </header>
            )}

            <section id="hero" className="d-flex align-items-center">

                <CreateAccountPopUp trigger={createPopUp} setTrigger={setCreatePopup}>
                </CreateAccountPopUp>

                <LoginPopUp trigger={loginPopUp} setTrigger={setLoginPopup}>
                </LoginPopUp>

                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
                            <img src="/images/logos_white.png" alt="NutriHelp Logo" style={{ width: '850px', height: '280px' }} />
                            <h2>
                                NutriHelp supports you in managing your general wellbeing,
                                nutrient-related diseases and deficiencies through personalised
                                nutrition advice
                            </h2>
                            <div>
                                <a href="#" className="btn-get-started scrollto">
                                    Get Started
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2 hero-img">
                            <img src="images/30.png" className="img-fluid" alt="" />
                        </div>
                    </div>
                </div>
            </section>

            <main id="main">
                <section id="about" className="about">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-5 col-lg-6 d-flex justify-content-center img-box align-items-stretch position-relative"></div>
                            <div className="col-xl-7 col-lg-6 icon-boxes d-flex flex-column align-items-stretch justify-content-center py-5 px-lg-5">
                                <h3>NutriHelp</h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Voluptas accusamus eum architecto laboriosam autem quasi
                                    consectetur quia tempora, voluptatibus nemo asperiores
                                    similique exercitationem et quam cum dignissimos eveniet magni
                                    ipsam!
                                </p>

                                <div className="icon-box">
                                    <div className="icon">
                                        <i className="bx bx-heart"></i>
                                    </div>
                                    <h4 className="title">
                                        <a href="">Diagnosis</a>
                                    </h4>
                                    <p className="description">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Delectus iste totam corporis, autem laborum quas dolorem ab
                                        quae debitis aliquid eveniet, cum provident non, corrupti
                                        sequi praesentium voluptate atque! Porro!
                                    </p>
                                </div>

                                <div className="icon-box">
                                    <div className="icon">
                                        <i className="bx bx-plus-medical"></i>
                                    </div>
                                    <h4 className="title">
                                        <a href="">Personalized plan</a>
                                    </h4>
                                    <p className="description">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Modi cupiditate, cum aut expedita porro architecto doloremque
                                        labore sed, beatae facere officia veniam doloribus dolore
                                        veritatis ab voluptates recusandae nulla? Ipsam.
                                    </p>
                                </div>

                                <div className="icon-box">
                                    <div className="icon">
                                        <i className="bx bx-pulse"></i>
                                    </div>
                                    <h4 className="title">
                                        <a href="">Dine Pad</a>
                                    </h4>
                                    <p className="description">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                                        laudantium itaque consequatur autem ad beatae veritatis totam
                                        quaerat voluptate distinctio quam accusamus, enim voluptatum
                                        soluta commodi, nihil qui deleniti ipsum.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="services" className="services section-bg">
                    <div className="container">
                        <div className="section-title">
                            <h2>Services</h2>
                            <p>
                                At NutriHelp, we offer a range of services designed to support
                                your overall well-being and nutritional needs. Our dedicated team is committed to
                                providing personalized solutions to help you achieve your health goals and improve your quality of life.
                                Explore our key services below:
                            </p>
                        </div>

                        <div className="row">
                            <div className="col-lg-3 col-md-6">
                                <div className="icon-box">
                                    <div className="icon">
                                        <img src="images/4.jpg" alt="" />
                                    </div>
                                    <h4 className="title">
                                        <a href="#">Meal Planning</a>
                                    </h4>
                                    <p className="description">
                                        Access a variety of nutritious meal plans and recipes designed
                                        to meet your everyday nutritional needs and preferences.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="icon-box">
                                    <div className="icon">
                                        <img src="images/5.jpg" alt="" />
                                    </div>
                                    <h4 className="title">
                                        <a href="#">Dietary Needs</a>
                                    </h4>
                                    <p className="description">
                                        Our meal planning services cater to specific dietary requirements,
                                        allowing you to customize meal plans based on your needs.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="icon-box">
                                    <div className="icon">
                                        <img src="images/6.jpg" alt="" />
                                    </div>
                                    <h4 className="title">
                                        <a href="#">Create Recipes</a>
                                    </h4>
                                    <p className="description">
                                        Create your own personalized recipes tailored to your taste
                                        preferences and dietary requirements that suit your lifestyle.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="icon-box">
                                    <div className="icon">
                                        <img src="images/7.jpg" alt="" />
                                    </div>
                                    <h4 className="title">
                                        <a href="#">Product Scanning</a>
                                    </h4>
                                    <p className="description">
                                        Upload an image of a product to analyze its nutritional content and receive a detailed breakdown of its nutrients through a visual pie chart.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="contact" className="contact">
                    <div className="container">
                        <div className="section-title">
                            <h2>Contact</h2>
                            <p>
                                Have questions or need assistance? Reach out to us!
                                We are here to help you with any inquiries you may have.
                            </p>
                        </div>

                        <div className="row mt-5">
                            <div className="col-lg-4">
                                <div className="info">
                                    <div className="address">
                                        <i className="bi bi-geo-alt"></i>
                                        <h4>Location:</h4>
                                        <p>123123</p>
                                    </div>

                                    <div className="email">
                                        <i className="bi bi-envelope"></i>
                                        <h4>Email:</h4>
                                        <p>info@example.com</p>
                                    </div>

                                    <div className="phone">
                                        <i className="bi bi-phone"></i>
                                        <h4>Call:</h4>
                                        <p>+12132</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-8 mt-5 mt-lg-0">
                                <form
                                    action="forms/contact.php"
                                    method="post"
                                    role="form"
                                    className="php-email-form"
                                >
                                    <div className="row">
                                        <div className="col-md-6 form-group">
                                            <input
                                                type="text"
                                                name="name"
                                                className="form-control"
                                                id="name"
                                                placeholder="Your Name"
                                                required
                                            />
                                        </div>
                                        <div className="col-md-6 form-group">
                                            <input
                                                type="email"
                                                className="form-control"
                                                name="email"
                                                id="email"
                                                placeholder="Your Email"
                                                required
                                            />
                                        </div>
                                        <div className="col-md-6 form-group">
                                            <input
                                                type="text"
                                                name="subject"
                                                className="form-control"
                                                id="name"
                                                placeholder="Subject"
                                                required
                                            />
                                        </div>
                                        <div className="col-md-6 form-group">
                                            <textarea
                                                className="form-control"
                                                name="message"
                                                rows="5"
                                                placeholder="Message"
                                                required
                                            ></textarea>
                                        </div>
                                    </div>
                                    <button type="submit" className="submit-btn">
                                        Submit
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <footer id="footer">
                <div className="footer-newsletter">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-6">
                                <h4>Subscribe to our Newsletter</h4>
                                <p>Lorem ipsum dolor sit amet consecte.</p>
                                <form action="" method="post">
                                    <input type="email" name="email" />
                                    <input type="submit" value="Subscribe" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 footer-contact">
                                <h3>NutriHelp</h3>
                                <hr />
                                <p>1235584Y4Y83</p>
                            </div>

                            <div className="col-lg-3 col-md-6 footer-links">
                                <h4>Connect with Us</h4>

                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                </p>
                                <div className="social-links mt-3">
                                    <a href="#" className="twitter">
                                        <i className="bx bxl-twitter"></i>
                                    </a>
                                    <a href="#" className="facebook">
                                        <i className="bx bxl-facebook"></i>
                                    </a>
                                    <a href="#" className="instagram">
                                        <i className="bx bxl-instagram"></i>
                                    </a>
                                    <a href="#" className="google-plus">
                                        <i className="bx bxl-skype"></i>
                                    </a>
                                    <a href="#" className="linkedin">
                                        <i className="bx bxl-linkedin"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Home;
