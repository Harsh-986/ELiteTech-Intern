import img1 from './assets/how-work-img-2.jpg';
import img2 from './assets/how-work-img-3.jpg';
import img3 from './assets/service-img-1.jpg';
import img4 from './assets/quality-treatment-img.jpg';


function Hero4(){
    return(
        <div className="unique-container">
            
            <div className="unique-image-grid">
                <img src={img3} alt="Treatment 3" />
                <img src={img4} alt="Treatment 4" />
                <img src={img1} alt="Treatment 1" />
                <img src={img2} alt="Treatment 2" />
                
                
            </div>

            
            <div className="unique-content">
                <h2>We Proudly Give Quality Treatment</h2>
                <p>Some clinics provide an address or an online form for appointment requests. Send an email with your preferred times and details.</p>

                
                <div className="unique-accordion">
                    <div className="unique-accordion-item">
                        <div className="unique-accordion-header">Book an Appointment <span>&#9660;</span></div>
                        <div className="unique-accordion-content">
                        <p>Some clinics provide an address or an online form for appointment requests. Send an email with your preferred times and details.</p>
                        </div>
                    </div>

                    <div className="unique-accordion-item">
                        <div className="unique-accordion-header">Manual Therapy Treat <span>&#9660;</span></div>
                        <div className="unique-accordion-content">
                        <p>Information about manual therapy treatments offered by the clinic.</p>
                        </div>
                    </div>

                    <div className="unique-accordion-item">
                        <div className="unique-accordion-header">Chronic Care <span>&#9660;</span></div>
                        <div className="unique-accordion-content">
                        <p>Details about chronic care services available at the clinic.</p>
                        </div>
                    </div>

                    <div className="unique-accordion-item">
                        <div className="unique-accordion-header">Cupping Care <span>&#9660;</span></div>
                        <div className="unique-accordion-content">
                        <p>Insights on cupping care techniques and benefits.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    );
}

export default Hero4;