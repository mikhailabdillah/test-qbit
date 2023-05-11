const Footer = () => {
  return (
    <footer className="vg-footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 py-3">
            <div className="footer-info">
              <p>Where to find me</p>
              <hr className="divider" />
              <p className="fs-large fg-white">
                1600 Amphitheatre Parkway Mountain View, California 94043 US
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 py-3">
            <div className="float-lg-right">
              <p>Follow me</p>
              <hr className="divider" />
              <ul className="list-unstyled">
                <li>
                  <a href="#">Instagram</a>
                </li>
                <li>
                  <a href="#">Facebook</a>
                </li>
                <li>
                  <a href="#">Twitter</a>
                </li>
                <li>
                  <a href="#">Youtube</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 py-3">
            <div className="float-lg-right">
              <p>Contact me</p>
              <hr className="divider" />
              <ul className="list-unstyled">
                <li>info@email.com</li>
                <li>+123123</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row justify-content-center mt-3">
          <div className="col-12 mb-3">
            <h3 className="fw-normal text-center">Subscribe</h3>
          </div>
          <div className="col-lg-6">
            <form className="mb-3">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Email address"
                />
                <input
                  type="submit"
                  className="btn btn-theme no-shadow"
                  value="Subscribe"
                />
              </div>
            </form>
          </div>
          <div className="col-12">
            <p className="text-center mb-0 mt-4">Made by mikhail</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
