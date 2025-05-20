import React from "react";
import "../styles/styles.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function error() {
  return (
    <div>
      <section className=" container error d-flex justify-content-center align-items-center">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-6 col-12 content">
            <h6>ERROR</h6>
            <h1>404</h1>
            <p>
              The Page you are trying to access does not exist or has been
              moved. <br />
              Try going back to our home page.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default error;
