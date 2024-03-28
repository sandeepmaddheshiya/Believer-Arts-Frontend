import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './RequestNew.scss';

const RequestNew = () => {
  const [formData, setFormData] = useState({
    Name: '',
    Email: '',
    Contact: '',
    Address: '',
    Pincode: '',
    Country: '',
    photo: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePhotoChange = (e) => {
    setFormData({ ...formData, photo: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append('Name', formData.Name);
    formDataToSend.append('Email', formData.Email);
    formDataToSend.append('Contact', formData.Contact);
    formDataToSend.append('Address', formData.Address);
    formDataToSend.append('Pincode', formData.Pincode);
    formDataToSend.append('Country', formData.Country);
    formDataToSend.append('files.photo', formData.photo);

    try {
      const response = await fetch('http://localhost:1337/requests', {
        method: 'POST',
        body: formDataToSend,
      });

      if (response.ok) {
        toast.success('Order placed successfully');
        setFormData({
          Name: '',
          Email: '',
          Contact: '',
          Address: '',
          Pincode: '',
          Country: '',
          photo: null,
        });
      } else {
        toast.error('Failed to place order');
      }
    } catch (error) {
      console.error('Network error:', error);
      toast.error('Network error');
    }
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Request New</h2>
      <form onSubmit={handleSubmit} className="form">
        <label className="form-label">
          Name:
          <input
            type="text"
            name="Name"
            value={formData.Name}
            onChange={handleChange}
            required
            className="form-input"
          />
        </label>
        <label className="form-label">
          Email:
          <input
            type="email"
            name="Email"
            value={formData.Email}
            onChange={handleChange}
            required
            className="form-input"
          />
        </label>
        <label className="form-label">
          Contact:
          <input
            type="text"
            name="Contact"
            value={formData.Contact}
            onChange={handleChange}
            required
            className="form-input"
          />
        </label>
        <label className="form-label">
          Address:
          <input
            type="text"
            name="Address"
            value={formData.Address}
            onChange={handleChange}
            required
            className="form-input"
          />
        </label>
        <label className="form-label">
          Pincode:
          <input
            type="text"
            name="Pincode"
            value={formData.Pincode}
            onChange={handleChange}
            required
            className="form-input"
          />
        </label>
        <label className="form-label">
          Country:
          <input
            type="text"
            name="Country"
            value={formData.Country}
            onChange={handleChange}
            required
            className="form-input"
          />
        </label>
        <label className="form-label">
          Photo:
          <input
            type="file"
            accept="image/*"
            onChange={handlePhotoChange}
            required
            className="form-input"
          />
        </label>
        <button type="submit" className="submit-button">Order Now</button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default RequestNew;
