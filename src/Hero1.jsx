import service1Img from './assets/service-img-1.jpg';
import service2Img from './assets/service-img-2.jpg';
import service3Img from './assets/service-img-3.jpg';
import service4Img from './assets/service-img-4.jpg';
import service5Img from './assets/service-img-5.jpg';
import service6Img from './assets/service-img-6.jpg';
import service1 from './assets/icon-service-1.svg';
import service2 from './assets/icon-service-2.svg';
import service3 from './assets/icon-service-3.svg';
import service4 from './assets/icon-service-4.svg';
import service5 from './assets/icon-service-5.svg';
import service6 from './assets/icon-service-6.svg';
function Hero1() {
    return (
        <div className="container">
            <div className="topic">
                <div className ="topic1">
                    <h1>We Provide The Best Services</h1>
                    <p>We offer top-quality physiotherapy services tailored to your needs. Our expert therapists use advanced techniques to treat pain and improve mobility.</p>
                </div>
                <div className ="topic2">
                    <a href="#" className="appointment-btn">Make An Appointment</a>
                </div>
            </div>s

            <div className="services">
                <div className="service-card">
                    <img src={service1Img} alt="Manual Therapy" />
                    <div class="content">
                        <img src={service1} alt="Icon" className="icon" />
                        <h3>Manual Therapy</h3>
                        <p>Specialized form of physical therapy delivered through hands-on techniques.</p>
                        <a href="#" className="arrow">Learn More &rarr;</a>
                    </div>
                </div>

                <div className="service-card">
                        <img src={service2Img} alt="Chronic Pain" />
                        <div className="content">
                            <img src={service2} alt="Icon" className="icon" />
                            <h3>Chronic Pain</h3>
                            <p>Refers to persistent pain even after the underlying injury or illness has healed.</p>
                            <a href="#" class="arrow">Learn More &rarr;</a>
                        </div>
                </div>

                <div className="service-card">
                        <img src= {service3Img} alt="Hand Therapy" />
                        <div className="content">
                            <img src={service3} alt="Icon" className="icon" />
                            <h3>Hand Therapy</h3>
                            <p>Specialized area of physiotherapy that focuses on hand, wrist, and forearm.</p>
                            <a href="#" className="arrow">Learn More &rarr;</a>
                        </div>
                </div>

                <div className="service-card">
                        <img src= {service4Img} alt="Sports Therapy" />
                        <div className="content">
                            <img src={service4} alt="Icon" className="icon" />
                            <h3>Hand Therapy</h3>
                            <p>Specialized area of physiotherapy that focuses on hand, wrist, and forearm.</p>
                            <a href="#" className="arrow">Learn More &rarr;</a>
                        </div>
                </div>

                <div className="service-card">
                        <img src= {service5Img} alt="Cupping Therapy" />
                        <div className="content">
                            <img src={service5} alt="Icon" className="icon" />
                            <h3>Hand Therapy</h3>
                            <p>Specialized area of physiotherapy that focuses on hand, wrist, and forearm.</p>
                            <a href="#" className="arrow">Learn More &rarr;</a>
                        </div>
                </div>

                <div className="service-card">
                        <img src= {service6Img} alt="Laseer Therapy" />
                        <div className="content">
                            <img src={service6} alt="Icon" className="icon" />
                            <h3>Hand Therapy</h3>
                            <p>Specialized area of physiotherapy that focuses on hand, wrist, and forearm.</p>
                            <a href="#" className="arrow">Learn More &rarr;</a>
                        </div>
                </div>
            </div>
        </div>
    );
}

export default Hero1