import React from 'react';
import AvailableOptions from './AvailableOptions';
import SelectedOptions from './SelectedOptions';

const TransferList = () => {
  return (
    <div className="transfer-list">
      <AvailableOptions title="Available option" option />
      <SelectedOptions title="Selected option" option />
    </div>
  );
};

export default TransferList;
