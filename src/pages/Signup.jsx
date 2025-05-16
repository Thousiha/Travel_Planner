// SignupPage.jsx
import React from 'react';
import { Link } from 'react-router-dom'; 

const Signup = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted');
  };

  return (
    <div style={styles.body}>
      <div style={styles.signupContainer}>
        <h1 style={styles.header}>Create Your Account</h1>
        <form onSubmit={handleSubmit}>
          <div style={styles.formGroup}>
            <label htmlFor="name" style={styles.label}>Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              style={styles.input}
            />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="email" style={styles.label}>Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              style={styles.input}
            />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="password" style={styles.label}>Password</label>
            <input
              type="password"
              id="password"
              name="password"
              required
              style={styles.input}
            />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="confirm-password" style={styles.label}>Confirm Password</label>
            <input
              type="password"
              id="confirm-password"
              name="confirm-password"
              required
              style={styles.input}
            />
          </div>
          <button type="submit" style={styles.button}>Sign Up</button>
        </form>
        <div style={styles.loginLink}>
  Already have an account?{' '}
  <Link to="/login" style={styles.link}>Log in</Link> {/* ✅ FIXED */}
</div>
      </div>
    </div>
  );
};

// Styles
const styles = {
  body: {
    fontFamily: "'Arial', sans-serif",
    backgroundColor: '#f5f5f5', 
    margin: 0,
    padding: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    color: '#333',
  },
  signupContainer: {
    backgroundColor: 'white',
    padding: '40px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    width: '350px',
  },
  header: {
    color: '#003366', 
    textAlign: 'center',
    marginBottom: '30px',
    fontSize: '24px',
  },
  formGroup: {
    marginBottom: '20px',
  },
  label: {
    display: 'block',
    marginBottom: '8px',
    color: '#555',
    fontSize: '14px',
  },
  input: {
    width: '100%',
    padding: '12px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    boxSizing: 'border-box',
    fontSize: '14px',
  },
  inputFocus: {
    outline: 'none',
    borderColor: '#003366',
  },
  button: {
    backgroundColor: '#003366', 
    color: 'white',
    border: 'none',
    padding: '12px',
    width: '100%',
    borderRadius: '4px',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  buttonHover: {
    backgroundColor: '#002244', 
  },
  loginLink: {
    textAlign: 'center',
    marginTop: '20px',
    fontSize: '14px',
  },
  link: {
    color: '#003366',
    textDecoration: 'none',
  },
  linkHover: {
    textDecoration: 'underline',
  },
};

export default Signup;
