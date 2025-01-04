import img1 from './assets/icon-about-list-1.svg';
import img2 from './assets/icon-about-list-2.svg';
import img3 from './assets/icon-about-list-3.svg';
import img4 from './assets/1.webp';
import img5 from './assets/2.webp';
import img6 from './assets/3.webp';
import img7 from './assets/4.webp';
import img9 from './assets/about-us-img-1.jpg';
import img10 from './assets/about-us-img-2.jpg';
import img11 from './assets/about-us-img-3.jpg';
import img12 from './assets/about-us-img-4.jpg';



function Hero01(){
    return (
        <div className="physio-container">
            <section className="physio-hero-section">
                <div className="physio-hero-text">
                    <p>/ About Us</p>
                    <h1>We are the best for physiotherapy</h1>
                    <p>
                        We understand that injuries and acute pain can happen unexpectedly. Our emergency physiotherapy services are designed to provide prompt and effective care to help you manage pain, prevent further injury, and start your recovery process as quickly as possible.
                    </p>
                    <div className="physio-features">
                        <div className="physio-feature">
                            <img src={img1} alt="Therapist Icon"/>
                            <p>Expert Therapist</p>
                        </div>
                        <div className="physio-feature">
                            <img src={img2} alt="Techniques Icon"/>
                            <p>Advanced Techniques</p>
                        </div>
                        <div className="physio-feature">
                            <img src={img3} alt="Care Icon"/>
                            <p>Personalized Care</p>
                        </div>
                    </div>
                    <a href="#" className="physio-cta-button">Book Appointment</a>
                    <div className="physio-rating">
                        <img src={img4} alt="User "/>
                        <img src={img5} alt="User" />
                        <img src={img6} alt="User" />
                        <img src={img7} alt="User" />
                        <span>Trusted by 4k+ Customers</span>
                    </div>
                </div>
                <div className="physio-hero-image">
                    <img className ="ph1" src={img9} alt="Physiotherapy Session" />
                    <img className ="ph2" src={img10} alt="Session 2" />
                    <img className ="ph3" src={img11} alt="Session 3" />
                    <img className ="ph4" src={img12} alt="Session 4" />
                </div>
            </section>
        </div>
    );

}

export default Hero01;