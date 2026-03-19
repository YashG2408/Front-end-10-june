import React from 'react'
// import Header from '../Comman/Header'
// import Footer from '../Comman/Footer'

function NotFound() {
  return (
    <div>
        {/* <Header /> */}
     <main className="main">
  {/* Page Title */}
  <div className="page-title dark-background" style={{backgroundImage: 'url(assets/img/travel/showcase-11.webp)'}}>
    <div className="container position-relative">
      <h1>404</h1>
      <p>Esse dolorum voluptatum ullam est sint nemo et est ipsa porro placeat quibusdam quia assumenda numquam molestias.</p>
      <nav className="breadcrumbs">
        <ol>
          <li><a href="index.html">Home</a></li>
          <li className="current">404</li>
        </ol>
      </nav>
    </div>
  </div>{/* End Page Title */}
  {/* Error 404 Section */}
  <section id="error-404" className="error-404 section">
    <div className="container">
      <div className="text-center">
        <div className="error-icon mb-4">
          <i className="bi bi-exclamation-circle" />
        </div>
        <h1 className="error-code mb-4">404</h1>
        <h2 className="error-title mb-3">Oops! Page Not Found</h2>
        <p className="error-text mb-4">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <div className="search-box mb-4">
          <form action="#" className="search-form">
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Search for pages..." aria-label="Search" />
              <button className="btn search-btn" type="submit">
                <i className="bi bi-search" />
              </button>
            </div>
          </form>
        </div>
        <div className="error-action">
          <a href="/" className="btn btn-primary">Back to Home</a>
        </div>
      </div>
    </div>
  </section>{/* /Error 404 Section */}
</main>

        {/* <Footer /> */}
    </div>
  )
}

export default NotFound