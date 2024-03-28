import React from 'react';
import { useNavigate } from 'react-router-dom';

const PaymentFailure = () => {
  const navigate = useNavigate();
  return (
    <div style={styles.container}>
      <svg style={styles.icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="64" height="64">
        <path fill="none" d="M0 0h24v24H0z"/>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 13h4v4h-4v-4zm0-8h4v6h-4V7z"/>
      </svg>
      <h2 style={styles.title}>Payment Failed!</h2>
      <p style={styles.message}>We're sorry, your payment could not be processed.</p>
      <p style={styles.details}>Please try again later or contact support.</p>
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
    margin: '13% auto', // Center the card horizontally and vertically
    textAlign: 'center',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
  },
  icon: {
    fill: '#FF0000', // Red color for failure icon
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

export default PaymentFailure;
