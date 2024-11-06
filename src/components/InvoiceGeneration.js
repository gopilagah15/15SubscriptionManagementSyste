// components/InvoiceGeneration.js
import React, { useEffect } from 'react';

const InvoiceGeneration = ({ subscriptions, setInvoices }) => {
  useEffect(() => {
    const newInvoices = subscriptions.map((sub) => ({
      name: sub.name,
      subscriptionType: sub.subscriptionType,
      amount: sub.subscriptionType === 'Premium' ? 50 : 20, // Example rates
      date: new Date().toLocaleDateString(),
    }));
    setInvoices(newInvoices);
  }, [subscriptions, setInvoices]);

  return (
    <div>
      <h2>Invoices</h2>
      <ul>
        {subscriptions.map((sub, index) => (
          <li key={index}>
            {sub.name} - {sub.subscriptionType}: ${sub.subscriptionType === 'Premium' ? 50 : 20}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InvoiceGeneration;
