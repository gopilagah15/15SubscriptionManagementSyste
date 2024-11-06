// components/RenewalReminder.js
import React from 'react';

const RenewalReminder = ({ reminders }) => (
  <div>
    <h2>Renewal Reminders</h2>
    <ul>
      {reminders.map((reminder, index) => (
        <li key={index}>{reminder}</li>
      ))}
    </ul>
  </div>
);

export default RenewalReminder;
