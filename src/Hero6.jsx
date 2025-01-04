import img1 from './assets/1.webp';
import img2 from './assets/2.webp';

function Hero6(){
    return(
        <section className="testimonials-section">
            <div className="testimonials-container">
                <div className="testimonials-header">
                    <p className="testimonials-category">/ Client Testimonials</p>
                    <h2 className="testimonials-title">Our Clients Reviews</h2>
                    <p className="testimonials-description">
                        At Physiocare, we pride ourselves on providing exceptional physiotherapy services 
                        that deliver real results. But don't just take our word for it.
                    </p>
                </div>
                <div className="testimonials-grid">
                    <div className="testimonial-card">
                        <div className="testimonial-rating">
                            <span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span>
                        </div>
                        <p className="testimonial-text">
                            After my knee surgery, the team at Physiocare helped me regain my mobility. 
                            The personalized treatment plan was incredible.
                        </p>
                        <div className="testimonial-author">
                            <img src={img1} alt="Chris W." className="testimonial-photo" />
                            <div>
                                <h4 className="author-name">Chris W.</h4>
                                <p className="author-role">Professional Athlete</p>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-card">
                        <div className="testimonial-rating">
                            <span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span>
                        </div>
                        <p className="testimonial-text">
                            I've been to several physio clinics, but none compare to Physiocare. Their staff is 
                            knowledgeable, professional, and genuinely care.
                        </p>
                        <div className="testimonial-author">
                            <img src={img2} alt="Mark S." className="testimonial-photo" />
                            <div>
                                <h4 className="author-name">Mark S.</h4>
                                <p className="author-role">Retired Teacher</p>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </section>
    );
}


export default Hero6;