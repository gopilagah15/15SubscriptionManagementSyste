// components/ChurnAnalysisReport.js
import React from 'react';

const ChurnAnalysisReport = ({ subscriptions }) => {
  const totalSubscriptions = subscriptions.length;
  const renewals = subscriptions.filter((sub) => new Date(sub.renewalDate) > new Date()).length;
  const churnRate = totalSubscriptions > 0 ? ((totalSubscriptions - renewals) / totalSubscriptions) * 100 : 0;

  return (
    <div>
      <h2>Churn Analysis Report</h2>
      <p>Total Subscriptions: {totalSubscriptions}</p>
      <p>Renewals: {renewals}</p>
      <p>Churn Rate: {churnRate.toFixed(2)}%</p>
    </div>
  );
};

export default ChurnAnalysisReport;
