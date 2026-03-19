import React from 'react'
import Header from '../Comman/Header'
import Footer from '../Comman/Footer'

function Gallery() {
  return (
    <div>
        <Header />
   <main className="main">
  {/* Page Title */}
  <div className="page-title dark-background" style={{backgroundImage: 'url(assets/img/travel/showcase-11.webp)'}}>
    <div className="container position-relative">
      <h1>Gallery</h1>
      <p>Esse dolorum voluptatum ullam est sint nemo et est ipsa porro placeat quibusdam quia assumenda numquam molestias.</p>
      <nav className="breadcrumbs">
        <ol>
          <li><a href="index.html">Home</a></li>
          <li className="current">Gallery</li>
        </ol>
      </nav>
    </div>
  </div>{/* End Page Title */}
  {/* Gallery Slider Section */}
  <section id="gallery-slider" className="gallery-slider section">
    <div className="container">
      <div className="gallery-container">
        <div className="swiper init-swiper">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="gallery-item">
                <div className="gallery-img">
                  <a className="glightbox" data-gallery="images-gallery" href="assets/img/gallery/gallery-3.webp">
                    <img src="assets/img/gallery/gallery-3.webp" className="img-fluid" alt />
                    <div className="gallery-overlay">
                      <i className="bi bi-plus-circle" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="gallery-item">
                <div className="gallery-img">
                  <a className="glightbox" data-gallery="images-gallery" href="assets/img/gallery/gallery-1.webp">
                    <img src="assets/img/gallery/gallery-1.webp" className="img-fluid" alt />
                    <div className="gallery-overlay">
                      <i className="bi bi-plus-circle" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="gallery-item">
                <div className="gallery-img">
                  <a className="glightbox" data-gallery="images-gallery" href="assets/img/gallery/gallery-5.webp">
                    <img src="assets/img/gallery/gallery-5.webp" className="img-fluid" alt />
                    <div className="gallery-overlay">
                      <i className="bi bi-plus-circle" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="gallery-item">
                <div className="gallery-img">
                  <a className="glightbox" data-gallery="images-gallery" href="assets/img/gallery/gallery-7.webp">
                    <img src="assets/img/gallery/gallery-7.webp" className="img-fluid" alt />
                    <div className="gallery-overlay">
                      <i className="bi bi-plus-circle" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="gallery-item">
                <div className="gallery-img">
                  <a className="glightbox" data-gallery="images-gallery" href="assets/img/gallery/gallery-2.webp">
                    <img src="assets/img/gallery/gallery-2.webp" className="img-fluid" alt />
                    <div className="gallery-overlay">
                      <i className="bi bi-plus-circle" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="gallery-item">
                <div className="gallery-img">
                  <a className="glightbox" data-gallery="images-gallery" href="assets/img/gallery/gallery-4.webp">
                    <img src="assets/img/gallery/gallery-4.webp" className="img-fluid" alt />
                    <div className="gallery-overlay">
                      <i className="bi bi-plus-circle" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="gallery-item">
                <div className="gallery-img">
                  <a className="glightbox" data-gallery="images-gallery" href="assets/img/gallery/gallery-6.webp">
                    <img src="assets/img/gallery/gallery-6.webp" className="img-fluid" alt />
                    <div className="gallery-overlay">
                      <i className="bi bi-plus-circle" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="gallery-item">
                <div className="gallery-img">
                  <a className="glightbox" data-gallery="images-gallery" href="assets/img/gallery/gallery-8.webp">
                    <img src="assets/img/gallery/gallery-8.webp" className="img-fluid" alt />
                    <div className="gallery-overlay">
                      <i className="bi bi-plus-circle" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-pagination" />
          <div className="swiper-button-next" />
          <div className="swiper-button-prev" />
        </div>
      </div>
    </div>
  </section>{/* /Gallery Slider Section */}
  {/* Gallery Section */}
  <section id="gallery" className="gallery section">
    <div className="container">
      <div className="gallery-grid">
        <div className="gallery-item">
          <a className="glightbox" data-gallery="images-gallery" href="assets/img/gallery/gallery-3.webp">
            <img src="assets/img/gallery/gallery-3.webp" className="img-fluid" alt />
            <div className="gallery-overlay">
              <i className="bi bi-plus-lg" />
            </div>
          </a>
        </div>
        <div className="gallery-item featured">
          <a className="glightbox" data-gallery="images-gallery" href="assets/img/gallery/gallery-1.webp">
            <img src="assets/img/gallery/gallery-1.webp" className="img-fluid" alt />
            <div className="gallery-overlay">
              <i className="bi bi-plus-lg" />
            </div>
          </a>
        </div>
        <div className="gallery-item">
          <a className="glightbox" data-gallery="images-gallery" href="assets/img/gallery/gallery-5.webp">
            <img src="assets/img/gallery/gallery-5.webp" className="img-fluid" alt />
            <div className="gallery-overlay">
              <i className="bi bi-plus-lg" />
            </div>
          </a>
        </div>
        <div className="gallery-item">
          <a className="glightbox" data-gallery="images-gallery" href="assets/img/gallery/gallery-7.webp">
            <img src="assets/img/gallery/gallery-7.webp" className="img-fluid" alt />
            <div className="gallery-overlay">
              <i className="bi bi-plus-lg" />
            </div>
          </a>
        </div>
        <div className="gallery-item">
          <a className="glightbox" data-gallery="images-gallery" href="assets/img/gallery/gallery-2.webp">
            <img src="assets/img/gallery/gallery-2.webp" className="img-fluid" alt />
            <div className="gallery-overlay">
              <i className="bi bi-plus-lg" />
            </div>
          </a>
        </div>
        <div className="gallery-item">
          <a className="glightbox" data-gallery="images-gallery" href="assets/img/gallery/gallery-4.webp">
            <img src="assets/img/gallery/gallery-4.webp" className="img-fluid" alt />
            <div className="gallery-overlay">
              <i className="bi bi-plus-lg" />
            </div>
          </a>
        </div>
        <div className="gallery-item featured">
          <a className="glightbox" data-gallery="images-gallery" href="assets/img/gallery/gallery-6.webp">
            <img src="assets/img/gallery/gallery-6.webp" className="img-fluid" alt />
            <div className="gallery-overlay">
              <i className="bi bi-plus-lg" />
            </div>
          </a>
        </div>
        <div className="gallery-item">
          <a className="glightbox" data-gallery="images-gallery" href="assets/img/gallery/gallery-8.webp">
            <img src="assets/img/gallery/gallery-8.webp" className="img-fluid" alt />
            <div className="gallery-overlay">
              <i className="bi bi-plus-lg" />
            </div>
          </a>
        </div>
      </div>
      <div className="text-center mt-5">
        <a href="#" className="btn-view-more">View More <i className="bi bi-arrow-right" /></a>
      </div>
    </div>
  </section>{/* /Gallery Section */}
</main>

        <Footer />
    </div>
  )
}

export default Gallery