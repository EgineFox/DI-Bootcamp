import React from 'react'
import Button from 'react-bootstrap/Button';

export default function Contacts() {
    return (
        <div className='container'>
            <div className='cont-big'>
                <h2>Contact us</h2>
                <div className='contact-form'>
                    <div className='sec1'>
                        <span> Contact us and we will get back to you within 24 hours.
                        </span> <br />
                        <span> <i class="fa fa-map-marker" aria-hidden="true"></i> Company name</span> <br />
                        <span> <i class="fa fa-phone-square" aria-hidden="true"></i> +256 778 800 900</span> <br />
                        <span> <i class="fa fa-envelope" aria-hidden="true"></i> company.gmail.com</span> <br />
                    </div>
                 <div className="sec2">
  <span>Contact</span>
  <div className="form-floating mb-3">
    <input
      type="email"
      className="form-control"
      id="floatingInput"
      placeholder="name@example.com"
    />
    <label htmlFor="floatingInput">Email address</label>
  </div>
  <div className="textarea-container">
    <textarea
      style={{ height: "100px" }}
      placeholder="comment"
      className="form-control"
    ></textarea>
  </div>
  <Button variant="primary" size="lg" className="btn btn-primary">
    Send
  </Button>
</div>

                </div>
            </div>
        </div>
    )
}
