import React from 'react';

interface DiscardConfirmationProps {
  onCancel?: () => void;
  onConfirm?: () => void;
}

// CSS-in-JS using template literals
const css = (strings: TemplateStringsArray, ...values: any[]) => {
  return strings.reduce((result, string, i) => {
    return result + string + (values[i] || '');
  }, '');
};

const DiscardConfirmation: React.FC<DiscardConfirmationProps> = ({ 
  onCancel, 
  onConfirm 
}) => {
  // Inject CSS into document head
  React.useEffect(() => {
    const styleId = 'discard-confirmation-styles';
    if (document.getElementById(styleId)) return;

    const style = document.createElement('style');
    style.id = styleId;
    style.textContent = css`
      .modal-overlay-single {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
      }
      .modal-container-single {
        background: white;
        border-radius: 8px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
        width: 400px;
        max-width: 90vw;
        padding: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
      }
      .modal-header-single {
        padding: 20px 24px 16px 24px;
        border-bottom: 1px solid #f0f0f0;
      }
      .modal-header-single h3 {
        margin: 0;
        font-size: 16px;
        font-weight: 600;
        color: #262626;
        line-height: 1.4;
      }
      .modal-content-single {
        padding: 20px 24px;
        text-align: center;
      }
      .modal-content-single p {
        margin: 0 0 8px 0;
        font-size: 14px;
        color: #595959;
        line-height: 1.5;
      }
      .modal-content-single p:last-child {
        margin-bottom: 0;
      }
      .modal-actions-single {
        padding: 16px 24px 20px 24px;
        display: flex;
        justify-content: flex-end;
        gap: 8px;
      }
      .btn-cancel-single,
      .btn-confirm-single {
        padding: 6px 15px;
        border-radius: 6px;
        font-size: 14px;
        font-weight: 400;
        cursor: pointer;
        border: 1px solid;
        transition: all 0.3s ease;
        min-width: 64px;
        height: 32px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
      }
      .btn-cancel-single {
        background-color: white;
        border-color: #d9d9d9;
        color: #262626;
      }
      .btn-cancel-single:hover {
        border-color: #4096ff;
        color: #4096ff;
      }
      .btn-confirm-single {
        background-color: #1677ff;
        border-color: #1677ff;
        color: white;
      }
      .btn-confirm-single:hover {
        background-color: #4096ff;
        border-color: #4096ff;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="modal-overlay-single">
      <div className="modal-container-single">
        <div className="modal-header-single">
          <h3>Discard Confirmation</h3>
        </div>
        
        <div className="modal-content-single">
          <p>You are about to discard creating new employee.</p>
          <p>Are you sure to proceed this?</p>
        </div>
        
        <div className="modal-actions-single">
          <button 
            className="btn-cancel-single" 
            onClick={onCancel}
          >
            Cancel
          </button>
          <button 
            className="btn-confirm-single" 
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
