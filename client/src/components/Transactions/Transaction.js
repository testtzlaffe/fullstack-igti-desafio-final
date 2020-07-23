import React from 'react';

export default function Transaction({ transaction }) {
  const {
    category,
    day,
    month,
    year,
    type,
    value,
    yearMonth,
    yearMonthDay,
    _id,
    description,
  } = transaction;

  return (
    <p>
      {day} - {category} - {description}
    </p>
  );
}
