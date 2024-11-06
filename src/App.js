// App.js
import React, { useState } from 'react';
import UserSubscriptionForm from './components/UserSubscriptionForm';
import RenewalReminder from './components/RenewalReminder';
import InvoiceGeneration from './components/InvoiceGeneration';
import ChurnAnalysisReport from './components/ChurnAnalysisReport';

const App = () => {
  const [subscriptions, setSubscriptions] = useState([]);
  const [invoices, setInvoices] = useState([]);
  const [reminders, setReminders] = useState([]);

  // Handle new subscription
  const handleSubscription = (subscription) => {
    setSubscriptions([...subscriptions, subscription]);
    if (new Date(subscription.renewalDate) - new Date() <= 7 * 24 * 60 * 60 * 1000) { // 1-week reminder
      setReminders([...reminders, `Renewal reminder for ${subscription.name} on ${subscription.renewalDate}`]);
    }
  };

  return (
    <div>
      <h1>Subscription Management System</h1>
      <UserSubscriptionForm onSubscribe={handleSubscription} />
      <RenewalReminder reminders={reminders} />
      <InvoiceGeneration subscriptions={subscriptions} setInvoices={setInvoices} />
      <ChurnAnalysisReport subscriptions={subscriptions} />
    </div>
  );
};

export default App;
