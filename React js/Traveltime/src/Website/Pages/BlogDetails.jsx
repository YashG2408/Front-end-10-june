import React from 'react'
import Header from '../Comman/Header'
import Footer from '../Comman/Footer'

function BlogDetails() {
  return (
    <div>
        <Header />
     <main className="main">
  {/* Page Title */}
  <div className="page-title dark-background" style={{backgroundImage: 'url(assets/img/travel/showcase-11.webp)'}}>
    <div className="container position-relative">
      <h1>Blog Details</h1>
      <p>Esse dolorum voluptatum ullam est sint nemo et est ipsa porro placeat quibusdam quia assumenda numquam molestias.</p>
      <nav className="breadcrumbs">
        <ol>
          <li><a href="index.html">Home</a></li>
          <li className="current">Blog Details</li>
        </ol>
      </nav>
    </div>
  </div>{/* End Page Title */}
  {/* Blog Details Section */}
  <section id="blog-details" className="blog-details section">
    <div className="container">
      <article className="article">
        <div className="hero-img">
          <img src="assets/img/blog/blog-post-3.webp" alt="Featured blog image" className="img-fluid" loading="lazy" />
          <div className="meta-overlay">
            <div className="meta-categories">
              <a href="#" className="category">Web Development</a>
              <span className="divider">•</span>
              <span className="reading-time"><i className="bi bi-clock" /> 6 min read</span>
            </div>
          </div>
        </div>
        <div className="article-content">
          <div className="content-header">
            <h1 className="title">Modern Web Development: Best Practices and Future Trends for 2025</h1>
            <div className="author-info">
              <div className="author-details">
                <img src="assets/img/person/person-f-8.webp" alt="Author" className="author-img" />
                <div className="info">
                  <h4>Michael Chen</h4>
                  <span className="role">Senior Web Developer</span>
                </div>
              </div>
              <div className="post-meta">
                <span className="date"><i className="bi bi-calendar3" /> Mar 15, 2025</span>
                <span className="divider">•</span>
                <span className="comments"><i className="bi bi-chat-text" /> 18 Comments</span>
              </div>
            </div>
          </div>
          <div className="content">
            <p className="lead">
              The landscape of web development continues to evolve at an unprecedented pace, bringing new technologies, frameworks, and methodologies that reshape how we build modern web applications.
            </p>
            <p>
              As we delve into 2025, the web development ecosystem has transformed dramatically, introducing innovative approaches to building faster, more secure, and highly engaging web experiences. This comprehensive guide explores the latest trends and best practices that are defining the future of web development.
            </p>
            <div className="content-image right-aligned">
              <img src="assets/img/blog/blog-hero-2.webp" className="img-fluid" alt="Modern web development tools" loading="lazy" />
              <figcaption>Modern development environments emphasize collaboration and efficiency</figcaption>
            </div>
            <h2>The Rise of Web Components</h2>
            <p>
              Web Components have become increasingly crucial in modern web development, offering a standardized way to create reusable custom elements. Key advantages include:
            </p>
            <ul>
              <li>Enhanced code reusability across different frameworks</li>
              <li>Better encapsulation of functionality</li>
              <li>Improved maintenance and scalability</li>
              <li>Framework-agnostic component development</li>
            </ul>
            <div className="highlight-box">
              <h3>Key Trends in 2025</h3>
              <ul className="trend-list">
                <li>
                  <i className="bi bi-lightning-charge" />
                  <span>Edge Computing and Serverless Architecture</span>
                </li>
                <li>
                  <i className="bi bi-shield-check" />
                  <span>Enhanced Security Measures</span>
                </li>
                <li>
                  <i className="bi bi-phone" />
                  <span>Progressive Web Apps (PWAs)</span>
                </li>
              </ul>
            </div>
            <h2>Performance Optimization</h2>
            <p>
              Performance remains a critical factor in web development, with an increasing focus on Core Web Vitals and user experience metrics. Modern applications must be optimized for both speed and efficiency.
            </p>
            <blockquote>
              <p>
                "The future of web development lies not just in writing code, but in creating seamless, accessible, and performant experiences that work for everyone, everywhere."
              </p>
              <cite>Emily Thompson, Web Performance Architect</cite>
            </blockquote>
            <div className="content-grid">
              <div className="row g-4">
                <div className="col-md-6">
                  <div className="info-card">
                    <i className="bi bi-speedometer2" />
                    <h4>Performance Metrics</h4>
                    <p>Focus on Core Web Vitals and user-centric performance metrics for better search rankings and user experience.</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="info-card">
                    <i className="bi bi-universal-access" />
                    <h4>Accessibility</h4>
                    <p>Implementing WCAG guidelines and ensuring web applications are accessible to all users across different devices.</p>
                  </div>
                </div>
              </div>
            </div>
            <h2>Looking Forward</h2>
            <p>
              As we continue through 2025, web development practices will further evolve, embracing new technologies while maintaining a strong foundation in performance, accessibility, and user experience. Staying updated with these trends and best practices is crucial for developers looking to build modern, scalable web applications.
            </p>
          </div>
          <div className="meta-bottom">
            <div className="tags-section">
              <h4>Related Topics</h4>
              <div className="tags">
                <a href="#" className="tag">Web Development</a>
                <a href="#" className="tag">Performance</a>
                <a href="#" className="tag">Best Practices</a>
                <a href="#" className="tag">Trends</a>
                <a href="#" className="tag">2025</a>
              </div>
            </div>
            <div className="share-section">
              <h4>Share Article</h4>
              <div className="social-links">
                <a href="#" className="twitter"><i className="bi bi-twitter-x" /></a>
                <a href="#" className="facebook"><i className="bi bi-facebook" /></a>
                <a href="#" className="linkedin"><i className="bi bi-linkedin" /></a>
                <a href="#" className="copy-link" title="Copy Link"><i className="bi bi-link-45deg" /></a>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  </section>{/* /Blog Details Section */}
  {/* Blog Author Section */}
  <section id="blog-author" className="blog-author section">
    <div className="container">
      <div className="author-card">
        <div className="author-background">
          <div className="author-image-wrapper">
            <img src="assets/img/person/person-m-12.webp" className="author-image" alt loading="lazy" />
          </div>
        </div>
        <div className="author-details">
          <div className="author-meta">
            <h3 className="author-name">Alex Richardson</h3>
            <div className="author-credentials">
              <span className="badge">Tech Journalist</span>
              <span className="badge">UX Designer</span>
            </div>
          </div>
          <div className="author-description">
            Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
          </div>
          <div className="author-stats">
            <div className="stat-item">
              <span className="stat-value">120+</span>
              <span className="stat-label">Articles</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">15k</span>
              <span className="stat-label">Readers</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">4.9</span>
              <span className="stat-label">Rating</span>
            </div>
          </div>
          <div className="author-footer">
            <div className="social-links">
              <a href="https://twitter.com/#" title="Twitter"><i className="bi bi-twitter-x" /></a>
              <a href="https://linkedin.com/#" title="LinkedIn"><i className="bi bi-linkedin" /></a>
              <a href="https://medium.com/#" title="Medium"><i className="bi bi-medium" /></a>
              <a href="https://github.com/#" title="GitHub"><i className="bi bi-github" /></a>
            </div>
            <a href="#" className="btn-connect">
              Connect with Alex
              <i className="bi bi-arrow-right" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>{/* /Blog Author Section */}
  {/* Blog Comments Section */}
  <section id="blog-comments" className="blog-comments section">
    <div className="container">
      <div className="blog-comments-4">
        <div className="comments-header">
          <h3 className="title">Community Feedback</h3>
          <div className="comments-stats">
            <span className="count">12</span>
            <span className="label">Comments</span>
          </div>
        </div>
        <div className="comments-container">
          {/* Comment #1 */}
          <div className="comment-thread">
            <div className="comment-box">
              <div className="comment-wrapper">
                <div className="avatar-wrapper">
                  <img src="assets/img/person/person-f-9.webp" alt="Avatar" loading="lazy" />
                  <span className="status-indicator" />
                </div>
                <div className="comment-content">
                  <div className="comment-header">
                    <div className="user-info">
                      <h4>Thomas Anderson</h4>
                      <span className="time-badge">
                        <i className="bi bi-clock" />
                        2 hours ago
                      </span>
                    </div>
                    <div className="engagement">
                      <span className="likes">
                        <i className="bi bi-heart" />
                        24
                      </span>
                    </div>
                  </div>
                  <div className="comment-body">
                    <p>Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc.</p>
                  </div>
                  <div className="comment-actions">
                    <button className="action-btn like-btn" aria-label="Like comment">
                      <i className="bi bi-heart" />
                      <span>Like</span>
                    </button>
                    <button className="action-btn reply-btn" aria-label="Reply to comment">
                      <i className="bi bi-chat" />
                      <span>Reply</span>
                    </button>
                    <button className="action-btn share-btn" aria-label="Share comment">
                      <i className="bi bi-share" />
                      <span>Share</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* Replies Container */}
            <div className="replies-container">
              {/* Reply #1 */}
              <div className="comment-box reply">
                <div className="comment-wrapper">
                  <div className="avatar-wrapper">
                    <img src="assets/img/person/person-m-9.webp" alt="Avatar" loading="lazy" />
                    <span className="status-indicator" />
                  </div>
                  <div className="comment-content">
                    <div className="comment-header">
                      <div className="user-info">
                        <h4>Maria Rodriguez</h4>
                        <span className="time-badge">
                          <i className="bi bi-clock" />
                          1 hour ago
                        </span>
                      </div>
                      <div className="engagement">
                        <span className="likes">
                          <i className="bi bi-heart" />
                          8
                        </span>
                      </div>
                    </div>
                    <div className="comment-body">
                      <p>Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae.</p>
                    </div>
                    <div className="comment-actions">
                      <button className="action-btn like-btn" aria-label="Like comment">
                        <i className="bi bi-heart" />
                        <span>Like</span>
                      </button>
                      <button className="action-btn reply-btn" aria-label="Reply to comment">
                        <i className="bi bi-chat" />
                        <span>Reply</span>
                      </button>
                      <button className="action-btn share-btn" aria-label="Share comment">
                        <i className="bi bi-share" />
                        <span>Share</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* Reply #2 */}
              <div className="comment-box reply">
                <div className="comment-wrapper">
                  <div className="avatar-wrapper">
                    <img src="assets/img/person/person-f-9.webp" alt="Avatar" loading="lazy" />
                    <span className="status-indicator" />
                  </div>
                  <div className="comment-content">
                    <div className="comment-header">
                      <div className="user-info">
                        <h4>Alex Chen</h4>
                        <span className="time-badge">
                          <i className="bi bi-clock" />
                          30 minutes ago
                        </span>
                      </div>
                      <div className="engagement">
                        <span className="likes">
                          <i className="bi bi-heart" />
                          5
                        </span>
                      </div>
                    </div>
                    <div className="comment-body">
                      <p>Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.</p>
                    </div>
                    <div className="comment-actions">
                      <button className="action-btn like-btn" aria-label="Like comment">
                        <i className="bi bi-heart" />
                        <span>Like</span>
                      </button>
                      <button className="action-btn reply-btn" aria-label="Reply to comment">
                        <i className="bi bi-chat" />
                        <span>Reply</span>
                      </button>
                      <button className="action-btn share-btn" aria-label="Share comment">
                        <i className="bi bi-share" />
                        <span>Share</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Comment #2 */}
          <div className="comment-thread">
            <div className="comment-box">
              <div className="comment-wrapper">
                <div className="avatar-wrapper">
                  <img src="assets/img/person/person-f-7.webp" alt="Avatar" loading="lazy" />
                  <span className="status-indicator" />
                </div>
                <div className="comment-content">
                  <div className="comment-header">
                    <div className="user-info">
                      <h4>Emily Watson</h4>
                      <span className="time-badge">
                        <i className="bi bi-clock" />
                        3 hours ago
                      </span>
                    </div>
                    <div className="engagement">
                      <span className="likes">
                        <i className="bi bi-heart" />
                        15
                      </span>
                    </div>
                  </div>
                  <div className="comment-body">
                    <p>Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.</p>
                  </div>
                  <div className="comment-actions">
                    <button className="action-btn like-btn" aria-label="Like comment">
                      <i className="bi bi-heart" />
                      <span>Like</span>
                    </button>
                    <button className="action-btn reply-btn" aria-label="Reply to comment">
                      <i className="bi bi-chat" />
                      <span>Reply</span>
                    </button>
                    <button className="action-btn share-btn" aria-label="Share comment">
                      <i className="bi bi-share" />
                      <span>Share</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>{/* /Blog Comments Section */}
  {/* Blog Comment Form Section */}
  <section id="blog-comment-form" className="blog-comment-form section">
    <div className="container">
      <form method="post" role="form">
        <div className="section-header">
          <h3>Share Your Thoughts</h3>
          <p>Your email address will not be published. Required fields are marked *</p>
        </div>
        <div className="row gy-3">
          <div className="col-md-6 form-group">
            <label htmlFor="name">Full Name *</label>
            <input type="text" name="name" className="form-control" id="name" placeholder="Enter your full name" required />
          </div>
          <div className="col-md-6 form-group">
            <label htmlFor="email">Email Address *</label>
            <input type="email" name="email" className="form-control" id="email" placeholder="Enter your email address" required />
          </div>
          <div className="col-12 form-group">
            <label htmlFor="website">Website</label>
            <input type="url" name="website" className="form-control" id="website" placeholder="Your website (optional)" />
          </div>
          <div className="col-12 form-group">
            <label htmlFor="comment">Your Comment *</label>
            <textarea className="form-control" name="comment" id="comment" rows={5} placeholder="Write your thoughts here..." required defaultValue={""} />
          </div>
          <div className="col-12 text-center">
            <button type="submit" className="btn-submit">Post Comment</button>
          </div>
        </div>
      </form>
    </div>
  </section>{/* /Blog Comment Form Section */}
</main>

        <Footer />
    </div>
  )
}

export default BlogDetails