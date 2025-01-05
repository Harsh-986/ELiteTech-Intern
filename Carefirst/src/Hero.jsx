function Hero() {
    return (
        <section className="hero">
            <video autoPlay loop muted className="background-video">
                <source src="https://demo.awaikenthemes.com/assets/videos/carefirst-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="hero-content">
                <h1>Destination For Relief & Wellness</h1>
                <p>
                    It is a long-established fact that a reader will be distracted 
                    by the readable content of a page when looking at its layout.
                </p>
                <a href="#services" className="btn">Explore Services</a>
                <a href="#appointment" className="btn">Book Appointment</a>
            </div>
        </section>
    );
}

export default Hero;
