import "../styles/styles.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function Thanks() {
  return (
    <div>
      <section className="container thanks">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-6 col-12 content">
            <img src="/Logo-Image.png" alt="logo-image" />
            <h1>Thank You</h1>
            <p>
              Thank you for contacting us. Your message has being recieved, and
              you shall be contacted immediately
            </p>
          </div>
        </div>
      </section>   
    </div>
  );
}

export default Thanks;
