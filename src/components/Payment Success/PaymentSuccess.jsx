import React from 'react';
import { useNavigate } from 'react-router-dom';

const PaymentSuccess = () => {
  const navigate = useNavigate();
  return (
    <div style={styles.container}>
      <svg style={styles.icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="64" height="64">
        <path fill="none" d="M0 0h24v24H0z"/>
        <path d="M9 16.2l-3.5-3.5 1.4-1.4L9 13.4l6.1-6.1 1.4 1.4z"/>
      </svg>
      <h2 style={styles.title}>Payment Successful!</h2>
      <p style={styles.message}>Thank you for your purchase.</p>
      <p style={styles.details}>You will receive a confirmation email shortly.</p>
      <button style={styles.button} onClick={() => navigate(`/`)}>Home</button>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#fff',
    color: '#000',
    padding: '20px',
    borderRadius: '8px',
    maxWidth: '400px',
    margin: '14% auto', // Center the card horizontally and vertically
    textAlign: 'center',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
  },
  icon: {
    fill: '#21F208',
    width: '64px',
    height: '64px',
    marginBottom: '20px',
  },
  title: {
    fontSize: '24px',
    marginBottom: '10px',
  },
  message: {
    fontSize: '18px',
    marginBottom: '20px',
  },
  details: {
    fontSize: '14px',
    marginBottom: '20px',
  },
  button: {
    backgroundColor: '#8e2de2',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
  }
};

export default PaymentSuccess;
