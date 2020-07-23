import React from 'react';
import Transaction from './Transaction';

export default function Transactions({ transactions }) {
  return transactions.map(transaction => (
    <Transaction key={transaction._id} transaction={transaction} />
  ));
}
