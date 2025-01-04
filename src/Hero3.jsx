import Qualitytre from "./assets/quality-treatment-img.jpg";

function Hero3() {
  return (
    <div className="quality-treatment-container">
      <div className="quality-text-section">
        <nav className="quality-breadcrumb">/ Quality Treatment</nav>
        <h1 className="quality-title">We Proudly Give Quality Treatment</h1>
        <p className="quality-description">
          We understand that injuries and acute pain can happen unexpectedly. Our
          emergency physiotherapy services are designed to provide prompt and
          effective care to help you manage.
        </p>
        <ul className="quality-points">
          <li>We Understand That Injuries</li>
          <li>Can Happen Unexpectedly, Our Emergency</li>
          <li>We Understand That Injuries</li>
        </ul>
        <button className="quality-appointment-btn">Make An Appointment</button>
      </div>
      <div className="quality-image-section">
        <img
          src={Qualitytre}
          alt="Physiotherapy treatment"
          className="quality-image"
        />
      </div>
    </div>
  );
}

export default Hero3;
