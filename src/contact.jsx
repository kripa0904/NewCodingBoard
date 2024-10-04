export default function Contact() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Times New Roman, sans-serif' }}>
      <h2>Contact Me</h2>
      <p>If you have any questions or would like to get in touch, feel free to fill out the form below:</p>

      {/* Contact Information Panel */}
      <div
        style={{
          border: '1px solid #ccc',
          borderRadius: '8px',
          padding: '15px',
          marginBottom: '20px',
          textAlign: 'left',
        }}
      >
        <h3>Contact Information</h3>
        <p><strong>Email:</strong> kripaacharya1509@gmail.com</p>
        <p><strong>Phone:</strong> +1 437 970 1789</p>
        <p><strong>Location:</strong> Toronto, ON, Canada</p>
      </div>

      {/* Contact Form */}
      <form
        action="/"
        method="post"
        onSubmit={(e) => {
          e.preventDefault();
          window.location.href = '/';
        }}
        style={{
          border: '1px solid #ddd',
          borderRadius: '10px',
          padding: '20px',
        }}
      >
        <div>
          <label htmlFor="firstName">First Name:</label><br />
          <input type="text" id="firstName" name="firstName" required />
        </div>
        <br />

        <div>
          <label htmlFor="lastName">Last Name:</label><br />
          <input type="text" id="lastName" name="lastName" required />
        </div>
        <br />

        <div>
          <label htmlFor="contactNumber">Contact Number:</label><br />
          <input type="tel" id="contactNumber" name="contactNumber" required />
        </div>
        <br />

        <div>
          <label htmlFor="email">Email:</label><br />
          <input type="email" id="email" name="email" required />
        </div>
        <br />

        <div>
          <label htmlFor="message">Message:</label><br />
          <textarea id="message" name="message" rows="4" required></textarea>
        </div>
        <br />

        <div>
          <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
            Submit
          </button>
        </div>
      </form>

      <hr />
      <p>
        You can also reach me via email at <a href="mailto:kripaacharya1509@gmail.com">kripaacharya1509@gmail.com</a>.
      </p>
    </div>
  );
}
