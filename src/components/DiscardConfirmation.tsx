import React from 'react';
import './DiscardConfirmation.css';

interface DiscardConfirmationProps {
  onCancel?: () => void;
  onConfirm?: () => void;
}

const DiscardConfirmation: React.FC<DiscardConfirmationProps> = ({ 
  onCancel, 
  onConfirm 
}) => {
  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <div className="modal-header">
          <h3>Discard Confirmation</h3>
        </div>
        
        <div className="modal-content">
          <p>You are about to discard creating new employee.</p>
          <p>Are you sure to proceed this?</p>
        </div>
        
        <div className="modal-actions">
          <button 
            className="btn-cancel" 
            onClick={onCancel}
          >
            Cancel
          </button>
          <button 
            className="btn-confirm" 
            onClick={onConfirm}
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  );
};

export default DiscardConfirmation;
