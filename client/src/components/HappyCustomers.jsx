function HappyCustomers() {
  return (
    <section className="happy-customers" aria-label="Happy customer testimonial">
      <div className="happy-inner">
        <p className="quote-mark" aria-hidden="true">&ldquo;</p>

        <div className="avatar-row" aria-label="Customer profile thumbnails">
          <span
            className="avatar small"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80')",
            }}
          ></span>
          <span
            className="avatar large"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80')",
            }}
          ></span>
          <span
            className="avatar small"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1521119989659-a83eee488004?auto=format&fit=crop&w=300&q=80')",
            }}
          ></span>
        </div>

        <p className="testimonial-text">
          They are divine. So many compliments. Not only that, I got them for a
          great price. Will definitely shop from Chronovia again.
        </p>

        <h3>Arlene McCoy</h3>
        <p className="buyer-role">Happy Buyer</p>

        <div className="happy-actions" aria-label="Testimonial controls">
          <button type="button" aria-label="Previous review" className="action-btn active">
            &larr;
          </button>
          <button type="button" aria-label="Next review" className="action-btn">
            &rarr;
          </button>
        </div>
      </div>
    </section>
  )
}

export default HappyCustomers
