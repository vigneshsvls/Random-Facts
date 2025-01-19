import React from 'react';

const FactCard = ({ fact }) => {
  return (
    <div className="fact-card">
      <p>{fact}</p>
    </div>
  );
};

export default FactCard;
