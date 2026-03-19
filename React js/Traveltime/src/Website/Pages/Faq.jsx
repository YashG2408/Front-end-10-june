import React from 'react'
import Header from '../Comman/Header'
import Footer from '../Comman/Footer'

function Faq() {
  return (
    <div>
        <Header />
     <main className="main">
  {/* Page Title */}
  <div className="page-title dark-background" style={{backgroundImage: 'url(assets/img/travel/showcase-11.webp)'}}>
    <div className="container position-relative">
      <h1>Frequently Asked Questions</h1>
      <p>Esse dolorum voluptatum ullam est sint nemo et est ipsa porro placeat quibusdam quia assumenda numquam molestias.</p>
      <nav className="breadcrumbs">
        <ol>
          <li><a href="index.html">Home</a></li>
          <li className="current">Faq</li>
        </ol>
      </nav>
    </div>
  </div>{/* End Page Title */}
  {/* Faq Section */}
  <section id="faq" className="faq section">
    <div className="container">
      <div className="row gy-4 justify-content-between">
        <div className="col-lg-8">
          <div className="faq-list">
            <div className="faq-item faq-active">
              <h3>Vivamus suscipit tortor eget felis porttitor volutpat?</h3>
              <div className="faq-content">
                <p>
                  Nulla quis lorem ut libero malesuada feugiat. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur aliquet quam id dui posuere blandit. Nulla porttitor accumsan tincidunt.
                </p>
              </div>
              <i className="bi bi-plus faq-toggle" />
            </div>{/* End FAQ Item*/}
            <div className="faq-item">
              <h3>Curabitur aliquet quam id dui posuere blandit?</h3>
              <div className="faq-content">
                <p>
                  Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Proin eget tortor risus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar.
                </p>
              </div>
              <i className="bi bi-plus faq-toggle" />
            </div>{/* End FAQ Item*/}
            <div className="faq-item">
              <h3>Sed porttitor lectus nibh ullamcorper sit amet?</h3>
              <div className="faq-content">
                <p>
                  Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Donec sollicitudin molestie malesuada. Vestibulum ac diam sit amet quam vehicula elementum.
                </p>
              </div>
              <i className="bi bi-plus faq-toggle" />
            </div>{/* End FAQ Item*/}
            <div className="faq-item">
              <h3>Nulla quis lorem ut libero malesuada feugiat?</h3>
              <div className="faq-content">
                <p>
                  Donec sollicitudin molestie malesuada. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel.
                </p>
              </div>
              <i className="bi bi-plus faq-toggle" />
            </div>{/* End FAQ Item*/}
            <div className="faq-item">
              <h3>Vestibulum ac diam sit amet quam vehicula elementum?</h3>
              <div className="faq-content">
                <p>
                  Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.
                </p>
              </div>
              <i className="bi bi-plus faq-toggle" />
            </div>{/* End FAQ Item*/}
          </div>
        </div>
        <div className="col-lg-4">
          <div className="faq-card">
            <i className="bi bi-chat-dots-fill" />
            <h3>Can't find answer to your question?</h3>
            <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur aliquet quam id dui posuere blandit. Nulla quis lorem ut libero malesuada feugiat.</p>
            <a href="#" className="btn btn-primary">Contact Us</a>
          </div>
        </div>
      </div>
    </div>
  </section>{/* /Faq Section */}
</main>

        <Footer />
    </div>
  )
}

export default Faq