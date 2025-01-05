
import React from 'react';
import facebookImg from './assets/facebook.jpeg';
import InstaImg from './assets/insta.jpeg';
import LinkImg from './assets/link.jpeg';
import TwiImg from './assets/twi.jpeg';

function Footer() {
    return (
        <footer>
            <div className="footer-container">
                <div className="footer-top">
                    <h2>Carefirst</h2>
                    <p>#1 Physiotherapy centre in the town</p>
                    <p>We understand that injuries and acute pain can happen unexpectedly. Our emergency physiotherapy helps you recover quickly.</p>
                </div>
                <div className="footer-middle">
                    <div className="links">
                        <h3>Quick Links</h3>
                        <a href="#">About Us</a>
                        <a href="#">Services</a>
                        <a href="#">Contact Us</a>
                    </div>
                    <div className="services">
                        <h3>More Services</h3>
                        <a href="#">Manual Therapy</a>
                        <a href="#">Chronic Pain</a>
                        <a href="#">Hand Therapy</a>
                    </div>
                    <div className="social">
                        <h3>Social Media</h3>
                        <div className="social-icons">
                            <a href="#"><img className="social" src={facebookImg} alt="Facebook" /></a>
                            <a href="#"><img className="social" src={TwiImg} alt="Twitter" /></a>
                            <a href="#"><img className="social" src={LinkImg} alt="LinkedIn" /></a>
                            <a href="#"><img className="social" src={InstaImg} alt="Instagram" /></a>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="working-hours">
                        <h3>Working Hours</h3>
                        <p>Mon to Fri: 10:00 to 6:00</p>
                        <p>Sat: 10:00AM to 3:00PM</p>
                        <p>Sun: Closed</p>
                    </div>
                    <div className="contact">
                        <h3>Help And Support</h3>
                        <p>📞 (+0) 789 3456 012</p>
                        <p>✉ domain@gmail.com</p>
                    </div>
                </div>
                <div className="copyright">
                    <p>Copyright 2024 Physiotherapy. All Rights Reserved.</p>
                </div>
            </div>
        </footer>

    );
}

export default Footer;
