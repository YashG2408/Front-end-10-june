import React from 'react'
import Header from '../Comman/Header'
import Footer from '../Comman/Footer'

function Blog() {
  return (
    <div>
        <Header />
      <main className="main">
  {/* Page Title */}
  <div className="page-title dark-background" style={{backgroundImage: 'url(assets/img/travel/showcase-11.webp)'}}>
    <div className="container position-relative">
      <h1>Blog</h1>
      <p>Esse dolorum voluptatum ullam est sint nemo et est ipsa porro placeat quibusdam quia assumenda numquam molestias.</p>
      <nav className="breadcrumbs">
        <ol>
          <li><a href="index.html">Home</a></li>
          <li className="current">Blog</li>
        </ol>
      </nav>
    </div>
  </div>{/* End Page Title */}
  {/* Blog Hero Section */}
  <section id="blog-hero" className="blog-hero section">
    <div className="container">
      <div className="row g-4">
        {/* Main Content Area */}
        <div className="col-lg-8">
          {/* Featured Article */}
          <article className="featured-post position-relative mb-4">
            <img src="assets/img/blog/blog-hero-9.webp" alt="Featured post" className="img-fluid" />
            <div className="post-overlay">
              <div className="post-content">
                <div className="post-meta">
                  <span className="category">Politics</span>
                  <span className="date">02/15/2024</span>
                </div>
                <h2 className="post-title">
                  <a href="#">Optimizing Strategic Initiatives Through Cross-Functional Collaboration</a>
                </h2>
                <p className="post-excerpt">Leveraging core competencies to drive sustainable growth and maximize stakeholder value through innovative solutions and market-driven approaches.</p>
                <div className="post-author">
                  <span>by</span>
                  <a href="#">Jennifer Mitchell</a>
                </div>
              </div>
            </div>
          </article>
          {/* Secondary Articles */}
          <div className="row g-4">
            <div className="col-md-6">
              <article className="secondary-post">
                <div className="post-image">
                  <img src="assets/img/blog/blog-post-1.webp" alt="Post" className="img-fluid" />
                </div>
                <div className="post-content">
                  <div className="post-meta">
                    <span className="category">Politics</span>
                    <span className="date">03/21/2024</span>
                  </div>
                  <h3 className="post-title">
                    <a href="#">Implementing Agile Methodologies for Enhanced Business Performance</a>
                  </h3>
                  <div className="post-author">
                    <span>by</span>
                    <a href="#">Robert Anderson</a>
                  </div>
                </div>
              </article>
            </div>
            <div className="col-md-6">
              <article className="secondary-post">
                <div className="post-image">
                  <img src="assets/img/blog/blog-post-2.webp" alt="Post" className="img-fluid" />
                </div>
                <div className="post-content">
                  <div className="post-meta">
                    <span className="category">Business</span>
                    <span className="date">01/30/2024</span>
                  </div>
                  <h3 className="post-title">
                    <a href="#">Streamlining Operations Through Digital Transformation Solutions</a>
                  </h3>
                  <div className="post-author">
                    <span>by</span>
                    <a href="#">Sarah Thompson</a>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>{/* End Main Content Area */}
        {/* Sidebar with Tabs */}
        <div className="col-lg-4">
          <div className="news-tabs">
            <ul className="nav nav-tabs" role="tablist">
              <li className="nav-item" role="presentation">
                <button className="nav-link active" data-bs-toggle="tab" data-bs-target="#top-stories" type="button">Top stories</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" data-bs-toggle="tab" data-bs-target="#trending" type="button">Trending News</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" data-bs-toggle="tab" data-bs-target="#latest" type="button">Latest News</button>
              </li>
            </ul>
            <div className="tab-content">
              {/* Top Stories Tab */}
              <div className="tab-pane fade show active" id="top-stories">
                <article className="tab-post">
                  <div className="row g-0 align-items-center">
                    <div className="col-4">
                      <img src="assets/img/blog/blog-post-square-1.webp" alt="Post" className="img-fluid" />
                    </div>
                    <div className="col-8">
                      <div className="post-content">
                        <span className="category">Science</span>
                        <h4 className="post-title"><a href="#">Maximizing ROI Through Strategic Resource Allocation</a></h4>
                        <div className="post-author">by <a href="#">Michael Davidson</a></div>
                      </div>
                    </div>
                  </div>
                </article>
                <article className="tab-post">
                  <div className="row g-0 align-items-center">
                    <div className="col-4">
                      <img src="assets/img/blog/blog-post-square-2.webp" alt="Post" className="img-fluid" />
                    </div>
                    <div className="col-8">
                      <div className="post-content">
                        <span className="category">Travel</span>
                        <h4 className="post-title"><a href="#">Leveraging Big Data Analytics for Market Intelligence</a></h4>
                        <div className="post-author">by <a href="#">Emily Richardson</a></div>
                      </div>
                    </div>
                  </div>
                </article>
                <article className="tab-post">
                  <div className="row g-0 align-items-center">
                    <div className="col-4">
                      <img src="assets/img/blog/blog-post-square-3.webp" alt="Post" className="img-fluid" />
                    </div>
                    <div className="col-8">
                      <div className="post-content">
                        <span className="category">Politics</span>
                        <h4 className="post-title"><a href="#">Enhancing Customer Experience Through Digital Innovation</a></h4>
                        <div className="post-author">by <a href="#">Daniel Cooper</a></div>
                      </div>
                    </div>
                  </div>
                </article>
                <article className="tab-post">
                  <div className="row g-0 align-items-center">
                    <div className="col-4">
                      <img src="assets/img/blog/blog-post-square-4.webp" alt="Post" className="img-fluid" />
                    </div>
                    <div className="col-8">
                      <div className="post-content">
                        <span className="category">Technology</span>
                        <h4 className="post-title"><a href="#">Transforming Business Models Through Digital Innovation</a></h4>
                        <div className="post-author">by <a href="#">Rachel Stevens</a></div>
                      </div>
                    </div>
                  </div>
                </article>
                <article className="tab-post">
                  <div className="row g-0 align-items-center">
                    <div className="col-4">
                      <img src="assets/img/blog/blog-post-square-5.webp" alt="Post" className="img-fluid" />
                    </div>
                    <div className="col-8">
                      <div className="post-content">
                        <span className="category">Finance</span>
                        <h4 className="post-title"><a href="#">Strategic Investment Planning for Sustainable Growth</a></h4>
                        <div className="post-author">by <a href="#">Andrew Phillips</a></div>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
              {/* Trending News Tab */}
              <div className="tab-pane fade" id="trending">
                <article className="tab-post">
                  <div className="row g-0 align-items-center">
                    <div className="col-4">
                      <img src="assets/img/blog/blog-post-square-4.webp" alt="Post" className="img-fluid" />
                    </div>
                    <div className="col-8">
                      <div className="post-content">
                        <span className="category">Science</span>
                        <h4 className="post-title"><a href="#">Implementing Sustainable Business Practices for Long-term Growth</a></h4>
                        <div className="post-author">by <a href="#">Alexandra Foster</a></div>
                      </div>
                    </div>
                  </div>
                </article>
                <article className="tab-post">
                  <div className="row g-0 align-items-center">
                    <div className="col-4">
                      <img src="assets/img/blog/blog-post-square-5.webp" alt="Post" className="img-fluid" />
                    </div>
                    <div className="col-8">
                      <div className="post-content">
                        <span className="category">Style</span>
                        <h4 className="post-title"><a href="#">Optimizing Supply Chain Management Through Technology Integration</a></h4>
                        <div className="post-author">by <a href="#">Christopher Wells</a></div>
                      </div>
                    </div>
                  </div>
                </article>
                <article className="tab-post">
                  <div className="row g-0 align-items-center">
                    <div className="col-4">
                      <img src="assets/img/blog/blog-post-square-6.webp" alt="Post" className="img-fluid" />
                    </div>
                    <div className="col-8">
                      <div className="post-content">
                        <span className="category">Politics</span>
                        <h4 className="post-title"><a href="#">Developing Strategic Partnerships for Market Expansion</a></h4>
                        <div className="post-author">by <a href="#">Victoria Palmer</a></div>
                      </div>
                    </div>
                  </div>
                </article>
                <article className="tab-post">
                  <div className="row g-0 align-items-center">
                    <div className="col-4">
                      <img src="assets/img/blog/blog-post-square-7.webp" alt="Post" className="img-fluid" />
                    </div>
                    <div className="col-8">
                      <div className="post-content">
                        <span className="category">Marketing</span>
                        <h4 className="post-title"><a href="#">Enhancing Brand Value Through Customer-Centric Strategies</a></h4>
                        <div className="post-author">by <a href="#">Sophia Rodriguez</a></div>
                      </div>
                    </div>
                  </div>
                </article>
                <article className="tab-post">
                  <div className="row g-0 align-items-center">
                    <div className="col-4">
                      <img src="assets/img/blog/blog-post-square-8.webp" alt="Post" className="img-fluid" />
                    </div>
                    <div className="col-8">
                      <div className="post-content">
                        <span className="category">Leadership</span>
                        <h4 className="post-title"><a href="#">Building High-Performance Teams in Dynamic Environments</a></h4>
                        <div className="post-author">by <a href="#">Nathan Brooks</a></div>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
              {/* Latest News Tab */}
              <div className="tab-pane fade" id="latest">
                <article className="tab-post">
                  <div className="row g-0 align-items-center">
                    <div className="col-4">
                      <img src="assets/img/blog/blog-post-square-7.webp" alt="Post" className="img-fluid" />
                    </div>
                    <div className="col-8">
                      <div className="post-content">
                        <span className="category">Health</span>
                        <h4 className="post-title"><a href="#">Accelerating Innovation Through Cross-functional Collaboration</a></h4>
                        <div className="post-author">by <a href="#">Benjamin Carter</a></div>
                      </div>
                    </div>
                  </div>
                </article>
                <article className="tab-post">
                  <div className="row g-0 align-items-center">
                    <div className="col-4">
                      <img src="assets/img/blog/blog-post-square-8.webp" alt="Post" className="img-fluid" />
                    </div>
                    <div className="col-8">
                      <div className="post-content">
                        <span className="category">Business</span>
                        <h4 className="post-title"><a href="#">Driving Business Growth Through Strategic Digital Initiatives</a></h4>
                        <div className="post-author">by <a href="#">Olivia Martinez</a></div>
                      </div>
                    </div>
                  </div>
                </article>
                <article className="tab-post">
                  <div className="row g-0 align-items-center">
                    <div className="col-4">
                      <img src="assets/img/blog/blog-post-square-9.webp" alt="Post" className="img-fluid" />
                    </div>
                    <div className="col-8">
                      <div className="post-content">
                        <span className="category">Sports</span>
                        <h4 className="post-title"><a href="#">Maximizing Operational Efficiency Through Process Optimization</a></h4>
                        <div className="post-author">by <a href="#">William Turner</a></div>
                      </div>
                    </div>
                  </div>
                </article>
                <article className="tab-post">
                  <div className="row g-0 align-items-center">
                    <div className="col-4">
                      <img src="assets/img/blog/blog-post-square-10.webp" alt="Post" className="img-fluid" />
                    </div>
                    <div className="col-8">
                      <div className="post-content">
                        <span className="category">Innovation</span>
                        <h4 className="post-title"><a href="#">Leveraging AI Solutions for Business Process Automation</a></h4>
                        <div className="post-author">by <a href="#">Isabella Clark</a></div>
                      </div>
                    </div>
                  </div>
                </article>
                <article className="tab-post">
                  <div className="row g-0 align-items-center">
                    <div className="col-4">
                      <img src="assets/img/blog/blog-post-square-6.webp" alt="Post" className="img-fluid" />
                    </div>
                    <div className="col-8">
                      <div className="post-content">
                        <span className="category">Strategy</span>
                        <h4 className="post-title"><a href="#">Implementing Agile Framework for Project Management Excellence</a></h4>
                        <div className="post-author">by <a href="#">Marcus Henderson</a></div>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>{/* /Blog Hero Section */}
  {/* Blog Posts Section */}
  <section id="blog-posts" className="blog-posts section">
    <div className="container">
      <div className="row gy-4">
        <div className="col-lg-4">
          <article className="position-relative h-100">
            <div className="post-img position-relative overflow-hidden">
              <img src="assets/img/blog/blog-post-1.webp" className="img-fluid" alt />
            </div>
            <div className="meta d-flex align-items-end">
              <span className="post-date"><span>12</span>December</span>
              <div className="d-flex align-items-center">
                <i className="bi bi-person" /> <span className="ps-2">John Doe</span>
              </div>
              <span className="px-3 text-black-50">/</span>
              <div className="d-flex align-items-center">
                <i className="bi bi-folder2" /> <span className="ps-2">Politics</span>
              </div>
            </div>
            <div className="post-content d-flex flex-column">
              <h3 className="post-title">Dolorum optio tempore voluptas dignissimos</h3>
              <a href="blog-details.html" className="readmore stretched-link"><span>Read More</span><i className="bi bi-arrow-right" /></a>
            </div>
          </article>
        </div>{/* End post list item */}
        <div className="col-lg-4">
          <article className="position-relative h-100">
            <div className="post-img position-relative overflow-hidden">
              <img src="assets/img/blog/blog-post-2.webp" className="img-fluid" alt />
            </div>
            <div className="meta d-flex align-items-end">
              <span className="post-date"><span>19</span>March</span>
              <div className="d-flex align-items-center">
                <i className="bi bi-person" /> <span className="ps-2">Julia Parker</span>
              </div>
              <span className="px-3 text-black-50">/</span>
              <div className="d-flex align-items-center">
                <i className="bi bi-folder2" /> <span className="ps-2">Economics</span>
              </div>
            </div>
            <div className="post-content d-flex flex-column">
              <h3 className="post-title">Nisi magni odit consequatur autem nulla dolorem</h3>
              <a href="blog-details.html" className="readmore stretched-link"><span>Read More</span><i className="bi bi-arrow-right" /></a>
            </div>
          </article>
        </div>{/* End post list item */}
        <div className="col-lg-4">
          <article className="position-relative h-100">
            <div className="post-img position-relative overflow-hidden">
              <img src="assets/img/blog/blog-post-3.webp" className="img-fluid" alt />
            </div>
            <div className="meta d-flex align-items-end">
              <span className="post-date"><span>24</span>June</span>
              <div className="d-flex align-items-center">
                <i className="bi bi-person" /> <span className="ps-2">Maria Doe</span>
              </div>
              <span className="px-3 text-black-50">/</span>
              <div className="d-flex align-items-center">
                <i className="bi bi-folder2" /> <span className="ps-2">Sports</span>
              </div>
            </div>
            <div className="post-content d-flex flex-column">
              <h3 className="post-title">Possimus soluta ut id suscipit ea ut. In quo quia et soluta libero sit sint.</h3>
              <a href="blog-details.html" className="readmore stretched-link"><span>Read More</span><i className="bi bi-arrow-right" /></a>
            </div>
          </article>
        </div>{/* End post list item */}
        <div className="col-lg-4">
          <article className="position-relative h-100">
            <div className="post-img position-relative overflow-hidden">
              <img src="assets/img/blog/blog-post-4.webp" className="img-fluid" alt />
            </div>
            <div className="meta d-flex align-items-end">
              <span className="post-date"><span>05</span>August</span>
              <div className="d-flex align-items-center">
                <i className="bi bi-person" /> <span className="ps-2">Maria Doe</span>
              </div>
              <span className="px-3 text-black-50">/</span>
              <div className="d-flex align-items-center">
                <i className="bi bi-folder2" /> <span className="ps-2">Sports</span>
              </div>
            </div>
            <div className="post-content d-flex flex-column">
              <h3 className="post-title">Non rem rerum nam cum quo minus explicabo eius exercitationem.</h3>
              <a href="blog-details.html" className="readmore stretched-link"><span>Read More</span><i className="bi bi-arrow-right" /></a>
            </div>
          </article>
        </div>{/* End post list item */}
        <div className="col-lg-4">
          <article className="position-relative h-100">
            <div className="post-img position-relative overflow-hidden">
              <img src="assets/img/blog/blog-post-5.webp" className="img-fluid" alt />
            </div>
            <div className="meta d-flex align-items-end">
              <span className="post-date"><span>17</span>September</span>
              <div className="d-flex align-items-center">
                <i className="bi bi-person" /> <span className="ps-2">John Parker</span>
              </div>
              <span className="px-3 text-black-50">/</span>
              <div className="d-flex align-items-center">
                <i className="bi bi-folder2" /> <span className="ps-2">Politics</span>
              </div>
            </div>
            <div className="post-content d-flex flex-column">
              <h3 className="post-title">Accusamus quaerat aliquam qui debitis facilis consequatur</h3>
              <a href="blog-details.html" className="readmore stretched-link"><span>Read More</span><i className="bi bi-arrow-right" /></a>
            </div>
          </article>
        </div>{/* End post list item */}
        <div className="col-lg-4">
          <article className="position-relative h-100">
            <div className="post-img position-relative overflow-hidden">
              <img src="assets/img/blog/blog-post-6.webp" className="img-fluid" alt />
            </div>
            <div className="meta d-flex align-items-end">
              <span className="post-date"><span>07</span>December</span>
              <div className="d-flex align-items-center">
                <i className="bi bi-person" /> <span className="ps-2">Julia White</span>
              </div>
              <span className="px-3 text-black-50">/</span>
              <div className="d-flex align-items-center">
                <i className="bi bi-folder2" /> <span className="ps-2">Economics</span>
              </div>
            </div>
            <div className="post-content d-flex flex-column">
              <h3 className="post-title">Distinctio provident quibusdam numquam aperiam aut</h3>
              <a href="blog-details.html" className="readmore stretched-link"><span>Read More</span><i className="bi bi-arrow-right" /></a>
            </div>
          </article>
        </div>{/* End post list item */}
      </div>
    </div>
  </section>{/* /Blog Posts Section */}
  {/* Pagination 2 Section */}
  <section id="pagination-2" className="pagination-2 section">
    <div className="container">
      <div className="d-flex justify-content-center">
        <ul>
          <li><a href="#"><i className="bi bi-chevron-left" /></a></li>
          <li><a href="#">1</a></li>
          <li><a href="#" className="active">2</a></li>
          <li><a href="#">3</a></li>
          <li><a href="#">4</a></li>
          <li>...</li>
          <li><a href="#">10</a></li>
          <li><a href="#"><i className="bi bi-chevron-right" /></a></li>
        </ul>
      </div>
    </div>
  </section>{/* /Pagination 2 Section */}
</main>

        <Footer />
    </div>
  )
}

export default Blog