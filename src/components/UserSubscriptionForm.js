// components/UserSubscriptionForm.js
import React, { useState } from 'react';

const UserSubscriptionForm = ({ onSubscribe }) => {
  const [name, setName] = useState('');
  const [subscriptionType, setSubscriptionType] = useState('');
  const [renewalDate, setRenewalDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubscribe({ name, subscriptionType, renewalDate });
    setName('');
    setSubscriptionType('');
    setRenewalDate('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>User Subscription Form</h2>
      <input type="text" placeholder="User Name" value={name} onChange={(e) => setName(e.target.value)} required />
      <input type="text" placeholder="Subscription Type" value={subscriptionType} onChange={(e) => setSubscriptionType(e.target.value)} required />
      <input type="date" value={renewalDate} onChange={(e) => setRenewalDate(e.target.value)} required />
      <button type="submit">Subscribe</button>
    </form>
  );
};

export default UserSubscriptionForm;
