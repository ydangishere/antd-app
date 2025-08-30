import React from 'react';
import CoreNotiMessageRead from './CoreNotiMessageRead';

const CoreNotiMessageReadDemo: React.FC = () => {
  return (
    <div style={{ width: '100%', maxWidth: '800px', margin: '0 auto' }}>
      <CoreNotiMessageRead 
        title="Changing employee info"
        time="5 minutes ago"
        message="Lorem ipsum morbi habitasse pretium in molestie."
      />
    </div>
  );
};

export default CoreNotiMessageReadDemo;
