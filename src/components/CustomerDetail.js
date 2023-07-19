// CustomerDetail.js

import React, { useState } from 'react';

const CustomerDetail = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    status: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h1>Customer Detail</h1>
      <form>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Email:</label>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Status:</label>
          <select name="status" value={formData.status} onChange={handleChange}>
            <option value="">Select...</option>
            <option value="prospect">Prospect</option>
            <option value="customer">Customer</option>
            <option value="former">Former Customer</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default CustomerDetail;
