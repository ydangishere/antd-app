import React from 'react';

interface DiscardConfirmationProps {
  onCancel?: () => void;
  onConfirm?: () => void;
}

const DiscardConfirmation: React.FC<DiscardConfirmationProps> = ({ 
  onCancel, 
  onConfirm 
}) => {
  const styles = {
    modalOverlay: {
      position: 'fixed' as const,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000,
    },
    modalContainer: {
      background: 'white',
      borderRadius: '8px',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
      width: '400px',
      maxWidth: '90vw',
      padding: 0,
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif',
    },
    modalHeader: {
      padding: '20px 24px 16px 24px',
      borderBottom: '1px solid #f0f0f0',
    },
    headerTitle: {
      margin: 0,
      fontSize: '16px',
      fontWeight: 600,
      color: '#262626',
      lineHeight: 1.4,
    },
    modalContent: {
      padding: '20px 24px',
      textAlign: 'center' as const,
    },
    contentText: {
      margin: '0 0 8px 0',
      fontSize: '14px',
      color: '#595959',
      lineHeight: 1.5,
    },
    modalActions: {
      padding: '16px 24px 20px 24px',
      display: 'flex',
      justifyContent: 'flex-end',
      gap: '8px',
    },
    baseButton: {
      padding: '6px 15px',
      borderRadius: '6px',
      fontSize: '14px',
      fontWeight: 400,
      cursor: 'pointer',
      border: '1px solid',
      transition: 'all 0.3s ease',
      minWidth: '64px',
      height: '32px',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    cancelButton: {
      backgroundColor: 'white',
      borderColor: '#d9d9d9',
      color: '#262626',
    },
    confirmButton: {
      backgroundColor: '#1677ff',
      borderColor: '#1677ff',
      color: 'white',
    },
  };

  return (
    <div style={styles.modalOverlay}>
      <div style={styles.modalContainer}>
        <div style={styles.modalHeader}>
          <h3 style={styles.headerTitle}>Discard Confirmation</h3>
        </div>
        
        <div style={styles.modalContent}>
          <p style={styles.contentText}>You are about to discard creating new employee.</p>
          <p style={{...styles.contentText, marginBottom: 0}}>Are you sure to proceed this?</p>
        </div>
        
        <div style={styles.modalActions}>
          <button 
            style={{...styles.baseButton, ...styles.cancelButton}}
            onClick={onCancel}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#4096ff';
              e.currentTarget.style.color = '#4096ff';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#d9d9d9';
              e.currentTarget.style.color = '#262626';
            }}
          >
            Cancel
          </button>
          <button 
            style={{...styles.baseButton, ...styles.confirmButton}}
            onClick={onConfirm}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#4096ff';
              e.currentTarget.style.borderColor = '#4096ff';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#1677ff';
              e.currentTarget.style.borderColor = '#1677ff';
            }}
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  );
};

export default DiscardConfirmation;
