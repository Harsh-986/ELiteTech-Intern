import img1 from './assets/team-1.jpg';
import img2 from './assets/team-2.jpg';
import img3 from './assets/team-3.jpg';
import img4 from './assets/team-4.jpg';


function Hero5() {
    return (
        <section className="team-section">
            <div className="team-container">
                <div className="team-header">
                    <h1 className="team-title">Our dedicated & experienced therapist team</h1>
                    <button className="view-all-btn">View All Team</button>
                </div>
                <div className="team-grid">
                    <div className="team-card">
                        <img src={img1} alt="Dr. Emily Brown" className="team-photo" />
                        <h3 className="team-name">Dr. Emily Brown</h3>
                        <p className="team-role">Senior Physiotherapist</p>
                    </div>
                    <div className="team-card">
                        <img src={img2} alt="Dr. Lisa Johnson" className="team-photo" />
                        <h3 className="team-name">Dr. Lisa Johnson</h3>
                        <p className="team-role">Pediatric Therapist</p>
                    </div>
                    <div className="team-card">
                        <img src={img3} alt="Dr. Jessica Wilson" className="team-photo" />
                        <h3 className="team-name">Dr. Jessica Wilson</h3>
                        <p className="team-role">Neurological Therapist</p>
                    </div>
                    <div className="team-card">
                        <img src={img4} alt="Dr. Linda Thomas" className="team-photo" />
                        <h3 className="team-name">Dr. Linda Thomas</h3>
                        <p className="team-role">Orthopedic Therapist</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero5;
